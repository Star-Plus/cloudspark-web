<script lang="ts">
    import { onMount } from "svelte";
    import DotField from "$lib/components/DotField.svelte";
    import Silk from "$lib/components/Silk.svelte";

    let heroRef: HTMLElement | null = null;
    let isScrolled = false;

    onMount(() => {
        const checkScroll = () => {
            const wrapper = heroRef?.closest('.section-wrapper');
            const st = wrapper?.scrollTop || window.scrollY || 0;
            isScrolled = st > 5;
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === heroRef) {
                    if (entry.intersectionRatio < 0.98) {
                        isScrolled = true;
                    } else {
                        checkScroll();
                    }
                }
            });
        }, {
            threshold: [0.95, 0.98, 1.0]
        });

        if (heroRef) observer.observe(heroRef);

        const wrapper = heroRef?.closest('.section-wrapper');
        if (wrapper) wrapper.addEventListener('scroll', checkScroll, { passive: true });
        window.addEventListener('scroll', checkScroll, { passive: true });

        return () => {
            observer.disconnect();
            if (wrapper) wrapper.removeEventListener('scroll', checkScroll);
            window.removeEventListener('scroll', checkScroll);
        };
    });
</script>

<section bind:this={heroRef} class="hero">
	<div class="hero-bg hero-silk" aria-hidden="true">
		<Silk
			speed={5}
			scale={0.6}
			color="#400165"
			backgroundColor="#f2f2f2"
			noiseIntensity={1.2}
			rotation={80}
		/>
	</div>

	<div class="hero-bg hero-dots" aria-hidden="true">
		<DotField
			dotRadius={2}
			dotSpacing={20}
			gradientFrom="rgba(161, 3, 252, 0.5)"
			gradientTo="rgba(85, 43, 212, 0.35)"
			waveAmplitude={2}
			sparkle={true}
		/>
	</div>

	<div class="hero-overlay" aria-hidden="true"></div>
	<div class="hero-fade-bottom" class:is-scrolled={isScrolled} aria-hidden="true"></div>

	<div class="hero-content">
		<div class="badge animate-in">
			<span class="badge-dot"></span>
			Version Control · Built for Creatives
		</div>

		<h1 class="headline animate-in delay-1">
			Your creative work,<br />
			<span class="headline-grad">finally under control.</span>
		</h1>

		<p class="sub animate-in delay-2">
			Euler tracks every change in your digital art projects —
			images, video, audio, 3D — with the precision of git,
			without any of the complexity.
		</p>

		<a
			href="https://github.com/Star-Plus/Euler-Desktop/releases/latest"
			target="_blank"
			rel="noopener noreferrer"
			class="btn-dl animate-in delay-3"
		>
			<svg viewBox="0 0 24 24" fill="currentColor" class="win-ico" aria-hidden="true">
				<path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.8"/>
			</svg>
			Download for Windows
			<div class="btn-meta">Free · v0.1.0</div>
		</a>
	</div>
</section>

<style>
.hero {
	position: relative;
	width: 100vw;
	height: 100vh;
	min-height: 640px;
	overflow: hidden;
	background: var(--background-50);
	display: flex;
	align-items: center;
	justify-content: center;
}

.hero-bg {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
}

.hero-silk {
	z-index: 1;
}

.hero-dots {
	z-index: 2;
	pointer-events: none;
}

.hero-overlay {
	position: absolute;
	inset: 0;
	pointer-events: none;
	z-index: 3;
	background: radial-gradient(ellipse at 50% 50%, rgba(242,242,242,0.6) 0%, rgba(242,242,242,0.2) 50%, transparent 80%);
}

.hero-fade-bottom {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 180px;
	pointer-events: none;
	z-index: 4;
	background: linear-gradient(
		to bottom,
		rgba(242, 242, 242, 0) 0%,
		rgba(242, 242, 242, 0.25) 35%,
		rgba(242, 242, 242, 0.75) 70%,
		var(--background-50) 100%
	);
	opacity: 0;
	transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	will-change: opacity;
}

.hero-fade-bottom.is-scrolled {
	opacity: 1;
}

.hero-content {
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: 640px;
	padding: 0 24px;
}

@media (max-width: 768px) {
	.hero {
		padding-top: 80px; 
	}
	.hero-content {
		max-width: 100%;
	}
}

.badge {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-family: 'Inter', sans-serif;
	font-size: 11px;
	font-weight: 600;
	letter-spacing: 0.6px;
	color: var(--primary-800);
	background: rgba(255, 255, 255, 0.88);
	border: 1px solid rgba(161, 3, 252, 0.25);
	padding: 6px 15px;
	border-radius: 999px;
	backdrop-filter: blur(16px);
	margin-bottom: 24px;
}

@media (max-width: 480px) {
	.badge {
		font-size: 10px;
		padding: 4px 12px;
	}
}

.badge-dot {
	width: 6px; height: 6px;
	border-radius: 50%;
	background: var(--primary-500);
	flex-shrink: 0;
	animation: dot-pulse 2.4s ease-in-out infinite;
}

@keyframes dot-pulse {
	0%,100% { box-shadow: 0 0 4px rgba(161,3,252,0.4); }
	50%      { box-shadow: 0 0 14px rgba(161,3,252,0.9), 0 0 28px rgba(85,43,212,0.4); }
}

.headline {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: clamp(34px, 8vw, 68px);
	font-weight: 800;
	line-height: 1.08;
	letter-spacing: -1.5px;
	color: var(--text-950);
	margin: 0 0 20px 0;
}

@media (max-width: 768px) {
	.headline {
		letter-spacing: -1px;
	}
}

.headline-grad {
	background: linear-gradient(105deg, #ad1fff 0%, #8102ca 35%, #552bd4 70%, #400165 100%);
	background-size: 220% 100%;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	animation: grad-scroll 5s linear infinite alternate;
}

@keyframes grad-scroll {
	0%   { background-position: 0% 50%; }
	100% { background-position: 100% 50%; }
}

.sub {
	font-family: 'Inter', sans-serif;
	font-size: 15.5px;
	font-weight: 500;
	line-height: 1.65;
	color: var(--text-900);
	margin: 0 0 34px 0;
	max-width: 490px;
}

@media (max-width: 480px) {
	.sub {
		font-size: 14px;
		line-height: 1.55;
	}
}

.btn-dl {
	display: inline-flex;
	align-items: center;
	gap: 13px;
	background: linear-gradient(140deg, #a91cfa 0%, #8102ca 100%);
	color: #fff;
	text-decoration: none;
	font-family: 'Inter', sans-serif;
	font-size: 15px;
	font-weight: 600;
	padding: 15px 32px;
	border-radius: 14px;
	border: 1px solid rgba(161,3,252,0.25);
}

.btn-dl:hover {
	transform: translateY(-2px);
}

.win-ico { width: 17px; height: 17px; flex-shrink: 0; opacity: 0.88; }

.btn-meta {
	font-size: 10.5px;
	font-weight: 400;
	color: rgba(255,255,255,0.55);
	white-space: nowrap;
	margin-left: 4px;
	padding-left: 13px;
	border-left: 1px solid rgba(255,255,255,0.20);
}

@keyframes drop {
	0%   { transform: scaleY(0); transform-origin: top;    opacity: 1; }
	55%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
	100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
}
</style>

