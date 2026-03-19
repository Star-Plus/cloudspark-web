<!-- Metrics Stats Strip -->
<section class="metrics">
	<div class="metrics-card">
		<!-- Stat 1 -->
		<div class="stat">
			<span class="stat-label">Active Repositories</span>
			<span class="stat-value">+2M</span>
			<span class="stat-sub">Across 120+ creators</span>
		</div>

		<div class="stat-divider" aria-hidden="true"></div>

		<!-- Stat 2 -->
		<div class="stat stat-center">
			<span class="stat-label">Commits Synced</span>
			<span class="stat-value stat-value-lg">Real-time</span>
			<span class="stat-sub">Total Sync Volume</span>
		</div>

		<div class="stat-divider" aria-hidden="true"></div>

		<!-- Stat 3 -->
		<div class="stat">
			<span class="stat-label">System Reliability</span>
			<span class="stat-value">99%</span>
			<span class="stat-sub">Uptime you can rely on</span>
		</div>
	</div>
</section>

<style>
	.metrics {
		position: relative;
		z-index: 10;
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 0 24px 80px;
	}

	.metrics-card {
		display: flex;
		align-items: stretch;
		width: 100%;
		max-width: 840px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 28px;
		backdrop-filter: blur(20px);
		overflow: hidden;
		box-shadow: 0 0 60px rgba(91, 80, 232, 0.06), inset 0 1px 0 rgba(255,255,255,0.06);
	}

	.stat {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 36px 20px;
		gap: 6px;
	}

	.stat-divider {
		width: 1px;
		background: rgba(255, 255, 255, 0.08);
		margin: 24px 0;
		align-self: stretch;
	}

	.stat-label {
		font-family: 'Inter', sans-serif;
		font-size: 13px;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.45);
		letter-spacing: 0.2px;
		text-align: center;
	}

	.stat-value {
		font-family: 'Bricolage Grotesque', sans-serif;
		font-size: 42px;
		font-weight: 700;
		color: #ffffff;
		line-height: 1.1;
		letter-spacing: -1.5px;
		text-align: center;
	}

	.stat-value-lg {
		font-size: 36px;
		letter-spacing: -1px;
	}

	.stat-sub {
		font-family: 'Inter', sans-serif;
		font-size: 11.5px;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.30);
		text-align: center;
		letter-spacing: 0.1px;
	}
</style>