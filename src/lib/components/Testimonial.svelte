<script lang="ts">
	export let quote: string;
	export let author: string;
	export let photo: string = '';
</script>

<div class="bg-white bg-opacity-20 rounded-lg p-4 shadow-lg h-52 flex flex-col justify-between">
	<div class="text-2xl font-bold mb-4 italic text-pretty">{quote}</div>
	{#if photo}
		<img src={photo} alt="The testimonial author" class="w-16 h-16 rounded-full mb-4" />
	{/if}
	<div class="text-lg text-right mr-10 text-gray-500">—{author}</div>
</div>

<style>
	.bg-white {
		background-color: rgba(255, 255, 255, 0.5);
	}
</style>
