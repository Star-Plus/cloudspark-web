<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  const TWO_PI = Math.PI * 2;

  export let dotRadius = 1.5;
  export let dotSpacing = 14;
  export let cursorRadius = 1000;
  export let cursorForce = 0.6;
  export let bulgeOnly = true;
  export let bulgeStrength = 67;
  export let glowRadius = 160;
  export let sparkle = false;
  export let waveAmplitude = 0;
  export let gradientFrom = 'rgba(168, 85, 247, 0.35)';
  export let gradientTo = 'rgba(180, 151, 207, 0.25)';
  export let glowColor = 'transparent';
  export let showGlow = false;

  let canvasEl: HTMLCanvasElement;
  let glowEl: SVGCircleElement;
  let dots: any = [];
  const mouse = { x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 };
  let rafId: number;
  let size = { w: 0, h: 0, offsetX: 0, offsetY: 0 };
  let glowOpacity = 0;
  let engagement = 0;
  const glowId = `dot-field-glow-${Math.random().toString(36).slice(2, 9)}`;

  let props = {};
  $: props = { dotRadius, dotSpacing, cursorRadius, cursorForce, bulgeOnly, bulgeStrength, sparkle, waveAmplitude, gradientFrom, gradientTo, glowColor, showGlow };

  let rebuild: any = null;

  onMount(() => {
    const canvas = canvasEl;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let resizeTimer: any;

    function resize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(doResize, 100);
    }

    function doResize() {
      if (!ctx) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      const w = rect?.width || 0;
      const h = rect?.height || 0;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      size = {
        w,
        h,
        offsetX: rect.left + window.scrollX,
        offsetY: rect.top + window.scrollY,
      };

      buildDots(w, h);
    }

    function buildDots(w: number, h: number) {
      const p: any = props;
      const step = p.dotRadius + p.dotSpacing;
      const cols = Math.floor(w / step);
      const rows = Math.floor(h / step);
      const padX = (w % step) / 2;
      const padY = (h % step) / 2;
      const newDots = new Array(rows * cols);
      let idx = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          newDots[idx++] = { ax, ay, sx: ax, sy: ay, vx: 0, vy: 0, x: ax, y: ay };
        }
      }
      dots = newDots;
    }

    function onMouseMove(e: MouseEvent) {
      const s = size;
      mouse.x = e.pageX - s.offsetX;
      mouse.y = e.pageY - s.offsetY;
    }

    function updateMouseSpeed() {
      const m = mouse;
      const dx = m.prevX - m.x;
      const dy = m.prevY - m.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      m.speed += (dist - m.speed) * 0.5;
      if (m.speed < 0.001) m.speed = 0;
      m.prevX = m.x;
      m.prevY = m.y;
    }

    const speedInterval = setInterval(updateMouseSpeed, 20);

    let frameCount = 0;

    function tick() {
      if (!ctx) return;

      frameCount++;
      const m: any = mouse;
      const { w, h } = size;
      const p: any = props;
      const len = dots.length;
      const t = frameCount * 0.02;

      const targetEngagement = Math.min(m.speed / 5, 1);
      engagement += (targetEngagement - engagement) * 0.06;
      if (engagement < 0.001) engagement = 0;
      const eng = engagement;

      glowOpacity += (eng - glowOpacity) * 0.08;

      if (glowEl) {
        glowEl.setAttribute('cx', m.x);
        glowEl.setAttribute('cy', m.y);
        glowEl.style.opacity = glowOpacity + '';
      }

      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, p.gradientFrom);
      grad.addColorStop(1, p.gradientTo);
      ctx.fillStyle = grad;

      const cr = p.cursorRadius;
      const crSq = cr * cr;
      const rad = p.dotRadius / 2;
      const isBulge = p.bulgeOnly;

      ctx.beginPath();

      for (let i = 0; i < len; i++) {
        const d = dots[i];
        const dx = m.x - d.ax;
        const dy = m.y - d.ay;
        const distSq = dx * dx + dy * dy;

        if (distSq < crSq && eng > 0.01) {
          const dist = Math.sqrt(distSq);
          if (isBulge) {
            const tt = 1 - dist / cr;
            const push = tt * tt * p.bulgeStrength * eng;
            const angle = Math.atan2(dy, dx);
            d.sx += (d.ax - Math.cos(angle) * push - d.sx) * 0.15;
            d.sy += (d.ay - Math.sin(angle) * push - d.sy) * 0.15;
          } else {
            const angle = Math.atan2(dy, dx);
            const move = (500 / dist) * (m.speed * p.cursorForce);
            d.vx += Math.cos(angle) * -move;
            d.vy += Math.sin(angle) * -move;
          }
        } else if (isBulge) {
          d.sx += (d.ax - d.sx) * 0.1;
          d.sy += (d.ay - d.sy) * 0.1;
        }

        if (!isBulge) {
          d.vx *= 0.9;
          d.vy *= 0.9;
          d.x = d.ax + d.vx;
          d.y = d.ay + d.vy;
          d.sx += (d.x - d.sx) * 0.1;
          d.sy += (d.y - d.sy) * 0.1;
        }

        let drawX = d.sx;
        let drawY = d.sy;
        if (p.waveAmplitude > 0) {
          drawY += Math.sin(d.ax * 0.03 + t) * p.waveAmplitude;
          drawX += Math.cos(d.ay * 0.03 + t * 0.7) * p.waveAmplitude * 0.5;
        }

        if (p.sparkle) {
          const hash = ((i * 2654435761) ^ (frameCount >> 3)) >>> 0;
          if ((hash % 100) < 3) {
            ctx.moveTo(drawX + rad * 1.8, drawY);
            ctx.arc(drawX, drawY, rad * 1.8, 0, TWO_PI);
          } else {
            ctx.moveTo(drawX + rad, drawY);
            ctx.arc(drawX, drawY, rad, 0, TWO_PI);
          }
        } else {
          ctx.moveTo(drawX + rad, drawY);
          ctx.arc(drawX, drawY, rad, 0, TWO_PI);
        }
      }

      ctx.fill();

      rafId = requestAnimationFrame(tick);
    }

    doResize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    rebuild = () => {
      const { w, h } = size;
      if (w > 0 && h > 0) buildDots(w, h);
    };

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(speedInterval);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  });

  onDestroy(() => {
    cancelAnimationFrame(rafId);
  });

  $: if (rebuild && (dotRadius || dotSpacing)) {
    rebuild();
  }
</script>

<div class="dot-field-container" {...$$restProps}>
  <canvas
    bind:this={canvasEl}
    style="position: absolute; inset: 0; width: 100%; height: 100%;"
  ></canvas>
  {#if showGlow && glowColor !== 'transparent'}
    <svg
      style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;"
    >
      <defs>
        <radialGradient id={glowId}>
          <stop offset="0%" stop-color={glowColor} />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>
      </defs>
      <circle
        bind:this={glowEl}
        cx="-9999"
        cy="-9999"
        r={glowRadius}
        fill={`url(#${glowId})`}
        style="opacity: 0; will-change: opacity;"
      />
    </svg>
  {/if}
</div>

<style>
    .dot-field-container {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 100;
    }
</style>