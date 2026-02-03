<section
	class="flex flex-col lg:flex-row items-center justify-between w-full h-full pt-10 lg:pt-20 relative"
>
	<!-- Left Content -->
	<div class="flex-1 w-full lg:max-w-xl z-10">
		<h1
			class="text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-wide"
		>
			<span class="text-white">Cloud</span><span
				class="text-[#8B5CF6] inline-block transform -rotate-12 origin-bottom-left ml-1"
				>✦</span
			><span class="text-white">Spark</span><br />
			<span class="text-[#10B981] relative">
				compression
				<!-- Decorative semicircle mimicking the 'e' in reference -->
				<span
					class="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#10B981] rounded-full -z-10 opacity-50 blur-sm"
				></span>
			</span>
			<span class="text-[#FFF500] italic"> tool</span>
		</h1>

		<p
			class="text-gray-300 text-sm lg:text-base leading-relaxed mb-10 max-w-md"
		>
			With our advanced compression algorithms, digital artists can reduce
			file sizes without losing quality. We enable you to manage your
			portfolio and delivery process seamlessly.
		</p>

		<!-- Search / Action Bar -->
		<div
			class="bg-white p-1 rounded-md flex items-center max-w-md w-full shadow-2xl mb-4"
		>
			<div class="px-4 text-gray-400">
				<svg
					class="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
					></path></svg
				>
			</div>
			<input
				type="text"
				placeholder="Drop your files here..."
				class="flex-1 py-3 outline-none text-gray-800 placeholder-gray-400"
			/>
			<button
				class="bg-[#8B5CF6] hover:bg-violet-600 text-white font-bold py-3 px-8 rounded text-sm transition-colors uppercase"
			>
				Start Now
			</button>
		</div>
		<p class="text-gray-500 text-xs pl-2">* Free for early access users.</p>
	</div>

	<!-- Right Content - Geometric Composition -->
	<div class="flex-1 relative w-full h-[500px] hidden lg:block">
		<div
			class="geometric-art absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px]"
		>
			<!-- 
				ANIMATED GEOMETRIC SHAPES 
				Each shape has a unique class 'geo-xx' to target it with specific keyframes.
			-->

			<!-- 1. Large Violet Semi-circle (Top Right) -->
			<div
				class="geo-shape geo-1 absolute top-0 right-10 w-64 h-32 bg-[#8B5CF6] rounded-t-full z-10"
			></div>

			<!-- 2. White Quarter Circle (Top Right Corner) -->
			<div
				class="geo-shape geo-2 absolute top-0 right-0 w-24 h-24 bg-white rounded-t-full z-20 transform rotate-12"
			></div>

			<!-- 3. Red Triangle (Top Left) -->
			<div
				class="geo-shape geo-3 absolute top-10 left-10 w-0 h-0 border-l-50 border-l-transparent border-r-50 border-r-transparent border-b-80 border-b-[#EF4444] transform -rotate-45 z-20"
			></div>

			<!-- 4. Green Semi-Circle (Left) -->
			<div
				class="geo-shape geo-4 absolute top-32 left-0 w-32 h-64 bg-[#10B981] rounded-l-full z-10"
			></div>

			<!-- 5. Yellow Square (Center) -->
			<div
				class="geo-shape geo-5 absolute top-32 left-32 w-48 h-40 bg-[#FCD34D] z-0 shadow-lg"
			></div>

			<!-- 6. White Rect (Right Center) -->
			<div
				class="geo-shape geo-6 absolute top-32 left-80 w-32 h-40 bg-white z-0"
			></div>

			<!-- 7. Green Semi-Circle (Right) -->
			<div
				class="geo-shape geo-7 absolute top-32 -right-5 w-32 h-64 bg-[#10B981] rounded-r-full z-10"
			></div>

			<!-- 8. Yellow Semi-Circle (Bottom Left) -->
			<div
				class="geo-shape geo-8 absolute bottom-10 -left-2.5 w-48 h-24 bg-[#FFF500] rounded-b-full z-20 transform -rotate-12"
			></div>

			<!-- 9. Small White Semi-Circle (Bottom Left decorative) -->
			<div
				class="geo-shape geo-9 absolute bottom-20 -left-10 w-24 h-12 bg-white rounded-t-full z-30 transform -rotate-12"
			></div>

			<!-- 10. Violet Triangle/Square (Bottom Center) -->
			<div
				class="geo-shape geo-10 absolute bottom-10 left-32 w-32 h-32 bg-[#8B5CF6] z-10 overflow-hidden"
			>
				<div
					class="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -rotate-45 origin-bottom-left"
				></div>
			</div>

			<!-- 11. Red Rectangle (Bottom Right) -->
			<div
				class="geo-shape geo-11 absolute bottom-0 left-72 w-20 h-40 bg-[#EF4444] z-30 shadow-2xl skew-y-6"
			></div>

			<!-- 12. White Quarter Circle (Bottom Right) -->
			<div
				class="geo-shape geo-12 absolute bottom-20 right-10 w-32 h-32 bg-white rounded-br-full z-10 opacity-90"
			></div>
		</div>
	</div>
</section>

<style>
	/* Custom font adjustments if needed, though Tailwind handles most */
	

	

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(var(--tw-rotate, 0deg));
		}
		50% {
			transform: translateY(-20px) rotate(var(--tw-rotate, 0deg));
		}
	}

	/* Geometric Morph Animations */
	.geo-shape {
		transition: all 0.5s ease-in-out;
		animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		animation-iteration-count: infinite;
		animation-direction: alternate;
		animation-duration: 8s; /* Slow, fluid loop */
	}

	/* Geometric Scatter Interactions */
	.geo-shape {
		transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy return */
	}

	/* 
       Interaction Logic:
       Default: Original Position
       Hover (.geometric-art:hover): Scatter to "Exploded" positions
    */

	/* 1. Violet Semi-circle */
	.geometric-art:hover .geo-1 {
		top: -20%;
		right: -20%;
		background-color: #ec4899;
		transform: scale(0.5) rotate(45deg);
		opacity: 0.8;
	}

	/* 2. White Quarter Circle */
	.geometric-art:hover .geo-2 {
		top: -15%;
		right: 10%;
		background-color: #a855f7;
		transform: rotate(180deg) scale(0.2);
		opacity: 0.6;
	}

	/* 3. Red Triangle */
	.geometric-art:hover .geo-3 {
		top: -10%;
		left: -15%;
		border-bottom-color: #6366f1;
		transform: rotate(-90deg) scale(0.8);
	}

	/* 4. Green Semi-Circle */
	.geometric-art:hover .geo-4 {
		top: 30%;
		left: -30%;
		background-color: #3b82f6;
		border-radius: 50%;
		transform: scale(0.4);
	}

	/* 5. Yellow Square -> Scatter far out */
	.geometric-art:hover .geo-5 {
		top: 110%;
		left: 110%;
		background-color: #ffffff;
		transform: scale(0.5) rotate(180deg);
	}

	/* 6. White Rect */
	.geometric-art:hover .geo-6 {
		top: 120%;
		left: 80%;
		background-color: #8b5cf6;
		transform: scale(1.5);
		opacity: 0.5;
	}

	/* 7. Green Semi-Circle */
	.geometric-art:hover .geo-7 {
		top: 50%;
		right: -40%;
		background-color: #ec4899;
		transform: scale(0.6) rotate(-45deg);
	}

	/* 8. Yellow Semi-Circle */
	.geometric-art:hover .geo-8 {
		bottom: -20%;
		left: -20%;
		background-color: #a855f7;
		transform: rotate(180deg) scale(0.5);
	}

	/* 9. Small White Semi-Circle */
	.geometric-art:hover .geo-9 {
		bottom: 10%;
		left: -50%;
		background-color: #3b82f6;
		transform: rotate(45deg);
		opacity: 0.7;
	}

	/* 10. Violet Triangle/Square */
	.geometric-art:hover .geo-10 {
		bottom: -30%;
		left: 20%;
		background-color: #f472b6;
		transform: scale(0.2);
	}

	/* 11. Red Rectangle */
	.geometric-art:hover .geo-11 {
		bottom: -40%;
		left: 80%;
		background-color: #ffffff;
		transform: skewY(20deg) scale(1.2);
	}

	/* 12. White Quarter Circle */
	.geometric-art:hover .geo-12 {
		bottom: -10%;
		right: -30%;
		background-color: #8b5cf6;
		transform: rotate(90deg);
	}
</style>
