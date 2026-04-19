<script>
	const faqs = [
		{ q: 'How do I recover an old version of my PSD file?', a: 'You can browse your local timeline within CloudSpark desktop, click on any previous commit, and simply hit "Restore". CloudSpark will seamlessly recover the file states without duplicating your heavy PSD binaries.' },
		{ q: 'Is there a file size limit?', a: 'No. CloudSpark is built to handle massive binary files typical of 3D and 2D design workflows. You are only limited by your local disk space, and your cloud tier if syncing.' },
		{ q: 'What happens if I go offline?', a: 'CloudSpark is a local-first version control system. All your commits, timelines, and diffs are instantaneous perfectly offline. Cloud sync will automatically resume when you reconnect.' },
		{ q: 'Can I use CloudSpark with Git?', a: 'CloudSpark operates independently of vanilla Git to provide blazing fast speeds on massive binaries, but you can export repos if desired.' }
	];

	let activeFaq = -1;

	// @ts-ignore
	function toggleFaq(index) {
		activeFaq = activeFaq === index ? -1 : index;
	}
</script>

<svelte:head>
	<title>Support — CloudSpark</title>
</svelte:head>

<div class="page-body">
	<div class="header-section">
		<h1 class="page-title animate-in">Support Center</h1>
		<p class="page-sub animate-in delay-1">Get help, learn the ropes, and find answers.</p>
	</div>

	<div class="faq-container animate-in delay-2">
		<h2 class="section-title">Frequently Asked Questions</h2>
		
		<div class="accordion">
			{#each faqs as faq, i}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="faq-card" class:active={activeFaq === i} onclick={() => toggleFaq(i)}>
					<div class="faq-header">
						<h3>{faq.q}</h3>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="chevron">
							<path d="M6 9l6 6 6-6"/>
						</svg>
					</div>
					<div class="faq-body">
						<p>{faq.a}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="contact-box animate-in delay-3">
		<h2 class="section-title">Still need help?</h2>
		<p>Contact our support team and we'll get back to you within 24 hours.</p>
		<button class="support-btn">Open a Ticket</button>
	</div>
</div>

<style>
.page-body {
	width: 100%;
	max-width: 700px;
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
	color: #fff;
	margin: 0 0 16px 0;
	letter-spacing: -1px;
}

.page-sub {
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	color: rgba(255,255,255,0.5);
	margin: 0;
}

.section-title {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: 24px;
	font-weight: 600;
	color: #fff;
	margin: 0 0 24px 0;
}

.faq-container {
	margin-bottom: 60px;
}

.accordion {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.faq-card {
	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.05);
	border-radius: 12px;
	overflow: hidden;
	cursor: pointer;
	transition: background 0.2s, border-color 0.2s;
}

.faq-card:hover {
	background: rgba(255,255,255,0.04);
}

.faq-card.active {
	border-color: rgba(167,139,250,0.3);
}

.faq-header {
	padding: 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.faq-header h3 {
	font-family: 'Inter', sans-serif;
	font-size: 15px;
	font-weight: 600;
	color: #fff;
	margin: 0;
}

.chevron {
	width: 20px;
	height: 20px;
	color: rgba(255,255,255,0.5);
	transition: transform 0.3s;
}

.faq-card.active .chevron {
	transform: rotate(180deg);
	color: #A78BFA;
}

.faq-body {
	padding: 0 24px;
	max-height: 0;
	opacity: 0;
	overflow: hidden;
	transition: max-height 0.3s ease-out, padding 0.3s ease, opacity 0.3s ease;
}

.faq-card.active .faq-body {
	padding: 0 24px 24px;
	max-height: 200px;
	opacity: 1;
}

.faq-body p {
	font-family: 'Inter', sans-serif;
	font-size: 14.5px;
	color: rgba(255,255,255,0.6);
	line-height: 1.6;
	margin: 0;
}

.contact-box {
	background: linear-gradient(140deg, rgba(109,40,217,0.1) 0%, rgba(124,58,237,0.05) 100%);
	border: 1px solid rgba(167,139,250,0.15);
	border-radius: 16px;
	padding: 40px;
	text-align: center;
}

.contact-box p {
	font-family: 'Inter', sans-serif;
	font-size: 15px;
	color: rgba(255,255,255,0.6);
	margin: 0 0 24px 0;
}

.support-btn {
	background: #fff;
	color: #0B0B0F;
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 600;
	padding: 12px 28px;
	border: none;
	border-radius: 999px;
	cursor: pointer;
	transition: transform 0.2s, box-shadow 0.2s;
}

.support-btn:hover {
	transform: translateY(-2px);
	box-shadow: 0 6px 20px rgba(255,255,255,0.15);
}

:global(.animate-in) {
	opacity: 0;
	transform: translateY(20px);
	animation: slide-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

:global(.delay-1) { animation-delay: 0.1s; }
:global(.delay-2) { animation-delay: 0.2s; }
:global(.delay-3) { animation-delay: 0.3s; }

@keyframes slide-up {
	to { opacity: 1; transform: translateY(0); }
}
</style>
