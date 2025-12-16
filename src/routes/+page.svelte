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
				class="geo-shape geo-3 absolute top-10 left-10 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[80px] border-b-[#EF4444] transform -rotate-45 z-20"
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
				class="geo-shape geo-7 absolute top-32 right-[-20px] w-32 h-64 bg-[#10B981] rounded-r-full z-10"
			></div>

			<!-- 8. Yellow Semi-Circle (Bottom Left) -->
			<div
				class="geo-shape geo-8 absolute bottom-10 left-[-10px] w-48 h-24 bg-[#FFF500] rounded-b-full z-20 transform -rotate-12"
			></div>

			<!-- 9. Small White Semi-Circle (Bottom Left decorative) -->
			<div
				class="geo-shape geo-9 absolute bottom-20 left-[-40px] w-24 h-12 bg-white rounded-t-full z-30 transform -rotate-12"
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

<!-- Speed/Performance Section -->
<section class="w-full py-24 relative z-10 overflow-hidden">
	<div
		class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16"
	>
		<!-- Text Content -->
		<div class="flex-1 z-10">
			<h2
				class="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
			>
				Less <span
					class="inline-block w-12 h-12 border-4 border-t-transparent border-[#8B5CF6] rounded-full animate-spin align-middle mx-2"
				></span><br />
				<span
					class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8B5CF6]"
					>More Speed.</span
				>
			</h2>
			<p class="text-gray-300 text-lg leading-relaxed max-w-lg mb-8">
				Your creative workflow shouldn't be bottlenecked by slow tools.
				CloudSpark processes thousands of images in seconds, utilizing
				advanced GPU acceleration to keep you in the flow.
			</p>

			<div class="flex gap-4">
				<div class="flex flex-col">
					<span class="text-3xl font-bold text-white">10x</span>
					<span class="text-xs text-gray-500 uppercase tracking-wider"
						>Faster</span
					>
				</div>
				<div class="w-px h-12 bg-gray-700"></div>
				<div class="flex flex-col">
					<span class="text-3xl font-bold text-white">0%</span>
					<span class="text-xs text-gray-500 uppercase tracking-wider"
						>Quality Loss</span
					>
				</div>
			</div>
		</div>

		<!-- Simplistic Laptop Illustration -->
		<div class="flex-1 relative w-full max-w-lg perspective-1000 group">
			<!-- Laptop Body Container - Slight 3D rotation effect -->
			<div
				class="relative transform transition-transform duration-500 ease-out group-hover:rotate-y-6 group-hover:rotate-x-6 preserve-3d"
			>
				<!-- Screen Lid -->
				<div
					class="relative bg-[#1a1a2e] rounded-t-2xl p-2 pb-0 shadow-2xl border border-white/10 w-full aspect-[16/10]"
				>
					<!-- Webcam dot -->
					<div
						class="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full"
					></div>

					<!-- Screen Display -->
					<div
						class="bg-[#0f0f1a] w-full h-full rounded-t-lg overflow-hidden relative"
					>
						<!-- Mock App UI -->
						<div class="absolute inset-0 flex">
							<!-- Sidebar -->
							<div
								class="w-16 h-full bg-[#13131f] border-r border-white/5 flex flex-col items-center py-4 gap-3"
							>
								<div
									class="w-8 h-8 rounded-full bg-white/10"
								></div>
								<div
									class="w-8 h-8 rounded-full bg-white/5"
								></div>
								<div
									class="w-8 h-8 rounded-full bg-white/5"
								></div>
							</div>
							<!-- Main Content -->
							<div class="flex-1 p-4">
								<div
									class="flex justify-between items-center mb-4"
								>
									<div
										class="w-32 h-4 bg-white/10 rounded"
									></div>
									<div
										class="w-20 h-8 bg-[#8B5CF6] rounded text-[10px] text-white flex items-center justify-center"
									>
										Export
									</div>
								</div>
								<!-- Image Grid -->
								<div class="grid grid-cols-2 gap-3">
									<div
										class="aspect-video bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded border border-white/5 relative group/img"
									>
										<div
											class="absolute inset-0 flex items-center justify-center text-green-400 text-xs font-mono"
										>
											-80%
										</div>
									</div>
									<div
										class="aspect-video bg-gradient-to-br from-purple-400/20 to-violet-600/20 rounded border border-white/5 relative"
									>
										<div
											class="absolute inset-0 flex items-center justify-center text-purple-400 text-xs font-mono"
										>
											-65%
										</div>
									</div>
									<div
										class="aspect-video bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded border border-white/5 relative"
									>
										<div
											class="absolute inset-0 flex items-center justify-center text-yellow-400 text-xs font-mono"
										>
											-92%
										</div>
									</div>
									<div
										class="aspect-video bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded border border-white/5 relative"
									>
										<div
											class="absolute inset-0 flex items-center justify-center text-blue-400 text-xs font-mono"
										>
											-45%
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Screen Reflection/Gloss -->
				<div
					class="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 pointer-events-none"
				></div>

				<!-- Keyboard Base (Bottom perspective) -->
				<div
					class="relative -mt-1 mx-[2%] h-4 bg-[#252535] rounded-b-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-white/5 flex justify-center"
				>
					<!-- Trackpad notch -->
					<div
						class="w-1/3 h-full border-x border-white/5 bg-[#2a2a3d]"
					></div>
				</div>
			</div>

			<!-- Decorative Background Glow behind laptop -->
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-violet-600/20 blur-[100px] -z-10 rounded-full pointer-events-none"
			></div>
		</div>
	</div>
</section>

<!-- Creative/Geometric Section -->
<section class="w-full py-24 relative z-10">
	<div
		class="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-16"
	>
		<!-- Left: Geometric Abstract Art -->
		<div class="flex-1 relative w-full max-w-lg h-[500px]">
			<div
				class="absolute inset-0 flex items-center justify-center -rotate-12 transform hover:scale-105 transition-transform duration-700"
			>
				<!-- Leaf Assembly - Made of disparate creative shapes -->

				<!-- Main Spine (Curve) -->
				<div
					class="absolute w-1 h-80 bg-gradient-to-b from-[#8B5CF6] to-transparent rounded-full z-20"
				></div>

				<!-- Left Side Cluster -->
				<div
					class="absolute top-20 left-[20%] w-20 h-20 bg-[#10B981] rounded-tr-[50px] rounded-bl-[50px] shadow-lg animate-pulse"
				></div>
				<!-- Green Leaflet -->
				<div
					class="absolute top-40 left-[15%] w-16 h-16 border-4 border-[#FCD34D] rounded-full opacity-80"
				></div>
				<!-- Yellow Circle Ring -->
				<div
					class="absolute top-60 left-[25%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-[#3B82F6] transform -rotate-45"
				></div>
				<!-- Blue Triangle -->
				<div
					class="absolute bottom-32 left-[30%] w-12 h-24 bg-[#8B5CF6] rounded-l-full opacity-90"
				></div>
				<!-- Violet Semi -->

				<!-- Right Side Cluster -->
				<div
					class="absolute top-24 right-[25%] w-24 h-24 bg-[#059669] rounded-full opacity-40 blur-sm"
				></div>
				<!-- Blur Green Blob -->
				<div
					class="absolute top-28 right-[20%] w-16 h-32 bg-[#FCD34D] rounded-t-full rounded-br-full transform rotate-12 z-10"
				></div>
				<!-- Yellow Petal -->
				<div
					class="absolute top-64 right-[15%] w-20 h-20 bg-gradient-to-br from-[#EF4444] to-pink-500 rounded-lg transform rotate-45 z-10 shadow-xl"
				></div>
				<!-- Red Diamond -->
				<div
					class="absolute bottom-40 right-[25%] w-10 h-10 border-2 border-white rounded-full flex items-center justify-center"
				>
					<div class="w-2 h-2 bg-white rounded-full"></div>
				</div>
				<!-- White Orbit -->

				<!-- Floating Particles forming the tip -->
				<div
					class="absolute top-10 right-[40%] w-4 h-4 bg-[#8B5CF6] rounded-full animate-bounce"
				></div>
				<div
					class="absolute top-6 right-[35%] w-2 h-2 bg-white rounded-full animate-ping"
				></div>

				<!-- Abstract "Stem" Base -->
				<div
					class="absolute bottom-10 w-8 h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-b-3xl z-0"
				></div>

				<!-- Orbiting Satellite Shape -->
				<div
					class="absolute w-60 h-60 border border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none"
				>
					<div
						class="absolute top-0 left-1/2 w-4 h-4 bg-[#3B82F6] rounded-full shadow-[0_0_15px_#3B82F6]"
					></div>
				</div>
			</div>
		</div>

		<!-- Background Space Ambience for this section -->

		<!-- Right: Text Content -->
		<div class="flex-1 text-left">
			<span
				class="text-[#10B981] font-mono text-sm tracking-widest uppercase mb-2 block"
				>Creative Flow</span
			>
			<h2
				class="text-5xl md:text-6xl font-bold text-white leading-tight mb-8"
			>
				Nature for <span class="italic font-serif text-[#FCD34D]"
					>Life</span
				>,<br />
				Stand for <span class="text-[#8B5CF6]">Creativity</span>.
			</h2>
			<p class="text-gray-300 text-lg leading-relaxed mb-8">
				Quickly parallel task high-quality scenarios with flexible
				convergence. Seamlessly matrix synergistic web services rather
				than extensible opportunities.
			</p>
			<button
				class="group overflow-hidden relative px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold transition-all hover:border-[#8B5CF6]"
			>
				<span
					class="relative z-10 group-hover:text-white transition-colors"
					>View more</span
				>
				<div
					class="absolute inset-0 bg-[#8B5CF6] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"
				></div>
			</button>
		</div>
	</div>
</section>

<!-- Testimonials / Glowing Line Section -->
<section
	class="w-full min-h-[900px] relative z-20 flex items-center justify-center overflow-hidden py-32"
>
	<!-- Content Container -->
	<div
		class="relative w-full max-w-7xl mx-auto h-[800px] flex items-center justify-center"
	>
		<!-- Central Text -->
		<div
			class="absolute z-30 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
		>
			<h2
				class="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-xl"
			>
				Loved by creators<br />
				<span
					class="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-cyan-400"
					>worldwide</span
				>
			</h2>
			<p class="text-gray-400 max-w-lg mx-auto text-lg">
				Simplicity is easy when you just skip tons of mission-critical
				features.
			</p>
		</div>

		<!-- Silhouette Figures (Foreground/Background) -->
		<!-- Figure Left -->
		<div
			class="absolute bottom-0 left-[10%] w-[400px] h-[500px] opacity-90 z-10 pointer-events-none"
		>
			<svg
				viewBox="0 0 100 100"
				class="w-full h-full fill-current text-[#050520]"
			>
				<defs>
					<linearGradient
						id="gradLeft"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="0%"
					>
						<stop
							offset="0%"
							style="stop-color:#0f0f3a;stop-opacity:1"
						/>
						<stop
							offset="100%"
							style="stop-color:#1a1a5e;stop-opacity:1"
						/>
					</linearGradient>
				</defs>
				<path
					d="M50,20 C65,20 75,35 75,50 C75,80 90,90 100,100 L0,100 C10,90 25,80 25,50 C25,35 35,20 50,20 Z"
					fill="url(#gradLeft)"
				/>
			</svg>
			<!-- Rim Light -->
			<div
				class="absolute top-[10%] right-[20%] w-full h-full bg-blue-500/20 blur-[60px] rounded-full mix-blend-overlay"
			></div>
		</div>

		<!-- Figure Right -->
		<div
			class="absolute bottom-0 right-[-5%] w-[500px] h-[600px] opacity-90 z-20 pointer-events-none"
		>
			<svg
				viewBox="0 0 100 100"
				class="w-full h-full fill-current text-[#050520]"
			>
				<defs>
					<linearGradient
						id="gradRight"
						x1="0%"
						y1="0%"
						x2="0%"
						y2="100%"
					>
						<stop
							offset="0%"
							style="stop-color:#1e1e60;stop-opacity:1"
						/>
						<stop
							offset="100%"
							style="stop-color:#050520;stop-opacity:1"
						/>
					</linearGradient>
				</defs>
				<path
					d="M40,10 C60,10 70,30 70,50 C70,70 90,90 100,100 L0,100 C10,80 20,60 20,50 C20,30 30,10 40,10 Z"
					fill="url(#gradRight)"
				/>
			</svg>
			<div
				class="absolute top-[20%] left-[10%] w-full h-full bg-purple-500/20 blur-[80px] rounded-full mix-blend-overlay"
			></div>
		</div>

		<!-- Figure Middle Back -->
		<div
			class="absolute bottom-0 left-[40%] w-[300px] h-[400px] opacity-60 z-0 blur-sm pointer-events-none"
		>
			<svg
				viewBox="0 0 100 100"
				class="w-full h-full fill-current text-[#050520]"
			>
				<path
					d="M50,10 C65,10 75,25 75,50 C75,90 100,100 100,100 L0,100 C0,100 25,90 25,50 C25,25 35,10 50,10 Z"
					fill="#0c0c30"
				/>
			</svg>
		</div>

		<!-- THE GLOWING LINE -->
		<div class="absolute inset-0 z-20 pointer-events-none w-full h-full">
			<svg class="w-full h-full" overflow="visible">
				<defs>
					<filter
						id="glow"
						x="-50%"
						y="-50%"
						width="200%"
						height="200%"
					>
						<feGaussianBlur stdDeviation="4" result="coloredBlur" />
						<feMerge>
							<feMergeNode in="coloredBlur" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
					<linearGradient
						id="lineGradient"
						gradientUnits="userSpaceOnUse"
					>
						<stop
							offset="0%"
							stop-color="#3B82F6"
							stop-opacity="0"
						/>
						<stop
							offset="50%"
							stop-color="#ffffff"
							stop-opacity="1"
						/>
						<stop
							offset="100%"
							stop-color="#8B5CF6"
							stop-opacity="0"
						/>
					</linearGradient>
				</defs>
				<!-- The Path -->
				<path
					id="travelPath"
					d="M-100,400 C100,400 300,800 500,600 C700,400 900,200 1100,400 C1300,600 1500,500 1700,300"
					fill="none"
					stroke="url(#lineGradient)"
					stroke-width="3"
					filter="url(#glow)"
					class="animate-draw-line"
				/>
			</svg>
		</div>

		<!-- Floating Testimonial Cards -->

		<!-- Card 1 (Top Left) -->
		<div
			class="absolute top-10 left-[5%] md:left-[15%] z-20 animate-[float_6s_ease-in-out_infinite]"
		>
			<div
				class="w-64 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transform -rotate-6 transition-transform hover:scale-105 hover:border-white/20 hover:bg-white/10"
			>
				<div class="flex items-center gap-3 mb-3">
					<div
						class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-red-500"
					></div>
					<div>
						<h4 class="text-sm font-bold text-white">Zerkulas</h4>
						<div class="flex text-yellow-400 text-xs">★★★★★</div>
					</div>
				</div>
				<p class="text-xs text-gray-300">
					"Hands down the best compression I've ever seen. Lightning
					speed!"
				</p>
			</div>
		</div>

		<!-- Card 2 (Top Right) -->
		<div
			class="absolute top-20 right-[5%] md:right-[15%] z-20 animate-[float_7s_ease-in-out_infinite_reverse]"
		>
			<div
				class="w-64 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transform rotate-3 transition-transform hover:scale-105 hover:border-white/20 hover:bg-white/10"
			>
				<div class="flex items-center gap-3 mb-3">
					<div
						class="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500"
					></div>
					<div>
						<h4 class="text-sm font-bold text-white">StarSaif</h4>
						<div class="flex text-yellow-400 text-xs">★★★★★</div>
					</div>
				</div>
				<p class="text-xs text-gray-300">
					"Just kick the ungrateful tools out. This is probably the
					best out here."
				</p>
			</div>
		</div>

		<!-- Card 3 (Bottom Left) -->
		<div
			class="absolute bottom-40 left-[10%] z-20 animate-[float_8s_ease-in-out_infinite] delay-1000"
		>
			<div
				class="w-56 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transform rotate-6 transition-transform hover:scale-105 hover:border-white/20 hover:bg-white/10"
			>
				<div class="flex items-center gap-3 mb-3">
					<div
						class="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-emerald-500"
					></div>
					<div>
						<h4 class="text-sm font-bold text-white">Superior</h4>
						<div class="flex text-yellow-400 text-xs">★★★★★</div>
					</div>
				</div>
				<p class="text-xs text-gray-300">
					"A good step I made when I chose CloudSpark. Thanks!"
				</p>
			</div>
		</div>

		<!-- Card 4 (Right Mid) -->
		<div
			class="absolute bottom-60 right-[10%] z-20 animate-[float_5s_ease-in-out_infinite_reverse] delay-500"
		>
			<div
				class="w-60 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl transform -rotate-3 transition-transform hover:scale-105 hover:border-white/20 hover:bg-white/10"
			>
				<div class="flex items-center gap-3 mb-3">
					<div
						class="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-500"
					></div>
					<div>
						<h4 class="text-sm font-bold text-white">7ambola</h4>
						<div class="flex text-yellow-400 text-xs">★★★★★</div>
					</div>
				</div>
				<p class="text-xs text-gray-300">
					"Wait, you guys answer me quick when I ask something.
					Appreciate it!"
				</p>
			</div>
		</div>
	</div>

	<!-- Fade to Bottom -->
	<div
		class="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050520] via-[#050520]/80 to-transparent z-40 pointer-events-none"
	></div>
</section>

<!-- Downloads Section -->
<section class="w-full py-20 relative z-10">
	<div class="text-center mb-16">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
			Available on all platforms
		</h2>
		<p class="text-gray-400 max-w-2xl mx-auto">
			Experience the full power of CloudSpark on your desktop. Native
			performance, offline capability, and seamless workflow integration.
		</p>
	</div>

	<div class="flex flex-wrap justify-center gap-8 md:gap-12 px-4">
		<!-- Windows Card -->
		<a
			href="/download/windows"
			class="group relative w-64 h-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-[#8B5CF6]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
		>
			<div
				class="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"
			></div>

			<div
				class="z-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
			>
				<!-- Windows Icon -->
				<svg
					class="w-10 h-10 text-white"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.323L24 0v11.323H10.949V2.126zM0 12.6h9.75v9.451L0 20.699V12.6zm10.949 0H24V24l-13.051-1.874V12.6z"
					/>
				</svg>
			</div>

			<div class="z-10 text-center">
				<h3 class="text-xl font-bold text-white mb-2">Windows</h3>
				<p class="text-xs text-gray-400">Windows 10, 11 (64-bit)</p>
			</div>

			<div
				class="z-10 flex items-center gap-2 text-[#8B5CF6] font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors"
			>
				<span>Download</span>
				<svg
					class="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					></path></svg
				>
			</div>
		</a>

		<!-- MacOS Card -->
		<a
			href="/download/mac"
			class="group relative w-64 h-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-[#F472B6]/50 hover:shadow-[0_0_30px_rgba(244,114,182,0.3)]"
		>
			<div
				class="absolute inset-0 bg-gradient-to-br from-[#F472B6]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"
			></div>

			<div
				class="z-10 w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-400 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
			>
				<!-- Apple Icon -->
				<svg
					class="w-10 h-10 text-white"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.04.05-2.29.69-3.02 1.55-.65.75-1.21 1.95-1.06 3.04 1.15.09 2.3-.64 3.01-1.48"
					/>
				</svg>
			</div>

			<div class="z-10 text-center">
				<h3 class="text-xl font-bold text-white mb-2">macOS</h3>
				<p class="text-xs text-gray-400">macOS 11.0+ (Universal)</p>
			</div>

			<div
				class="z-10 flex items-center gap-2 text-[#F472B6] font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors"
			>
				<span>Download</span>
				<svg
					class="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					></path></svg
				>
			</div>
		</a>

		<!-- Linux Card -->
		<a
			href="/download/linux"
			class="group relative w-64 h-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-[#FCD34D]/50 hover:shadow-[0_0_30px_rgba(252,211,77,0.3)]"
		>
			<div
				class="absolute inset-0 bg-gradient-to-br from-[#FCD34D]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"
			></div>

			<div
				class="z-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
			>
				<!-- Linux Icon (Tux simplified) -->
				<svg
					class="w-10 h-10 text-white"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M12 20.35c-2.3 0-4.63-.5-4.63-2.8 0-1.8 1.9-2.93 2.65-3.32.75-.4 1.7-.6 1.97-1.5.02-.05 0-1-.02-1.02-.2-.2-.53-.28-.73-.55-.6-1.02-.7-2.65-.7-2.65S9.4 6 11.08 5c0 0 0 0 .04 0C11.66 4.3 12.06 2 12 2s.37 2.3.9 3c1.67 1 2.5 3.5 1.54 5.5-.2.27-.5.35-.7.55-.02.02-.04.97-.03 1.02.25.9 1.2 1.1 1.97 1.5.74.38 2.64 1.5 2.64 3.3 0 2.3-2.33 2.8-4.63 2.8H12m5.44-8.77c.4-.3.6-.96.6-1.58 0-1.25-.57-1.8-1.12-1.8-.4 0-.85.34-1.06 1.2-.17.68.22 1.4.32 1.63.2.4.67.75 1.26.55M6.56 11.58c.6.2 1.05-.15 1.25-.55.1-.23.5-.95.33-1.63-.2-.86-.66-1.2-1.06-1.2-.55 0-1.12.55-1.12 1.8 0 .62.2 1.28.6 1.58"
					/>
				</svg>
			</div>

			<div class="z-10 text-center">
				<h3 class="text-xl font-bold text-white mb-2">Linux</h3>
				<p class="text-xs text-gray-400">.deb, .rpm, .AppImage</p>
			</div>

			<div
				class="z-10 flex items-center gap-2 text-[#FCD34D] font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors"
			>
				<span>Download</span>
				<svg
					class="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					></path></svg
				>
			</div>
		</a>
	</div>
</section>

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
	class="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050520] to-transparent pointer-events-none z-50"
></div>

<style>
	/* Custom font adjustments if needed, though Tailwind handles most */
	@keyframes draw-line {
		0% {
			stroke-dasharray: 2000;
			stroke-dashoffset: 2000;
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		100% {
			stroke-dasharray: 2000;
			stroke-dashoffset: -2000;
			opacity: 1;
		}
	}

	.animate-draw-line {
		animation: draw-line 5s linear infinite;
	}

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
