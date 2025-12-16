<script >
	import { onMount } from 'svelte';
	import AuthService from '$lib/features/auth/AuthService';

	const authService = AuthService.getInstance();
	let googleInitialized = false;
	let isLoggedIn = false;

	onMount(() => {
		// Check if user is already logged in
		isLoggedIn = authService.isAuthenticated();
		
		console.log('Loading Google Sign-In script...');
		console.log('Client ID:', import.meta.env.VITE_GOOGLE_CLIENT_ID);
		
		// Load Google Sign-In script
		const script = document.createElement('script');
		script.src = 'https://accounts.google.com/gsi/client';
		script.async = true;
		script.defer = true;
		script.onload = initializeGoogleSignIn;
		script.onerror = () => console.error('Failed to load Google Sign-In script');
		document.head.appendChild(script);
	});

	function initializeGoogleSignIn() {
		console.log('Google script loaded');
		// @ts-ignore
		if (window.google) {
			console.log('Initializing Google Sign-In...');
			// @ts-ignore
			window.google.accounts.id.initialize({
				client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
				callback: handleCredentialResponse
			});
			googleInitialized = true;
			console.log('Google Sign-In initialized');
		} else {
			console.error('Google object not found');
		}
	}

	// @ts-ignore
	async function handleCredentialResponse(response) {
		console.log('Credential response received');
		try {
			const idToken = response.credential;
			console.log('IdToken received, logging in...');
			
			const authResponse = await authService.googleLogin({ idToken });
			
			console.log('Login successful:', authResponse);
			
			isLoggedIn = true;
			
			if (authResponse.firstTime) {
				console.log('First time user - redirect to onboarding');
			} else {
				console.log('Returning user - redirect to dashboard');
			}
		} catch (error) {
			console.error('Login failed:', error);
			alert('Login failed. Please try again.');
		}
	}

	function handleLoginClick() {
		console.log('Login button clicked');
		console.log('Google initialized:', googleInitialized);
		
		// @ts-ignore
		if (googleInitialized && window.google) {
			const container = document.createElement('div');
			container.style.cssText = 'position: absolute; opacity: 0; pointer-events: none;';
			document.body.appendChild(container);
			
			// @ts-ignore
			window.google.accounts.id.renderButton(container, {
				type: 'standard',
				theme: 'outline',
				size: 'large',
				text: 'signin_with',
				width: 250
			});
			
			setTimeout(() => {
				const googleButton = container.querySelector('div[role="button"]');
				if (googleButton) {
					// @ts-ignore
					googleButton.click();
				}
			}, 100);
		} else {
			console.error('Google Sign-In not initialized yet');
			alert('Google Sign-In is still loading. Please try again in a moment.');
		}
	}
</script>

<header
	class="flex justify-between items-center py-6 px-10 max-w-7xl mx-auto w-full text-white"
>
	<!-- Logo area -->
	<div class="flex items-center gap-2">
		<img src="Logo_White.png" alt="Cloud Spark Logo" class="size-18" />
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
				></path></svg>
		{#if isLoggedIn}
			<button
				class="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
				title="User Profile"
			>
				<svg
					class="w-6 h-6 text-gray-600"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
					/>
				</svg>
			</button>
		{:else}
			<button
				on:click={handleLoginClick}
				class="bg-gray-100 cursor-pointer hover:bg-white text-[#050520] text-xs font-bold py-3 px-6 rounded shadow-lg transition-colors uppercase tracking-wide"
			>
				Login
			</button>
		{/if}
		</button>
	</div>
</header>
