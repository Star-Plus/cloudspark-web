<script>
	import { onMount, onDestroy } from 'svelte';

	/** @type {HTMLCanvasElement} */
	let canvas;
	let animId = 0;
	let W = 0, H = 0;
	let mouseX = 0.5, mouseY = 0.5;
	let targetX = 0.5, targetY = 0.5;

	const RIBBONS = [
		{ hue: [265, 295], yBase: 0.30, amplitude: 75, width: 230, speed: 0.00022, alpha: 0.16 },
		{ hue: [275, 310], yBase: 0.52, amplitude: 90, width: 260, speed: 0.00016, alpha: 0.14 },
		{ hue: [155, 172], yBase: 0.65, amplitude: 65, width: 200, speed: 0.00026, alpha: 0.13 },
		{ hue: [245, 275], yBase: 0.20, amplitude: 55, width: 180, speed: 0.00019, alpha: 0.11 },
	];

	onMount(() => {
		const ctx = canvas.getContext('2d', { alpha: true });
		if (!ctx) return;

		const resize = () => {
			if (!canvas) return;
			W = canvas.width  = canvas.offsetWidth;
			H = canvas.height = canvas.offsetHeight;
		};
		resize();
		window.addEventListener('resize', resize);

		const onMove = (/** @type {MouseEvent} */ e) => {
			targetX = e.clientX / window.innerWidth;
			targetY = e.clientY / window.innerHeight;
		};
		window.addEventListener('mousemove', onMove, { passive: true });

		let skip = 0;

		/**
		 * @param {any} r
		 * @param {number} t
		 */
		function drawRibbon(r, t) {
			const steps = 60;
			const ox = (mouseX - 0.5) * 28;
			const oy = (mouseY - 0.5) * 16;
			const hw = r.width / 2;

			const xs = new Float32Array(steps + 1);
			const ys = new Float32Array(steps + 1);
			for (let i = 0; i <= steps; i++) {
				const f = i / steps;
				xs[i] = f * W;
				ys[i] = r.yBase * H
					+ Math.sin(f * 6.9  + t * r.speed)        * r.amplitude
					+ Math.sin(f * 11.9 + t * r.speed * 0.7 + 1.5) * r.amplitude * 0.3
					+ oy * Math.sin(f * Math.PI)
					+ ox * 0.25;
			}

			const h1 = r.hue[0] + Math.sin(t * 0.00016) * 8;
			const h2 = r.hue[1] + Math.cos(t * 0.00020) * 8;
			const g  = ctx.createLinearGradient(0, 0, W, 0);
			g.addColorStop(0,   `hsla(${h1},60%,60%,0)`);
			g.addColorStop(0.2, `hsla(${h1},62%,62%,${r.alpha})`);
			g.addColorStop(0.5, `hsla(${(h1+h2)/2},65%,65%,${r.alpha*1.1})`);
			g.addColorStop(0.8, `hsla(${h2},62%,62%,${r.alpha})`);
			g.addColorStop(1,   `hsla(${h2},60%,60%,0)`);

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
			ctx.fillStyle = g;
			ctx.fill();
		}

		/** @param {number} ts */
		function draw(ts) {
			animId = requestAnimationFrame(draw);
			skip ^= 1;
			if (skip) return;

			mouseX += (targetX - mouseX) * 0.05;
			mouseY += (targetY - mouseY) * 0.05;

			ctx.clearRect(0, 0, W, H);
			for (const r of RIBBONS) drawRibbon(r, ts);
		}

		animId = requestAnimationFrame(draw);

		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener('resize', resize);
			window.removeEventListener('mousemove', onMove);
		};
	});

	onDestroy(() => cancelAnimationFrame(animId));
</script>

<section class="hero">
	<canvas bind:this={canvas} class="hero-canvas" aria-hidden="true"></canvas>
	<div class="hero-overlay" aria-hidden="true"></div>

	<div class="hero-content">
		<div class="badge animate-in">
			<span class="badge-dot"></span>
			Version Control · Built for Creatives
		</div>

		<h1 class="headline animate-in delay-1">
			Your creative work,<br />
			<span class="headline-grad">finally under control.</span>
		</h1>

		<p class="sub animate-in delay-2">
			Euler tracks every change in your digital art projects —
			images, video, audio, 3D — with the precision of git,
			without any of the complexity.
		</p>

		<a
			href="https://github.com/Star-Plus/Euler-Desktop/releases/latest"
			target="_blank"
			rel="noopener noreferrer"
			class="btn-dl animate-in delay-3"
		>
			<svg viewBox="0 0 24 24" fill="currentColor" class="win-ico" aria-hidden="true">
				<path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.8"/>
			</svg>
			Download for Windows
			<div class="btn-meta">Free · v0.1.0</div>
		</a>
	</div>
</section>

<style>
.hero {
	position: relative;
	width: 100vw;
	height: 100vh;
	min-height: 640px;
	overflow: hidden;
	background: var(--background-50);
	display: flex;
	align-items: center;
	justify-content: center;
}

.hero-canvas {
	position: absolute;
	inset: 0;
	width: 100% !important;
	height: 100% !important;
	display: block;
	pointer-events: none;
}

.hero-overlay {
	position: absolute;
	inset: 0;
	pointer-events: none;
	z-index: 2;
	background:
		linear-gradient(to bottom, #f2f2f2 0%, transparent 8%, transparent 92%, #f2f2f2 100%);
}

.hero-content {
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: 640px;
	padding: 0 24px;
}

@media (max-width: 768px) {
	.hero {
		padding-top: 80px; 
	}
	.hero-content {
		max-width: 100%;
	}
}

.badge {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-family: 'Inter', sans-serif;
	font-size: 11px;
	font-weight: 500;
	letter-spacing: 0.6px;
	color: var(--primary-600);
	background: var(--primary-50);
	border: 1px solid rgba(161,3,252,0.20);
	padding: 5px 14px;
	border-radius: 999px;
	backdrop-filter: blur(12px);
	margin-bottom: 24px;
}

@media (max-width: 480px) {
	.badge {
		font-size: 10px;
		padding: 4px 12px;
	}
}

.badge-dot {
	width: 5px; height: 5px;
	border-radius: 50%;
	background: var(--primary-500);
	flex-shrink: 0;
	animation: dot-pulse 2.4s ease-in-out infinite;
}

@keyframes dot-pulse {
	0%,100% { box-shadow: 0 0 4px rgba(161,3,252,0.4); }
	50%      { box-shadow: 0 0 14px rgba(161,3,252,0.9), 0 0 28px rgba(85,43,212,0.4); }
}

.headline {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: clamp(34px, 8vw, 68px);
	font-weight: 800;
	line-height: 1.08;
	letter-spacing: -1.5px;
	color: var(--text-950);
	margin: 0 0 20px 0;
	text-shadow: 0 0 60px rgba(161,3,252,0.15);
}

@media (max-width: 768px) {
	.headline {
		letter-spacing: -1px;
	}
}

.headline-grad {
	background: linear-gradient(105deg, #a103fc 0%, #8102ca 25%, #552bd4 55%, #06f99c 100%);
	background-size: 220% 100%;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	animation: grad-scroll 5s linear infinite alternate;
}

@keyframes grad-scroll {
	0%   { background-position: 0% 50%; }
	100% { background-position: 100% 50%; }
}

.sub {
	font-family: 'Inter', sans-serif;
	font-size: 15px;
	line-height: 1.65;
	color: var(--text-600);
	margin: 0 0 34px 0;
	max-width: 490px;
	text-shadow: none;
}

@media (max-width: 480px) {
	.sub {
		font-size: 14px;
		line-height: 1.55;
	}
}

.btn-dl {
	display: inline-flex;
	align-items: center;
	gap: 13px;
	background: linear-gradient(140deg, #a103fc 0%, #8102ca 100%);
	color: #fff;
	text-decoration: none;
	font-family: 'Inter', sans-serif;
	font-size: 15px;
	font-weight: 600;
	padding: 15px 32px;
	border-radius: 14px;
	border: 1px solid rgba(161,3,252,0.25);
	box-shadow:
		0 0 0 1px rgba(161,3,252,0.20),
		0 8px 36px rgba(161,3,252,0.30),
		0 0 80px rgba(161,3,252,0.08);
	transition: transform 0.18s, box-shadow 0.18s;
}

.btn-dl:hover {
	transform: translateY(-2px);
	box-shadow:
		0 0 0 1px rgba(161,3,252,0.40),
		0 14px 48px rgba(161,3,252,0.45),
		0 0 100px rgba(161,3,252,0.15);
}

.win-ico { width: 17px; height: 17px; flex-shrink: 0; opacity: 0.88; }

.btn-meta {
	font-size: 10.5px;
	font-weight: 400;
	color: rgba(255,255,255,0.55);
	white-space: nowrap;
	margin-left: 4px;
	padding-left: 13px;
	border-left: 1px solid rgba(255,255,255,0.20);
}

.scroll-cue {
	position: absolute;
	bottom: 26px; left: 50%;
	transform: translateX(-50%);
	z-index: 10; opacity: 0.40;
}

.scroll-bar {
	width: 1px; height: 40px;
	background: linear-gradient(to bottom, var(--primary-500), transparent);
	animation: drop 2s ease-in-out infinite;
}

@keyframes drop {
	0%   { transform: scaleY(0); transform-origin: top;    opacity: 1; }
	55%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
	100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
}
</style>