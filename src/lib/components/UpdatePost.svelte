<script lang="ts">
	interface Props {
		image?: import('svelte').Snippet;
		title?: import('svelte').Snippet;
		description?: import('svelte').Snippet;
		details?: import('svelte').Snippet;
		video?: import('svelte').Snippet;
	}

	let {
		image,
		title,
		description,
		details,
		video
	}: Props = $props();
</script>

<div class="card bg-paper-light p-6 shadow-md">
	<div class="flex flex-row flex-wrap gap-4 xl:flex-nowrap">
		<div
			class="mx-auto
			xs:min-h-64 xs:w-64 xs:shrink-0"
		>
			<div class="flex h-full flex-col justify-center">
				{@render image?.()}
			</div>
		</div>
		<div class="">
			<h3 class="h3 mb-2">
				{@render title?.()}
			</h3>
			<p class="lg:text-base">
				{@render description?.()}
			</p>
			<p>
				{@render details?.()}
			</p>
			{@render video?.()}
		</div>
	</div>
</div>
