<script lang="ts">
  export let isActive = false;

  let active = 0;

  const personas = [
    {
      kicker: "Independent Creators",
      title: "Keep creating, not uploading.",
      description:
        "Protect your bandwidth and storage. Effortlessly organize your versions, link external assets without duplicating them, and share lightweight previews with clients instantly."
    },
    {
      kicker: "Studios & Agencies",
      title: "End the upload hell.",
      description:
        "Multiple artists can edit, share, and merge work on the same project without overriding each other or duplicating massive libraries of shared assets."
    },
    {
      kicker: "Enterprise & Tech (API)",
      title: "Embed smart compression at platform scale.",
      description:
        "Integrate our delta-compression engine into your SaaS, cloud editor, or DAM to drastically reduce internal hosting and egress costs."
    }
  ];
</script>

<section class={`section-anim relative z-30 mx-auto w-full max-w-[1240px] h-screen overflow-hidden px-5 pb-28 pt-14 sm:px-7 lg:px-10 ${isActive ? 'is-active' : ''}`}>

  <div class="reveal delay-1 mx-auto mb-12 max-w-[820px] text-center">
    <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-[rgba(109,40,217,0.18)] px-[15px] py-1.5 text-[11.5px] font-medium tracking-[0.6px] text-[rgba(238,232,255,0.9)] shadow-[0_0_26px_rgba(124,58,237,0.18)]">
      <span class="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_8px_rgba(167,139,250,0.82)]"></span>
      Built for Every Scale of Creativity
    </div>

    <h2 class="mb-4 text-[clamp(32px,4.9vw,58px)] font-extrabold leading-[1.04] tracking-[-1.6px] text-neutral-100">
      Built for Every <span class="bg-linear-to-r from-[#B39CFF] to-[#8ED2FF] bg-clip-text text-transparent">Scale of Creativity</span>
    </h2>
    <p class="mx-auto max-w-[690px] text-[14.5px] leading-[1.74] text-[rgba(255,255,255,0.54)] sm:text-[15.5px]">
      One engine for solo makers, growing studios, and platform teams shipping at enterprise scale.
    </p>
  </div>

  <div class="mx-auto flex w-full max-w-[980px] flex-col gap-8">
    <div class="reveal delay-2 relative">
      <div class="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Scale personas">
        {#each personas as persona, index}
          <button
            type="button"
            role="tab"
            aria-selected={active === index}
            on:click={() => (active = index)}
            class={`group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-left transition-colors ${
              active === index ? "bg-[rgba(167,139,250,0.18)] text-white" : "text-[rgba(255,255,255,0.58)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white"
            }`}
          >
            <span class="text-[15px] font-medium tracking-[0.2px]">{persona.kicker}</span>
            <span class={`h-2 w-2 rounded-full ${active === index ? "bg-[#a78bfa]" : "bg-[rgba(255,255,255,0.22)] group-hover:bg-[rgba(255,255,255,0.5)]"}`}></span>
          </button>
        {/each}
      </div>
    </div>

    <div class="reveal delay-3 relative min-h-[260px] text-center">
      <div class="pointer-events-none absolute -top-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[#7c3aed2e] blur-3xl"></div>

      <div class="relative" role="tabpanel" aria-live="polite">
        <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(167,139,250,0.16)] text-[#ddd6fe]">
          {#if active === 0}
            <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V5a4 4 0 1 1 8 0v2m-9 0h10a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1Z" />
            </svg>
          {:else if active === 1}
            <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h10M7 16h6" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" />
            </svg>
          {:else}
            <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h8m-8 4h5" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="m12 5 2-2m-4 0 2 2" />
            </svg>
          {/if}
        </div>

        <p class="text-[12px] uppercase tracking-[1.1px] text-[rgba(196,181,253,0.84)]">For {personas[active].kicker}</p>
        <h3 class="mt-2 text-[clamp(28px,3.8vw,48px)] font-bold leading-[1.08] tracking-[-1.1px] text-white">{personas[active].title}</h3>
        <p class="mx-auto mt-4 max-w-[780px] text-[15px] leading-[1.84] text-[rgba(255,255,255,0.66)]">{personas[active].description}</p>
      </div>
    </div>
  </div>
</section>

<style>
  .section-anim .reveal {
    opacity: 0;
    filter: blur(5px);
    transform: translate3d(0, 40px, 0) scale(0.985);
    transition: transform 620ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 520ms ease, filter 520ms ease;
  }

  .section-anim.is-active .reveal {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 0, 0) scale(1);
  }

  .delay-1 { transition-delay: 50ms; }
  .delay-2 { transition-delay: 150ms; }
  .delay-3 { transition-delay: 250ms; }

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
