<!-- How It Works -->
<section class="how">
	<div class="how-header">
		<div class="section-tag">How it works</div>
		<h2 class="how-title">
			From zero to version controlled<br />
			<span class="title-accent">in three steps.</span>
		</h2>
	</div>

	<div class="steps">
		<!-- Step 1 -->
		<div class="step">
			<div class="step-number">01</div>
			<div class="step-connector" aria-hidden="true"></div>
			<div class="step-body">
				<div class="step-icon-wrap">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 13.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
					</svg>
				</div>
				<div class="step-content">
					<h3>Initialize a Repository</h3>
					<p>Point CloudSpark at any folder on your machine. It creates a <code>.spark</code> directory and begins tracking your files — no setup beyond that.</p>
				</div>
			</div>
		</div>

		<!-- Step 2 -->
		<div class="step">
			<div class="step-number">02</div>
			<div class="step-connector" aria-hidden="true"></div>
			<div class="step-body">
				<div class="step-icon-wrap">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
					</svg>
				</div>
				<div class="step-content">
					<h3>Commit Your Work</h3>
					<p>When you're ready to save a version, commit. Add an emoji, label, and message. Every commit is immutable — you can always go back.</p>
				</div>
			</div>
		</div>

		<!-- Step 3 -->
		<div class="step">
			<div class="step-number">03</div>
			<div class="step-body">
				<div class="step-icon-wrap">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.338-2.32 5.75 5.75 0 0 1 1.372 11.095H6.75Z" />
					</svg>
				</div>
				<div class="step-content">
					<h3>Push to the Cloud</h3>
					<p>Sync your repository to secure cloud storage. Access it from any machine, share it with collaborators, or just keep it as an offsite backup.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.how {
		position: relative;
		z-index: 10;
		width: 100%;
		padding: 100px 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(to bottom, transparent, rgba(91,80,232,0.03) 50%, transparent);
	}

	.how-header {
		text-align: center;
		max-width: 560px;
		margin-bottom: 72px;
	}

	.section-tag {
		display: inline-block;
		font-family: 'Inter', sans-serif;
		font-size: 11.5px;
		font-weight: 500;
		color: rgba(255,255,255,0.4);
		letter-spacing: 1.8px;
		text-transform: uppercase;
		margin-bottom: 18px;
	}

	.how-title {
		font-family: 'Bricolage Grotesque', sans-serif;
		font-size: clamp(34px, 4vw, 50px);
		font-weight: 700;
		color: #ffffff;
		line-height: 1.15;
		letter-spacing: -1.5px;
		margin: 0;
	}

	.title-accent {
		color: #7B6EF6;
	}

	/* ── Steps ── */
	.steps {
		display: flex;
		flex-direction: column;
		gap: 0;
		width: 100%;
		max-width: 760px;
	}

	.step {
		display: flex;
		align-items: flex-start;
		gap: 0;
		position: relative;
	}

	/* Left column: number + connector */
	.step-number {
		font-family: 'Bricolage Grotesque', sans-serif;
		font-size: 12px;
		font-weight: 700;
		color: rgba(91, 80, 232, 0.6);
		letter-spacing: 1px;
		width: 56px;
		flex-shrink: 0;
		padding-top: 30px;
		text-align: center;
	}

	.step-connector {
		width: 1px;
		position: absolute;
		left: 27px;
		top: 68px;
		bottom: -32px;
		background: linear-gradient(to bottom, rgba(91,80,232,0.3), transparent);
	}

	.step:last-child .step-connector {
		display: none;
	}

	/* Content */
	.step-body {
		flex: 1;
		display: flex;
		gap: 24px;
		padding: 28px 0 40px;
		border-top: 1px solid rgba(255,255,255,0.05);
	}

	.step:first-child .step-body {
		border-top: none;
	}

	.step-icon-wrap {
		width: 48px;
		height: 48px;
		border-radius: 14px;
		background: rgba(91,80,232,0.12);
		border: 1px solid rgba(91,80,232,0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		color: #8B80F9;
	}

	.step-icon-wrap svg {
		width: 22px;
		height: 22px;
	}

	.step-content {
		flex: 1;
		padding-top: 4px;
	}

	.step-content h3 {
		font-family: 'Bricolage Grotesque', sans-serif;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		margin: 0 0 10px;
		letter-spacing: -0.4px;
	}

	.step-content p {
		font-family: 'Inter', sans-serif;
		font-size: 14.5px;
		color: rgba(255,255,255,0.42);
		line-height: 1.75;
		margin: 0;
	}

	.step-content code {
		font-family: 'Fira Mono', monospace;
		font-size: 12.5px;
		background: rgba(91,80,232,0.15);
		color: #A89FFF;
		padding: 2px 7px;
		border-radius: 5px;
		border: 1px solid rgba(91,80,232,0.2);
	}
</style>
