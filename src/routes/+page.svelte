<script lang="ts">
	import { onMount } from "svelte";
	import Hero from "$lib/sections/Hero.svelte";
	import WorkflowValue from "$lib/sections/WorkflowValue.svelte";
	import PricingSection from "$lib/sections/PricingSection.svelte";
	import ScaleCreativitySection from "$lib/sections/ScaleCreativitySection.svelte";

	let sectionHero: HTMLElement | null = null;
	let sectionWorkflow: HTMLElement | null = null;
	let sectionScale: HTMLElement | null = null;
	let sectionPricing: HTMLElement | null = null;

	let activeStates = [true, false, false, false];

	function setSectionState(index: number, isActive: boolean) {
		if (activeStates[index] === isActive) return;
		const next = [...activeStates];
		next[index] = isActive;
		activeStates = next;
	}

	onMount(() => {
		if (!("IntersectionObserver" in window)) {
			activeStates = [true, true, true, true];
			return;
		}

		const sections = [sectionHero, sectionWorkflow, sectionScale, sectionPricing];
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					const index = sections.indexOf(entry.target as HTMLElement);
					if (index === -1) continue;
					setSectionState(index, entry.isIntersecting && entry.intersectionRatio >= 0.2);
				}
			},
			{
				root: null,
				threshold: [0.1, 0.2, 0.45],
				rootMargin: "-4% 0px -20% 0px"
			}
		);

		for (const section of sections) {
			if (section) observer.observe(section);
		}

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>CloudSpark — Version Control for Digital Artists</title>
	<link rel="icon" href="/favicon.ico" />
	<meta
		name="description"
		content="CloudSpark is a native Windows app that gives digital artists professional version control for any file type — images, video, audio, 3D assets."
	/>
</svelte:head>

<div bind:this={sectionHero}>
	<Hero isActive={activeStates[0]} />
</div>
<div bind:this={sectionWorkflow}>
	<WorkflowValue isActive={activeStates[1]} />
</div>
<div bind:this={sectionScale}>
	<ScaleCreativitySection isActive={activeStates[2]} />
</div>
<div bind:this={sectionPricing}>
	<PricingSection isActive={activeStates[3]} />
</div>
