<script>
	import Counter from "./Counter.svelte";

</script>

<svelte:head>
	<title>CloudSpark - Image Compression for Digital Artists</title>
	<meta
		name="description"
		content="Optimize your digital art with CloudSpark"
	/>
</svelte:head>

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
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px]"
		>
			<!-- Large Blue Semi-circle Top replaced with Violet -->
			<div
				class="absolute top-0 right-10 w-64 h-32 bg-[#8B5CF6] rounded-t-full z-10"
			></div>

			<!-- White Quarter Circle Top Right -->
			<div
				class="absolute top-0 right-0 w-24 h-24 bg-white rounded-t-full z-20 transform rotate-12"
			></div>

			<!-- Red Triangle/Slice Left -->
			<div
				class="absolute top-10 left-10 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[80px] border-b-[#EF4444] transform -rotate-45 z-20"
			></div>

			<!-- Green Semi-Circle Left -->
			<div
				class="absolute top-32 left-0 w-32 h-64 bg-[#10B981] rounded-l-full z-10"
			></div>

			<!-- Large Yellow Square flexible center -->
			<div
				class="absolute top-32 left-32 w-48 h-40 bg-[#FCD34D] z-0 shadow-lg"
			></div>

			<!-- White Square/Rect Right of Yellow -->
			<div class="absolute top-32 left-80 w-32 h-40 bg-white z-0"></div>

			<!-- Green Semi-Circle Right -->
			<div
				class="absolute top-32 right-[-20px] w-32 h-64 bg-[#10B981] rounded-r-full z-10"
			></div>

			<!-- Yellow Semi-Circle Bottom Left -->
			<div
				class="absolute bottom-10 left-[-10px] w-48 h-24 bg-[#FFF500] rounded-b-full z-20 transform -rotate-12"
			></div>

			<!-- Small White Semi-Circle Bottom Left decorative -->
			<div
				class="absolute bottom-20 left-[-40px] w-24 h-12 bg-white rounded-t-full z-30 transform -rotate-12"
			></div>

			<!-- Violet Triangle/Square split bottom center -->
			<div
				class="absolute bottom-10 left-32 w-32 h-32 bg-[#8B5CF6] z-10 overflow-hidden"
			>
				<div
					class="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -rotate-45 origin-bottom-left"
				></div>
			</div>

			<!-- Red Rectangle Bottom Right -->
			<div
				class="absolute bottom-0 left-72 w-20 h-40 bg-[#EF4444] z-30 shadow-2xl skew-y-6"
			></div>

			<!-- White Quarter Circle Right Bottom -->
			<div
				class="absolute bottom-20 right-10 w-32 h-32 bg-white rounded-br-full z-10 opacity-90"
			></div>
		</div>
	</div>
</section>

<!-- Bottom decorative blur -->
<div
	class="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050520] to-transparent pointer-events-none z-50"
></div>

<style>
	/* Custom font adjustments if needed, though Tailwind handles most */
</style>
