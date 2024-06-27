<script lang="ts" context="module">
	/**
	 * Transforms an array of image sources into an array of objects with `src` and `alt` properties.
	 * Used when a series of photos will have the same alt text.
	 * @param sources - An array of image sources.
	 * @param altText - The alt text for the images.
	 */
	export const applyAltText = (sources: string[], altText: string = '') =>
		sources.map((src) => ({ src, alt: altText }));
</script>

<script lang="ts">
	import { getModalStore, type ModalComponent } from '@skeletonlabs/skeleton';
	import ImageModal from '$lib/components/ImageModal.svelte';
	const modalComponent: ModalComponent = { ref: ImageModal };

	const modalStore = getModalStore();
	export let photos: { src: string; alt?: string }[];
</script>

<div class="flex flex-row flex-wrap justify-around gap-2 max-sm:justify-center">
	{#each photos as { src, alt }}
		<button
			on:click={() => {
				modalStore.trigger({
					type: 'component',
					component: modalComponent,
					image: src
				});
			}}
		>
			<img {src} alt={alt ?? ''} class="h-44 w-44 rounded-md max-sm:h-32 max-sm:w-32" />
		</button>
	{/each}
</div>
