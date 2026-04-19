<section id="pricing" class="pricing-section">
	<div class="pricing-glow" aria-hidden="true"></div>

	<div class="pricing-content">
		<h2 class="pricing-title animate-in">Choose your <span class="pricing-accent">arsenal.</span></h2>
		<p class="pricing-sub animate-in delay-1">Scale your creative workflow with the power you need.</p>

		<div class="pricing-grid">
			<!-- Basic -->
			<div class="pricing-card animate-in delay-2">
				<h3 class="tier-name">Basic</h3>
				<div class="tier-price">
					<span class="price-val">49</span> <span class="price-cur">EGP / mo</span>
				</div>
				<div class="price-usd">$1.99 USD</div>

				<div class="tier-features">
					<div class="feature-row">
						<span class="feature-name">SEATS</span>
						<span class="feature-val">3</span>
					</div>
					<div class="feature-row">
						<span class="feature-name">STORAGE</span>
						<span class="feature-val">10 GB</span>
					</div>
					<div class="feature-stack">
						<span class="feature-name">EXTENDED STORAGE</span>
						<span class="feature-val text-muted">Not available</span>
					</div>
				</div>

				<button class="pricing-btn">Subscribe</button>
			</div>

			<!-- Pro -->
			<div class="pricing-card pro-card animate-in delay-3">
				<div class="best-value">BEST VALUE</div>
				<h3 class="tier-name">Pro</h3>
				<div class="tier-price">
					<span class="price-val">280</span> <span class="price-cur">EGP / mo</span>
				</div>
				<div class="price-usd">$7.99 USD</div>

				<div class="tier-features">
					<div class="feature-row">
						<span class="feature-name">SEATS</span>
						<span class="feature-val">6</span>
					</div>
					<div class="feature-row">
						<span class="feature-name">STORAGE</span>
						<span class="feature-val">250 GB</span>
					</div>
					<div class="feature-stack">
						<span class="feature-name">EXTENDED STORAGE</span>
						<span class="feature-val">1.25 EGP / 0.05 USD (per GB)</span>
					</div>
				</div>

				<button class="pricing-btn">Subscribe</button>
			</div>

			<!-- Star -->
			<div class="pricing-card animate-in delay-4">
				<h3 class="tier-name">Star</h3>
				<div class="tier-price">
					<span class="price-val">970</span> <span class="price-cur">EGP / mo</span>
				</div>
				<div class="price-usd">$32.99 USD</div>

				<div class="tier-features">
					<div class="feature-row">
						<span class="feature-name">SEATS</span>
						<span class="feature-val">15</span>
					</div>
					<div class="feature-row">
						<span class="feature-name">STORAGE</span>
						<span class="feature-val">1 TB</span>
					</div>
					<div class="feature-stack">
						<span class="feature-name">EXTENDED STORAGE</span>
						<span class="feature-val">0.5 EGP / 0.05 USD (per GB)</span>
					</div>
				</div>

				<button class="pricing-btn">Subscribe</button>
			</div>

			<!-- Enterprise -->
			<div class="pricing-card animate-in delay-5">
				<h3 class="tier-name">Enterprise</h3>
				<div class="tier-price">
					<span class="price-contact">Contact Us</span>
				</div>
				<div class="price-usd" style="opacity: 0;">&nbsp;</div>

				<div class="tier-features">
					<div class="feature-row">
						<span class="feature-name">SEATS</span>
						<span class="feature-val">Unspecified</span>
					</div>
					<div class="feature-row">
						<span class="feature-name">STORAGE</span>
						<span class="feature-val">Unspecified</span>
					</div>
					<div class="feature-stack">
						<span class="feature-name">EXTENDED STORAGE</span>
						<span class="feature-val">Yes</span>
					</div>
				</div>

				<button class="pricing-btn">Contact Sales</button>
			</div>
		</div>
	</div>
</section>

<style>
.pricing-section {
	width: 100vw;
	height: 100dvh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #0B0B0F;
	position: relative;
	overflow: hidden;
	padding: 0;
}

.pricing-glow {
	position: absolute;
	top: -10%;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	max-width: 1000px;
	height: 600px;
	background: radial-gradient(ellipse, rgba(167,139,250,0.18) 0%, transparent 60%);
	pointer-events: none;
}

.pricing-content {
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 1200px;
	padding: 0 24px;
}

.pricing-title {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: clamp(32px, 5vw, 56px);
	font-weight: 700;
	color: #fff;
	margin: 0 0 12px 0;
	letter-spacing: -1px;
	text-align: center;
}

.pricing-accent {
	color: #A78BFA;
}

.pricing-sub {
	font-family: 'Inter', sans-serif;
	font-size: 15px;
	color: rgba(255,255,255,0.6);
	margin: 0 0 50px 0;
	text-align: center;
}

.pricing-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
	width: 100%;
}

@media (max-width: 1024px) {
	.pricing-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 600px) {
	.pricing-grid {
		grid-template-columns: 1fr;
	}
	.pricing-section {
		height: auto;
		min-height: 100dvh;
		padding: 100px 0;
	}
}

.pricing-card {
	background: rgba(30, 26, 45, 0.6);
	border: 1px solid rgba(255,255,255,0.05);
	border-radius: 12px;
	padding: 32px 24px;
	display: flex;
	flex-direction: column;
	position: relative;
	transition: transform 0.2s, background 0.2s;
	backdrop-filter: blur(10px);
}

.pricing-card:hover {
	transform: translateY(-5px);
	background: rgba(40, 35, 60, 0.7);
}

.pro-card {
	border-color: rgba(167,139,250,0.3);
	background: rgba(45, 30, 80, 0.4);
}

.pro-card:hover {
	background: rgba(55, 35, 100, 0.5);
}

.best-value {
	position: absolute;
	top: -12px;
	right: 24px;
	background: #8B5CF6;
	color: #fff;
	font-family: 'Inter', sans-serif;
	font-size: 10px;
	font-weight: 700;
	padding: 4px 10px;
	border-radius: 4px;
	letter-spacing: 0.5px;
}

.tier-name {
	font-family: 'Inter', sans-serif;
	font-size: 18px;
	font-weight: 600;
	color: #fff;
	margin: 0 0 16px 0;
}

.tier-price {
	font-family: 'Inter', sans-serif;
	color: #fff;
	display: flex;
	align-items: baseline;
	gap: 6px;
	margin-bottom: 4px;
}

.price-val {
	font-size: 32px;
	font-weight: 700;
}

.price-cur {
	font-size: 12px;
	color: rgba(255,255,255,0.5);
	font-weight: 500;
}

.price-contact {
	font-size: 24px;
	font-weight: 600;
}

.price-usd {
	font-family: 'Inter', sans-serif;
	font-size: 12px;
	color: rgba(255,255,255,0.4);
	margin-bottom: 32px;
}

.tier-features {
	display: flex;
	flex-direction: column;
	gap: 16px;
	flex: 1;
	margin-bottom: 32px;
}

.feature-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid rgba(255,255,255,0.05);
	padding-bottom: 8px;
}

.feature-stack {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.feature-name {
	font-family: 'Inter', sans-serif;
	font-size: 10px;
	font-weight: 600;
	color: rgba(255,255,255,0.4);
	letter-spacing: 0.5px;
	text-transform: uppercase;
}

.feature-val {
	font-family: 'Inter', sans-serif;
	font-size: 13px;
	font-weight: 600;
	color: #fff;
	text-align: right;
}

.feature-stack .feature-val {
	text-align: left;
}

.text-muted {
	color: rgba(255,255,255,0.5);
}

.pricing-btn {
	width: 100%;
	background: #000;
	color: #fff;
	font-family: 'Inter', sans-serif;
	font-size: 13px;
	font-weight: 600;
	padding: 12px 0;
	border: 1px solid rgba(255,255,255,0.1);
	border-radius: 6px;
	cursor: pointer;
	transition: background 0.2s, border-color 0.2s;
}

.pricing-btn:hover {
	background: #111;
	border-color: rgba(255,255,255,0.2);
}
</style>
