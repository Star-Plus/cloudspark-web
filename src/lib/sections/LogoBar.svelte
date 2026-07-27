<section class="logobar">
	<div class="logobar-inner">
		<!-- Lightspeed -->
		<div class="logo-item">
			<svg class="logo-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<circle cx="8" cy="12" r="4" opacity="0.9"/>
				<circle cx="16" cy="12" r="4" opacity="0.6"/>
			</svg>
			<span>Lightspeed</span>
		</div>

		<div class="logo-sep" aria-hidden="true">·</div>

		<!-- Chromatools -->
		<div class="logo-item">
			<svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
				<path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/>
				<circle cx="6.5" cy="11.5" r="1.25" fill="currentColor" stroke="none"/>
				<circle cx="9.5" cy="7.5" r="1.25" fill="currentColor" stroke="none"/>
				<circle cx="14.5" cy="7.5" r="1.25" fill="currentColor" stroke="none"/>
				<circle cx="17.5" cy="11.5" r="1.25" fill="currentColor" stroke="none"/>
			</svg>
			<span>Chromatools</span>
		</div>

		<div class="logo-sep" aria-hidden="true">·</div>

		<!-- Convergence -->
		<div class="logo-item">
			<svg class="logo-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
			</svg>
			<span>Convergence</span>
		</div>

		<div class="logo-sep" aria-hidden="true">·</div>

		<!-- Boltshift -->
		<div class="logo-item">
			<svg class="logo-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>
			</svg>
			<span>Boltshift</span>
		</div>
	</div>
</section>

<style>
	.logobar {
		position: relative;
		z-index: 10;
		width: 100%;
		padding: 0 20px 32px 20px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
	}

	.logobar-inner {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.logo-item {
		display: flex;
		align-items: center;
		gap: 8px;
		font-family: 'Inter', sans-serif;
		font-size: 13px;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.55);
		letter-spacing: 0.1px;
		padding: 4px 8px;
		transition: color 0.2s;
	}

	.logo-item:hover {
		color: rgba(255, 255, 255, 0.75);
	}

	.logo-icon {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
		color: inherit;
	}

	.logo-sep {
		color: rgba(255, 255, 255, 0.2);
		font-size: 16px;
		user-select: none;
	}

	@media (max-width: 480px) {
		.logo-sep {
			display: none;
		}
	}
</style>
