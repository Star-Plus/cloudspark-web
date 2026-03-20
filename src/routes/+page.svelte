<script>
	import Hero from "$lib/sections/Hero.svelte";
	import Features from "$lib/sections/Features.svelte";
	import Showcase from "$lib/sections/Showcase.svelte";
	import Enterprise from "$lib/sections/Enterprise.svelte";
	import Download from "$lib/sections/Download.svelte";
</script>

<svelte:head>
	<title>CloudSpark — Version Control for Digital Artists</title>
	<meta
		name="description"
		content="CloudSpark is a native Windows app that gives digital artists professional version control for any file type — images, video, audio, 3D assets."
	/>
</svelte:head>

<div class="page-snap">
	<div class="snap-section"><Hero /></div>
	<div class="snap-section"><Features /></div>
	<div class="snap-section"><Showcase /></div>
	<div class="snap-section"><Enterprise /></div>
	<div class="snap-section"><Download /></div>
</div>

<style>
.page-snap {
	height: 100vh;
	overflow-y: auto;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
}

.snap-section {
	scroll-snap-align: start;
	height: 100vh;
	min-height: 640px;
}
</style>
