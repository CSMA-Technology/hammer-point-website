<script lang="ts">
	import '../app.postcss';
	import { AppShell, Modal } from '@skeletonlabs/skeleton';
	import AppBar from '$lib/components/AppBar.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, initializeStores } from '@skeletonlabs/skeleton';
	import { beforeNavigate, onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	if (browser) {
		beforeNavigate(() => {
			document.getElementById('page')?.scrollTo(0, 0);
		});
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

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-94P7CQP6R1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-94P7CQP6R1');
	</script>
</svelte:head>

<Modal />

<AppShell>
	{#snippet header()}
	
			<AppBar />
		
	{/snippet}
	<!-- Page Route Content -->
	{@render children?.()}
	{#snippet pageFooter()}
	
			<div class="bg-tertiary-500 p-4 text-center text-white">
				<p class="text-sm">&copy; 2024 Hammer Point Owners Association</p>
			</div>
		
	{/snippet}
</AppShell>
