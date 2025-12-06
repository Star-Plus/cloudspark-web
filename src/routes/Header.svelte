<script>
	import { page } from "$app/state";
</script>

<header
	class="flex justify-between items-center py-6 px-10 max-w-7xl mx-auto w-full text-white"
>
	<!-- Logo area -->
	<div class="flex items-center gap-2">
		<div
			class="w-8 h-8 bg-white rounded-full flex items-center justify-center"
		>
			<div
				class="w-4 h-4 bg-[#8B5CF6] rounded-sm transform rotate-45"
			></div>
		</div>
		<!-- <span class="font-bold text-xl tracking-tight hidden sm:block">CloudSpark</span> -->
	</div>

	<!-- Navigation -->
	<nav
		class="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-gray-300"
	>
		<a href="#feature" class="hover:text-white transition-colors uppercase"
			>Feature</a
		>
		<a href="#product" class="hover:text-white transition-colors uppercase"
			>Product</a
		>
		<a href="#career" class="hover:text-white transition-colors uppercase"
			>Career</a
		>
		<a href="#news" class="hover:text-white transition-colors uppercase"
			>News</a
		>
		<a href="#about" class="hover:text-white transition-colors uppercase"
			>About Us</a
		>
	</nav>

	<!-- Right Actions -->
	<div class="flex items-center gap-6">
		<button
			class="text-xs font-semibold text-gray-300 hover:text-white uppercase flex items-center gap-1"
		>
			Eng
			<svg
				class="w-3 h-3"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 9l-7 7-7-7"
				></path></svg
			>
		</button>

		<a
			href="/login"
			class="bg-gray-100 hover:bg-white text-[#050520] text-xs font-bold py-3 px-6 rounded shadow-lg transition-colors uppercase tracking-wide"
		>
			Sign Up
		</a>
	</div>
</header>
