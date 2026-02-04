<script>
    import Compatibility from "$lib/sections/Compatibility.svelte";
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

<div class="flex flex-col gap-20">
	<Hero />
	
	<Metrics />
	
	<Compatibility />
	
	<Quote />
	
	<Testimonials />
</div>



<!-- Bottom decorative blur -->
<div
	class="fixed bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#050520] to-transparent pointer-events-none z-50"
></div>

