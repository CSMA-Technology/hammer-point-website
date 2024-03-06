<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Modal } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, initializeStores } from '@skeletonlabs/skeleton';
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	if (browser) {
		onNavigate((navigation) => {
			if (!document.startViewTransition) return;

			return new Promise((resolve) => {
				document.startViewTransition(async () => {
					resolve();
					await navigation.complete;
				});
			});
		});
	}
</script>

<Modal />

<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			border="rounded-full mx-1 mb-[-100%]"
			background="variant-glass-tertiary shadow-sm"
			padding="mx-auto mt-2 w-fit px-2 py-2"
			gap="md:gap-8"
		>
			<svelte:fragment slot="lead">
				<a href="/">
					<!-- <strong class="text-xl uppercase">Hammer Point Owners Association</strong> -->
					<enhanced:img
						class="min-h-[65px] min-w-[200px]"
						width="200"
						height="65"
						src="$lib/assets/hammer-point-logo-horizontal.svg"
						alt="Hammer Point Owners Association"
					/>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<nav class="list-nav flex gap-0">
					<a
						class="anchor no-underline text-tertiary-500 font-semibold !px-2"
						href="/about"
						rel="noreferrer"
					>
						About
					</a>
					<a
						class="anchor no-underline text-tertiary-500 font-semibold !px-2"
						href="/resources"
						rel="noreferrer"
					>
						Resources
					</a>
					<a
						class="anchor no-underline text-tertiary-500 font-semibold !px-2"
						href="/gallery"
						rel="noreferrer"
					>
						Gallery
					</a>
					<a
						class="anchor no-underline text-tertiary-500 font-semibold !px-2"
						href="/newsletter"
						rel="noreferrer"
					>
						Newsletter
					</a>
					<a
						class="anchor no-underline text-tertiary-500 font-semibold !px-2"
						href="/pay-dues"
						rel="noreferrer"
					>
						Pay Dues
					</a>
				</nav>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<div class="bg-tertiary-500 text-white text-center p-4">
			<p class="text-sm">&copy; 2024 Hammer Point Owners Association</p>
		</div>
	</svelte:fragment>
</AppShell>
