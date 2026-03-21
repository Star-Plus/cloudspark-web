<script>
	import { onMount } from "svelte";
	import Hero from "$lib/sections/Hero.svelte";
	import Features from "$lib/sections/Features.svelte";
	import Showcase from "$lib/sections/Showcase.svelte";
	import Enterprise from "$lib/sections/Enterprise.svelte";
	import Download from "$lib/sections/Download.svelte";

	let currentSection = 0;
	const totalSections = 5;
	let isScrolling = false;
	let scrollTimeout;

	onMount(() => {
		// ── Intersection Observer ──
		const observerOptions = { threshold: 0.1 };
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
				}
			});
		}, observerOptions);

		// Observe sections as they come into view (even via transform)
		const sections = document.querySelectorAll('.section-wrapper');
		sections.forEach(s => observer.observe(s));

		// Also observe individual animated elements inside sections
		const animatedElements = document.querySelectorAll('.animate-in');
		animatedElements.forEach(el => observer.observe(el));

		const handleWheel = (e) => {
			e.preventDefault();
			if (isScrolling) return;

			if (Math.abs(e.deltaY) < 20) return; // Ignore micro-scrolls

			if (e.deltaY > 0 && currentSection < totalSections - 1) {
				goToSection(currentSection + 1);
			} else if (e.deltaY < 0 && currentSection > 0) {
				goToSection(currentSection - 1);
			}
		};

		const handleKey = (e) => {
			if (isScrolling) return;
			if (e.key === 'ArrowDown' || e.key === 'PageDown') {
				if (currentSection < totalSections - 1) goToSection(currentSection + 1);
			} else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
				if (currentSection > 0) goToSection(currentSection - 1);
			}
		};

		window.addEventListener('wheel', handleWheel, { passive: false });
		window.addEventListener('keydown', handleKey);

		return () => {
			observer.disconnect();
			window.removeEventListener('wheel', handleWheel);
			window.removeEventListener('keydown', handleKey);
		};
	});

	function goToSection(index) {
		isScrolling = true;
		currentSection = index;
		
		clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(() => {
			isScrolling = false;
		}, 1000); // Wait for transition
	}
</script>

<svelte:head>
	<title>CloudSpark — Version Control for Digital Artists</title>
	<meta
		name="description"
		content="CloudSpark is a native Windows app that gives digital artists professional version control for any file type — images, video, audio, 3D assets."
	/>
</svelte:head>

<div class="viewport-mask">
	<div 
		class="page-slider" 
		style="transform: translateY(-{currentSection * 100}vh);"
	>
		<div class="section-wrapper"><Hero /></div>
		<div class="section-wrapper"><Features /></div>
		<div class="section-wrapper"><Showcase /></div>
		<div class="section-wrapper"><Enterprise /></div>
		<div class="section-wrapper"><Download /></div>
	</div>
</div>

<style>
:global(html, body) {
	margin: 0;
	padding: 0;
	background: #0B0B0F;
	overflow: hidden;
	height: 100%;
	width: 100%;
}

.viewport-mask {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: relative;
}

.page-slider {
	height: 500vh; /* 5 sections */
	width: 100%;
	transition: transform 0.9s cubic-bezier(0.65, 0, 0.35, 1);
	will-change: transform;
}

.section-wrapper {
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}

/* ── Global Animation Utilities ── */
:global(.animate-in) {
	opacity: 0;
	transform: translateY(30px);
	transition: opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
	will-change: opacity, transform;
}

:global(.animate-in.is-visible) {
	opacity: 1;
	transform: translateY(0);
}

:global(.delay-1) { transition-delay: 0.1s; }
:global(.delay-2) { transition-delay: 0.2s; }
:global(.delay-3) { transition-delay: 0.3s; }
:global(.delay-4) { transition-delay: 0.4s; }
:global(.delay-5) { transition-delay: 0.5s; }
</style>
