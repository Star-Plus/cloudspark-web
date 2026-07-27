<script>
	import Icon from '@iconify/svelte';

</script>

<section class="w-full py-20 flex items-center justify-center gap-96">
		<!-- Title -->
		<div>
			<h2 class="text-3xl lg:text-4xl font-semibold text-white whitespace-nowrap">
				Compatible with<br />your favorite tools
			</h2>
		</div>

		<!-- Connection Network -->
		<div class="compatibility-network bg">
			<!-- Connection Lines (SVG) -->
			<svg class="connection-lines" viewBox="0 0 250 250" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
				<g class="lines">
					<!-- Top: core to Images -->
					<line class="conn-line line-1" x1="125" y1="125" x2="125" y2="25" />
					<!-- Bottom Left: core to Photoshop -->
					<line class="conn-line line-2" x1="125" y1="125" x2="0" y2="125" />
					<!-- Bottom Right: core to Code -->
					<line class="conn-line line-3" x1="125" y1="125" x2="250" y2="125" />
				</g>
			</svg>

			<!-- Center Core Logo -->
			<div class="core-logo">
				<div class="core-glow"></div>
				<div class="core-inner">
					<img src="logo.png" class="p-3 size-20" alt="CloudSpark Logo">
				</div>
			</div>

			<!-- Software Icons -->
			<div class="software-icon icon-1" title="Images">
				<Icon icon="fluent-color:image-48" />
			</div>
			<div class="software-icon icon-2" title="Photoshop">
				<Icon icon="devicon:photoshop" />
			</div>
			<div class="software-icon icon-3" title="Code">
				<Icon icon="fluent-color:code-block-16" />
			</div>
		</div>
</section>

<style>
	/* Compatibility Network */
	.compatibility-network {
		position: relative;
		width: 350px;
		height: 350px;
	}

	/* Core Logo */
	.core-logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}

	.core-inner :global(svg) {
		font-size: 2rem;
	}

	/* Connection Lines */
	.connection-lines {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.conn-line {
		stroke: rgba(139, 92, 246, 0.6);
		stroke-width: 2;
		stroke-dasharray: 2 3;
		animation: data-flow 1s linear infinite;
	}

	.line-1 { animation-delay: 0s; }
	.line-2 { animation-delay: -0.33s; }
	.line-3 { animation-delay: -0.66s; }

	/* Software Icons */
	.software-icon {
		position: absolute;
		width: 40px;
		height: 40px;
        transform: translate(-50%, -50%);
	}

	.software-icon :global(svg) {
		font-size: 2.8rem;
	}

	/* Icon Positions */
	.icon-1 { top: 20px; left: 50%;}
	.icon-2 { bottom: 138px; left: 0px; }
	.icon-3 { bottom: 138px; right: -20px; }

	/* Animations */
	@keyframes core-pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.05); }
	}

	@keyframes glow-pulse {
		0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
		50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
	}

	@keyframes data-flow {
		0% { 
			stroke-dashoffset: 0;
			opacity: 0.3;
		}
		50% {
			opacity: 1;
		}
		100% { 
			stroke-dashoffset: -16;
			opacity: 0.3;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.core-inner,
		.core-glow,
		.conn-line,
		.software-icon {
			animation: none !important;
		}
	}

	@media (max-width: 768px) {
		.compatibility-network {
			width: 200px;
			height: 200px;
		}

		.core-inner {
			width: 60px;
			height: 60px;
		}

		.core-glow {
			width: 80px;
			height: 80px;
		}

		.software-icon {
			width: 40px;
			height: 40px;
		}

		.software-icon :global(svg) {
			font-size: 1.2rem;
		}

		.core-inner :global(svg) {
			font-size: 1.5rem;
		}
	}
</style>
