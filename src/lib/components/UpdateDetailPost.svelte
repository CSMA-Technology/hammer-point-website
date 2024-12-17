<script lang="ts">
	interface Props {
		title?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
	}

	let { title, children }: Props = $props();
</script>

<h1 class="h2 mb-2 text-center max-md:top-1">{@render title?.()}</h1>
<div class="card variant-glass-secondary bg-paper-light p-4 sm:p-6">
	<div
		class="flex flex-col gap-2 hyphens-auto text-justify
  max-sm:text-sm"
	>
		{@render children?.()}
	</div>
</div>
