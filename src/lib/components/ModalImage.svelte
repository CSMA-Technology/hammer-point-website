<script lang="ts">
	import { getModalStore, type ModalComponent } from '@skeletonlabs/skeleton';
	import ImageModal from '$lib/components/ImageModal.svelte';
	const modalComponent: ModalComponent = { ref: ImageModal };

	const modalStore = getModalStore();

	export let src;
	export let alt;
	let className;
	export { className as class };
</script>

<button
	on:click={() => {
		modalStore.trigger({
			type: 'component',
			component: modalComponent,
			image: src
		});
	}}
>
	<img {src} alt={alt ?? ''} class={className} />
</button>
