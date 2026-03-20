<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  export let isActive = false;

  const values = [
    {
      title: "Sync the Edit, Not the File",
      description: "Only the exact changes are synced, so your team moves faster without re-uploading full assets.",
      image: "files.png"
    },
    {
      title: "AI-Optimized Storage",
      description: "Context-aware compression stores edit intent, not redundant pixels, cutting project size and cloud cost.",
      image: "ai.png"
    },
    {
      title: "Low bandwidth? No problem.",
      description: "Work offline and sync later. CloudSpark keeps your history safe and up-to-date, even when your connection isn't.",
      image: "internet.png"
    }
  ];

  let carouselEl: HTMLDivElement | null = null;
  let currentIndex = 0;
  const totalSlides = values.length;
  let autoScrollTimer: ReturnType<typeof setInterval> | null = null;

  function getSlides() {
    if (!carouselEl) return [];
    return Array.from(carouselEl.querySelectorAll("article")) as HTMLElement[];
  }

  function scrollToIndex(index: number) {
    if (!carouselEl) return;
    const slides = getSlides();
    if (!slides.length) return;

    const normalized = (index + slides.length) % slides.length;
    const targetSlide = slides[normalized];
    carouselEl.scrollTo({ left: targetSlide.offsetLeft, behavior: "smooth" });
    currentIndex = normalized;
  }

  function goNext() {
    scrollToIndex(currentIndex + 1);
  }

  function goPrev() {
    scrollToIndex(currentIndex - 1);
  }

  function updateCurrentIndexFromScroll() {
    if (!carouselEl) return;
    const slides = getSlides();
    if (!slides.length) return;

    const scrollLeft = carouselEl.scrollLeft;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    currentIndex = nearestIndex;
  }

  function startAutoScroll() {
    if (autoScrollTimer) clearInterval(autoScrollTimer);
    autoScrollTimer = setInterval(() => {
      goNext();
    }, 5000);
  }

  onMount(() => {
    startAutoScroll();
  });

  onDestroy(() => {
    if (autoScrollTimer) clearInterval(autoScrollTimer);
  });

</script>

<section id="why-cloudspark" class={`section-anim relative z-30 mx-auto w-full h-screen overflow-hidden px-5 pb-20 flex flex-col justify-center items-center sm:px-7 lg:px-10 ${isActive ? 'is-active' : ''}`}>

  <div class="reveal delay-1 relative z-20 mx-auto mb-10 text-center">

    <h2 class="mb-4 text-[clamp(30px,4.3vw,52px)] font-extrabold leading-[1.08] tracking-[-1.4px] text-neutral-100">
      Built to keep creative teams in flow.
    </h2>
    <p class="mx-auto max-w-[620px] text-[14.5px] leading-[1.72] text-[rgba(255,255,255,0.52)] sm:text-[15.5px]">
      Faster sync, smarter storage, automatic history, and zero technical friction.
    </p>
  </div>

  <div class="reveal delay-2 carousel relative z-20 mx-auto w-full max-w-[860px] overflow-x-auto pb-2" bind:this={carouselEl} on:scroll={updateCurrentIndexFromScroll}>
    <div class="flex snap-x snap-mandatory gap-4">
      {#each values as value}
        <article class="min-w-full flex justify-center flex-col items-center snap-center px-1">
          <img
            src={value.image}
            alt={value.title}
            class="h-[170px] object-cover sm:h-[330px]"
            loading="lazy"
          />
          <h3 class="mt-5 text-[22px] font-semibold leading-tight text-white">{value.title}</h3>
          <p class="mt-2 text-[14px] leading-[1.72] text-[rgba(255,255,255,0.6)]">{value.description}</p>
        </article>
      {/each}
    </div>
  </div>

  <div class="reveal delay-3 relative z-20 mt-5 flex items-center justify-center gap-3">
    <button
      type="button"
      class="rounded-full bg-[rgba(255,255,255,0.12)] px-3 py-1.5 text-[12px] font-medium text-white transition-colors hover:bg-[rgba(255,255,255,0.2)]"
      on:click={goPrev}
      aria-label="Previous value"
    >
      Prev
    </button>

    <div class="flex items-center gap-2" aria-label="Value indicators">
      {#each Array(totalSlides) as _, index}
        <button
          type="button"
          class={`h-2.5 w-2.5 rounded-full transition-all ${currentIndex === index ? "bg-[#c4b5fd]" : "bg-[rgba(255,255,255,0.3)]"}`}
          on:click={() => scrollToIndex(index)}
          aria-label={`Go to value ${index + 1}`}
        ></button>
      {/each}
    </div>

    <button
      type="button"
      class="rounded-full bg-[rgba(255,255,255,0.12)] px-3 py-1.5 text-[12px] font-medium text-white transition-colors hover:bg-[rgba(255,255,255,0.2)]"
      on:click={goNext}
      aria-label="Next value"
    >
      Next
    </button>
  </div>

  <p class="reveal delay-4 relative z-20 mt-2 text-[12px] text-[rgba(255,255,255,0.48)]">Auto-scroll every 5s</p>
</section>

<style>
  .section-anim .reveal {
    opacity: 0;
    filter: blur(5px);
    transform: translate3d(0, 38px, 0) scale(0.985);
    transition: transform 620ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 520ms ease, filter 520ms ease;
  }

  .section-anim.is-active .reveal {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 0, 0) scale(1);
  }

  .delay-1 { transition-delay: 40ms; }
  .delay-2 { transition-delay: 140ms; }
  .delay-3 { transition-delay: 240ms; }
  .delay-4 { transition-delay: 320ms; }

  .carousel {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }

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
