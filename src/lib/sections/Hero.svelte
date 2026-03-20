<script lang="ts">
    import BackgroundScene from "$lib/components/BackgroundScene.svelte";
    import Icon from "@iconify/svelte";

	export let isActive = false;
    
</script>

<section class={`section-anim relative w-full min-h-screen overflow-hidden ${isActive ? 'is-active' : ''}`}>

	<div class="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(167,139,250,0.16),transparent_28%),radial-gradient(circle_at_80%_78%,rgba(96,165,250,0.14),transparent_42%),linear-gradient(160deg,#08080d21_20%,#0b0b0f12_48%,#11112277_70%)] z-20"></div>

    <BackgroundScene />

	<div class="relative mx-auto w-full h-screen grid items-center justify-center gap-9 px-5 pb-16 pt-[88px] sm:px-7 sm:pb-[72px] sm:pt-[110px] lg:gap-12 lg:pt-[100px]">

		<div class="mx-auto flex max-w-[680px] flex-col items-center text-center lg:mx-0 lg:max-w-[650px] z-100">
			<div class="reveal delay-1 mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(167,139,250,0.22)] bg-[rgba(109,40,217,0.1)] px-[15px] py-1.5 text-[11.5px] font-medium tracking-[0.6px] text-[rgba(238,232,255,0.86)]">
				<span class="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_8px_rgba(167,139,250,0.82)]"></span>
				Version Control · Built for Creatives
			</div>

			<h1 class="reveal delay-2 mb-[18px] text-[clamp(38px,5.1vw,68px)] font-extrabold leading-[1.06] tracking-[-1.8px] text-neutral-100">
				Your creative work,<br />
				<span class="bg-linear-to-r from-[#B39CFF] to-[#C596FF] bg-clip-text text-transparent">under control.</span>
			</h1>

			<p class="reveal delay-3 mb-[34px] mt-25 max-w-[500px] font-sans text-[14.5px] leading-[1.72] text-[rgba(255,255,255,0.52)] sm:text-[15.5px]">
				Collaborative version control for massive media files, minus the massive uploads. Focus on your art, not your storage limits.
			</p>

			<a
				href="https://github.com/Star-Plus/CloudSpark-Desktop/releases/latest"
				target="_blank"
				rel="noopener noreferrer"
				class="reveal delay-4 inline-flex w-full flex-wrap items-center justify-center gap-[13px] rounded-[14px] bg-neutral-900 px-8 py-[15px] font-sans text-[15px] font-semibold text-white no-underline sm:w-auto hover:bg-primary transition-colors duration-300"
			>
				<Icon icon="mage:microsoft-windows" class="h-5 w-5" />
				Download for Windows
				<div class="ml-0 whitespace-nowrap border-l-0 border-[rgba(255,255,255,0.16)] pl-0 text-[10.5px] font-normal text-[rgba(255,255,255,0.45)] sm:ml-1 sm:border-l sm:pl-[13px]">Free · v0.1.0</div>
			</a>

			<a
				href="#why-cloudspark"
				class="reveal delay-5 mt-4 inline-flex items-center justify-center text-[13px] font-medium tracking-[0.4px] text-[rgba(196,181,253,0.9)] no-underline transition-colors duration-300 hover:text-white"
			>
				Why Cloudspark?
			</a>
		</div>
	</div>
</section>

<style>
	.section-anim .reveal {
		opacity: 0;
		filter: blur(5px);
		transform: translate3d(0, 42px, 0) scale(0.985);
		transition: transform 640ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 560ms ease, filter 560ms ease;
	}

	.section-anim.is-active .reveal {
		opacity: 1;
		filter: blur(0);
		transform: translate3d(0, 0, 0) scale(1);
	}

	.delay-1 { transition-delay: 40ms; }
	.delay-2 { transition-delay: 120ms; }
	.delay-3 { transition-delay: 200ms; }
	.delay-4 { transition-delay: 280ms; }
	.delay-5 { transition-delay: 340ms; }

	@media (prefers-reduced-motion: reduce) {
		.section-anim .reveal,
		.section-anim.is-active .reveal {
			opacity: 1;
			filter: none;
			transform: none;
			transition: none;
		}
	}
</style>
