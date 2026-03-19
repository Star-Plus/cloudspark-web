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

	<!-- Footer -->
	<footer class="footer">
		<div class="footer-inner">
			<div class="footer-brand">
				<img src="Logo.png" alt="CloudSpark" class="footer-logo" />
				<span class="footer-name">CloudSpark</span>
			</div>
			<nav class="footer-nav" aria-label="Footer navigation">
				<a href="https://github.com/Star-Plus/CloudSpark-Desktop/releases/latest" target="_blank" rel="noopener noreferrer">Download</a>
				<a href="https://github.com/Star-Plus/CloudSpark-Desktop" target="_blank" rel="noopener noreferrer">GitHub</a>
				<a href="/privacy">Privacy</a>
				<a href="/terms">Terms</a>
			</nav>
			<p class="footer-copy">© 2025 CloudSpark. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	.app-root {
		min-height: 100vh;
		background: #09090f;
		color: #ffffff;
		display: flex;
		flex-direction: column;
	}

	/* ── Navbar ── */
	.navbar-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		display: flex;
		justify-content: center;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	/* ── Footer ── */
	.footer {
		position: relative;
		z-index: 10;
		border-top: 1px solid rgba(255,255,255,0.06);
		padding: 40px 24px;
	}

	.footer-inner {
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		flex-wrap: wrap;
	}

	.footer-brand {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.footer-logo {
		width: 22px;
		height: 22px;
		object-fit: contain;
		opacity: 0.7;
	}

	.footer-name {
		font-family: 'Bricolage Grotesque', sans-serif;
		font-size: 14px;
		font-weight: 600;
		color: rgba(255,255,255,0.5);
	}

	.footer-nav {
		display: flex;
		gap: 24px;
	}

	.footer-nav a {
		font-family: 'Inter', sans-serif;
		font-size: 13px;
		color: rgba(255,255,255,0.35);
		text-decoration: none;
		transition: color 0.2s;
	}

	.footer-nav a:hover {
		color: rgba(255,255,255,0.65);
	}

	.footer-copy {
		font-family: 'Inter', sans-serif;
		font-size: 12px;
		color: rgba(255,255,255,0.22);
		margin: 0;
	}
</style>