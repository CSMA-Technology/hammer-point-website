<script lang="ts">
	interface Props {
		quote: string;
		author: string;
		photo?: string;
	}

	let { quote, author, photo = '' }: Props = $props();
</script>

<div
	class="relative flex h-52 flex-col justify-between rounded-lg bg-white bg-opacity-20 p-4 shadow-lg
	md:h-40
	xl:h-52"
>
	<div
		class="mb-4 text-pretty text-base
		xs:text-lg
		md:text-xl
		xl:text-2xl"
	>
		{quote}
	</div>
	{#if photo}
		<img src={photo} alt="The testimonial author" class="mb-4 h-16 w-16 rounded-full" />
	{/if}
	<div
		class="absolute bottom-2 right-3 text-right text-sm text-gray-500
		sm:text-lg
		"
	>
		—{author}
	</div>
</div>

<style>
	.bg-white {
		background-color: rgba(255, 255, 255, 0.5);
	}
</style>
