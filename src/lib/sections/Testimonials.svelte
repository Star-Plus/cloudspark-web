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
					class="text-transparent bg-clip-text bg-linear-to-r from-[#8B5CF6] to-cyan-400"
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
						class="w-8 h-8 rounded-full bg-linear-to-tr from-yellow-400 to-red-500"
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
						class="w-8 h-8 rounded-full bg-linear-to-tr from-cyan-400 to-blue-500"
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
						class="w-8 h-8 rounded-full bg-linear-to-tr from-green-400 to-emerald-500"
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
						class="w-8 h-8 rounded-full bg-linear-to-tr from-purple-400 to-pink-500"
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
		class="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-[#050520] via-[#050520]/80 to-transparent z-40 pointer-events-none"
	></div>
</section>

<style>

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
</style>