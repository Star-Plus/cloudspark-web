<script>
	import "./layout.css";
	let { children } = $props();
</script>

<svelte:head>
	<title>Documentation — Euler</title>
</svelte:head>

<div class="docs-container animate-in">
	<div class="docs-sidebar">
		<h3 class="sidebar-title">Getting Started</h3>
		<nav class="sidebar-nav">
			<a href="/docs" class="active">Introduction</a>
			<a href="#">Installation</a>
			<a href="#">Fast Track</a>
		</nav>
		<h3 class="sidebar-title">Core Concepts</h3>
		<nav class="sidebar-nav">
			<a href="#">Repositories</a>
			<a href="#">Commits & Timelines</a>
			<a href="#">Binary Diffing</a>
		</nav>
	</div>
	
	<main class="markdown-body">
		{@render children()}
	</main>
</div>

<style>
.docs-container {
	display: flex;
	max-width: 1100px;
	margin: 0 auto;
	padding: 140px 24px 100px;
	min-height: 100vh;
	gap: 80px;
}

.docs-sidebar {
	width: 200px;
	flex-shrink: 0;
	position: sticky;
	top: 140px;
	height: max-content;
}

@media (max-width: 768px) {
	.docs-container {
		flex-direction: column;
		gap: 40px;
	}
	.docs-sidebar {
		width: 100%;
		position: static;
	}
}

.sidebar-title {
	font-family: 'Inter', sans-serif;
	font-size: 13px;
	font-weight: 700;
	color: var(--text-950);
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 0 0 16px 0;
}

.sidebar-nav {
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-bottom: 40px;
}

.sidebar-nav a {
	font-family: 'Inter', sans-serif;
	font-size: 14.5px;
	color: var(--text-600);
	text-decoration: none;
	transition: color 0.2s;
}

.sidebar-nav a:hover, .sidebar-nav a.active {
	color: var(--primary-500);
}

:global(.animate-in) {
	animation: fade-in 0.6s ease-out forwards;
}

@keyframes fade-in {
	from { opacity: 0; transform: translateY(10px); }
	to { opacity: 1; transform: translateY(0); }
}
</style>
