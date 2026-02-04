<script>
	import "../app.css";
    import Header from "./Header.svelte";
	import "./layout.css";

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();

</script>

<div
	class="app bg-background text-txt-main min-h-screen font-sans selection:bg-purple-500 selection:text-white relative overflow-hidden"
>
	<!-- Main Content Wrapper -->
	<div class="relative z-10 flex flex-col min-h-screen">
		<!-- <Header /> -->

		<main
			class=""
		>
			<div class="absolute top-0 z-20 w-full">
				<Header />
			</div>
			{@render children()}
		</main>

		<footer
			class="flex flex-col justify-center items-center p-4 text-gray-400 text-sm"
		>
			<p>&copy; 2025 CloudSpark. All rights reserved.</p>
		</footer>
	</div>
</div>