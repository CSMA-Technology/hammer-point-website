<script lang="ts">
	import '../app.postcss';
	import { AppShell, Modal } from '@skeletonlabs/skeleton';
	import AppBar from '$lib/components/AppBar.svelte';

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
		<AppBar />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<div class="bg-tertiary-500 text-white text-center p-4">
			<p class="text-sm">&copy; 2024 Hammer Point Owners Association</p>
		</div>
	</svelte:fragment>
</AppShell>
