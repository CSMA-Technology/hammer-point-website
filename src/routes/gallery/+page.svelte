<script lang="ts">
	import { getModalStore, type ModalComponent } from '@skeletonlabs/skeleton';
	import ImageModal from '$lib/components/ImageModal.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
	import imageData, { categoryMap } from '$lib/data/gallery';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/state';
	const modalComponent: ModalComponent = { ref: ImageModal };

	const modalStore = getModalStore();

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});

	let selectedCategory = $derived(page.url.searchParams.get('category'));
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
					The photos below were taken by your neighbors and highlight the beauty of Hammer Point.
				</p>
				<p>
					If you'd like to submit photos, please email them to <a
						class="anchor"
						href="mailto:hammerpointhoa@gmail.com">hammerpointhoa@gmail.com</a
					>
				</p>
				<TabGroup>
					{#each Object.keys(categoryMap) as category}
						<TabAnchor href={`?category=${category}`} selected={selectedCategory === category}
							>{category}</TabAnchor
						>
					{/each}
				</TabGroup>
				<div class="relative mt-8 flex w-full flex-row flex-wrap justify-center gap-8">
					{#each imageData as image, index}
						<div class="relative">
							<button
								onclick={() => {
									modalStore.trigger({
										type: 'component',
										component: modalComponent,
										image: image.src
									});
								}}
							>
								{#if image.enhancedImage}
									<enhanced:img
										loading={index < 10 ? 'eager' : 'lazy'}
										class="h-96 w-96 rounded-xl border-2 border-primary-700 object-cover"
										src={image.enhancedImage}
										alt={`Gallery image by ${image.photographer}`}
									/>
								{:else}
									<img
										loading={index < 10 ? 'eager' : 'lazy'}
										class="h-96 w-96 rounded-xl border-2 border-primary-700 object-cover"
										src={image.src}
										alt={`Gallery image by ${image.photographer}`}
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
