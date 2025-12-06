<script>
	import Header from "./Header.svelte";
	import "../app.css";
	import "./layout.css";

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div
	class="app bg-[#050520] text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white"
>
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
</style>
