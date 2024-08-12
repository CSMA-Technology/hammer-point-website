<script lang="ts">
	// import Testimonial from '$lib/components/Testimonial.svelte';
	import TestimonialContainer from '$lib/components/TestimonialContainer.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
	import Rope from '$lib/components/Rope.svelte';
	import testimonials from '$lib/data/testimonials';

	let mounted = false;
	onMount(() => {
		document.getElementById('content')?.classList.add('customBlur');
		mounted = true;
	});
</script>

<svelte:head>
	<title>Hammer Point HOA</title>
</svelte:head>

<div id="content" class="mx-2 flex h-full flex-col justify-between lg:px-10">
	<div class="flex h-full min-h-[720px] flex-col justify-between">
		{#if mounted}
			<div
				class="mx-auto my-auto mb-4 flex w-full flex-row flex-wrap justify-between gap-y-4 pt-24
				lg:max-w-7xl xl:py-32"
			>
				<div
					in:fade={{ duration: 800, easing: sineIn, delay: 100 }}
					class="card variant-glass-secondary mx-auto h-fit max-w-2xl p-4 shadow
					xl:mx-0"
				>
					<p class="h1 mx-auto w-fit text-center">Welcome to Hammer Point</p>
					<div class="mx-auto max-w-xl">
						<Rope />
					</div>
					<p class="mt-3 text-pretty text-center text-xl">
						The Hammer Point Owners Association proudly maintains and improves this beautiful
						community. We are a volunteer HOA that works to keep our neighborhood safe, clean, and
						beautiful.
					</p>
					<div
						class="mt-4 flex w-full flex-row flex-wrap justify-center gap-y-2 opacity-70 max-md:justify-around md:gap-16"
					>
						<a href="/about" class="variant-filled-primary btn font-bold">Learn More</a>
						<a href="/pay-dues" class="variant-filled-tertiary btn font-bold">Contribute</a>
					</div>
					<h2 class="h2 mt-6 text-center">Community Resources</h2>
					<!-- <img src="$lib/assets/rope.png" alt="" class="px-10 my-1" /> -->
					<p class="mt-3 text-pretty text-center text-xl">
						We maintain an up-to-date list of useful tools, contacts, and local information for
						Hammer Point residents. To learn more, check out the <a class="anchor" href="/resources"
							>resources</a
						>
						page.
					</p>
				</div>
				<div
					in:fade={{ duration: 800, easing: sineIn, delay: 100 }}
					class="card variant-glass-secondary mx-auto h-fit max-w-2xl p-4 shadow
					xl:mx-0 xl:max-w-sm"
				>
					<h2 class="h1 text-center">News and Notes</h2>
					<Rope />
					<ul class="my-4 list-inside space-y-3 text-xl" style="list-style-type: '📰 ';">
						<li>
							Don't miss the <em>Meet the Candidates Mixer</em> and
							<em>Upper Keys Candidate Forum</em>
							on August 13th and October 10th. Check the
							<a class="anchor" href="updates">updates</a> page for more information.
						</li>
						<li>
							The county is giving away free compost bags on 9/7 and 10/5. You can contribute to the
							beautification project by donating a bag! Read more about it on the <a
								class="anchor"
								href="updates">updates</a
							> page.
						</li>
						<li>
							Your neighbors have been taking wonderful photos of the community. Check them out in
							our <a class="anchor" href="gallery">gallery</a>!
						</li>
						<!-- <li>
							To stay up to date with community news and events, head over to the <a
								class="anchor"
								href="updates">updates</a
							> page.
						</li> -->
						<!-- <li>
							Learn more about the Hammer Point HOA and your board members on the <a
								class="anchor"
								href="about">about</a
							> page.
						</li> -->
					</ul>
				</div>
			</div>
			<div class="mb-4 w-full">
				<div
					in:fade={{ duration: 800, easing: sineIn, delay: 100 }}
					class="card variant-glass-secondary mx-auto w-full max-w-2xl grow !border-none p-4 shadow
					xs:p-8
					xl:max-w-7xl"
				>
					<h2 class="h1 text-center">What Your Neighbors Are Saying</h2>
					<div class="mx-auto mt-2 max-w-3xl">
						<Rope />
					</div>
					<TestimonialContainer count={3} {testimonials} />
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Overide skeleton glass variant */
	.variant-glass-secondary {
		background-color: rgb(var(--color-secondary-500) / 0.65);
	}

	#content::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -10;
		background-image: url(/sunset.jpeg);
		background-repeat: no-repeat;
		background-size: cover;
		transform: scale(1.005);
		filter: none;
		background-position: center;
		transition-property: filter;
		transition-timing-function: ease-in;
		transition-duration: 800ms;
		animation-name: slow-zoom;
		animation-delay: 1s;
		animation-duration: 60s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	@media (prefers-reduced-motion: reduce) {
		#content::before {
			animation: none;
		}
	}

	@media (max-width: 1280px) {
		#content::before {
			animation: none;
		}
	}

	@keyframes slow-zoom {
		0% {
			transform: scale(1.005);
		}
		100% {
			transform: scale(1.05);
		}
	}

	:global(.customBlur::before) {
		filter: blur(4px) grayscale(0.5) !important;
	}
</style>
