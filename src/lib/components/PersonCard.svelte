<script lang="ts">
	export let name: string;
	export let title: string;
	export let photo: string = '';
</script>

<div
	class="rounded-lg bg-paper p-4 opacity-95 shadow-lg ring-1 ring-tertiary-400
	xs:w-80"
>
	<div
		class="flex flex-row flex-wrap items-center justify-center
		xs:flex-nowrap
		xs:justify-start"
	>
		{#if photo}
			<img src={photo} alt="" class="mx-auto mb-4 h-28 w-28 rounded-full object-cover" />
		{/if}
		<div class="ml-2">
			<div
				class="mb-1 text-pretty text-center font-bold
				xs:text-left
				xs:text-2xl"
			>
				{name}
			</div>
			<div
				class="text-pretty text-center font-semibold italic text-tertiary-500
				xs:text-left
				xs:text-xl"
			>
				{title}
			</div>
		</div>
	</div>
</div>
