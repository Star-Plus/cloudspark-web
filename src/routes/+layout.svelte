<script>
	import { onMount } from "svelte";
	import Header from "./Header.svelte";
	import "../app.css";
	import "./layout.css";

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();

	let canvas;

	onMount(() => {
		if (!canvas) return; // Guard in case of fast unmounts

		const ctx = canvas.getContext("2d");
		let animationFrameId;
		let stars = [];
		const connectionDistance = 150; // Increased for better connectivity
		const starCount = 80;

		const resize = () => {
			if (canvas) {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}
		};

		class Star {
			constructor() {
				this.x = Math.random() * window.innerWidth;
				this.y = Math.random() * window.innerHeight;
				this.vx = (Math.random() - 0.5) * 0.3; // Slower, smoother drift
				this.vy = (Math.random() - 0.5) * 0.3;
				this.size = Math.random() * 2 + 1;
				this.baseAlpha = Math.random() * 0.6 + 0.2;
				this.alpha = this.baseAlpha;
				this.twinkleSpeed = Math.random() * 0.02 + 0.005;
				this.twinkleDir = 1;
			}

			update() {
				this.x += this.vx;
				this.y += this.vy;

				// Bounce off edges
				if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
				if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

				// Twinkle
				this.alpha += this.twinkleSpeed * this.twinkleDir;
				if (this.alpha > 0.8 || this.alpha < 0.2) this.twinkleDir *= -1;
			}

			draw() {
				ctx.globalAlpha = this.alpha;
				ctx.fillStyle = "white";
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		const init = () => {
			stars = [];
			resize();
			for (let i = 0; i < starCount; i++) {
				stars.push(new Star());
			}
		};

		const animate = () => {
			if (!ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Update and draw stars
			stars.forEach((star) => {
				star.update();
				star.draw();
			});

			// Draw connections
			ctx.globalAlpha = 1;
			// Use a very light white/purple connection line
			ctx.lineWidth = 0.5;

			for (let i = 0; i < stars.length; i++) {
				for (let j = i + 1; j < stars.length; j++) {
					const dx = stars[i].x - stars[j].x;
					const dy = stars[i].y - stars[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);

					if (dist < connectionDistance) {
						// Opacity based on distance (closer = more opaque)
						const opacity = 1 - dist / connectionDistance;
						ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;

						ctx.beginPath();
						ctx.moveTo(stars[i].x, stars[i].y);
						ctx.lineTo(stars[j].x, stars[j].y);
						ctx.stroke();
					}
				}
			}

			animationFrameId = requestAnimationFrame(animate);
		};

		window.addEventListener("resize", resize);
		init();
		animate();

		return () => {
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(animationFrameId);
		};
	});
</script>

<div
	class="app bg-[#050520] text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white relative overflow-hidden"
>
	<!-- Global Background Space Ambience (Fixed - Does not scroll) -->
	<div class="fixed inset-0 pointer-events-none z-0">
		<!-- Nebulas -->
		<div
			class="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"
		></div>
		<div
			class="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-900/15 rounded-full blur-[100px] animate-[pulse_12s_ease-in-out_infinite_reverse]"
		></div>
		<div
			class="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] animate-pulse"
		></div>

		<!-- Constellation Canvas -->
		<canvas bind:this={canvas} class="absolute inset-0 w-full h-full"
		></canvas>

		<!-- Drifting Shapes -->
		<div
			class="absolute top-[10%] right-[30%] w-6 h-6 border border-white/10 rounded rotate-45 animate-[spin_25s_linear_infinite] opacity-50"
		></div>
		<div
			class="absolute bottom-[25%] left-[5%] w-12 h-12 border border-blue-500/10 rounded-full animate-[spin_30s_linear_infinite]"
		></div>
		<div
			class="absolute top-[60%] right-[10%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-white/10 rotate-12 animate-pulse"
		></div>
	</div>

	<!-- Main Content Wrapper -->
	<div class="relative z-10 flex flex-col min-h-screen">
		<Header />

		<main
			class="flex-1 w-full max-w-7xl mx-auto p-4 box-border flex flex-col relative"
		>
			{@render children()}
		</main>

		<footer
			class="flex flex-col justify-center items-center p-4 text-gray-400 text-sm"
		>
			<p>&copy; 2025 CloudSpark. All rights reserved.</p>
		</footer>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #050520;
		background-image: radial-gradient(
				circle at 15% 50%,
				rgba(76, 29, 149, 0.15) 0%,
				transparent 50%
			),
			radial-gradient(
				circle at 85% 30%,
				rgba(139, 92, 246, 0.1) 0%,
				transparent 50%
			);
		background-attachment: fixed;
	}

	@keyframes twinkle {
		0%,
		100% {
			opacity: 0.3;
			transform: scale(0.8);
		}
		50% {
			opacity: 1;
			transform: scale(1.2);
			box-shadow: 0 0 4px white;
		}
	}

	@keyframes drift {
		0% {
			transform: translateY(0px) translateX(0px);
		}
		50% {
			transform: translateY(-20px) translateX(10px);
		}
		100% {
			transform: translateY(0px) translateX(0px);
		}
	}
</style>
