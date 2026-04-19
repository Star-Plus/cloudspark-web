<script>
	let mode = 'docs'; // 'docs' or 'changelog'

	// Docs State
	let docFilename = '';
	let docContent = '';
	let docStatus = '';

	// Changelog State
	let clVersion = '';
	let clDate = '';
	let clTitle = '';
	let clBody = '';
	let clStatus = '';

	async function submitDoc() {
		docStatus = 'Saving...';
		try {
			const res = await fetch('/admin/api/docs', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ filename: docFilename, content: docContent })
			});
			const data = await res.json();
			if (data.success) {
				docStatus = `Success! Saved to ${data.path}`;
				docFilename = '';
				docContent = '';
			} else {
				docStatus = `Error: ${data.error}`;
			}
		} catch (err) {
			docStatus = `Error: ${err.message}`;
		}
	}

	async function submitChangelog() {
		clStatus = 'Saving...';
		try {
			const res = await fetch('/admin/api/changelog', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					version: clVersion,
					date: clDate,
					title: clTitle,
					body: clBody
				})
			});
			const data = await res.json();
			if (data.success) {
				clStatus = 'Success! Entry added to changelog.';
				clVersion = '';
				clDate = '';
				clTitle = '';
				clBody = '';
			} else {
				clStatus = `Error: ${data.error}`;
			}
		} catch (err) {
			clStatus = `Error: ${err.message}`;
		}
	}
</script>

<svelte:head>
	<title>Admin Dashboard — CloudSpark</title>
</svelte:head>

<div class="admin-container animate-in">
	<div class="admin-header">
		<h1 class="page-title">Admin Dashboard</h1>
		<p class="page-sub">Manage local Markdown documentation and JSON changelogs.</p>
	</div>

	<div class="tabs">
		<button class:active={mode === 'docs'} onclick={() => mode = 'docs'}>Documentation</button>
		<button class:active={mode === 'changelog'} onclick={() => mode = 'changelog'}>Changelog</button>
	</div>

	<div class="admin-panel">
		{#if mode === 'docs'}
			<div class="form-group">
				<label for="docName">Filename / Slug</label>
				<input type="text" id="docName" bind:value={docFilename} placeholder="e.g. index, fast-track, api-reference" />
				<small>Use "index" to overwrite the main /docs page.</small>
			</div>

			<div class="form-group">
				<label for="docContent">Markdown Content</label>
				<textarea id="docContent" bind:value={docContent} rows="15" placeholder="# Heading 1&#10;&#10;Write your markdown here..."></textarea>
			</div>

			<button class="submit-btn" onclick={submitDoc}>Save Documentation</button>
			
			{#if docStatus}
				<div class="status-msg">{docStatus}</div>
			{/if}

		{:else if mode === 'changelog'}
			<div class="form-row">
				<div class="form-group">
					<label for="clVersion">Version</label>
					<input type="text" id="clVersion" bind:value={clVersion} placeholder="e.g. v0.2.0" />
				</div>
				<div class="form-group">
					<label for="clDate">Date</label>
					<input type="text" id="clDate" bind:value={clDate} placeholder="e.g. May 2026" />
				</div>
			</div>

			<div class="form-group">
				<label for="clTitle">Update Title</label>
				<input type="text" id="clTitle" bind:value={clTitle} placeholder="e.g. The Performance Update" />
			</div>

			<div class="form-group">
				<label for="clBody">Changelog Details</label>
				<textarea id="clBody" bind:value={clBody} rows="6" placeholder="Describe the update..."></textarea>
			</div>

			<button class="submit-btn" onclick={submitChangelog}>Add Changelog Entry</button>
			
			{#if clStatus}
				<div class="status-msg">{clStatus}</div>
			{/if}
		{/if}
	</div>
	
	<div class="warning-box">
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="warning-icon">
			<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
			<line x1="12" y1="9" x2="12" y2="13"/>
			<line x1="12" y1="17" x2="12.01" y2="17"/>
		</svg>
		<p>Local Mode Only: Saving writes directly to the local PC filesystem. Will not function in serverless production.</p>
	</div>
</div>

<style>
.admin-container {
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	padding: 140px 24px 100px;
	min-height: 100vh;
}

.admin-header {
	margin-bottom: 40px;
}

.page-title {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: 40px;
	font-weight: 700;
	color: #fff;
	margin: 0 0 8px 0;
	letter-spacing: -1px;
}

.page-sub {
	font-family: 'Inter', sans-serif;
	font-size: 15px;
	color: rgba(255,255,255,0.5);
	margin: 0;
}

.tabs {
	display: flex;
	gap: 8px;
	margin-bottom: 24px;
	background: rgba(255,255,255,0.03);
	padding: 6px;
	border-radius: 8px;
	width: max-content;
}

.tabs button {
	background: transparent;
	border: none;
	padding: 8px 16px;
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 600;
	color: rgba(255,255,255,0.5);
	border-radius: 6px;
	cursor: pointer;
	transition: all 0.2s;
}

.tabs button:hover {
	color: #fff;
}

.tabs button.active {
	background: rgba(255,255,255,0.1);
	color: #fff;
}

.admin-panel {
	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.08);
	border-radius: 12px;
	padding: 32px;
	margin-bottom: 24px;
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-bottom: 24px;
}

.form-row {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 24px;
}

label {
	font-family: 'Inter', sans-serif;
	font-size: 13px;
	font-weight: 600;
	color: rgba(255,255,255,0.8);
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

input, textarea {
	background: rgba(0,0,0,0.4);
	border: 1px solid rgba(255,255,255,0.1);
	border-radius: 8px;
	padding: 12px 16px;
	font-family: 'Inter', sans-serif;
	font-size: 15px;
	color: #fff;
	outline: none;
	transition: border-color 0.2s;
}

textarea {
	font-family: 'Fira Code', 'Courier New', monospace;
	resize: vertical;
}

input:focus, textarea:focus {
	border-color: #A78BFA;
}

small {
	font-family: 'Inter', sans-serif;
	font-size: 12px;
	color: rgba(255,255,255,0.4);
	margin-top: -4px;
}

.submit-btn {
	background: #fff;
	color: #000;
	border: none;
	padding: 12px 24px;
	border-radius: 8px;
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	transition: transform 0.2s;
}

.submit-btn:hover {
	transform: translateY(-2px);
}

.status-msg {
	margin-top: 16px;
	padding: 12px;
	background: rgba(167, 139, 250, 0.1);
	border: 1px solid rgba(167, 139, 250, 0.3);
	border-radius: 8px;
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	color: #A78BFA;
}

.warning-box {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 16px 20px;
	background: rgba(239, 68, 68, 0.1);
	border: 1px solid rgba(239, 68, 68, 0.2);
	border-radius: 8px;
}

.warning-icon {
	width: 24px;
	height: 24px;
	color: #EF4444;
	flex-shrink: 0;
}

.warning-box p {
	font-family: 'Inter', sans-serif;
	font-size: 13px;
	color: rgba(255,255,255,0.7);
	margin: 0;
	line-height: 1.5;
}

:global(.animate-in) {
	animation: fade-in 0.6s ease-out forwards;
}

@keyframes fade-in {
	from { opacity: 0; transform: translateY(10px); }
	to { opacity: 1; transform: translateY(0); }
}
</style>
