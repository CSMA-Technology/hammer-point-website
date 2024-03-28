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

<div class="flex flex-col h-full mb-4">
	{#if mounted}
		<div
			class=" mx-auto card variant-glass-surface bg-paper-darker bg-opacity-20 w-full pt-24 px-4
	md:w-[90vw] md:mt-28 md:p-8"
			in:fade={{ duration: 800, easing: sineIn }}
		>
			<h1 class="h1 text-center font-semibold">Gallery</h1>
			<div class="text-center mt-4">
				<p>
					The photos below were taken by your neighbors and highlight the beuaty of Hammer Point.
				</p>
				<p>
					If you'd like to submit photos, please email them to <a
						class="anchor"
						href="mailto:contact@hammerpointhoa.org">contact@hammerpointhoa.org</a
					>
				</p>
				<div class="flex flex-row flex-wrap gap-8 w-full justify-center mt-8">
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
								class="w-96 h-96 object-cover border-primary-700 border-2 rounded-xl"
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
