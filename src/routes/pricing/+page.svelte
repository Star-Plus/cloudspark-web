<script>
    import { fade, fly } from "svelte/transition";
    import { onMount } from "svelte";

    let mounted = false;
    onMount(() => (mounted = true));

    const plans = [
        {
            name: "Basic",
            seats: "3",
            storage: "10 GB",
            dynamicStorage: "Not available",
            priceEGP: 49,
            priceUSD: 1.99,
            color: "from-gray-500 to-gray-700",
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
            color: "from-purple-500 to-indigo-600",
            delay: 100,
        },
        {
            name: "Star",
            seats: "15",
            storage: "1 TB",
            dynamicStorage: "0.5 EGP / 0.05 USD (per GB)",
            priceEGP: 970,
            priceUSD: 32.99,
            color: "from-yellow-400 to-orange-500",
            delay: 200,
        },
        {
            name: "Enterprise",
            seats: "Unspecified",
            storage: "Unspecified",
            dynamicStorage: "Yes",
            custom: true,
            color: "from-blue-500 to-cyan-500",
            delay: 300,
        },
    ];
</script>

<div class="relative min-h-screen pt-32 pb-20 px-4 md:px-8">
    <!-- Header -->
    <div class="text-center mb-16 relative z-10" in:fade={{ duration: 800 }}>
        <h1
            class="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
        >
            Choose your <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                >Arsenal</span
            >.
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Scale your creative workflow with the power you need.
        </p>
    </div>

    <!-- Pricing Grid -->
    <div
        class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
    >
        {#each plans as plan}
            <div
                class="relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-white/30 transition-all duration-300"
                in:fly={{ y: 50, duration: 800, delay: plan.delay }}
            >
                <!-- Glowing Border Effect for Popular Plan -->
                {#if plan.popular}
                    <div
                        class="absolute inset-0 rounded-3xl bg-purple-500/20 blur-xl group-hover:bg-purple-500/40 transition-all duration-500"
                    ></div>
                {/if}

                <div
                    class="relative h-full bg-[#0A0A23]/80 backdrop-blur-xl rounded-3xl p-8 flex flex-col border border-white/5 group-hover:border-white/20 transition-all overflow-hidden"
                >
                    <!-- Popular Badge -->
                    {#if plan.popular}
                        <div
                            class="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider"
                        >
                            Best Value
                        </div>
                    {/if}

                    <!-- Plan Name -->
                    <h3 class="text-2xl font-bold text-white mb-4">
                        {plan.name}
                    </h3>

                    <!-- Pricing -->
                    {#if plan.custom}
                        <div class="mb-8">
                            <span class="text-3xl font-bold text-white"
                                >Contact Us</span
                            >
                        </div>
                    {:else}
                        <div class="mb-2">
                            <span class="text-4xl font-bold text-white"
                                >{plan.priceEGP}</span
                            >
                            <span class="text-sm text-gray-400 font-bold">
                                EGP</span
                            >
                            <span class="text-gray-500">/mo</span>
                        </div>
                        <div class="mb-8 text-lg text-gray-400">
                            ${plan.priceUSD} <span class="text-sm">USD</span>
                        </div>
                    {/if}

                    <!-- Divider -->
                    <div class="h-px w-full bg-white/10 mb-8"></div>

                    <!-- Features -->
                    <div class="flex-grow space-y-4 mb-8">
                        <div
                            class="flex justify-between items-center text-gray-300"
                        >
                            <span
                                class="text-sm text-gray-500 uppercase tracking-wide"
                                >Seats</span
                            >
                            <span class="font-bold">{plan.seats}</span>
                        </div>
                        <div
                            class="flex justify-between items-center text-gray-300"
                        >
                            <span
                                class="text-sm text-gray-500 uppercase tracking-wide"
                                >Storage</span
                            >
                            <span class="font-bold">{plan.storage}</span>
                        </div>

                        <!-- Dynamic Storage -->
                        <div class="pt-4">
                            <span
                                class="block text-sm text-gray-500 uppercase tracking-wide mb-1"
                                >Dynamic Storage</span
                            >
                            <span
                                class="block text-sm text-gray-300 font-medium leading-relaxed"
                            >
                                {plan.dynamicStorage}
                            </span>
                        </div>
                    </div>

                    <!-- CTA -->
                    <button
                        class="w-full py-4 rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r {plan.color} hover:shadow-lg hover:brightness-110 active:scale-95"
                    >
                        {#if plan.custom}
                            Contact Sales
                        {:else}
                            Subscribe
                        {/if}
                    </button>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    /* Add any specific style overrides if needed */
</style>
