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

	/** 
	 * @param {MouseEvent} e 
	 * @param {number} index 
	 */
	function navTo(e, index) {
		e.preventDefault();
		if (window.location.pathname === '/' || window.location.pathname === '') {
			window.dispatchEvent(new CustomEvent('nav-to-section', { detail: index }));
		} else {
			window.location.href = `/?section=${index}`;
		}
	}
</script>

<header class="header-pill">
	<a href="/" class="brand-link" onclick={(e) => navTo(e, 0)}>
		<img src="Logo.png" alt="Euler" class="logo-img" />
		<span class="logo-text">Euler</span>
	</a>

	<nav class="nav-links">
		<a href="/#features" onclick={(e) => navTo(e, 1)}>Features</a>
		<a href="/#showcase" onclick={(e) => navTo(e, 2)}>Showcase</a>
		<a href="/#pricing" onclick={(e) => navTo(e, 3)}>Pricing</a>
	</nav>

	<div class="nav-actions">
		<a href="/#download" class="cta-pill" onclick={(e) => navTo(e, 4)}>
			<span>Download Free</span>
			<svg viewBox="0 0 20 20" fill="currentColor" class="cta-arrow" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" /></svg>
		</a>
	</div>
</header>

<style>
	.header-pill {
		pointer-events: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
		padding: 8px 10px 8px 16px;
		background: rgba(255, 255, 255, 0.78);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(161, 3, 252, 0.15);
		border-radius: 9999px;
		box-shadow: 
			0 10px 30px -5px rgba(161, 3, 252, 0.08),
			0 4px 12px -2px rgba(0, 0, 0, 0.04),
			inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.header-pill:hover {
		background: rgba(255, 255, 255, 0.92);
		border-color: rgba(161, 3, 252, 0.28);
		box-shadow: 
			0 14px 36px -5px rgba(161, 3, 252, 0.14),
			0 6px 16px -2px rgba(0, 0, 0, 0.06),
			inset 0 1px 0 0 rgba(255, 255, 255, 1);
		transform: translateY(-1px);
	}

	.brand-link {
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
		flex-shrink: 0;
	}

	.logo-img {
		width: 26px;
		height: 26px;
		object-fit: contain;
		filter: drop-shadow(0 2px 4px rgba(161, 3, 252, 0.2));
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.brand-link:hover .logo-img {
		transform: scale(1.1) rotate(-4deg);
	}

	.logo-text {
		font-family: 'Bricolage Grotesque', sans-serif;
		font-size: 16px;
		font-weight: 700;
		color: var(--text-950);
		letter-spacing: -0.3px;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 24px;
	}

	.nav-links a {
		font-family: 'Inter', sans-serif;
		font-size: 13.5px;
		font-weight: 500;
		color: var(--text-600);
		text-decoration: none;
		transition: color 0.2s ease;
		position: relative;
		padding: 4px 2px;
	}

	.nav-links a:hover {
		color: var(--primary-600);
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		height: 2px;
		background: var(--primary-500);
		border-radius: 2px;
		transition: width 0.2s ease, left 0.2s ease;
	}

	.nav-links a:hover::after {
		width: 100%;
		left: 0;
	}

	.nav-actions {
		display: flex;
		align-items: center;
	}

	.cta-pill {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 7px 16px;
		background: linear-gradient(135deg, #a103fc 0%, #7c03fc 100%);
		color: #ffffff;
		font-family: 'Inter', sans-serif;
		font-size: 13px;
		font-weight: 600;
		text-decoration: none;
		border-radius: 9999px;
		box-shadow: 0 4px 12px rgba(161, 3, 252, 0.25);
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.cta-pill:hover {
		transform: translateY(-1px) scale(1.02);
		box-shadow: 0 6px 18px rgba(161, 3, 252, 0.4);
		color: #ffffff;
	}

	.cta-arrow {
		width: 14px;
		height: 14px;
		transition: transform 0.2s ease;
	}

	.cta-pill:hover .cta-arrow {
		transform: translateX(2px);
	}

	@media (max-width: 640px) {
		.header-pill {
			gap: 16px;
			padding: 6px 8px 6px 12px;
		}
		.nav-links {
			display: none;
		}
		.logo-text {
			font-size: 15px;
		}
		.cta-pill {
			padding: 6px 12px;
			font-size: 12px;
		}
	}
</style>
