<script lang="ts">
	interface Props {
		label?: import('svelte').Snippet;
		value?: import('svelte').Snippet;
	}

	let { label, value }: Props = $props();
</script>

<div class="my-1.5">
	<dt class="h5 mr-1 inline align-top leading-6">{@render label?.()}:</dt>
	<dd class="inline-block break-all align-top leading-6">{@render value?.()}</dd>
</div>
