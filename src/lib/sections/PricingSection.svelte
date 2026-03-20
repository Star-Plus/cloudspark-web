<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";
    import PaymentModal from "$lib/components/PaymentModal.svelte";
    import PaymentFrame from "$lib/components/PaymentFrame.svelte";
    import GrainNoiseBackground from "$lib/components/GrainNoiseBackground.svelte";

    export let renderBackground = false;
    export let isActive = false;
    let isSmallWidth = false;

    let isPaymentModalOpen = false;
    let selectedPlan: { name: any } | null = null;

    let isPaymentFrameOpen = false;
    let paymentProvider = '';
    let paymentUrl = '';

    function getFlyParams(delay: number) {
        if (isSmallWidth) {
            return { y: 0, duration: 0, delay: 0 };
        }

        return { y: 50, duration: 800, delay };
    }

    function handleSubscribeClick(plan: any) {
        if (plan.custom) {
            window.location.href = 'mailto:sales@cloudspark.com';
            return;
        }

        selectedPlan = plan;
        isPaymentModalOpen = true;
    }

    function handlePaymentCreated(event: any) {
        const { provider, paymentUrl: url } = event.detail;
        paymentProvider = provider;
        paymentUrl = url;
        isPaymentFrameOpen = true;
    }

    function handlePaymentFrameClose() {
        isPaymentFrameOpen = false;
        paymentProvider = '';
        paymentUrl = '';
    }

    function getButtonClass(plan: any) {
        if (plan.custom) return "bg-emerald-700";
        if (plan.popular) return "bg-[#7c3aed]";
        if (plan.name === "Star") return "bg-[#3b82f6]";
        return "bg-rose-600";
    }

    const plans = [
        {
            name: "Basic",
            seats: "3",
            storage: "10 GB",
            dynamicStorage: "Not available",
            priceEGP: 49,
            priceUSD: 1.99,
            delay: 0,
        },
        {
            name: "Pro",
            seats: "6",
            storage: "250 GB",
            dynamicStorage: "1.25 EGP / 0.05 USD (per GB)",
            priceEGP: 280,
            priceUSD: 7.99,
            popular: true,
            delay: 100,
        },
        {
            name: "Star",
            seats: "15",
            storage: "1 TB",
            dynamicStorage: "0.5 EGP / 0.05 USD (per GB)",
            priceEGP: 970,
            priceUSD: 32.99,
            delay: 200,
        },
        {
            name: "Enterprise",
            seats: "Unspecified",
            storage: "Unspecified",
            dynamicStorage: "Yes",
            custom: true,
            delay: 300,
        },
    ];

    onMount(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const update = () => {
            isSmallWidth = mediaQuery.matches;
        };

        update();
        mediaQuery.addEventListener("change", update);

        return () => {
            mediaQuery.removeEventListener("change", update);
        };
    });
</script>

<section id="pricing" class={`section-anim relative w-full overflow-hidden py-24 ${isActive ? 'is-active' : ''}`}>
    <div class="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_22%_18%,rgba(167,139,250,0.16),transparent_28%),radial-gradient(circle_at_80%_78%,rgba(96,165,250,0.14),transparent_42%),linear-gradient(160deg,#08080d21_20%,#0b0b0f12_48%,#11112277_70%)]"></div>
    <div class="bg-orb bg-orb-left pointer-events-none absolute -left-24 bottom-[-180px] z-0 h-[520px] w-[520px] rounded-full bg-[#4f46e533] blur-3xl"></div>
    <div class="bg-orb bg-orb-right pointer-events-none absolute right-[-140px] top-[-150px] z-0 h-[420px] w-[420px] rounded-full bg-[#1d4ed833] blur-3xl"></div>

    <div>
        {#if renderBackground}
            <GrainNoiseBackground speed={1.5} />
        {/if}
    </div>

    <div class="relative z-30 px-4 sm:px-7 lg:px-10">
        <div class="reveal delay-1 mx-auto mb-14 max-w-[760px] text-center" in:fade={{ duration: 800 }}>
            <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(167,139,250,0.22)] bg-[rgba(109,40,217,0.1)] px-[15px] py-1.5 text-[11.5px] font-medium tracking-[0.6px] text-[rgba(238,232,255,0.86)]">
                <span class="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_8px_rgba(167,139,250,0.82)]"></span>
                Pricing Plans
            </div>

            <h2 class="mb-[18px] text-[clamp(38px,5.1vw,68px)] font-extrabold leading-[1.06] tracking-[-1.8px] text-neutral-100">
                Choose your <span class="bg-linear-to-r from-[#B39CFF] to-[#C596FF] bg-clip-text text-transparent">arsenal.</span>
            </h2>
            <p class="mx-auto max-w-[560px] font-sans text-[14.5px] leading-[1.72] text-[rgba(255,255,255,0.52)] sm:text-[15.5px]">
                Scale your creative workflow with the power you need.
            </p>
        </div>

        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {#each plans as plan}
                <article
                    class={`reveal pricing-card delay-${Math.floor(plan.delay / 100) + 2} group relative overflow-hidden rounded-md border border-white/10 bg-[rgba(10,10,24,0.22)] p-6 transition-all duration-300 hover:border-white/25 hover:bg-tertiary`}
                    in:fly={getFlyParams(plan.delay)}
                >
                    {#if plan.popular}
                        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(167,139,250,0.24),transparent_55%)]"></div>
                        <span class="absolute right-0 top-0 rounded-bl-xl bg-[#6d28d9] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Best Value</span>
                    {/if}

                    <div class="relative z-10 flex h-full flex-col">
                        <h3 class="mb-4 text-[26px] font-bold text-white">{plan.name}</h3>

                        {#if plan.custom}
                            <div class="mb-8">
                                <span class="text-3xl font-bold text-white">Contact Us</span>
                            </div>
                        {:else}
                            <div class="mb-1">
                                <span class="text-[42px] font-bold leading-none text-white">{plan.priceEGP}</span>
                                <span class="ml-1 text-sm font-bold text-[rgba(255,255,255,0.56)]">EGP</span>
                                <span class="ml-1 text-[rgba(255,255,255,0.36)]">/mo</span>
                            </div>
                            <div class="mb-8 text-[15px] text-[rgba(255,255,255,0.5)]">${plan.priceUSD} USD</div>
                        {/if}

                        <div class="mb-7 h-px w-full bg-white/10"></div>

                        <div class="mb-8 grow space-y-4">
                            <div class="flex items-center justify-between text-[rgba(255,255,255,0.72)]">
                                <span class="text-[11px] uppercase tracking-[0.9px] text-[rgba(255,255,255,0.45)]">Seats</span>
                                <span class="font-semibold text-white">{plan.seats}</span>
                            </div>
                            <div class="flex items-center justify-between text-[rgba(255,255,255,0.72)]">
                                <span class="text-[11px] uppercase tracking-[0.9px] text-[rgba(255,255,255,0.45)]">Storage</span>
                                <span class="font-semibold text-white">{plan.storage}</span>
                            </div>
                            <div class="pt-3">
                                <span class="mb-1 block text-[11px] uppercase tracking-[0.9px] text-[rgba(255,255,255,0.45)]">Extended Storage</span>
                                <span class="block text-sm leading-relaxed text-[rgba(255,255,255,0.68)]">{plan.dynamicStorage}</span>
                            </div>
                        </div>

                        <button
                            on:click={() => handleSubscribeClick(plan)}
                            class={`w-full cursor-pointer rounded-sm px-6 py-3.5 font-sans text-[15px] font-semibold text-white transition-colors duration-300 active:scale-[0.99] bg-neutral-950 hover:${getButtonClass(plan)}`}
                        >
                            {#if plan.custom}
                                Contact Sales
                            {:else}
                                Subscribe
                            {/if}
                        </button>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .section-anim .reveal {
        opacity: 0;
        filter: blur(6px);
        transform: translate3d(0, 42px, 0) scale(0.985);
        transition: transform 650ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 560ms ease, filter 560ms ease;
    }

    .section-anim.is-active .reveal {
        opacity: 1;
        filter: blur(0);
        transform: translate3d(0, 0, 0) scale(1);
    }

    .delay-1 { transition-delay: 60ms; }
    .delay-2 { transition-delay: 160ms; }
    .delay-3 { transition-delay: 240ms; }
    .delay-4 { transition-delay: 320ms; }
    .delay-5 { transition-delay: 400ms; }

    @media (max-width: 768px) {
        .section-anim .reveal {
            filter: none;
            transform: translate3d(0, 16px, 0);
            transition: transform 320ms ease, opacity 280ms ease;
        }

        .bg-orb {
            filter: blur(48px);
            opacity: 0.45;
        }

        .bg-orb-right {
            display: none;
        }
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

<PaymentModal
    bind:isOpen={isPaymentModalOpen}
    planName={selectedPlan?.name || ''}
    on:paymentCreated={handlePaymentCreated}
    on:close={() => isPaymentModalOpen = false}
/>

<PaymentFrame
    bind:isOpen={isPaymentFrameOpen}
    provider={paymentProvider}
    paymentUrl={paymentUrl}
    on:close={handlePaymentFrameClose}
/>
