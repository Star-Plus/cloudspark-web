<script>
    import Downloads from "$lib/sections/Downloads.svelte";
import Hero from "$lib/sections/Hero.svelte";
    import Metrics from "$lib/sections/Metrics.svelte";
    import Quote from "$lib/sections/Quote.svelte";
    import Testimonials from "$lib/sections/Testimonials.svelte";

</script>
<svelte:head>
	<title>CloudSpark - Version Control System for Digital Artists</title>
	<meta
		name="description"
		content="Optimize your digital art with CloudSpark"
	/>
</svelte:head>

<Hero />

<Metrics />

<Quote />

<Testimonials />

<Downloads />

<!-- Experience CTA Section -->
<section
	class="w-full py-32 relative z-20 flex flex-col items-center justify-center text-center"
>
	<h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
		Still deciding?
	</h2>
	<a
		href="/pricing"
		class="relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-200 bg-[#8B5CF6] rounded-full hover:bg-[#7C3AED] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] group overflow-hidden"
	>
		<span class="relative z-10">View Plans</span>
		<div
			class="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-[#6D28D9]"
		></div>
	</a>
</section>

<!-- Bottom decorative blur -->
<div
	class="fixed bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#050520] to-transparent pointer-events-none z-50"
></div>

