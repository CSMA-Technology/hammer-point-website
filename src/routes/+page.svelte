<script lang="ts">
	// import Testimonial from '$lib/components/Testimonial.svelte';
	import TestimonialContainer from '$lib/components/TestimonialContainer.svelte';
</script>

<div class="flex flex-col h-full">
	<div class=" min-h-[720px] bg-[url($lib/assets/sunset.jpeg)] bg-cover">
		<div class="flex flex-row flex-wrap gap-y-4 justify-between px-10 py-32 max-w-[100rem] mx-auto">
			<div class="card variant-glass-secondary p-4 max-w-xl h-fit">
				<p class="h2 font-semibold text-center">Welcome to Hammer Point</p>
				<img src="$lib/assets/rope.png" alt="" class="px-10 my-1" />
				<p class="mt-3 font-semibold text-lg text-pretty text-center">
					The Hammer Point Owners Accociation proudly maintains and improves this beautiful
					community. We are a volunteer HOA that works to keep our neighborhood safe, clean, and
					beautiful.
				</p>
				<div class="flex flex-row w-full justify-around mt-4 opacity-70">
					<a href="/about" class="btn variant-filled-secondary">Learn More</a>
					<a href="/resources" class="btn variant-filled-primary">Community Resources</a>
					<a href="/pay-dues" class="btn variant-filled-tertiary">Contribute</a>
				</div>
			</div>
			<div class="card variant-glass-secondary p-4 max-w-sm h-fit">
				<h2 class="h2 font-semibold text-center">News and Notes</h2>
				<img src="$lib/assets/rope.png" alt="" class="px-10 my-1" />
				<ul class="list-['📰'] list-inside m-4 text-lg font-semibold space-y-3">
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
	</div>
	<div class=" !border-none grow p-8 max-w-[100rem] mx-auto">
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
					quote:
						"The HOA does a great job of keeping the neighborhood clean and safe. I'm proud to be a part of it.",
					author: 'Joe Shmoe'
				},
				{
					quote:
						"I've lived in Hammer Point for 10 years and I've never been happier. The HOA is a big part of that.",
					author: 'John Smith'
				},
				{
					quote: "I've lived up and down the keys, and the HOA here is what makes the difference!",
					author: 'Brad Johnson'
				},
				{
					quote: "The community is clean, safe, and friendly. I'm proud to be a part of it.",
					author: 'Carrie Johnson'
				}
			]}
		/>
		<!-- <div class="flex flex-row mt-6 gap-4">
			<div class="w-lg">
				<Testimonial
					quote="I love living in Hammer Point. The community is so friendly and the neighborhood is beautiful."
					author="Jane Doe"
				/>
			</div>
			<div class="w-lg">
				<Testimonial
					quote="The HOA does a great job of keeping the neighborhood clean and safe. I'm proud to be a part of it."
					author="Joe Shmoe"
				/>
			</div>
			<div class="w-lg">
				<Testimonial
					quote="I've lived in Hammer Point for 10 years and I've never been happier. The HOA is a big part of that."
					author="John Smith"
				/>
			</div>
		</div> -->
	</div>
</div>

<style>
	/* Overide skeleton glass variant */
	.variant-glass-secondary {
		background-color: rgb(var(--color-secondary-500) / 0.5);
	}
</style>
