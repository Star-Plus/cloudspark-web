<script>
	import { onMount } from 'svelte';
	import AuthService from '$lib/features/auth/AuthService';

	const authService = AuthService.getInstance();

	onMount(() => {
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
		}
	}

	// @ts-ignore
	async function handleCredentialResponse(response) {
		try {
			const idToken = response.credential;
			await authService.googleLogin({ idToken });
		} catch (error) {
			console.error('Login failed:', error);
		}
	}
</script>

<header class="header-root">
	<div class="logo-area">
		<img src="Logo.png" alt="CloudSpark" class="logo-img" />
		<span class="logo-text">CloudSpark</span>
	</div>
</header>

<style>
	.header-root {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 24px 40px;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		box-sizing: border-box;
		position: relative;
		z-index: 1000;
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

	@media (max-width: 768px) {
		.header-root {
			padding: 20px 24px;
		}
	}
</style>
