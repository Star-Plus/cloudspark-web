<script>
	import "../app.css";
	import Header from "./Header.svelte";
	import "./layout.css";

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="app-root">
	<div class="navbar-wrapper">
		<Header />
	</div>

	<main>
		{@render children()}
	</main>
</div>

<style>
	.app-root {
		min-height: 100vh;
		background: var(--background-50);
		color: var(--text-950);
	}

	.navbar-wrapper {
		position: fixed;
		top: 20px;
		left: 0;
		width: 100%;
		z-index: 1000;
		display: flex;
		justify-content: center;
		pointer-events: none;
	}

	main {
		flex: 1;
	}
</style>