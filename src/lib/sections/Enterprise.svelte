<section class="enterprise">
	<div class="ent-inner">
		<div class="ent-left">
			<div class="section-label animate-in">For Teams & Studios</div>
			<h2 class="ent-title animate-in delay-1">Scale your creative<br />pipeline.</h2>
			<p class="ent-sub animate-in delay-2">
				CloudSpark isn't just for solo creators. Studios and agencies use it
				to manage thousands of assets across departments, keeping every version
				in sync without overwriting each other's work.
			</p>

			<div class="benefit-list animate-in delay-3">
				<div class="benefit">
					<div class="benefit-icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>
					</div>
					<div>
						<strong>Role-based access</strong>
						<span>Control who can commit, push, or share repositories.</span>
					</div>
				</div>
				<div class="benefit">
					<div class="benefit-icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>
					</div>
					<div>
						<strong>Scalable storage</strong>
						<span>From 10GB to enterprise-tier. Pay only for what you use.</span>
					</div>
				</div>
				<div class="benefit">
					<div class="benefit-icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
					</div>
					<div>
						<strong>Private repositories</strong>
						<span>Your proprietary assets stay private, encrypted at rest.</span>
					</div>
				</div>
			</div>
		</div>

		<div class="ent-right animate-in delay-2">
			<!-- Decorative org chart visual -->
			<div class="org-visual">
				<div class="org-hub">
					<svg viewBox="0 0 24 24" fill="currentColor" class="org-hub-icon"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
				</div>
				<div class="org-branch org-b1">
					<div class="org-node">🎨</div>
					<span>Design</span>
				</div>
				<div class="org-branch org-b2">
					<div class="org-node">🎬</div>
					<span>Motion</span>
				</div>
				<div class="org-branch org-b3">
					<div class="org-node">🎵</div>
					<span>Audio</span>
				</div>
				<div class="org-branch org-b4">
					<div class="org-node">📐</div>
					<span>3D</span>
				</div>
				<!-- connecting lines via CSS -->
				<svg class="org-lines" viewBox="0 0 300 300" fill="none" stroke="rgba(167,139,250,0.25)" stroke-width="1.5">
					<line x1="150" y1="75" x2="65" y2="180" />
					<line x1="150" y1="75" x2="125" y2="200" />
					<line x1="150" y1="75" x2="175" y2="200" />
					<line x1="150" y1="75" x2="235" y2="180" />
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
.enterprise {
	width: 100vw;
	height: auto;
	min-height: 100dvh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #0B0B0F;
	position: relative;
	overflow: hidden;
	padding: 80px 0;
}

.enterprise::before {
	content: '';
	position: absolute;
	top: 0; right: 0;
	width: 60%;
	height: 100%;
	background: radial-gradient(ellipse at 80% 40%, rgba(109,40,217,0.08) 0%, transparent 60%);
	pointer-events: none;
}

.ent-inner {
	max-width: 1100px;
	width: 100%;
	padding: 0 24px;
	display: flex;
	align-items: center;
	gap: 60px;
}

@media (max-width: 900px) {
	.ent-inner {
		flex-direction: column;
		text-align: center;
		gap: 64px;
	}
	.ent-sub {
		margin-left: auto;
		margin-right: auto;
	}
	.benefit {
		text-align: left;
	}
}

.ent-left { flex: 1; }

.section-label {
	font-family: 'Inter', sans-serif;
	font-size: 11px;
	font-weight: 500;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: rgba(167,139,250,0.70);
	margin-bottom: 16px;
}

.ent-title {
	font-family: 'Bricolage Grotesque', sans-serif;
	font-size: clamp(28px, 6vw, 50px);
	font-weight: 700;
	line-height: 1.15;
	letter-spacing: -1px;
	color: #fff;
	margin: 0 0 18px 0;
}

@media (max-width: 768px) {
	.ent-title br {
		display: none;
	}
}

.ent-sub {
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	line-height: 1.7;
	color: rgba(255,255,255,0.42);
	margin: 0 0 32px 0;
	max-width: 440px;
}

.benefit-list {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.benefit {
	display: flex;
	align-items: flex-start;
	gap: 14px;
}

.benefit-icon {
	width: 36px;
	height: 36px;
	border-radius: 10px;
	background: rgba(109,40,217,0.12);
	border: 1px solid rgba(167,139,250,0.15);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	color: #A78BFA;
}

.benefit-icon svg { width: 18px; height: 18px; }

.benefit div { display: flex; flex-direction: column; gap: 3px; padding-top: 2px; }

.benefit strong {
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 600;
	color: rgba(255,255,255,0.85);
}

.benefit span {
	font-family: 'Inter', sans-serif;
	font-size: 13px;
	color: rgba(255,255,255,0.38);
	line-height: 1.5;
}

/* Right: org visual */
.ent-right {
	flex: 0 0 300px;
	display: flex;
	justify-content: center;
}

@media (max-width: 480px) {
	.ent-right {
		transform: scale(0.85);
	}
}

.org-visual {
	position: relative;
	width: 300px;
	height: 300px;
}

.org-lines {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
}

.org-hub {
	position: absolute;
	top: 30px;
	left: 50%;
	transform: translateX(-50%);
	width: 60px;
	height: 60px;
	border-radius: 18px;
	background: linear-gradient(135deg, rgba(109,40,217,0.25), rgba(167,139,250,0.15));
	border: 1px solid rgba(167,139,250,0.25);
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 40px rgba(109,40,217,0.20);
}

.org-hub-icon {
	width: 24px;
	height: 24px;
	fill: none;
	stroke: #A78BFA;
	stroke-width: 2;
}

.org-branch {
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
}

.org-node {
	width: 48px;
	height: 48px;
	border-radius: 14px;
	background: rgba(255,255,255,0.04);
	border: 1px solid rgba(255,255,255,0.08);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 22px;
}

.org-branch span {
	font-family: 'Inter', sans-serif;
	font-size: 11px;
	color: rgba(255,255,255,0.35);
}

.org-b1 { top: 150px; left: 20px; }
.org-b2 { top: 170px; left: 95px; }
.org-b3 { top: 170px; left: 170px; }
.org-b4 { top: 150px; left: 230px; }
</style>
