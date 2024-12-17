<script lang="ts">
	interface Props {
		heading?: import('svelte').Snippet;
		subtitle?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
	}

	let { heading, subtitle, children }: Props = $props();
</script>

<div
	class="rounded-lg bg-paper p-4 text-black opacity-95 shadow-lg ring-1 ring-tertiary-400
	lg:w-[30rem]"
>
	<h2 class="h2 text-center">{@render heading?.()}</h2>
	<p class="w-full text-center italic">{@render subtitle?.()}</p>
	{@render children?.()}
</div>
