<script>
	import "../app.css";
	import Header from "./Header.svelte";
	import "./layout.css";

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="app-root">
	<!-- Fixed navbar -->
	<div class="navbar-wrapper">
		<Header />
	</div>

	<!-- Page content -->
	<main>
		{@render children()}
	</main>
</div>

<style>
	.app-root {
		min-height: 100vh;
		background: #0B0B0F;
		color: #ffffff;
	}

	.navbar-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		display: flex;
		justify-content: center;
		background: rgba(11, 11, 15, 0.6);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.04);
	}

	main {
		flex: 1;
	}
</style>