<script lang="ts">
    import BackgroundScene from "$lib/components/BackgroundScene.svelte";
    import Icon from "@iconify/svelte";
    
</script>

<section class="relative w-full min-h-screen overflow-hidden">

	<div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(167,139,250,0.16),transparent_28%),radial-gradient(circle_at_80%_78%,rgba(96,165,250,0.14),transparent_42%),linear-gradient(160deg,#08080d21_20%,#0b0b0f12_48%,#11112277_70%)] z-20"></div>

    <BackgroundScene />

	<div class="relative mx-auto w-full h-screen grid items-center justify-center gap-9 px-5 pb-16 pt-[88px] sm:px-7 sm:pb-[72px] sm:pt-[110px] lg:gap-12 lg:pt-[100px]">

		<div class="mx-auto flex max-w-[680px] flex-col items-center text-center lg:mx-0 lg:max-w-[650px] z-100">
			<div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(167,139,250,0.22)] bg-[rgba(109,40,217,0.1)] px-[15px] py-1.5 text-[11.5px] font-medium tracking-[0.6px] text-[rgba(238,232,255,0.86)]">
				<span class="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_8px_rgba(167,139,250,0.82)]"></span>
				Version Control · Built for Creatives
			</div>

			<h1 class="mb-[18px] text-[clamp(38px,5.1vw,68px)] font-extrabold leading-[1.06] tracking-[-1.8px] text-neutral-100">
				Your creative work,<br />
				<span class="bg-linear-to-r from-[#B39CFF] to-[#C596FF] bg-clip-text text-transparent">under control.</span>
			</h1>

			<p class="mb-[34px] mt-25 max-w-[500px] font-sans text-[14.5px] leading-[1.72] text-[rgba(255,255,255,0.52)] sm:text-[15.5px]">
				CloudSpark tracks every change in your digital art projects -
				images, video, audio, 3D - with the precision of git,
				without any of the complexity.
			</p>

			<a
				href="https://github.com/Star-Plus/CloudSpark-Desktop/releases/latest"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex w-full flex-wrap items-center justify-center gap-[13px] rounded-[14px] bg-neutral-900 px-8 py-[15px] font-sans text-[15px] font-semibold text-white no-underline sm:w-auto hover:bg-primary transition-colors duration-300"
			>
				<Icon icon="mage:microsoft-windows" class="h-5 w-5" />
				Download for Windows
				<div class="ml-0 whitespace-nowrap border-l-0 border-[rgba(255,255,255,0.16)] pl-0 text-[10.5px] font-normal text-[rgba(255,255,255,0.45)] sm:ml-1 sm:border-l sm:pl-[13px]">Free · v0.1.0</div>
			</a>
		</div>
	</div>
</section>
