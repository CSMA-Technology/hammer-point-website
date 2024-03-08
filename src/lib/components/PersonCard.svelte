<script lang="ts">
	export let name: string;
	export let title: string;
	export let photo: string = '';
</script>

<div class="bg-surface-300 opacity-95 ring-1 ring-tertiary-400 rounded-lg p-4 shadow-lg w-80">
	<div class="flex flex-row items-center">
		{#if photo}
			<img src={photo} alt="" class="w-28 h-28 rounded-full mb-4 object-cover" />
		{/if}
		<div class="ml-2">
			<div class="text-2xl font-bold mb-1 text-pretty">{name}</div>
			<div class="text-xl text-center text-tertiary-500 italic font-semibold">{title}</div>
		</div>
	</div>
</div>
