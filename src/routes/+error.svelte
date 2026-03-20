<script lang="ts">
    import GrainNoiseBackground from "$lib/components/GrainNoiseBackground.svelte";


</script>

<svelte:head>
  <title>404 - Not Found</title>
</svelte:head>

<section class="relative w-full min-h-screen overflow-hidden bg-[radial-gradient(120%_95%_at_12%_92%,#4f46e544_0%,#09090e_56%,#06060a_100%)]">
  <div class="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_22%_18%,rgba(167,139,250,0.16),transparent_28%),radial-gradient(circle_at_80%_78%,rgba(96,165,250,0.14),transparent_42%),linear-gradient(160deg,#08080d21_20%,#0b0b0f12_48%,#11112277_70%)]"></div>
  <div class="pointer-events-none absolute -left-24 bottom-[-180px] z-0 h-[520px] w-[520px] rounded-full bg-[#4f46e533] blur-3xl"></div>
  <div class="pointer-events-none absolute right-[-140px] top-[-150px] z-0 h-[420px] w-[420px] rounded-full bg-[#1d4ed833] blur-3xl"></div>

  <div>
    <GrainNoiseBackground speed={1.5} />
  </div>

  <div class="relative z-30 mx-auto w-full min-h-screen grid items-center justify-center gap-9 px-5 pb-16 pt-[88px] text-center sm:px-7 sm:pb-[72px] sm:pt-[110px] lg:gap-12 lg:pt-[100px]">
    <div class="mx-auto flex w-full max-w-[680px] flex-col items-center z-100">
      <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(167,139,250,0.22)] bg-[rgba(109,40,217,0.1)] px-[15px] py-1.5 text-[11.5px] font-medium tracking-[0.6px] text-[rgba(238,232,255,0.86)]">
        <span class="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_8px_rgba(167,139,250,0.82)]"></span>
        Page Not Found
      </div>

      <h1 class="mb-[18px] text-[clamp(38px,5.1vw,68px)] font-extrabold leading-[1.06] tracking-[-1.8px] text-neutral-100">
        404<br />
        <span class="bg-linear-to-r from-[#B39CFF] to-[#C596FF] bg-clip-text text-transparent">Nothing here.</span>
      </h1>

      <p class="mb-[34px] max-w-[500px] font-sans text-[14.5px] leading-[1.72] text-[rgba(255,255,255,0.52)] sm:text-[15.5px]">
        The page you are looking for does not exist or has been moved.
      </p>

      <a
        href="/"
        class="inline-flex w-full flex-wrap items-center justify-center gap-[13px] rounded-[14px] bg-neutral-900 px-8 py-[15px] font-sans text-[15px] font-semibold text-white no-underline transition-colors duration-300 hover:bg-primary sm:w-auto"
      >
        Back to Home
      </a>

    </div>
  </div>
</section>
