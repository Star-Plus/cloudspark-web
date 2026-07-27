<section class="download-section">
	<div class="dl-glow" aria-hidden="true"></div>

	<div class="dl-content">
		<div class="section-label animate-in">Get Started</div>
		<h2 class="dl-title animate-in delay-1">
			Download Euler<br />
			<span class="dl-accent">and take control.</span>
		</h2>
		<p class="dl-sub animate-in delay-2">
			One installer. No dependencies. No configuration.
			Just run it and start tracking your creative work.
		</p>

		<a
			href="https://github.com/Star-Plus/Euler-Desktop/releases/latest"
			target="_blank"
			rel="noopener noreferrer"
			class="dl-btn animate-in delay-3"
		>
			<svg viewBox="0 0 24 24" fill="currentColor" class="win-ico" aria-hidden="true">
				<path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.8"/>
			</svg>
			<div class="dl-btn-text">
				<span class="dl-btn-label">Download for Windows</span>
				<span class="dl-btn-meta">Free · v0.1.0 · Early Access</span>
			</div>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="dl-arrow">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
			</svg>
		</a>

		<div class="dl-requirements animate-in delay-4">
			<div class="req">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="req-check"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
				Windows 10+ (64-bit)
			</div>
			<div class="req">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="req-check"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
				No runtime dependencies
			</div>
		</div>
	</div>

	<footer class="cool-footer">
		<div class="footer-inner">
			<div class="footer-brand">
				<div class="footer-logo">
					<img src="Logo.png" alt="" />
					<span>Euler</span>
				</div>
				<p>Version control for digital creatives. Track everything. Never lose a pixel again.</p>
			</div>
			
			<div class="footer-links">
				<div class="link-col">
					<h4>Product</h4>
					<a href="/#features">Features</a>
					<a href="/#pricing">Pricing</a>
					<a href="/changelog">Changelog</a>
				</div>
				<div class="link-col">
					<h4>Resources</h4>
					<a href="/docs">Documentation</a>
					<a href="/support">Support</a>
				</div>
				<div class="link-col">
					<h4>Socials</h4>
					<a href="https://x.com/StarPlusArts" target="_blank">Twitter / X</a>
					<a href="https://www.tiktok.com/@star.plus.games?_r=1&_t=ZS-94eLfTM6e0W" target="_blank">TikTok</a>
					<a href="https://www.youtube.com/@StarPlusGames." target="_blank">YouTube</a>
					<a href="https://www.instagram.com/starplus.games/?hl=en" target="_blank">Instagram</a>
					<a href="https://github.com/Star-Plus" target="_blank">GitHub</a>
				</div>
			</div>
		</div>
		
		<div class="footer-bottom">
			<div class="copyright">© 2026 Euler. All rights reserved.</div>
			<div class="legal-links">
				<a href="#">Privacy Policy</a>
				<a href="#">Terms of Service</a>
			</div>
		</div>
	</footer>
</section>

<style>
.download-section {
	width: 100vw;
	height: auto;
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: var(--background-50);
	position: relative;
	overflow: hidden;
	padding: 80px 0 0 0;
}

.dl-glow {
	position: absolute;
	bottom: -20%;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	max-width: 800px;
	height: 500px;
	background: radial-gradient(ellipse, rgba(161,3,252,0.08) 0%, transparent 65%);
	pointer-events: none;
}

.dl-content {
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: 600px;
	padding: 40px 24px;
	margin: auto 0;
}

.section-label {
	font-family: 'Inter', sans-serif;
	font-size: 11px;
	font-weight: 500;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: var(--primary-600);
	margin-bottom: 16px;
}

.dl-title {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: clamp(30px, 7vw, 56px);
	font-weight: 700;
	line-height: 1.15;
	letter-spacing: -1px;
	color: var(--text-950);
	margin: 0 0 18px 0;
}

@media (max-width: 768px) {
	.dl-title br {
		display: none;
	}
}

.dl-accent {
	background: linear-gradient(105deg, #a103fc, #552bd4);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
}

.dl-sub {
	font-family: 'Inter', sans-serif;
	font-size: 14.5px;
	line-height: 1.7;
	color: var(--text-600);
	margin: 0 0 36px 0;
	max-width: 440px;
}

.dl-btn {
	display: inline-flex;
	align-items: center;
	gap: 16px;
	background: linear-gradient(140deg, #a103fc 0%, #8102ca 100%);
	color: #fff;
	text-decoration: none;
	padding: 16px 32px;
	border-radius: 16px;
	border: 1px solid rgba(161,3,252,0.25);
	box-shadow:
		0 0 0 1px rgba(161,3,252,0.20),
		0 10px 40px rgba(161,3,252,0.30),
		0 0 80px rgba(161,3,252,0.08);
	transition: transform 0.18s, box-shadow 0.18s;
	margin-bottom: 36px;
	max-width: 100%;
}

@media (max-width: 480px) {
	.dl-btn {
		padding: 14px 24px;
		gap: 12px;
	}
}

.win-ico { width: 20px; height: 20px; flex-shrink: 0; opacity: 0.85; }

.dl-btn-text { display: flex; flex-direction: column; gap: 3px; text-align: left; }

.dl-btn-label {
	font-family: 'Inter', sans-serif;
	font-size: 14.5px;
	font-weight: 600;
}

.dl-btn-meta {
	font-family: 'Inter', sans-serif;
	font-size: 10.5px;
	color: rgba(255,255,255,0.50);
}

.dl-arrow { width: 18px; height: 18px; opacity: 0.6; }

@media (max-width: 480px) {
	.dl-arrow { display: none; }
}

.dl-requirements {
	display: flex;
	gap: 12px 24px;
	flex-wrap: wrap;
	justify-content: center;
}

.req {
	display: flex;
	align-items: center;
	gap: 7px;
	font-family: 'Inter', sans-serif;
	font-size: 12px;
	color: var(--text-600);
}

.req-check { width: 14px; height: 14px; color: #34D399; flex-shrink: 0; }

/* ── Footer ── */
.cool-footer {
	width: 100%;
	background: var(--background-100);
	border-top: 1px solid var(--background-200);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	padding: 60px 40px 30px;
	z-index: 10;
	margin-top: auto;
}

.footer-inner {
	display: flex;
	justify-content: space-between;
	max-width: 1100px;
	margin: 0 auto;
	flex-wrap: wrap;
	gap: 40px;
	padding-bottom: 40px;
	border-bottom: 1px solid var(--background-200);
}

.footer-brand {
	max-width: 280px;
}

.footer-logo {
	display: flex;
	align-items: center;
	gap: 10px;
	font-family: 'Bricolage Grotesque', sans-serif;
	font-weight: 700;
	font-size: 20px;
	color: var(--text-950);
	margin-bottom: 16px;
}

.footer-logo img {
	width: 28px;
	height: 28px;
	object-fit: contain;
}

.footer-brand p {
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	color: var(--text-600);
	line-height: 1.6;
	margin: 0;
}


.footer-links {
	display: flex;
	gap: 80px;
	flex-wrap: wrap;
}

.link-col {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.link-col h4 {
	font-family: 'Inter', sans-serif;
	font-size: 12px;
	font-weight: 600;
	color: var(--text-900);
	margin: 0 0 8px 0;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	opacity: 0.9;
}

.link-col a {
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	color: var(--text-600);
	text-decoration: none;
	transition: color 0.2s, transform 0.2s;
	display: inline-block;
}

.link-col a:hover {
	color: var(--primary-500);
	transform: translateX(3px);
}

.footer-bottom {
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 30px auto 0;
	font-family: 'Inter', sans-serif;
	font-size: 13px;
	color: var(--text-500);
	flex-wrap: wrap;
	gap: 20px;
}

.legal-links {
	display: flex;
	gap: 24px;
}

.legal-links a {
	color: var(--text-500);
	text-decoration: none;
	transition: color 0.2s;
}

.legal-links a:hover {
	color: var(--text-900);
}

@media (max-width: 768px) {
	.cool-footer {
		padding: 50px 24px 30px;
	}
	.footer-inner {
		flex-direction: column;
		gap: 50px;
	}
	.footer-links {
		gap: 40px;
		justify-content: space-between;
		width: 100%;
	}
	.footer-bottom {
		flex-direction: column;
		align-items: flex-start;
		margin-top: 24px;
	}
	.legal-links {
		width: 100%;
		justify-content: flex-start;
		margin-top: 10px;
	}
}
</style>
