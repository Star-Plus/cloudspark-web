<script lang="ts">
  import { onMount } from 'svelte';

  export let speed = 1.5;
  
  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    let frame: number;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function drawGrain(ts: number) {
      const t = ts / 1000;
      const w = canvas.width;
      const h = canvas.height;

      const breathe = Math.sin((t / speed) * Math.PI * 2) * 0.2 + 0.5;

      const glowX = w * 0.1;
      const glowY = h * (0.9 + breathe * 0.06);
      const radius = Math.max(w, h) * (0.9 + breathe * 0.15);

      const imageData = ctx!.createImageData(w, h);
      const data = imageData.data;

      for (let y = 0; y < h; y++) {
        const dy = y - glowY;
        for (let x = 0; x < w; x++) {
          const dx = x - glowX;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const glow = Math.exp(-(dist * dist) / (2 * radius * radius));

          const r = 13 + glow * 47;
          const g = 14 + glow * 26;
          const b = 30 + glow * 120;

          const grainAmp = 22 + glow * 48;
          const n = Math.random() * grainAmp;

          const i = (y * w + x) * 4;
          data[i] = Math.min(255, r + n * 0.2);
          data[i + 1] = Math.min(255, g + n * 0.2);
          data[i + 2] = Math.min(255, b + n * 0.9);
          data[i + 3] = 255;
        }
      }

      ctx!.putImageData(imageData, 0, 0);
    }

    function draw(ts: number) {
      drawGrain(ts);
      frame = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<div class="layer">
  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <canvas bind:this={canvas} />
</div>

<style>
  .layer {
    position: fixed;
    inset: 0;
    z-index: 0;
  }

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
