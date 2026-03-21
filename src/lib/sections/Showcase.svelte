<!-- Dreamy illustrated section — uses the generated nightscape background -->
<section class="showcase">
	<!-- bg image -->
	<div class="showcase-bg" aria-hidden="true"></div>

	<!-- overlay for readability -->
	<div class="showcase-overlay" aria-hidden="true"></div>

	<div class="showcase-content">
		<div class="showcase-badge animate-in">✨ Built for Creators</div>

		<h2 class="showcase-title animate-in delay-1">
			Where imagination<br />
			meets version control.
		</h2>

		<p class="showcase-sub animate-in delay-2">
			Whether you're a solo illustrator, a motion designer, or a full studio team —
			CloudSpark gives you the peace of mind that every version of your work is safe,
			searchable, and always one click away.
		</p>

		<div class="stats-row animate-in delay-3">
			<div class="stat">
				<span class="stat-num">∞</span>
				<span class="stat-label">File types supported</span>
			</div>
			<div class="stat-divider"></div>
			<div class="stat">
				<span class="stat-num">0 ms</span>
				<span class="stat-label">Config needed</span>
			</div>
			<div class="stat-divider"></div>
			<div class="stat">
				<span class="stat-num">100%</span>
				<span class="stat-label">Offline capable</span>
			</div>
		</div>
	</div>
</section>

<style>
.showcase {
	position: relative;
	width: 100vw;
	height: 100vh;
	min-height: 640px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}

.showcase-bg {
	position: absolute;
	inset: 0;
	background: url('/dreamy-bg.png') center center / cover no-repeat;
	filter: brightness(0.55) saturate(1.3);
}

.showcase-overlay {
	position: absolute;
	inset: 0;
	background:
		radial-gradient(ellipse 60% 60% at 50% 50%, rgba(11,11,15,0.50) 0%, transparent 100%),
		linear-gradient(to bottom, rgba(11,11,15,0.6) 0%, transparent 20%, transparent 80%, rgba(11,11,15,0.7) 100%);
}

.showcase-content {
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: 660px;
	padding: 0 28px;
}

.showcase-badge {
	font-family: 'Inter', sans-serif;
	font-size: 13px;
	font-weight: 500;
	color: rgba(255,255,255,0.80);
	background: rgba(255,255,255,0.08);
	border: 1px solid rgba(255,255,255,0.12);
	padding: 6px 18px;
	border-radius: 999px;
	margin-bottom: 28px;
	backdrop-filter: blur(12px);
}

.showcase-title {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: clamp(36px, 5vw, 64px);
	font-weight: 800;
	line-height: 1.08;
	letter-spacing: -2px;
	color: #fff;
	margin: 0 0 20px 0;
	text-shadow: 0 4px 40px rgba(0,0,0,0.5);
}

.showcase-sub {
	font-family: 'Inter', sans-serif;
	font-size: 15.5px;
	line-height: 1.72;
	color: rgba(255,255,255,0.60);
	margin: 0 0 44px 0;
	max-width: 520px;
	text-shadow: 0 2px 12px rgba(0,0,0,0.4);
}

/* Stats strip */
.stats-row {
	display: flex;
	align-items: center;
	gap: 32px;
	background: rgba(255,255,255,0.06);
	border: 1px solid rgba(255,255,255,0.10);
	border-radius: 16px;
	padding: 20px 40px;
	backdrop-filter: blur(16px);
}

.stat {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
}

.stat-num {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: 28px;
	font-weight: 800;
	color: #fff;
	letter-spacing: -1px;
}

.stat-label {
	font-family: 'Inter', sans-serif;
	font-size: 11.5px;
	color: rgba(255,255,255,0.45);
	letter-spacing: 0.3px;
}

.stat-divider {
	width: 1px;
	height: 36px;
	background: rgba(255,255,255,0.12);
}
</style>
