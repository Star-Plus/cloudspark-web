<script>
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';

	const certificates = [
		{
			id: 'PT-141',
			name: 'PT-141 10mg',
			purity: '99.905%',
			date: '11/29/2025',
			image: '/certificates/coa-pt141.png',
			accession: '2511260015'
		},
		{
			id: 'DSIP',
			name: 'DSIP 5mg',
			purity: '99.148%',
			date: '01/01/2025',
			image: '/certificates/coa-dsip.png',
			accession: '2512310141'
		},
		{
			id: 'Tirzepatide',
			name: 'Tirzepatide 30mg',
			purity: '99.897%',
			date: '04/05/2026',
			image: '/certificates/coa-tirzepatide.png',
			accession: '2604030151'
		},
		{
			id: 'MOTS-C',
			name: 'MOTS-C 40mg',
			purity: '99.632%',
			date: '04/03/2026',
			image: '/certificates/coa-mots-c.png',
			accession: '2604020260'
		},
		{
			id: 'BPC-157',
			name: 'BPC-157 + TB-500',
			purity: '97.834%',
			date: '12/04/2025',
			image: '/certificates/coa-bpc157.png',
			accession: '2512020010'
		}
	];

	let selectedCert = null;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	function openModal(cert) {
		selectedCert = cert;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		selectedCert = null;
		document.body.style.overflow = '';
	}
</script>

<svelte:head>
	<title>Lab Verification — CloudSpark Quality Assurance</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="page-container">
	<header class="page-header">
		<div class="status-badge">
			<span class="pulse"></span>
			LIVE VERIFICATION ACTIVE
		</div>
		<h1>Laboratory Certificates</h1>
		<p class="subtitle">
			Every batch of our peptides is independently verified by third-party laboratories to ensure 99%+ purity and sequence accuracy.
		</p>
	</header>

	{#if mounted}
		<div class="grid" in:fade={{ delay: 200 }}>
			{#each certificates as cert, i}
				<button 
					class="cert-card" 
					on:click={() => openModal(cert)}
					in:fly={{ y: 20, delay: 100 * i, duration: 800 }}
				>
					<div class="card-glow"></div>
					<div class="card-content">
						<div class="card-header">
							<span class="product-id">{cert.id}</span>
							<span class="purity-badge">{cert.purity} Purity</span>
						</div>
						<h3>{cert.name}</h3>
						<div class="card-footer">
							<div class="meta-item">
								<span class="label">Date</span>
								<span class="value">{cert.date}</span>
							</div>
							<div class="meta-item">
								<span class="label">Accession</span>
								<span class="value">{cert.accession}</span>
							</div>
						</div>
						<div class="view-btn">
							View Full Certificate
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="arrow"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
						</div>
					</div>
				</button>
			{/each}
		</div>
	{/if}

	<footer class="verification-footer">
		<p>Lab certificates are updated monthly. All tests performed via HPLC/UV Detection & Mass Spectrometry.</p>
		<p class="disclaimer">For research and development purposes only.</p>
	</footer>
</div>

{#if selectedCert}
	<div class="modal-overlay" on:click={closeModal} transition:fade={{ duration: 200 }}>
		<button class="close-btn" on:click={closeModal}>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
		</button>
		<div class="modal-content" on:click|stopPropagation transition:scale={{ start: 0.95, duration: 300 }}>
			<img src={selectedCert.image} alt="Certificate of Analysis for {selectedCert.name}" />
			<div class="modal-info">
				<h2>{selectedCert.name} — Full Analysis</h2>
				<p>Verified batch: {selectedCert.accession} | Report Date: {selectedCert.date}</p>
			</div>
		</div>
	</div>
{/if}

<style>
	:global(body) {
		background: #0B0B0F;
		margin: 0;
		font-family: 'Inter', sans-serif;
	}

	.page-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 120px 24px 80px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.page-header {
		text-align: center;
		margin-bottom: 64px;
		max-width: 700px;
	}

	.status-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: rgba(52, 211, 153, 0.1);
		border: 1px solid rgba(52, 211, 153, 0.2);
		color: #34D399;
		padding: 6px 12px;
		border-radius: 100px;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.5px;
		margin-bottom: 24px;
	}

	.pulse {
		width: 6px;
		height: 6px;
		background: #34D399;
		border-radius: 50%;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% { transform: scale(1); opacity: 1; }
		50% { transform: scale(1.5); opacity: 0.5; }
		100% { transform: scale(1); opacity: 1; }
	}

	h1 {
		font-family: 'Bricolage Grotesque', sans-serif;
		font-size: clamp(32px, 8vw, 56px);
		font-weight: 700;
		color: #fff;
		margin: 0 0 16px 0;
		letter-spacing: -1px;
	}

	.subtitle {
		color: rgba(255, 255, 255, 0.5);
		line-height: 1.6;
		font-size: 16px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
		gap: 24px;
		width: 100%;
	}

	@media (max-width: 480px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	.cert-card {
		position: relative;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		padding: 32px;
		text-align: left;
		cursor: pointer;
		overflow: hidden;
		transition: transform 0.2s, background 0.2s;
		color: inherit;
		outline: none;
	}

	.cert-card:hover {
		transform: translateY(-4px);
		background: rgba(255, 255, 255, 0.05);
		border-color: rgba(167, 139, 250, 0.3);
	}

	.card-glow {
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle at center, rgba(167, 139, 250, 0.05) 0%, transparent 70%);
		opacity: 0;
		transition: opacity 0.3s;
		pointer-events: none;
	}

	.cert-card:hover .card-glow {
		opacity: 1;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.product-id {
		font-size: 12px;
		font-weight: 700;
		color: rgba(167, 139, 250, 0.8);
		letter-spacing: 1px;
	}

	.purity-badge {
		font-size: 11px;
		font-weight: 600;
		background: #fff;
		color: #000;
		padding: 4px 10px;
		border-radius: 6px;
	}

	h3 {
		font-family: 'Bricolage Grotesque', sans-serif;
		font-size: 22px;
		font-weight: 600;
		color: #fff;
		margin: 0 0 24px 0;
	}

	.card-footer {
		display: flex;
		gap: 32px;
		margin-bottom: 24px;
	}

	.meta-item {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.label {
		font-size: 10px;
		color: rgba(255, 255, 255, 0.3);
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.value {
		font-size: 13px;
		color: #fff;
		font-weight: 500;
	}

	.view-btn {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13px;
		font-weight: 600;
		color: #fff;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		padding-top: 20px;
		opacity: 0.8;
		transition: opacity 0.2s;
	}

	.cert-card:hover .view-btn {
		opacity: 1;
	}

	.arrow {
		width: 14px;
		height: 14px;
		transition: transform 0.2s;
	}

	.cert-card:hover .arrow {
		transform: translateX(4px);
	}

	.verification-footer {
		margin-top: 80px;
		text-align: center;
		color: rgba(255, 255, 255, 0.3);
		font-size: 13px;
		max-width: 500px;
	}

	.disclaimer {
		margin-top: 12px;
		font-weight: 600;
		color: rgba(255, 215, 0, 0.5);
	}

	/* Modal */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.95);
		backdrop-filter: blur(10px);
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 40px;
	}

	.close-btn {
		position: absolute;
		top: 40px;
		right: 40px;
		background: rgba(255, 255, 255, 0.1);
		border: none;
		color: #fff;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background 0.2s;
	}

	.close-btn:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.modal-content {
		max-width: 1000px;
		width: 100%;
		max-height: 90vh;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.modal-content img {
		width: 100%;
		height: auto;
		object-fit: contain;
		border-radius: 12px;
		box-shadow: 0 20px 80px rgba(0, 0, 0, 0.5);
		background: #fff; /* COA image has white background */
	}

	.modal-info {
		text-align: center;
	}

	.modal-info h2 {
		color: #fff;
		font-family: 'Bricolage Grotesque', sans-serif;
		margin: 0 0 4px 0;
	}

	.modal-info p {
		color: rgba(255, 255, 255, 0.5);
		margin: 0;
	}

	@media (max-width: 768px) {
		.modal-overlay {
			padding: 20px;
		}
		.close-btn {
			top: 20px;
			right: 20px;
		}
	}
</style>
