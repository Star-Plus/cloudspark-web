<script>
	import { onMount } from 'svelte';
	import AuthService from '$lib/features/auth/AuthService';

	const authService = AuthService.getInstance();
	let isLoggedIn = false;
	let googleInitialized = false;

	onMount(() => {
		isLoggedIn = authService.isAuthenticated();

		const script = document.createElement('script');
		script.src = 'https://accounts.google.com/gsi/client';
		script.async = true;
		script.defer = true;
		script.onload = initializeGoogleSignIn;
		document.head.appendChild(script);
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

	const navLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Contact Us', href: '/contact' },
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Terms of Use', href: '/terms' }
	];
</script>

<header class="header-root">
	<div class="logo-area">
		<img src="Logo.png" alt="CloudSpark" class="logo-img" />
		<span class="logo-text">CloudSpark</span>
	</div>

	<div class="header-actions">
		{#if isLoggedIn}
			<button class="avatar-btn" title="Profile">
				<svg viewBox="0 0 24 24" fill="currentColor" class="avatar-icon">
					<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
				</svg>
			</button>
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
		padding: 20px 40px;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		box-sizing: border-box;
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

	.avatar-btn {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.15);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background 0.2s;
		color: white;
	}

	.avatar-btn:hover {
		background: rgba(255, 255, 255, 0.18);
	}

	.avatar-icon {
		width: 18px;
		height: 18px;
	}
</style>
