export type Palette = {
    name: string;
    colors: string[];
};

export const PIXEL_LED_COLOR_STEPS = 256;

export const PIXEL_LED_PALETTES: Palette[] = [
    {
        name: "Neon Aurora",
        colors: ["#00000044", "#15151544", "#1a1a1a", "#cacaca44", "#ff00ff", "#00ffff", "#ff00ff44", "#00ffff44"]
    }
];

type Rgba = { r: number; g: number; b: number; a: number };

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
}

function parseHexColor(hex: string): Rgba | null {
    const value = hex.replace("#", "").trim();

    if (value.length === 3) {
        const r = parseInt(value[0] + value[0], 16);
        const g = parseInt(value[1] + value[1], 16);
        const b = parseInt(value[2] + value[2], 16);
        return { r, g, b, a: 1 };
    }

    if (value.length === 6) {
        const r = parseInt(value.slice(0, 2), 16);
        const g = parseInt(value.slice(2, 4), 16);
        const b = parseInt(value.slice(4, 6), 16);
        return { r, g, b, a: 1 };
    }

    if (value.length === 8) {
        const r = parseInt(value.slice(0, 2), 16);
        const g = parseInt(value.slice(2, 4), 16);
        const b = parseInt(value.slice(4, 6), 16);
        const a = parseInt(value.slice(6, 8), 16) / 255;
        return { r, g, b, a };
    }

    return null;
}

function parseRgbColor(input: string): Rgba | null {
    const raw = input.trim().toLowerCase();

    const rgbaMatch = raw.match(
        /^rgba?\(\s*([0-9.]+)\s*[, ]\s*([0-9.]+)\s*[, ]\s*([0-9.]+)(?:\s*[,/]\s*([0-9.]+))?\s*\)$/
    );

    if (!rgbaMatch) return null;

    const r = clamp(Number(rgbaMatch[1]), 0, 255);
    const g = clamp(Number(rgbaMatch[2]), 0, 255);
    const b = clamp(Number(rgbaMatch[3]), 0, 255);
    const a = clamp(rgbaMatch[4] ? Number(rgbaMatch[4]) : 1, 0, 1);

    return { r, g, b, a };
}

function parseColor(input: string): Rgba {
    if (input.startsWith("#")) {
        const c = parseHexColor(input);
        if (c) return c;
    }

    const rgb = parseRgbColor(input);
    if (rgb) return rgb;

    return { r: 255, g: 255, b: 255, a: 1 };
}

function toCss(c: Rgba): string {
    return `rgba(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)}, ${c.a.toFixed(3)})`;
}

function mixColor(a: Rgba, b: Rgba, t: number): Rgba {
    return {
        r: lerp(a.r, b.r, t),
        g: lerp(a.g, b.g, t),
        b: lerp(a.b, b.b, t),
        a: lerp(a.a, b.a, t)
    };
}

function samplePalette(palette: Palette, position: number): Rgba {
    const colors = palette.colors?.length ? palette.colors : ["#ffffff"];

    if (colors.length === 1) return parseColor(colors[0]);

    const p = clamp(position, 0, 0.999999);
    const scaled = p * (colors.length - 1);
    const i0 = Math.floor(scaled);
    const i1 = Math.min(i0 + 1, colors.length - 1);
    const t = scaled - i0;

    return mixColor(parseColor(colors[i0]), parseColor(colors[i1]), t);
}

/**
 * Builds a CSS color LUT by blending between palettes over time.
 */
export function buildPaletteLutCss(
    palettes: Palette[],
    time: number,
    cycleSpeed: number,
    steps: number
): string[] {
    const safeSteps = Math.max(2, Math.floor(steps || PIXEL_LED_COLOR_STEPS));
    const safePalettes = palettes?.length ? palettes : PIXEL_LED_PALETTES;

    if (safePalettes.length === 1) {
        const only = safePalettes[0];
        return Array.from({ length: safeSteps }, (_, i) => {
            const pos = i / (safeSteps - 1);
            return toCss(samplePalette(only, pos));
        });
    }

    const phase = ((time * cycleSpeed) % safePalettes.length + safePalettes.length) % safePalettes.length;
    const fromIndex = Math.floor(phase);
    const toIndex = (fromIndex + 1) % safePalettes.length;
    const blendT = phase - fromIndex;

    const fromPalette = safePalettes[fromIndex];
    const toPalette = safePalettes[toIndex];

    const lut = new Array<string>(safeSteps);

    for (let i = 0; i < safeSteps; i += 1) {
        const pos = i / (safeSteps - 1);
        const a = samplePalette(fromPalette, pos);
        const b = samplePalette(toPalette, pos);
        lut[i] = toCss(mixColor(a, b, blendT));
    }

    return lut;
}