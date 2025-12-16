<script>
    import { createEventDispatcher } from 'svelte';
    import { fade, scale } from 'svelte/transition';
    import SubscriptionService from '$lib/features/subscriptions/SubscriptionService';

    export let planName = '';
    export let isOpen = false;

    const dispatch = createEventDispatcher();
    const subscriptionService = new SubscriptionService();

    let selectedProvider = '';
    let selectedMethod = 'card';
    let isProcessing = false;
    let error = '';

    // Reset selections when modal opens
   // @ts-ignore
     $: if (isOpen) {
        selectedProvider = '';
        selectedMethod = 'card';
        isProcessing = false;
        error = '';
    }

    function closeModal() {
        isOpen = false;
        dispatch('close');
    }

    async function handleSubscribe() {
        if (!selectedProvider) {
            error = 'Please select a payment provider';
            return;
        }

        isProcessing = true;
        error = '';

        try {
            const response = await subscriptionService.subscribeIntent(
                "subscription_" + planName.toLowerCase(),
                selectedProvider,
                selectedMethod
            );

            console.log('Payment intent created:', response);

            // Close this modal and dispatch event with payment data
            dispatch('paymentCreated', {
                provider: selectedProvider,
                paymentUrl: response.paymentUrl,
                expiresAt: response.expiresAt
            });

            closeModal();
        } catch (err) {
            console.error('Subscription error:', err);
            // @ts-ignore
            error = err.response?.data?.message || 'Failed to create payment. Please try again.';
            isProcessing = false;
        }
    }
</script>

{#if isOpen}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        transition:fade={{ duration: 200 }}
        on:click={closeModal}
        on:keydown={(e) => e.key === 'Escape' && closeModal()}
    >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <!-- Modal -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div
            class="relative bg-linear-to-br from-[#0A0A23] to-[#1A1A3A] rounded-2xl shadow-2xl max-w-md w-full border border-white/10"
            transition:scale={{ duration: 200, start: 0.95 }}
            on:click|stopPropagation
        >
            <!-- Close Button -->
            <button
                on:click={closeModal}
                class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Modal Content -->
            <div class="p-8">
                <h2 class="text-3xl font-bold text-white mb-2">
                    Subscribe to {planName}
                </h2>
                <p class="text-gray-400 mb-6">
                    Choose your payment method to continue
                </p>

                <!-- Payment Provider Selection -->
                <div class="mb-6">
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label class="block text-sm font-semibold text-gray-300 mb-3">
                        Payment Provider
                    </label>
                    <div class="grid grid-cols-2 gap-3">
                        <button
                            on:click={() => selectedProvider = 'paymob'}
                            class="p-4 rounded-xl border-2 transition-all {selectedProvider === 'paymob' 
                                ? 'border-purple-500 bg-purple-500/10' 
                                : 'border-white/10 hover:border-white/20'}"
                        >
                            <div class="text-white font-bold mb-1">Paymob</div>
                            <div class="text-xs text-gray-400">EGP Payment</div>
                        </button>
                        <button
                            on:click={() => selectedProvider = 'stripe'}
                            class="p-4 rounded-xl border-2 transition-all {selectedProvider === 'stripe' 
                                ? 'border-purple-500 bg-purple-500/10' 
                                : 'border-white/10 hover:border-white/20'}"
                        >
                            <div class="text-white font-bold mb-1">Stripe</div>
                            <div class="text-xs text-gray-400">USD Payment</div>
                        </button>
                    </div>
                </div>

                <!-- Payment Method Selection -->
                <div class="mb-6">
                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <label class="block text-sm font-semibold text-gray-300 mb-3">
                        Payment Method
                    </label>
                    <div class="p-4 rounded-xl border-2 border-purple-500 bg-purple-500/10">
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            <span class="text-white font-bold">Credit/Debit Card</span>
                        </div>
                    </div>
                </div>

                <!-- Error Message -->
                {#if error}
                    <div class="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
                        <p class="text-red-400 text-sm">{error}</p>
                    </div>
                {/if}

                <!-- Action Buttons -->
                <div class="flex gap-3">
                    <button
                        on:click={closeModal}
                        class="flex-1 py-3 rounded-xl font-bold text-gray-300 border border-white/10 hover:border-white/20 transition-all"
                        disabled={isProcessing}
                    >
                        Cancel
                    </button>
                    <button
                        on:click={handleSubscribe}
                        disabled={!selectedProvider || isProcessing}
                        class="flex-1 py-3 rounded-xl font-bold text-white bg-linear-to-r from-purple-500 to-indigo-600 hover:shadow-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isProcessing ? 'Processing...' : 'Continue'}
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}
