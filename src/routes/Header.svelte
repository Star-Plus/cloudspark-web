<script>
	import { onMount, onDestroy } from 'svelte';
	import AuthService from '$lib/features/auth/AuthService';

	const authService = AuthService.getInstance();
	let isLoggedIn = false;
	let googleInitialized = false;
	let isScrolled = false;
	/** @type {HTMLScriptElement | null} */
	let googleScript;

	onMount(() => {
		isLoggedIn = authService.isAuthenticated();

		googleScript = document.createElement('script');
		googleScript.src = 'https://accounts.google.com/gsi/client';
		googleScript.async = true;
		googleScript.defer = true;
		googleScript.onload = initializeGoogleSignIn;
		document.head.appendChild(googleScript);

		handleOnScroll();
		window.addEventListener('scroll', handleOnScroll, { passive: true });
	});

	onDestroy(() => {
		window.removeEventListener('scroll', handleOnScroll);
		if (googleScript?.parentNode) {
			googleScript.parentNode.removeChild(googleScript);
		}
	});

	function initializeGoogleSignIn() {
		// @ts-ignore
		if (window.google) {
			// @ts-ignore
			window.google.accounts.id.initialize({
				client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
				callback: handleCredentialResponse
			});
			googleInitialized = true;
		}
	}

	// @ts-ignore
	async function handleCredentialResponse(response) {
		try {
			const idToken = response.credential;
			const authResponse = await authService.googleLogin({ idToken });
			isLoggedIn = true;
		} catch (error) {
			console.error('Login failed:', error);
		}
	}

	function handleLoginClick() {
		// @ts-ignore
		if (googleInitialized && window.google) {
			const container = document.createElement('div');
			container.style.cssText = 'position: absolute; opacity: 0; pointer-events: none;';
			document.body.appendChild(container);
			// @ts-ignore
			window.google.accounts.id.renderButton(container, { type: 'standard', size: 'large' });
			setTimeout(() => {
				const googleButton = container.querySelector('div[role="button"]');
				// @ts-ignore
				if (googleButton) googleButton.click();
			}, 100);
		}
	}

	function handleOnScroll(){
		isScrolled = window.scrollY > 100;
	}

</script>

<header class="header-root py-6 px-10 lg:px-96" class:scrolled={isScrolled}>
	<div class="logo-area">
		<img src="Logo.png" alt="CloudSpark" class="logo-img" />
		<span class="logo-text">CloudSpark</span>
	</div>

	<div class="header-actions">
		{#if isLoggedIn}
			<svg viewBox="0 0 24 24" fill="currentColor" class="avatar-icon">
				<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
			</svg>
		{:else}
			<button onclick={handleLoginClick} class="signup-btn">
				Signup
			</button>
		{/if}
	</div>
</header>

<style>
	.header-root {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		transition: background 0.2s ease, backdrop-filter 0.2s ease;
	}

	.logo-area {
		display: flex;
		align-items: center;
		gap: 8px;
		flex-shrink: 0;
	}

	.logo-img {
		width: 24px;
		height: 24px;
		object-fit: contain;
	}

	.logo-text {
		font-family: 'Bricolage Grotesque', sans-serif;
		font-size: 16px;
		font-weight: 600;
		color: #ffffff;
		letter-spacing: -0.3px;
	}

	.header-actions {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.signup-btn {
		background: #5B50E8;
		color: #ffffff;
		font-family: 'Inter', sans-serif;
		font-size: 13.5px;
		font-weight: 500;
		padding: 9px 22px;
		border-radius: 999px;
		border: none;
		cursor: pointer;
		transition: background 0.2s ease, transform 0.15s ease;
		letter-spacing: 0.1px;
	}

	.signup-btn:hover {
		background: #6B62F0;
		transform: translateY(-1px);
	}

	.avatar-icon {
		width: 18px;
		height: 18px;
	}

	.scrolled {
		background: rgba(12, 12, 12, 0.6);
		backdrop-filter: blur(10px);
	}
</style>
