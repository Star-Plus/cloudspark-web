<script>
	import Icon from '@iconify/svelte';
</script>	

<section
	class="w-screen h-screen flex flex-col items-center justify-center relative overflow-hidden"
>
	<div class="vcs-bg" aria-hidden="true">
		<div class="vcs-paper"></div>
		<svg class="vcs-sketch" viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true">
			<g class="sketch-lines">
				<path id="sketch-path-1" class="line l1" d="M 80 520 C 240 420, 380 430, 560 320 S 860 160, 1120 240" />
				<path id="sketch-path-2" class="line l2" d="M 120 580 C 260 500, 360 520, 540 420 S 760 280, 1040 320" />
				<path id="sketch-path-3" class="line l3" d="M 160 400 C 300 320, 420 330, 600 220 S 860 120, 1120 160" />
			</g>
		</svg>
		<div class="vcs-flow-icons" aria-hidden="true">
			<span class="flow-icon flow-1 i1"><Icon icon="mdi:play-circle-outline" /></span>
			<span class="flow-icon flow-1 i2"><Icon icon="mdi:music-circle-outline" /></span>
			<span class="flow-icon flow-1 i3"><Icon icon="mdi:image-outline" /></span>
			<span class="flow-icon flow-2 i1"><Icon icon="mdi:headphones" /></span>
			<span class="flow-icon flow-2 i2"><Icon icon="mdi:play-box-outline" /></span>
			<span class="flow-icon flow-2 i3"><Icon icon="mdi:video-outline" /></span>
			<span class="flow-icon flow-3 i1"><Icon icon="mdi:video-image" /></span>
			<span class="flow-icon flow-3 i2"><Icon icon="mdi:music-note-outline" /></span>
			<span class="flow-icon flow-3 i3"><Icon icon="mdi:image-multiple-outline" /></span>
		</div>
	</div>

		<h1
			class="text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-wide"
		>
			<span class="text-white">Cloud</span><span
				class="text-primary inline-block transform -rotate-12 origin-bottom-left ml-1"
				>✦</span
			><span class="text-white">Spark</span><br />
			<span class="text-secondary relative">
				VCS
				<!-- Decorative semicircle mimicking the 'e' in reference -->
				<span
					class="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-secondary rounded-full -z-10 opacity-50 blur-sm"
				></span>
			</span>
			<span class="text-accent italic"> tool</span>
		</h1>

		<p
			class="text-txt-muted text-sm lg:text-base leading-relaxed mb-10 max-w-md text-center"
		>
			Experience faster uploads and
			downloads, saving you valuable time and bandwidth.
		</p>


	<div>
		<button class="flex gap-2 items-center bg-white hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300 cursor-pointer">
			<Icon icon="mage:microsoft-windows" class="text-2xl" />
			<span class="text-sm">
				Download CloudSpark
			</span>
		</button>
	</div>
	
</section>

<style>
	.vcs-bg {
		position: absolute;
		inset: 0;
		z-index: -1;
		overflow: hidden;
		background: radial-gradient(800px 600px at 10% 10%, rgba(120, 90, 255, 0.16), transparent 60%),
			radial-gradient(700px 600px at 85% 20%, rgba(183, 0, 255, 0.12), transparent 55%);
	}

	.vcs-paper {
		position: absolute;
		inset: 0;
		background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1'/></filter><rect width='140' height='140' filter='url(%23n)' opacity='0.06'/></svg>");
		mix-blend-mode: soft-light;
		opacity: 0.6;
	}

	.vcs-sketch {
		position: absolute;
		inset: 0;
		width: 120%;
		height: 120%;
		left: -10%;
		top: -10%;
		pointer-events: none;
	}

	.vcs-sketch .line {
		fill: none;
		stroke: rgba(255, 255, 255, 0.32);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-dasharray: 2 10;
		animation: sketch-drift 12s linear infinite;
	}

	.vcs-sketch .l2 { opacity: 0.24; animation-delay: -2.5s; }
	.vcs-sketch .l3 { opacity: 0.18; animation-delay: -5s; }

	.vcs-flow-icons {
		position: absolute;
		inset: 0;
		pointer-events: none;
		filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.2));
	}

	.flow-icon {
		position: absolute;
		color: rgba(255, 255, 255, 0.65);
		font-size: 18px;
		width: 20px;
		height: 20px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		offset-rotate: 0deg;
		offset-anchor: 50% 50%;
		animation: flow-move 20s linear infinite;
	}

	.flow-1 { offset-path: path("M 80 520 C 240 420, 380 430, 560 320 S 860 160, 1120 240"); }
	.flow-2 { offset-path: path("M 120 580 C 260 500, 360 520, 540 420 S 760 280, 1040 320"); }
	.flow-3 { offset-path: path("M 160 400 C 300 320, 420 330, 600 220 S 860 120, 1120 160"); }

	.flow-1.i1 { animation-duration: 18s; animation-delay: 0s; }
	.flow-1.i2 { animation-duration: 18s; animation-delay: -6s; }
	.flow-1.i3 { animation-duration: 18s; animation-delay: -12s; }

	.flow-2.i1 { animation-duration: 22s; animation-delay: -3s; opacity: 0.55; }
	.flow-2.i2 { animation-duration: 22s; animation-delay: -10s; opacity: 0.55; }
	.flow-2.i3 { animation-duration: 22s; animation-delay: -17s; opacity: 0.55; }

	.flow-3.i1 { animation-duration: 26s; animation-delay: -4s; opacity: 0.5; }
	.flow-3.i2 { animation-duration: 26s; animation-delay: -12s; opacity: 0.5; }
	.flow-3.i3 { animation-duration: 26s; animation-delay: -20s; opacity: 0.5; }

	@keyframes sketch-drift {
		0% { stroke-dashoffset: 0; }
		100% { stroke-dashoffset: -90; }
	}

	@keyframes flow-move {
		0% { offset-distance: 0%; opacity: 0.2; }
		10% { opacity: 0.7; }
		90% { opacity: 0.7; }
		100% { offset-distance: 100%; opacity: 0.2; }
	}

	@media (prefers-reduced-motion: reduce) {
		.vcs-sketch .line,
		.flow-icon {
			animation: none !important;
		}
	}
</style>