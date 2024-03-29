<script lang="ts">
	export let quote: string;
	export let author: string;
	export let photo: string = '';
</script>

<div
	class="flex min-h-32 flex-col justify-between rounded-lg bg-white bg-opacity-20 p-4 shadow-lg
lg:h-52"
>
	<div
		class="mb-4 text-pretty text-lg
		md:text-xl
		lg:text-2xl"
	>
		{quote}
	</div>
	{#if photo}
		<img src={photo} alt="The testimonial author" class="mb-4 h-16 w-16 rounded-full" />
	{/if}
	<div class="text-right text-lg text-gray-500 lg:mr-10">—{author}</div>
</div>

<style>
	.bg-white {
		background-color: rgba(255, 255, 255, 0.5);
	}
</style>
