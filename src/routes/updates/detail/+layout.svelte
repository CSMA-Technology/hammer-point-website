<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="px-2">
	<div class="card variant-glass-secondary mx-auto mt-28 max-w-4xl px-2 py-6">
		<a
			class="variant-filled-tertiary btn btn-sm absolute
			max-sm:-top-2 max-sm:left-1"
			href="/updates">&lt;Back</a
		>
		{@render children?.()}
	</div>
</div>
