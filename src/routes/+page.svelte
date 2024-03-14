<script lang="ts">
	// import Testimonial from '$lib/components/Testimonial.svelte';
	import TestimonialContainer from '$lib/components/TestimonialContainer.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';

	let mounted = false;
	onMount(() => {
		setTimeout(() => {
			document.getElementById('content')?.classList.add('customBlur');
			mounted = true;
		}, 100);
	});
</script>

<div id="content" class="flex flex-col h-full justify-between">
	<div class="min-h-[720px] bg-cover bg-center h-full flex flex-col justify-between">
		{#if mounted}
			<div
				class="flex flex-row flex-wrap gap-y-4 justify-between px-6 pt-24 mb-4 mx-auto w-full my-auto
				lg:px-10 lg:py-32 lg:max-w-7xl"
			>
				<div
					class="flex flex-col gap-4 mx-auto
				lg:mx-0"
				>
					<div
						in:fade={{ duration: 800, easing: sineIn }}
						class="card variant-glass-secondary p-4 h-fit max-w-2xl
						lg:max-w-xl"
					>
						<p class="h2 font-semibold text-center">Welcome to Hammer Point</p>
						<img src="$lib/assets/rope.png" alt="" class="px-10 my-1" />
						<p class="mt-3 font-semibold text-lg text-pretty text-center">
							The Hammer Point Owners Accociation proudly maintains and improves this beautiful
							community. We are a volunteer HOA that works to keep our neighborhood safe, clean, and
							beautiful.
						</p>
						<div
							class="flex flex-row w-full justify-center max-md:justify-around md:gap-16 mt-4 opacity-70"
						>
							<a href="/about" class="btn font-bold variant-filled-primary">Learn More</a>
							<a href="/pay-dues" class="btn font-bold variant-filled-tertiary">Contribute</a>
						</div>
					</div>
					<div
						in:fade={{ duration: 800, easing: sineIn }}
						class="card variant-glass-secondary p-4 h-fit max-w-2xl
						lg:max-w-xl"
					>
						<p class="h2 font-semibold text-center">Community Resources</p>
						<img src="$lib/assets/rope.png" alt="" class="px-10 my-1" />
						<p class="mt-3 font-semibold text-lg text-pretty text-center">
							We maintain an up-to-date list of useful tools, contacts, and local information for
							Hammer Point residents. To learn more, check out the <a
								class="anchor"
								href="/resources">resources</a
							>
							page.
						</p>
					</div>
				</div>
				<div
					in:fade={{ duration: 800, easing: sineIn }}
					class="card variant-glass-secondary p-4 h-fit mx-auto max-w-2xl
					lg:max-w-sm lg:mx-0"
				>
					<h2 class="h2 font-semibold text-center">News and Notes</h2>
					<img src="$lib/assets/rope.png" alt="" class="px-10 my-1" />
					<ul
						class="list-inside m-4 text-lg font-semibold space-y-3"
						style="list-style-type: '📰';"
					>
						<li>
							Someone saw a manatee! Check out the picture in the <a class="anchor" href="gallery"
								>gallery</a
							>!
						</li>
						<li>
							We're looking for volunteers to help with the <a class="anchor" href="newsletter"
								>newsletter</a
							>!
						</li>
						<li>
							There are reports of someone not picking up after their dog. A friendly reminder that
							the penalty for this offense is death.
						</li>
					</ul>
				</div>
			</div>
			<div
				class="px-6 lg:p-10 mb-4 mx-auto
			"
			>
				<div
					in:fade={{ duration: 800, easing: sineIn }}
					class="!border-none grow p-8 mx-auto card variant-glass-secondary w-full max-w-2xl
					lg:max-w-7xl"
				>
					<h2 class="h2 font-semibold text-center">What Your Neighbors Are Saying</h2>
					<TestimonialContainer
						count={3}
						testimonials={[
							{
								quote:
									'I love living in Hammer Point. The community is so friendly and the neighborhood is beautiful.',
								author: 'Jane Doe'
							},
							{
								quote: 'The HOA does a great job of keeping the neighborhood clean and safe.',
								author: 'Joe Shmoe'
							},
							{
								quote:
									"I've lived in Hammer Point for 10 years and I've never been happier. The HOA is a big part of that.",
								author: 'John Smith'
							},
							{
								quote:
									"I've lived up and down the keys, and the HOA here is what makes the difference!",
								author: 'Brad Johnson'
							},
							{
								quote: "The community is clean, safe, and friendly. I'm proud to be a part of it.",
								author: 'Carrie Johnson'
							}
						]}
					/>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Overide skeleton glass variant */
	.variant-glass-secondary {
		background-color: rgb(var(--color-secondary-500) / 0.5);
	}

	#content::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -10;
		background-image: url($lib/assets/sunset.jpeg);
		background-repeat: no-repeat;
		background-size: cover;
		transform: scale(1.005);
		filter: none;
		background-position: center;
		transition-property: filter;
		transition-timing-function: ease-in;
		transition-duration: 800ms;
	}

	:global(.customBlur::before) {
		filter: blur(4px) grayscale(0.5) !important;
	}
</style>
