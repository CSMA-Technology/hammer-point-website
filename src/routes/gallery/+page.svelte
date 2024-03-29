<script lang="ts">
	import { getModalStore, type ModalComponent } from '@skeletonlabs/skeleton';
	import ImageModal from './ImageModal.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';

	const modalComponent: ModalComponent = { ref: ImageModal };

	const modalStore = getModalStore();

	const imageModules = import.meta.glob<{ default: string }>('$lib/assets/gallery/*');
	let imageUrls: string[] = [];
	Promise.all(Object.values(imageModules).map((module) => module())).then((images) => {
		imageUrls = images.map((image) => image.default);
	});

	let mounted = false;
	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>Hammer Point HOA - Gallery</title>
</svelte:head>

<div class="mb-4 flex h-full flex-col">
	{#if mounted}
		<div
			class=" card variant-glass-surface mx-auto w-full bg-paper-darker bg-opacity-20 px-4 pt-24
	md:mt-28 md:w-[90vw] md:p-8"
			in:fade={{ duration: 800, easing: sineIn }}
		>
			<h1 class="h1 text-center font-semibold">Gallery</h1>
			<div class="mt-4 text-center">
				<p>
					The photos below were taken by your neighbors and highlight the beuaty of Hammer Point.
				</p>
				<p>
					If you'd like to submit photos, please email them to <a
						class="anchor"
						href="mailto:contact@hammerpointhoa.org">contact@hammerpointhoa.org</a
					>
				</p>
				<div class="mt-8 flex w-full flex-row flex-wrap justify-center gap-8">
					{#each imageUrls as src}
						<button
							on:click={() => {
								modalStore.trigger({
									type: 'component',
									component: modalComponent,
									image: src
								});
							}}
							><img
								class="h-96 w-96 rounded-xl border-2 border-primary-700 object-cover"
								{src}
								alt=""
							/></button
						>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
