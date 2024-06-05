<script lang="ts">
	import { getModalStore, type ModalComponent } from '@skeletonlabs/skeleton';
	import ImageModal from './ImageModal.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
	import imageData from '$lib/data/gallery';
	const modalComponent: ModalComponent = { ref: ImageModal };

	const modalStore = getModalStore();

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Hammer Point HOA - Gallery</title>
</svelte:head>

<div class="mb-4 flex h-full flex-col">
	{#if mounted}
		<div
			class="card variant-glass-surface mx-auto w-full bg-paper-darker bg-opacity-20 px-4 pt-28
						md:mt-28 md:w-[90vw] md:p-8"
			in:fade={{ duration: 800, easing: sineIn, delay: 100 }}
		>
			<h1 class="h1 text-center font-semibold">Gallery</h1>
			<div class="mt-2 text-center">
				<p>
					The photos below were taken by your neighbors and highlight the beuaty of Hammer Point.
				</p>
				<p>
					If you'd like to submit photos, please email them to <a
						class="anchor"
						href="mailto:hammerpointhoa@gmail.com">hammerpointhoa@gmail.com</a
					>
				</p>
				<div class="relative mt-8 flex w-full flex-row flex-wrap justify-center gap-8">
					{#each imageData as image}
						<div class="relative">
							<button
								on:click={() => {
									console.log(image.src);
									modalStore.trigger({
										type: 'component',
										component: modalComponent,
										image: image.src
									});
								}}
							>
								{#if image.enhancedImage}
									<enhanced:img
										class="h-96 w-96 rounded-xl border-2 border-primary-700 object-cover"
										src={image.enhancedImage}
									/>
								{:else}
									<img
										class="h-96 w-96 rounded-xl border-2 border-primary-700 object-cover"
										src={image.src}
										alt=""
									/>
								{/if}
							</button>
							{#if image.photographer}
								<div
									class="absolute -bottom-3 right-1 -z-10 rounded-b-md bg-paper-light px-0.5 text-sm"
								>
									{image.photographer}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
