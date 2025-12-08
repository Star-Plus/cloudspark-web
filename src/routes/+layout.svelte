<script>
	import Header from "./Header.svelte";
	import "../app.css";
	import "./layout.css";

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();

	// Generate random stars for the background
	const stars = Array.from({ length: 80 }).map((_, i) => ({
		id: i,
		top: Math.random() * 100,
		left: Math.random() * 100,
		size: Math.random() * 3 + 1, // 1px to 4px
		delay: Math.random() * 5,
		duration: Math.random() * 3 + 2, // 2s to 5s
		opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
	}));
</script>

<div
	class="app bg-[#050520] text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white relative overflow-hidden"
>
	<!-- Global Background Space Ambience (Fixed - Does not scroll) -->
	<div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
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

		<!-- Generated Stars -->
		{#each stars as star (star.id)}
			<div
				class="absolute bg-white rounded-full shadow-[0_0_8px_white]"
				style="
					top: {star.top}%;
					left: {star.left}%;
					width: {star.size}px;
					height: {star.size}px;
					opacity: {star.opacity};
					animation: ping {star.duration}s ease-in-out infinite;
					animation-delay: {star.delay}s;
				"
			></div>
		{/each}

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

	/* Add custom keyframe for better star twinkling if ping is too aggressive */
	@keyframes twinkle {
		0%,
		100% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 1;
			transform: scale(1.5);
			box-shadow: 0 0 10px white;
		}
	}
</style>
