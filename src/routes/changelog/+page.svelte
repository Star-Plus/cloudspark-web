<script>
	let { data } = $props();
	let logs = $derived(data.logs || []);
</script>

<svelte:head>
	<title>Changelog — Euler</title>
</svelte:head>

<div class="page-body">
	<div class="header-section">
		<h1 class="page-title animate-in">Changelog</h1>
		<p class="page-sub animate-in delay-1">See what's new and what's changed in Euler.</p>
	</div>

	<div class="timeline animate-in delay-2">
		{#each logs as log}
			<div class="log-entry">
				<div class="log-meta">
					<div class="log-version">{log.version}</div>
					<div class="log-date">{log.date}</div>
				</div>
				<div class="log-content">
					<div class="log-dot"></div>
					<h3 class="log-title">{log.title}</h3>
					<p class="log-body">{log.body}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
.page-body {
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	padding: 160px 24px 100px;
	min-height: 100vh;
}

.header-section {
	text-align: center;
	margin-bottom: 80px;
}

.page-title {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: 48px;
	font-weight: 700;
	color: var(--text-950);
	margin: 0 0 16px 0;
	letter-spacing: -1px;
}

.page-sub {
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	color: var(--text-600);
	margin: 0;
}

.timeline {
	display: flex;
	flex-direction: column;
	gap: 40px;
}

.log-entry {
	display: grid;
	grid-template-columns: 140px 1fr;
	gap: 32px;
}

@media (max-width: 600px) {
	.log-entry {
		grid-template-columns: 1fr;
		gap: 16px;
	}
}

.log-meta {
	text-align: right;
	padding-top: 4px;
}

@media (max-width: 600px) {
	.log-meta {
		text-align: left;
		display: flex;
		gap: 12px;
		align-items: baseline;
	}
}

.log-version {
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 700;
	color: var(--primary-600);
	margin-bottom: 4px;
}

.log-date {
	font-family: 'Inter', sans-serif;
	font-size: 13px;
	color: var(--text-500);
}

.log-content {
	background: rgba(161,3,252,0.03);
	border: 1px solid rgba(161,3,252,0.08);
	border-radius: 12px;
	padding: 24px 32px;
	position: relative;
}

.log-content::before {
	content: '';
	position: absolute;
	left: -33px;
	top: 24px;
	width: 12px; height: 12px;
	background: var(--background-50);
	border: 2px solid var(--primary-500);
	border-radius: 50%;
	z-index: 2;
}

@media (max-width: 600px) {
	.log-content::before {
		display: none;
	}
}

.log-title {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: 20px;
	font-weight: 600;
	color: var(--text-900);
	margin: 0 0 12px 0;
}

.log-body {
	font-family: 'Inter', sans-serif;
	font-size: 14.5px;
	color: var(--text-600);
	line-height: 1.6;
	margin: 0;
}

:global(.animate-in) {
	opacity: 0;
	transform: translateY(20px);
	animation: slide-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

:global(.delay-1) { animation-delay: 0.1s; }
:global(.delay-2) { animation-delay: 0.2s; }

@keyframes slide-up {
	to { opacity: 1; transform: translateY(0); }
}
</style>
