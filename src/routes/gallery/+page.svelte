<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const imageModules = import.meta.glob<{ default: string }>('$lib/assets/gallery/*');
	let imageUrls: string[] = [];
	Promise.all(Object.values(imageModules).map((module) => module())).then((images) => {
		imageUrls = images.map((image) => image.default);
	});
</script>

<div class="flex flex-col h-full">
	<div class="mt-28 mx-auto p-8 card variant-glass-surface w-[90vw]">
		<h1 class="h1 text-center font-semibold">Gallery</h1>
		<div class="text-center mt-4">
			<p>The photos below were taken by your neighbors and highlight the beuaty of Hammer Point.</p>
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
								type: 'alert',
								image: src,
								buttonTextCancel: 'Close'
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
</div>
