<script lang="ts">
	import NewsletterList from './NewsletterList.svelte';
	import UpdatePost from './UpdatePost.svelte';
	import westminster from '$lib/assets/westminster.png';
	import { fade } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
	import { onMount } from 'svelte';

	type Post = {
		title: string;
		description: string;
		image?: string;
	};
	const pinnedPosts: Post[] = [
		{
			title: 'Community Calendar - March 2024',
			description:
				'Our community calendar includes pickup schedules, upcoming local events, and the HOA meeting schedule. To view and download the calendar, <a class="anchor" href="/calendar">click here</a>.'
		}
	];
	const updatePosts: Post[] = [
		{
			title: 'Next HOA meeting will be 4/1',
			description:
				'We will be meeting on 4/1 to discuss the upcoming community yard sale and the various construction projects around the neighborhood. We will also be holding elections for the new Party Planning Committee.'
		},
		{
			title: 'Road Work Starting 3/25',
			image: westminster,
			description:
				'Please be aware that Westminster Ave. will be closed on 3/25 for road work. The city will be filling two pot holes and repainting the crosswalks.'
		}
	];
	let mounted = false;
	onMount(() => {
		setTimeout(() => {
			document.getElementById('content')?.classList.add('customBlur');
			mounted = true;
		}, 100);
	});
</script>

<svelte:head>
	<title>Hammer Point HOA - Updates</title>
</svelte:head>

{#if mounted}
	<div
		class="flex flex-col-reverse gap-4 justify-center mt-28 mx-2 mb-4
  lg:flex-row lg:mx-0"
		in:fade={{ duration: 800, easing: sineIn }}
	>
		<div
			class="card variant-glass-secondary p-6 shadow-md
lg:w-[20vw] h-fit"
		>
			<h2 class="h2 text-center">Pelican Press</h2>
			<p>
				The Pelican Press is our community's own volunteer newsletter. Check out recent editions by
				clicking the links below!
			</p>
			<NewsletterList />
		</div>
		<div
			class="card max-w-5xl variant-glass-secondary p-1 shadow-md
lg:p-6 lg:w-[40vw]"
		>
			<h1
				class="h1 text-center mb-6 mt-2
lg:mt-0"
			>
				Community Updates
			</h1>
			<!-- Pinned Posts -->
			<div class="flex flex-col gap-4 rounded-md variant-ringed-surface p-3">
				<h2
					class="h3 -translate-y-9 -translate-x-1 fixed z-10 bg-primary-300 rounded-lg p-1 w-fit variant-ringed-surface"
				>
					Pinned Items
				</h2>
				{#each pinnedPosts as post}
					<UpdatePost>
						<svelte:fragment slot="title">{post.title}</svelte:fragment>
						<svelte:fragment slot="image">
							{#if post.image}
								<img src={post.image} alt="" class="rounded-2xl" />
							{:else}
								<img src="$lib/assets/hammer-point-logo.svg" alt="" />
							{/if}
						</svelte:fragment>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						<svelte:fragment slot="description">{@html post.description}</svelte:fragment>
					</UpdatePost>
				{/each}
			</div>
			<!-- Recent Posts -->
			<div class="flex flex-col gap-4 rounded-md variant-ringed-surface p-3 mt-10">
				<h2
					class="h3 -translate-y-9 -translate-x-1 fixed z-10 bg-primary-300 rounded-lg p-1 w-fit variant-ringed-surface"
				>
					Recent Updates
				</h2>
				{#each updatePosts as post}
					<UpdatePost>
						<svelte:fragment slot="title">{post.title}</svelte:fragment>
						<svelte:fragment slot="image">
							{#if post.image}
								<img src={post.image} alt="" class="rounded-2xl" />
							{:else}
								<img src="$lib/assets/hammer-point-logo.svg" alt="" />
							{/if}
						</svelte:fragment>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						<svelte:fragment slot="description">{@html post.description}</svelte:fragment>
					</UpdatePost>
				{/each}
			</div>
		</div>
		<div
			class="flex flex-col gap-4 mx-2
lg:max-w-lg lg:w-[20vw] lg:mx-0"
		>
			<div class="card ring-1 variant-glass-secondary mx-auto p-6 shadow-md">
				<h2 class="h2 text-center">Stay Informed!</h2>
				<p>
					Subscribe to the Pelican Press and get the latest edition straight to your inbox right
					when it is published.
				</p>
				<form>
					<div class="flex flex-row gap-1 mt-3">
						<input
							aria-label="Email Address"
							type="email"
							class="input"
							placeholder="Email Address"
						/>
						<button class="btn variant-filled-primary">Subscribe</button>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}
