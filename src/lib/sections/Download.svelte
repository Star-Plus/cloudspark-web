<section class="download-section">
	<div class="dl-glow" aria-hidden="true"></div>

	<div class="dl-content">
		<div class="section-label animate-in">Get Started</div>
		<h2 class="dl-title animate-in delay-1">
			Download CloudSpark<br />
			<span class="dl-accent">and take control.</span>
		</h2>
		<p class="dl-sub animate-in delay-2">
			One installer. No dependencies. No configuration.
			Just run it and start tracking your creative work.
		</p>

		<a
			href="https://github.com/Star-Plus/CloudSpark-Desktop/releases/latest"
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
</section>

<style>
.download-section {
	width: 100vw;
	height: 100vh;
	min-height: 640px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #0B0B0F;
	position: relative;
	overflow: hidden;
}

.dl-glow {
	position: absolute;
	bottom: -20%;
	left: 50%;
	transform: translateX(-50%);
	width: 800px;
	height: 500px;
	background: radial-gradient(ellipse, rgba(109,40,217,0.14) 0%, transparent 65%);
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
	padding: 0 28px;
}

.section-label {
	font-family: 'Inter', sans-serif;
	font-size: 11.5px;
	font-weight: 500;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: rgba(167,139,250,0.70);
	margin-bottom: 16px;
}

.dl-title {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: clamp(34px, 4.5vw, 56px);
	font-weight: 700;
	line-height: 1.10;
	letter-spacing: -1.5px;
	color: #fff;
	margin: 0 0 18px 0;
}

.dl-accent {
	background: linear-gradient(105deg, #A78BFA, #F472B6);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
}

.dl-sub {
	font-family: 'Inter', sans-serif;
	font-size: 15px;
	line-height: 1.72;
	color: rgba(255,255,255,0.42);
	margin: 0 0 36px 0;
	max-width: 440px;
}

.dl-btn {
	display: inline-flex;
	align-items: center;
	gap: 16px;
	background: linear-gradient(140deg, #6D28D9 0%, #7C3AED 100%);
	color: #fff;
	text-decoration: none;
	padding: 16px 32px;
	border-radius: 16px;
	border: 1px solid rgba(167,139,250,0.30);
	box-shadow:
		0 0 0 1px rgba(109,40,217,0.30),
		0 10px 40px rgba(109,40,217,0.45),
		0 0 80px rgba(109,40,217,0.12);
	transition: transform 0.18s, box-shadow 0.18s;
	margin-bottom: 36px;
}

.dl-btn:hover {
	transform: translateY(-3px);
	box-shadow:
		0 0 0 1px rgba(167,139,250,0.45),
		0 14px 52px rgba(109,40,217,0.60),
		0 0 100px rgba(109,40,217,0.20);
}

.win-ico { width: 20px; height: 20px; flex-shrink: 0; opacity: 0.85; }

.dl-btn-text { display: flex; flex-direction: column; gap: 3px; text-align: left; }

.dl-btn-label {
	font-family: 'Inter', sans-serif;
	font-size: 15px;
	font-weight: 600;
}

.dl-btn-meta {
	font-family: 'Inter', sans-serif;
	font-size: 11px;
	color: rgba(255,255,255,0.50);
}

.dl-arrow { width: 20px; height: 20px; opacity: 0.6; }

.dl-requirements {
	display: flex;
	gap: 24px;
	flex-wrap: wrap;
	justify-content: center;
}

.req {
	display: flex;
	align-items: center;
	gap: 7px;
	font-family: 'Inter', sans-serif;
	font-size: 12.5px;
	color: rgba(255,255,255,0.40);
}

.req-check { width: 15px; height: 15px; color: #34D399; flex-shrink: 0; }
</style>
