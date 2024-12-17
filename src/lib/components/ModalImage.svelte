<script lang="ts">
	import { getModalStore, type ModalComponent } from '@skeletonlabs/skeleton';
	import ImageModal from '$lib/components/ImageModal.svelte';
	const modalComponent: ModalComponent = { ref: ImageModal };

	const modalStore = getModalStore();

	let { src, alt, class: className } = $props();
	
</script>

<button
	onclick={() => {
		modalStore.trigger({
			type: 'component',
			component: modalComponent,
			image: src
		});
	}}
>
	<img {src} alt={alt ?? ''} class={className} />
</button>
