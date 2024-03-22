<script lang="ts">
	import PersonCard from '$lib/components/PersonCard.svelte';
	import helenShinners from '$lib/assets/people/Helen_Shinners.jpg';
	import burkeCannon from '$lib/assets/people/Burke_Cannon.jpg';
	import maryBarron from '$lib/assets/people/Mary_Barron.jpg';
	import rickHamilton from '$lib/assets/people/Rick_Hamilton.jpg';
	import melissaBallesteros from '$lib/assets/people/Melissa_Ballesteros.jpeg';
	import erniePortuondo from '$lib/assets/people/Ernie_Portuondo.jpg';
	import lidiaYoham from '$lib/assets/people/Lidia_Yoham.jpg';
	import richardShinners from '$lib/assets/people/Richard_Shinners.jpg';
	import migdyMoya from '$lib/assets/people/Migdy_Moya.jpeg';
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

<svelte:head>
	<title>Hammer Point HOA - About</title>
</svelte:head>

<div
	id="content"
	class="h-full w-full
  max-sm:bg-[-8rem_0rem] bg-center"
>
	{#if mounted}
		<div
			class="w-full pt-24
			xl:pt-28 xl:my-6"
		>
			<div
				class="flex flex-row flex-wrap w-full gap-y-4 justify-around px-6 max-w-[100rem] mx-auto align-middle
				lg:px-10"
			>
				<div class="flex flex-col">
					<div
						class="card p-6 variant-glass-surface max-w-xl h-fit"
						in:fade={{ duration: 800, easing: sineIn }}
					>
						<h2 class="h1 text-center">What We Do</h2>
						<img src="$lib/assets/rope.png" alt="" class="px-10 my-2" />
						<h3 class="h2">Our Mission</h3>
						<p class="text-lg text-pretty">
							The Hammer Point Owners Association is a volunteer organization that works to maintain
							and improve the Hammer Point community. We are dedicated to keeping our neighborhood
							safe, clean, and beautiful.
						</p>
						<h3 class="h2 mt-3">Our Vision</h3>
						<p class="text-lg text-pretty">
							We strive to create a community that is welcoming, inclusive, and vibrant. We believe
							that Hammer Point is a special place and we work to keep it that way.
						</p>
						<h3 class="h2 mt-3">Bylaws</h3>
						<p>
							To view and download the association bylaws, <a
								class="anchor"
								target="_blank"
								href="/2023_HammerPoint_Bylaws.pdf">click here</a
							>
						</p>
					</div>
					<div class="flex flex-row mt-6 gap-y-4 justify-between max-w-[100rem] mx-auto">
						<div
							class="card p-6 variant-glass-surface max-w-xl"
							in:fade={{ duration: 800, easing: sineIn }}
						>
							<h2 class="h1 text-center">Contact Information</h2>
							<img src="$lib/assets/rope.png" alt="" class="px-10 my-2" />
							<p class="text-lg text-pretty">
								<strong>Address:</strong> 1234 Hammer Point Blvd, Key Largo, FL 33037
							</p>
							<p class="text-lg text-pretty">
								<strong>Phone:</strong> (305) 555-5555
							</p>
							<p class="text-lg text-pretty">
								<strong>Email:</strong>
								<a href="mailto:support@hammerpointhoa.org" class="anchor"
									>support@hammerpointhoa.org</a
								>
							</p>
						</div>
					</div>
				</div>
				<div
					class="card p-6 variant-glass-surface max-w-xl mb-4
					md:max-w-3xl"
					in:fade={{ duration: 800, easing: sineIn }}
				>
					<h2 class="h1 text-center">Our Board</h2>
					<img src="$lib/assets/rope.png" alt="" class="px-10 my-2" />
					<div class="w-full my-4">
						<div class="mx-auto w-fit">
							<PersonCard name="Helen Shinners" title="President" photo={helenShinners} />
						</div>
						<div class="mx-auto w-fit mt-2">
							<PersonCard name="Burke Cannon" title="Vice President" photo={burkeCannon} />
						</div>
					</div>
					<div
						class="grid grid-cols-1 mx-auto w-fit gap-4
					md:grid-cols-2"
					>
						<PersonCard name="Migdy Moya" title="Treasurer" photo={migdyMoya} />
						<PersonCard name="Mary Barron-Lopez" title="Member at Large" photo={maryBarron} />
						<PersonCard name="Rick Hamilton" title="Member at Large" photo={rickHamilton} />
						<PersonCard
							name="Melissa Ballesteros"
							title="Member at Large"
							photo={melissaBallesteros}
						/>
						<PersonCard name="Ernie Portuondo" title="Member at Large" photo={erniePortuondo} />
						<PersonCard name="Lidia Yoham" title="Member at Large" photo={lidiaYoham} />
						<PersonCard name="Richard Shinners" title="Past President" photo={richardShinners} />
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.variant-glass-surface {
		background-color: rgb(var(--color-surface-500) / 0.6);
	}

	#content::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -10;
		background-image: url($lib/assets/hammer_point_entrance.jpg);
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
