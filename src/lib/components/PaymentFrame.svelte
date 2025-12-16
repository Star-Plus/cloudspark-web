<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    // @ts-ignore
    import { onMount, afterUpdate } from 'svelte';

    export let provider = '';
    export let paymentUrl = '';
    export let isOpen = false;

    const dispatch = createEventDispatcher();
    let stripeLoaded = false;
    // @ts-ignore
    let stripe: any = null;
    // @ts-ignore
    let elements: any = null;
    let formError = '';

    onMount(() => {
        // Load Stripe.js if not already loaded
        // @ts-ignore
        if (!window.Stripe) {
            const script = document.createElement('script');
            script.src = 'https://js.stripe.com/v3/';
            script.async = true;
            script.onload = () => {
                stripeLoaded = true;
                console.log('Stripe.js loaded');
            };
            document.head.appendChild(script);
        } else {
            stripeLoaded = true;
        }
    });

    // Re-initialize Stripe when modal opens with Stripe provider
   // @ts-ignore
     $: if (isOpen && provider === 'stripe' && paymentUrl && stripeLoaded) {
        setTimeout(() => {
            initializeStripe();
        }, 100);
    }

    function initializeStripe() {
        console.log('Initializing Stripe with clientSecret:', paymentUrl);
        
        // @ts-ignore
        if (!window.Stripe) {
            console.error('Stripe.js not loaded');
            formError = 'Payment system is loading. Please wait a moment.';
            return;
        }

        try {
            // @ts-ignore
            stripe = window.Stripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
            
            if (!stripe) {
                console.error('Failed to initialize Stripe');
                formError = 'Failed to initialize payment system.';
                return;
            }

            // Destroy previous elements if they exist
            if (elements) {
                elements = null;
            }

            elements = stripe.elements({
                clientSecret: paymentUrl
            });

            // Mount payment element
            const paymentElement = elements.create('payment');
            const container = document.getElementById('stripe-payment-element');
            
            if (container) {
                container.innerHTML = ''; // Clear previous content
                paymentElement.mount(container);
                formError = '';
                console.log('Payment element mounted successfully');
            } else {
                console.error('Payment element container not found');
                formError = 'Payment form not ready. Please try again.';
            }
        } catch (error) {
            console.error('Stripe initialization error:', error);
            formError = 'Failed to load payment form. Please try again.';
        }
    }

    // @ts-ignore
    async function handleSubmit(event: any) {
        event.preventDefault();
        formError = '';

        if (!stripe || !elements) {
            formError = 'Payment system not ready. Please refresh and try again.';
            return;
        }

        try {
            console.log('Confirming payment...');
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/payment/success`,
                },
            });

            if (error) {
                console.error('Payment confirmation error:', error);
                formError = error.message || 'Payment failed. Please try again.';
            } else if (paymentIntent) {
                console.log('Payment successful:', paymentIntent);
                // Payment will redirect automatically
            }
        } catch (error) {
            console.error('Submit error:', error);
            formError = 'An error occurred. Please try again.';
        }
    }

    function closeFrame() {
        formError = '';
        stripe = null;
        elements = null;
        isOpen = false;
        dispatch('close');
    }
</script>

{#if isOpen}
    <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        transition:fade={{ duration: 200 }}
    >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <!-- Frame Container -->
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full h-[80vh] flex flex-col">
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b">
                <h3 class="text-xl font-bold text-gray-900">
                    Complete Your Payment
                </h3>
                <button
                    on:click={closeFrame}
                    class="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Payment Content -->
            <div class="flex-1 overflow-auto">
                {#if provider === 'paymob'}
                    <!-- Paymob iFrame -->
                    <iframe
                        src={paymentUrl}
                        title="Paymob Payment"
                        class="w-full h-full border-0"
                        allow="payment"
                    ></iframe>
                {:else if provider === 'stripe'}
                    <!-- Stripe Payment Element -->
                    <div class="p-8">
                        <div class="max-w-lg mx-auto">
                            {#if !stripeLoaded}
                                <div class="text-center py-8">
                                    <p class="text-gray-600">Loading payment system...</p>
                                </div>
                            {:else}
                                <form on:submit={handleSubmit} id="stripe-payment-form">
                                    <div id="stripe-payment-element" class="mb-6">
                                        <!-- Stripe Elements will be inserted here -->
                                    </div>
                                    
                                    {#if formError}
                                        <div class="mb-4 p-3 bg-red-100 border border-red-400 rounded text-red-700 text-sm">
                                            {formError}
                                        </div>
                                    {/if}
                                    
                                    <button
                                        type="submit"
                                        class="w-full py-3 rounded-xl font-bold text-white bg-linear-to-r from-purple-500 to-indigo-600 hover:shadow-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={!stripeLoaded || !stripe}
                                    >
                                        Pay Now
                                    </button>
                                </form>
                            {/if}
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}
