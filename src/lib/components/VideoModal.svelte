<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<video
		controls
		autoplay
		muted
		class="max-h-[90vh] max-w-[90%] overflow-hidden shadow-xl rounded-container-token"
	>
		<source src={$modalStore[0]?.image} />
	</video>
{/if}
