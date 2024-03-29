<script lang="ts">
	import Testimonial from '$lib/components/Testimonial.svelte';
	import { fade } from 'svelte/transition';
	export let count: number;

	export let testimonials: { quote: string; author: string }[] = [];

	const currentTestimonials = testimonials.slice(0, count);
	let lastIndexChanged = 0;
	const replaceRandomTestimonial = () => {
		let randomIndex = Math.floor(Math.random() * currentTestimonials.length);
		while (randomIndex === lastIndexChanged) {
			randomIndex = Math.floor(Math.random() * currentTestimonials.length);
		}
		const randomTestimonial = testimonials.find(
			(testimonial) => !currentTestimonials.includes(testimonial)
		);
		if (randomTestimonial) {
			currentTestimonials[randomIndex] = randomTestimonial;
		}
		lastIndexChanged = randomIndex;
	};
	setInterval(replaceRandomTestimonial, 7000);
</script>

<!-- Mobile -->
<div class="mt-6 grid grid-cols-1 gap-4 lg:hidden">
	{#each currentTestimonials as testimonial, idx}
		{#key testimonial.quote}
			<div class="max-w-lg" style={`grid-area:${idx + 1}/1`} transition:fade>
				<Testimonial quote={testimonial.quote} author={testimonial.author} />
			</div>
		{/key}
	{/each}
</div>

<!-- Desktop -->
<div class="mt-6 hidden grid-cols-3 gap-4 lg:grid">
	{#each currentTestimonials as testimonial, idx}
		{#key testimonial.quote}
			<div class="max-w-lg" style={`grid-area:1/${idx + 1}`} transition:fade>
				<Testimonial quote={testimonial.quote} author={testimonial.author} />
			</div>
		{/key}
	{/each}
</div>
