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
<div class="lg:hidden grid grid-cols-1 mt-6 gap-4">
	{#each currentTestimonials as testimonial, idx}
		{#key testimonial.quote}
			<div class="w-lg" style={`grid-area:${idx + 1}/1`} transition:fade>
				<Testimonial quote={testimonial.quote} author={testimonial.author} />
			</div>
		{/key}
	{/each}
</div>

<!-- Desktop -->
<div class="hidden lg:grid grid-cols-3 mt-6 gap-4">
	{#each currentTestimonials as testimonial, idx}
		{#key testimonial.quote}
			<div class="w-lg" style={`grid-area:1/${idx + 1}`} transition:fade>
				<Testimonial quote={testimonial.quote} author={testimonial.author} />
			</div>
		{/key}
	{/each}
</div>
