<script>
	import { onMount, onDestroy } from 'svelte';

	/** @type {HTMLCanvasElement} */
	let canvas;
	let animId = 0;
	let W = 0, H = 0;

	const BANDS = [
		{ y: 0.28, amp: 75, w: 220, hue: [265, 295], speed: 0.00022, a: 0.15 },
		{ y: 0.45, amp: 90, w: 260, hue: [275, 310], speed: 0.00016, a: 0.13 },
		{ y: 0.60, amp: 65, w: 200, hue: [155, 172], speed: 0.00026, a: 0.13 },
		{ y: 0.72, amp: 75, w: 210, hue: [245, 275], speed: 0.00019, a: 0.11 },
	];

	onMount(() => {
		const ctx = canvas.getContext('2d', { alpha: true });
		if (!ctx) return;
		let time = 0;

		const resize = () => {
			if (!canvas) return;
			W = canvas.width  = canvas.offsetWidth;
			H = canvas.height = canvas.offsetHeight;
		};
		resize();
		window.addEventListener('resize', resize);

		let skip = 0;

		/** @param {number} [ts] */
		function draw(ts) {
			animId = requestAnimationFrame(draw);
			skip ^= 1;
			if (skip) return;

			time = ts || 0;
			ctx.clearRect(0, 0, W, H);

			for (const b of BANDS) {
				const steps = 60;
				const hw = b.w / 2;
				const xs = new Float32Array(steps + 1);
				const ys = new Float32Array(steps + 1);

				for (let i = 0; i <= steps; i++) {
					const f = i / steps;
					xs[i] = f * W;
					ys[i] = b.y * H
						+ Math.sin(f * 6.9  + time * b.speed) * b.amp
						+ Math.sin(f * 11.9 + time * b.speed * 0.7 + 1.2) * b.amp * 0.35;
				}

				const h1 = b.hue[0] + Math.sin(time * 0.00018) * 10;
				const h2 = b.hue[1] + Math.cos(time * 0.00022) * 10;
				const grad = ctx.createLinearGradient(0, 0, W, 0);
				grad.addColorStop(0,   `hsla(${h1},65%,60%,0)`);
				grad.addColorStop(0.2, `hsla(${h1},65%,62%,${b.a})`);
				grad.addColorStop(0.5, `hsla(${(h1+h2)/2},70%,65%,${b.a * 1.15})`);
				grad.addColorStop(0.8, `hsla(${h2},65%,62%,${b.a})`);
				grad.addColorStop(1,   `hsla(${h2},65%,60%,0)`);

				ctx.beginPath();
				ctx.moveTo(xs[0], ys[0] - hw);
				for (let i = 1; i <= steps; i++) {
					const px = xs[i-1], py = ys[i-1], cx = xs[i], cy = ys[i];
					ctx.quadraticCurveTo(px, py - hw, (px+cx)/2, (py+cy)/2 - hw);
				}
				for (let i = steps; i >= 0; i--) {
					const cx = xs[i], cy = ys[i];
					const px = i > 0 ? xs[i-1] : cx, py = i > 0 ? ys[i-1] : cy;
					ctx.quadraticCurveTo(cx, cy + hw, (px+cx)/2, (py+cy)/2 + hw);
				}
				ctx.closePath();
				ctx.fillStyle = grad;
				ctx.fill();
			}
		}
		draw(0);

		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener('resize', resize);
		};
	});

	onDestroy(() => cancelAnimationFrame(animId));
</script>

<section class="showcase">
	<div class="showcase-base" aria-hidden="true"></div>

	<canvas bind:this={canvas} class="showcase-canvas" aria-hidden="true"></canvas>

	<div class="showcase-noise" aria-hidden="true"></div>

	<div class="showcase-content">
		<div class="showcase-badge animate-in">✨ Built for Creators</div>

		<h2 class="showcase-title animate-in delay-1">
			Where imagination<br />
			meets version control.
		</h2>

		<p class="showcase-sub animate-in delay-2">
			Whether you're a solo illustrator, a motion designer, or a full studio team —
			Euler gives you the peace of mind that every version of your work is safe,
			searchable, and always one click away.
		</p>

		<div class="stats-row animate-in delay-3">
			<div class="stat">
				<span class="stat-num">∞</span>
				<span class="stat-label">File types supported</span>
			</div>
			<div class="stat-divider"></div>
			<div class="stat">
				<span class="stat-num">0 ms</span>
				<span class="stat-label">Config needed</span>
			</div>
			<div class="stat-divider"></div>
			<div class="stat">
				<span class="stat-num">100%</span>
				<span class="stat-label">Offline capable</span>
			</div>
		</div>
	</div>
</section>

<style>
.showcase {
	position: relative;
	width: 100vw;
	height: 100dvh;
	min-height: 640px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}

.showcase-base {
	position: absolute;
	inset: 0;
	background:
		radial-gradient(ellipse 120% 80% at 20% 10%, rgba(196, 104, 253, 0.18) 0%, transparent 55%),
		radial-gradient(ellipse 100% 70% at 80% 90%, rgba(6, 249, 156, 0.14) 0%, transparent 50%),
		radial-gradient(ellipse 80% 60% at 60% 30%, rgba(119, 86, 220, 0.12) 0%, transparent 55%),
		linear-gradient(155deg, #f0edf8 0%, #f5f2fb 35%, #edf7f3 65%, #f0edf8 100%);
}

.showcase-canvas {
	position: absolute;
	inset: 0;
	width: 100% !important;
	height: 100% !important;
	display: block;
	pointer-events: none;
}

.showcase-noise {
	position: absolute;
	inset: 0;
	pointer-events: none;
	opacity: 0.035;
	background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
	background-size: 200px 200px;
}

.showcase::before {
	content: '';
	position: absolute;
	inset: 0;
	z-index: 2;
	pointer-events: none;
	background:
		linear-gradient(to bottom, var(--background-50) 0%, transparent 8%, transparent 92%, var(--background-50) 100%);
}

.showcase-content {
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: 680px;
	padding: 0 24px;
}

.showcase-badge {
	font-family: 'Inter', sans-serif;
	font-size: 12px;
	font-weight: 600;
	color: var(--primary-700);
	background: rgba(161, 3, 252, 0.09);
	border: 1px solid rgba(161, 3, 252, 0.22);
	padding: 6px 18px;
	border-radius: 999px;
	margin-bottom: 28px;
	backdrop-filter: blur(8px);
	letter-spacing: 0.3px;
}

.showcase-title {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: clamp(34px, 7vw, 68px);
	font-weight: 800;
	line-height: 1.08;
	letter-spacing: -2px;
	color: var(--text-950);
	margin: 0 0 22px 0;
	text-shadow: 0 2px 40px rgba(161, 3, 252, 0.10);
}

@media (max-width: 768px) {
	.showcase-title br { display: none; }
}

.showcase-sub {
	font-family: 'Inter', sans-serif;
	font-size: 15.5px;
	line-height: 1.7;
	color: var(--text-700);
	margin: 0 0 44px 0;
	max-width: 520px;
}

.stats-row {
	display: flex;
	align-items: center;
	gap: 36px;
	background: rgba(255, 255, 255, 0.70);
	border: 1px solid rgba(161, 3, 252, 0.14);
	border-radius: 20px;
	padding: 22px 48px;
	backdrop-filter: blur(24px);
	box-shadow:
		0 4px 32px rgba(161, 3, 252, 0.08),
		0 1px 0 rgba(255,255,255,0.9) inset;
}

@media (max-width: 640px) {
	.stats-row {
		flex-direction: column;
		gap: 20px;
		padding: 24px 28px;
		width: 100%;
		max-width: 280px;
	}
	.stat-divider {
		width: 40px !important;
		height: 1px !important;
	}
}

.stat {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
}

.stat-num {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: 28px;
	font-weight: 800;
	background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	letter-spacing: -1px;
}

.stat-label {
	font-family: 'Inter', sans-serif;
	font-size: 11px;
	color: var(--text-500);
	letter-spacing: 0.3px;
	font-weight: 500;
}

.stat-divider {
	width: 1px;
	height: 40px;
	background: rgba(161, 3, 252, 0.15);
}
</style>
