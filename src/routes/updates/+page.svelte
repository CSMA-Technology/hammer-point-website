<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import VideoModal from '$lib/components/VideoModal.svelte';
	import UpdatePost from '../../lib/components/UpdatePost.svelte';
	import { fade } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { submitFormToNetlify } from '$lib/utils';
	import { updatePosts, pinnedPosts, archivedPosts } from '$lib/data/updates';
	import { getModalStore, type ModalComponent } from '@skeletonlabs/skeleton';
	import ModalImage from '$lib/components/ModalImage.svelte';
	import { slide } from 'svelte/transition';

	const modalComponent: ModalComponent = { ref: VideoModal };

	const modalStore = getModalStore();

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});

	let isSubscribeFormSubmitting = $state(false);
	let didSubmitSubscribeForm = $state(false);
	let subscribeFormError = $state('');
	const handleSubscribeFormSubmit = async (event: Event) => {
		isSubscribeFormSubmitting = true;
		const form = event.target as HTMLFormElement;
		const error = await submitFormToNetlify(form);
		if (error) {
			subscribeFormError = error;
		} else {
			didSubmitSubscribeForm = true;
		}
		isSubscribeFormSubmitting = false;
	};

	let showArchived = $state(false);
</script>

<svelte:head>
	<title>Hammer Point HOA - Updates</title>
</svelte:head>

{#if mounted}
	<div
		class="mx-2 mb-4 mt-24 flex flex-col justify-center gap-4
  				md:px-6 lg:mx-0 lg:mt-28"
		in:fade={{ duration: 800, easing: sineIn, delay: 100 }}
	>
		<div
			class="card variant-glass-secondary mx-auto max-w-7xl p-1 shadow-md
					lg:p-6"
		>
			<h1
				class="h1 mb-2 mt-2 text-center md:mb-4
							lg:mt-0"
			>
				Community Updates
			</h1>
			<div
				class="card variant-glass-secondary mx-auto mb-8 w-fit px-2 py-4 text-center shadow-md ring-1 lg:px-6"
			>
				<h2 class="h3">Stay Informed!</h2>
				<p class="text-sm">
					Subscribe to our email list to get the latest community news straight to your inbox.
				</p>
				{#if !subscribeFormError}
					{#if !didSubmitSubscribeForm}
						<form onsubmit={preventDefault(handleSubscribeFormSubmit)} class="mx-auto">
							<input type="hidden" name="form-name" value="newsletter-subscribe" />
							<div class="mt-3 flex flex-row flex-wrap justify-center gap-1 sm:flex-nowrap">
								<input
									name="full_name"
									aria-label="Full Name"
									type="text"
									class="input border-paper-dark bg-paper-light"
									placeholder="Full Name"
								/>
								<input
									name="email"
									aria-label="Email Address"
									type="email"
									class="input border-paper-dark bg-paper-light"
									placeholder="Email Address"
								/>
								<button
									disabled={isSubscribeFormSubmitting}
									class="variant-filled-primary btn grow-[1]">Subscribe</button
								>
							</div>
						</form>
					{:else}
						<p class="card p-4 text-center text-lg text-success-500">Thank you for subscribing!</p>
					{/if}
				{:else}
					<p class="card p-4 text-center text-lg text-error-500">
						There was an error subscribing you to the newsletter. Please try again later.
					</p>
				{/if}
			</div>
			<!-- Pinned Posts -->
			{#if pinnedPosts.length}
				<div
					class="variant-ringed-surface relative flex flex-col gap-4 rounded-md p-3 ring-paper-darker"
				>
					<h2
						class="variant-ringed-surface h3 absolute z-10 w-fit -translate-x-1 -translate-y-9 rounded-lg bg-primary-300 p-1 ring-paper-darker"
					>
						Pinned Items
					</h2>
					{#each pinnedPosts as post}
						<UpdatePost>
							{#snippet title()}
								{post.title}
							{/snippet}
							{#snippet image()}
								{#if post.image}
									<ModalImage src={post.image} alt="" class="rounded-2xl" />
								{:else}
									<img src="$lib/assets/hammer-point-logo.svg" alt="" />
								{/if}
							{/snippet}
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{#snippet description()}
								{@html post.description}
							{/snippet}
							{#snippet video()}
								{#if post.video}
									{@const videoSrc = post.video.src}
									<button
										class="anchor mt-1"
										onclick={() => {
											modalStore.trigger({
												type: 'component',
												component: modalComponent,
												image: videoSrc
											});
										}}>{post.video.linkText}</button
									>
								{/if}
							{/snippet}
							{#snippet details()}
								{#if post.details}
									<a
										href={post.details.src}
										class="anchor"
										target={post.details.linkOpenInNewTab ? '_blank' : ''}
										>{post.details.linkText}</a
									>
								{/if}
							{/snippet}
						</UpdatePost>
					{/each}
				</div>
			{/if}
			<!-- Recent Posts -->
			<div
				class="variant-ringed-surface relative mt-10 flex flex-col gap-4 rounded-md p-3 ring-paper-darker"
			>
				<h2
					class="variant-ringed-surface h3 absolute z-10 w-fit -translate-x-1 -translate-y-9 rounded-lg bg-primary-300 p-1 ring-paper-darker"
				>
					Recent Updates
				</h2>
				{#each updatePosts as post}
					<UpdatePost>
						{#snippet title()}
							{post.title}
						{/snippet}
						{#snippet image()}
							{#if post.image}
								<ModalImage src={post.image} alt="" class="rounded-2xl" />
							{:else}
								<img src="$lib/assets/hammer-point-logo.svg" alt="" />
							{/if}
						{/snippet}
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{#snippet description()}
							{@html post.description}
						{/snippet}
						{#snippet video()}
							{#if post.video}
								{@const videoSrc = post.video.src}
								<button
									class="anchor mt-1 text-left"
									onclick={() => {
										modalStore.trigger({
											type: 'component',
											component: modalComponent,
											image: videoSrc
										});
									}}>{post.video.linkText}</button
								>
							{/if}
						{/snippet}
						{#snippet details()}
							{#if post.details}
								<a
									href={post.details.src}
									class="anchor"
									target={post.details.linkOpenInNewTab ? '_blank' : ''}>{post.details.linkText}</a
								>
							{/if}
						{/snippet}
					</UpdatePost>
				{/each}
			</div>
			<!-- Archive Section -->
			<div
				class="variant-ringed-surface relative mt-10 flex flex-col gap-4 rounded-md p-3 ring-paper-darker"
			>
				<h2
					class="variant-ringed-surface h3 absolute z-10 w-fit -translate-x-1 -translate-y-9 rounded-lg bg-primary-300 p-1 ring-paper-darker"
				>
					Archive
				</h2>
				<button
					class="variant-filled-primary btn mx-auto mt-2"
					onclick={() => (showArchived = !showArchived)}
				>
					{#if showArchived}Hide archived posts{:else}Show {archivedPosts.length} archived posts{/if}
				</button>
				{#if showArchived}
					<div
						class="flex flex-col gap-4"
						in:slide={{ duration: 300 }}
						out:slide={{ duration: 300 }}
					>
						{#each archivedPosts as post}
							<UpdatePost>
								{#snippet title()}
									{post.title}
								{/snippet}
								{#snippet image()}
									{#if post.image}
										<ModalImage src={post.image} alt="" class="rounded-2xl" />
									{:else}
										<img src="$lib/assets/hammer-point-logo.svg" alt="" />
									{/if}
								{/snippet}
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{#snippet description()}
									{@html post.description}
								{/snippet}
								{#snippet video()}
									{#if post.video}
										{@const videoSrc = post.video.src}
										<button
											class="anchor mt-1 text-left"
											onclick={() => {
												modalStore.trigger({
													type: 'component',
													component: modalComponent,
													image: videoSrc
												});
											}}>{post.video.linkText}</button
										>
									{/if}
								{/snippet}
								{#snippet details()}
									{#if post.details}
										<a
											href={post.details.src}
											class="anchor"
											target={post.details.linkOpenInNewTab ? '_blank' : ''}
											>{post.details.linkText}</a
										>
									{/if}
								{/snippet}
							</UpdatePost>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
