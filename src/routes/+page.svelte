<script>
	import { onMount } from "svelte";
	import Hero from "$lib/sections/Hero.svelte";
	import Features from "$lib/sections/Features.svelte";
	import Showcase from "$lib/sections/Showcase.svelte";
	import Pricing from "$lib/sections/Pricing.svelte";
	import Download from "$lib/sections/Download.svelte";

	let currentSection = 0;
	const totalSections = 5;
	let isScrolling = false;
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let scrollTimeout;
	let touchStartX = 0;
	let touchStartY = 0;
	let touchEndX = 0;
	let touchEndY = 0;
	let startScrollTop = 0;
	let startScrollHeight = 0;
	let startClientHeight = 0;

	onMount(() => {
		document.body.classList.add('home-lock');
		document.documentElement.classList.add('home-lock');

		// ── Intersection Observer ──
		const observerOptions = { threshold: 0.1 };
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					// @ts-ignore
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

		/** @param {WheelEvent} e */
		const handleWheel = (e) => {
			if (isScrolling) return;

			// Check if the current section has scrollable content and we are not at the top/bottom
			const currentSectionEl = sections[currentSection];
			if (currentSectionEl && currentSectionEl.scrollHeight > currentSectionEl.clientHeight) {
				const isAtTop = currentSectionEl.scrollTop <= 1;
				const isAtBottom = Math.ceil(currentSectionEl.scrollTop + currentSectionEl.clientHeight) >= currentSectionEl.scrollHeight - 1;

				if (e.deltaY > 0 && !isAtBottom) return; // Allow natural scrolling down
				if (e.deltaY < 0 && !isAtTop) return;    // Allow natural scrolling up
			}

			e.preventDefault();
			if (Math.abs(e.deltaY) < 20) return; // Ignore micro-scrolls

			if (e.deltaY > 0 && currentSection < totalSections - 1) {
				goToSection(currentSection + 1);
			} else if (e.deltaY < 0 && currentSection > 0) {
				goToSection(currentSection - 1);
			}
		};

		/** @param {KeyboardEvent} e */
		const handleKey = (e) => {
			if (isScrolling) return;
			if (e.key === 'ArrowDown' || e.key === 'PageDown') {
				if (currentSection < totalSections - 1) goToSection(currentSection + 1);
			} else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
				if (currentSection > 0) goToSection(currentSection - 1);
			}
		};

		/** @param {TouchEvent} e */
		const handleTouchStart = (e) => {
			touchStartX = e.touches[0].clientX;
			touchStartY = e.touches[0].clientY;
			
			const currentSectionEl = sections[currentSection];
			if (currentSectionEl) {
				startScrollTop = currentSectionEl.scrollTop;
				startScrollHeight = currentSectionEl.scrollHeight;
				startClientHeight = currentSectionEl.clientHeight;
			}
		};

		/** @param {TouchEvent} e */
		const handleTouchEnd = (e) => {
			touchEndX = e.changedTouches[0].clientX;
			touchEndY = e.changedTouches[0].clientY;
			handleSwipe();
		};

		const handleSwipe = () => {
			if (isScrolling) return;
			
			const deltaX = Math.abs(touchStartX - touchEndX);
			const deltaY = touchStartY - touchEndY;
			const minSwipeDistance = 50;

			// Ignore mostly horizontal swipes
			if (deltaX > Math.abs(deltaY)) return;

			// Check for internal scrolling first, evaluated using states from the START of the swipe
			const currentSectionEl = sections[currentSection];
			if (currentSectionEl && startScrollHeight > startClientHeight) {
				const isAtTop = startScrollTop <= 1;
				const isAtBottom = Math.ceil(startScrollTop + startClientHeight) >= startScrollHeight - 1;

				if (deltaY > 0 && !isAtBottom) return; // Swiping up (scrolling down)
				if (deltaY < 0 && !isAtTop) return;    // Swiping down (scrolling up)
			}

			if (Math.abs(deltaY) > minSwipeDistance) {
				if (deltaY > 0 && currentSection < totalSections - 1) {
					goToSection(currentSection + 1);
				} else if (deltaY < 0 && currentSection > 0) {
					goToSection(currentSection - 1);
				}
			}
		};

		window.addEventListener('wheel', handleWheel, { passive: false });
		window.addEventListener('keydown', handleKey);
		window.addEventListener('touchstart', handleTouchStart, { passive: true });
		window.addEventListener('touchend', handleTouchEnd, { passive: true });

		const handleNav = (/** @type {any} */ e) => {
			if (e.detail !== undefined && typeof e.detail === 'number') {
				goToSection(e.detail);
			}
		};
		window.addEventListener('nav-to-section', handleNav);

		const params = new URLSearchParams(window.location.search);
		const sec = params.get('section');
		if (sec !== null) {
			const idx = parseInt(sec, 10);
			if (!isNaN(idx) && idx >= 0 && idx < totalSections) {
				setTimeout(() => goToSection(idx), 50);
			}
		}

		return () => {
			document.body.classList.remove('home-lock');
			document.documentElement.classList.remove('home-lock');

			observer.disconnect();
			window.removeEventListener('wheel', handleWheel);
			window.removeEventListener('keydown', handleKey);
			window.removeEventListener('touchstart', handleTouchStart);
			window.removeEventListener('touchend', handleTouchEnd);
			window.removeEventListener('nav-to-section', handleNav);
		};
	});

	/** @param {number} index */
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
	<title>Euler — Version Control for Digital Artists</title>
	<meta
		name="description"
		content="Euler is a native Windows app that gives digital artists professional version control for any file type — images, video, audio, 3D assets."
	/>
</svelte:head>

<div class="viewport-mask">
	<div 
		class="page-slider" 
		style="transform: translateY(-{currentSection * 100}dvh);"
	>
		<div class="section-wrapper"><Hero /></div>
		<div class="section-wrapper"><Features /></div>
		<div class="section-wrapper"><Showcase /></div>
		<div class="section-wrapper"><Pricing /></div>
		<div class="section-wrapper"><Download /></div>
	</div>
</div>

<style>
:global(html, body) {
	margin: 0;
	padding: 0;
	background: #0B0B0F;
}

:global(html.home-lock), :global(body.home-lock) {
	overflow: hidden !important;
	height: 100% !important;
	width: 100% !important;
}

.viewport-mask {
	width: 100vw;
	height: 100dvh;
	overflow: hidden;
	position: relative;
}

.page-slider {
	height: 500dvh; /* 5 sections */
	width: 100%;
	transition: transform 0.9s cubic-bezier(0.65, 0, 0.35, 1);
	will-change: transform;
}

.section-wrapper {
	height: 100dvh;
	width: 100vw;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	overflow-y: auto; /* Allow internal scrolling if content overflows */
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;
}

/* Hide scrollbar for section-wrapper but keep functionality */
.section-wrapper::-webkit-scrollbar {
	display: none;
}
.section-wrapper {
	-ms-overflow-style: none;
	scrollbar-width: none;
}

/* ── Global Animation Utilities ── */
:global(.animate-in) {
	opacity: 0;
	transform: translateY(24px);
	transition: opacity 0.7s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
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
