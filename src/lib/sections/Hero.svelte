<script>
	import { onMount, onDestroy } from 'svelte';

	/** @type {HTMLCanvasElement} */
	let canvas;
	let animId = 0;
	let mouse = { x: 0.5, y: 0.5 };
	let W = 0, H = 0;

	// ── Aurora ribbon config ──
	const RIBBONS = [
		{ hue: [270, 300], yBase: 0.35, amplitude: 80, width: 220, speed: 0.0004, alpha: 0.13 },
		{ hue: [280, 320], yBase: 0.45, amplitude: 100, width: 280, speed: 0.0003, alpha: 0.10 },
		{ hue: [220, 260], yBase: 0.55, amplitude: 70, width: 200, speed: 0.0005, alpha: 0.12 },
		{ hue: [310, 340], yBase: 0.62, amplitude: 90, width: 240, speed: 0.00035, alpha: 0.09 },
		{ hue: [250, 290], yBase: 0.30, amplitude: 60, width: 180, speed: 0.00045, alpha: 0.10 },
		{ hue: [200, 240], yBase: 0.70, amplitude: 75, width: 200, speed: 0.0003, alpha: 0.08 },
	];

	onMount(() => {
		const ctx = canvas.getContext('2d');

		let time = 0;

		const resize = () => {
			if (!canvas) return;
			W = canvas.width = canvas.offsetWidth * (window.devicePixelRatio > 1 ? 1.5 : 1);
			H = canvas.height = canvas.offsetHeight * (window.devicePixelRatio > 1 ? 1.5 : 1);
			canvas.style.width = canvas.offsetWidth + 'px';
			canvas.style.height = canvas.offsetHeight + 'px';
		};
		resize();
		window.addEventListener('resize', resize);

		window.addEventListener('mousemove', (e) => {
			mouse.x = e.clientX / window.innerWidth;
			mouse.y = e.clientY / window.innerHeight;
		});

		/** 
		 * @param {any} ribbon 
		 * @param {number} t 
		 */
		function drawRibbon(ribbon, t) {
			if (!ctx) return;
			const steps = 120;
			const mouseOffsetX = (mouse.x - 0.5) * 40;
			const mouseOffsetY = (mouse.y - 0.5) * 25;

			// Build the ribbon path points
			const points = [];
			for (let i = 0; i <= steps; i++) {
				const frac = i / steps;
				const x = frac * W;

				// Multiple sine waves layered for organic movement
				const wave1 = Math.sin(frac * Math.PI * 2.2 + t * ribbon.speed * 1.0) * ribbon.amplitude;
				const wave2 = Math.sin(frac * Math.PI * 3.8 + t * ribbon.speed * 0.7 + 1.5) * (ribbon.amplitude * 0.4);
				const wave3 = Math.sin(frac * Math.PI * 1.2 + t * ribbon.speed * 0.4 + 3) * (ribbon.amplitude * 0.25);
				const mouseWave = Math.sin(frac * Math.PI * 2 + t * 0.0004) * mouseOffsetY;

				const y = ribbon.yBase * H + wave1 + wave2 + wave3 + mouseWave + mouseOffsetX * Math.sin(frac * Math.PI);

				points.push({ x, y });
			}

			// Draw ribbon as a filled shape with gradient
			const grad = ctx.createLinearGradient(0, 0, W, 0);
			const h1 = ribbon.hue[0] + Math.sin(t * 0.0003) * 15;
			const h2 = ribbon.hue[1] + Math.cos(t * 0.0004) * 15;
			grad.addColorStop(0, `hsla(${h1}, 80%, 65%, 0)`);
			grad.addColorStop(0.2, `hsla(${h1}, 80%, 65%, ${ribbon.alpha})`);
			grad.addColorStop(0.5, `hsla(${(h1+h2)/2}, 85%, 70%, ${ribbon.alpha * 1.2})`);
			grad.addColorStop(0.8, `hsla(${h2}, 80%, 65%, ${ribbon.alpha})`);
			grad.addColorStop(1, `hsla(${h2}, 80%, 65%, 0)`);

			// Upper edge
			ctx.beginPath();
			ctx.moveTo(points[0].x, points[0].y - ribbon.width / 2);
			for (let i = 1; i < points.length; i++) {
				const prev = points[i - 1];
				const curr = points[i];
				const cpx = (prev.x + curr.x) / 2;
				ctx.quadraticCurveTo(prev.x, prev.y - ribbon.width / 2, cpx, (prev.y + curr.y) / 2 - ribbon.width / 2);
			}
			// Lower edge (reverse)
			for (let i = points.length - 1; i >= 0; i--) {
				const curr = points[i];
				const prev = i > 0 ? points[i - 1] : curr;
				const cpx = (prev.x + curr.x) / 2;
				ctx.quadraticCurveTo(curr.x, curr.y + ribbon.width / 2, cpx, (prev.y + curr.y) / 2 + ribbon.width / 2);
			}
			ctx.closePath();

			ctx.fillStyle = grad;
			ctx.fill();

			// Bright centre line
			ctx.beginPath();
			ctx.moveTo(points[0].x, points[0].y);
			for (let i = 1; i < points.length; i++) {
				const prev = points[i - 1];
				const curr = points[i];
				ctx.quadraticCurveTo(prev.x, prev.y, (prev.x + curr.x) / 2, (prev.y + curr.y) / 2);
			}
			ctx.strokeStyle = `hsla(${(h1+h2)/2}, 90%, 80%, ${ribbon.alpha * 0.7})`;
			ctx.lineWidth = 1.5;
			ctx.stroke();
		}

		/** @param {number} [timestamp] */
		function draw(timestamp) {
			if (!ctx) return;
			time = timestamp || 0;
			ctx.clearRect(0, 0, W, H);

			// Subtle ambient glow spots
			const glow1 = ctx.createRadialGradient(W * 0.3, H * 0.4, 0, W * 0.3, H * 0.4, W * 0.45);
			glow1.addColorStop(0, 'rgba(109, 40, 217, 0.08)');
			glow1.addColorStop(1, 'rgba(109, 40, 217, 0)');
			ctx.fillStyle = glow1;
			ctx.fillRect(0, 0, W, H);

			const glow2 = ctx.createRadialGradient(W * 0.7, H * 0.6, 0, W * 0.7, H * 0.6, W * 0.40);
			glow2.addColorStop(0, 'rgba(96, 165, 250, 0.06)');
			glow2.addColorStop(1, 'rgba(96, 165, 250, 0)');
			ctx.fillStyle = glow2;
			ctx.fillRect(0, 0, W, H);

			// Draw each ribbon with composite blending
			ctx.globalCompositeOperation = 'lighter';
			RIBBONS.forEach(r => drawRibbon(r, time));
			ctx.globalCompositeOperation = 'source-over';

			animId = requestAnimationFrame(draw);
		}
		draw(0);

		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener('resize', resize);
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
			CloudSpark tracks every change in your digital art projects —
			images, video, audio, 3D — with the precision of git,
			without any of the complexity.
		</p>

		<a
			href="https://github.com/Star-Plus/CloudSpark-Desktop/releases/latest"
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
	background: #0B0B0F;
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
		linear-gradient(to bottom, #0B0B0F 0%, transparent 12%, transparent 88%, #0B0B0F 100%),
		linear-gradient(to right, rgba(11,11,15,0.5) 0%, transparent 18%, transparent 82%, rgba(11,11,15,0.5) 100%),
		radial-gradient(ellipse 50% 55% at 50% 50%, rgba(11,11,15,0.72) 0%, rgba(11,11,15,0.30) 50%, transparent 100%);
}

/* ── Content ── */
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
		padding-top: 80px; /* Account for fixed header if needed, but it's flex centered */
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
	color: rgba(167,139,250,0.85);
	background: rgba(109,40,217,0.10);
	border: 1px solid rgba(167,139,250,0.18);
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
	background: #A78BFA;
	flex-shrink: 0;
	animation: dot-pulse 2.4s ease-in-out infinite;
}

@keyframes dot-pulse {
	0%,100% { box-shadow: 0 0 4px rgba(167,139,250,0.5); }
	50%      { box-shadow: 0 0 14px rgba(167,139,250,1), 0 0 28px rgba(109,40,217,0.5); }
}

.headline {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: clamp(34px, 8vw, 68px);
	font-weight: 800;
	line-height: 1.08;
	letter-spacing: -1.5px;
	color: #fff;
	margin: 0 0 20px 0;
	text-shadow: 0 0 80px rgba(109,40,217,0.30);
}

@media (max-width: 768px) {
	.headline {
		letter-spacing: -1px;
	}
}

.headline-grad {
	background: linear-gradient(105deg, #A78BFA 0%, #C4B5FD 28%, #F472B6 58%, #60A5FA 100%);
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
	color: rgba(255,255,255,0.46);
	margin: 0 0 34px 0;
	max-width: 490px;
	text-shadow: 0 2px 16px rgba(0,0,0,0.5);
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
	background: linear-gradient(140deg, #6D28D9 0%, #7C3AED 100%);
	color: #fff;
	text-decoration: none;
	font-family: 'Inter', sans-serif;
	font-size: 15px;
	font-weight: 600;
	padding: 15px 32px;
	border-radius: 14px;
	border: 1px solid rgba(167,139,250,0.30);
	box-shadow:
		0 0 0 1px rgba(109,40,217,0.30),
		0 8px 36px rgba(109,40,217,0.45),
		0 0 80px rgba(109,40,217,0.12);
	transition: transform 0.18s, box-shadow 0.18s;
}

.btn-dl:hover {
	transform: translateY(-2px);
	box-shadow:
		0 0 0 1px rgba(167,139,250,0.45),
		0 14px 48px rgba(109,40,217,0.60),
		0 0 100px rgba(109,40,217,0.20);
}

.win-ico { width: 17px; height: 17px; flex-shrink: 0; opacity: 0.88; }

.btn-meta {
	font-size: 10.5px;
	font-weight: 400;
	color: rgba(255,255,255,0.45);
	white-space: nowrap;
	margin-left: 4px;
	padding-left: 13px;
	border-left: 1px solid rgba(255,255,255,0.15);
}

.scroll-cue {
	position: absolute;
	bottom: 26px; left: 50%;
	transform: translateX(-50%);
	z-index: 10; opacity: 0.40;
}

.scroll-bar {
	width: 1px; height: 40px;
	background: linear-gradient(to bottom, #A78BFA, transparent);
	animation: drop 2s ease-in-out infinite;
}

@keyframes drop {
	0%   { transform: scaleY(0); transform-origin: top;    opacity: 1; }
	55%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
	100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
}
</style>