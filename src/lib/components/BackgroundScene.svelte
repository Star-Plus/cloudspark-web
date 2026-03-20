<script lang="ts">
  import { onMount } from 'svelte';

  export let speed = 1.5;

  let canvas : HTMLCanvasElement;

  const orbits = [
    { rx: 18, ry: 18,  tilt: 0, duration: 14, dotR: 2   },
    { rx: 32, ry: 32, tilt:  0, duration: 24, dotR: 1.8 },
    { rx: 48, ry: 48, tilt:  0, duration: 38, dotR: 2.5 },
    { rx: 63, ry: 63, tilt:  0, duration: 52, dotR: 1.6 },
    { rx: 78, ry: 78, tilt:  0, duration: 68, dotR: 2   },
  ];

  onMount(() => {
    const ctx = canvas.getContext('2d');
    let frame : number;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function drawGrain(ts: number) {
      const t  = ts / 1000;
      const w  = canvas.width;
      const h  = canvas.height;

      const breathe = Math.sin((t / speed) * Math.PI * 2) * 0.2 + 0.5;

      const glowX  = w * 0.1;
      const glowY  = h * (0.9 + breathe * 0.06);
      const radius = Math.max(w, h) * (0.9 + breathe * 0.15);

      const imageData = ctx!.createImageData(w, h);
      const data      = imageData.data;

      for (let y = 0; y < h; y++) {
        const dy = y - glowY;
        for (let x = 0; x < w; x++) {
          const dx   = x - glowX;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const glow = Math.exp(-(dist * dist) / (2 * radius * radius));

          const r = 13  + glow * 47;
          const g = 14  + glow * 26;
          const b = 30  + glow * 120;

          const grainAmp = 22 + glow * 48;
          const n        = Math.random() * grainAmp;

          const i = (y * w + x) * 4;
          data[i]     = Math.min(255, r + n * 0.2);
          data[i + 1] = Math.min(255, g + n * 0.2);
          data[i + 2] = Math.min(255, b + n * 1);
          data[i + 3] = 255;
        }
      }

      ctx!.putImageData(imageData, 0, 0);
    }

    function drawOrbits(ts: number) {
      const t    = ts / 1000;
      const w    = canvas.width;
      const h    = canvas.height;
      const cx   = w * 0.5;
      const cy   = h * 0.5;
      const vmin = Math.min(w, h);

      for (const orb of orbits) {
        const rx    = (orb.rx / 100) * vmin;
        const ry    = (orb.ry / 100) * vmin;
        const tilt  = (orb.tilt * Math.PI) / 180;
        const angle = ((t / orb.duration) * Math.PI * 2) % (Math.PI * 2);

        ctx!.save();
        ctx!.translate(cx, cy);
        ctx!.rotate(tilt);

        ctx!.beginPath();
        ctx!.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx!.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx!.lineWidth   = 0.5;
        ctx!.stroke();

        const dx = Math.cos(angle) * rx;
        const dy = Math.sin(angle) * ry;

        const halo = ctx!.createRadialGradient(dx, dy, 0, dx, dy, orb.dotR * 7);
        halo.addColorStop(0,   'rgba(80, 100, 255, 0.6)');
        halo.addColorStop(0.4, 'rgba(60, 80, 200, 0.2)');
        halo.addColorStop(1,   'transparent');
        ctx!.beginPath();
        ctx!.arc(dx, dy, orb.dotR * 7, 0, Math.PI * 2);
        ctx!.fillStyle = halo;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(dx, dy, orb.dotR, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx!.fill();

        ctx!.restore();
      }
    }

    function draw(ts: number) {
      drawGrain(ts);
      drawOrbits(ts);
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

<div class="bg">
  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <canvas bind:this={canvas} />
  <img src="Logo.png" alt="">
</div>

<style>
  .bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  canvas {
    display: block;
    width: 100%;
    height: 100%;
    z-index: 5;
  }
  
  img{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 120px;
    height: auto;
    z-index: 2;
    opacity: 0.8;
    transform: translate(-50%, -50%);
  }
</style>