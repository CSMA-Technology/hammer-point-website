<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<img
		src={$modalStore[0]?.image}
		class="max-h-[90vh] max-w-[90%] overflow-hidden shadow-xl rounded-container-token"
		alt="Example"
	/>
{/if}
