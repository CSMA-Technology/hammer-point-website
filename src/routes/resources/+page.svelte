<script lang="ts">
	import { onMount } from 'svelte';
	import { sineIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import ResourceCard from './ResourceCard.svelte';
	import ResourceProperty from './ResourceProperty.svelte';
	import Rope from '$lib/components/Rope.svelte';

	let mounted = false;
	onMount(() => {
		document.documentElement.classList.replace('light', 'dark');
		setTimeout(() => {
			document.getElementById('content')?.classList.add('customBlur');
			mounted = true;
		}, 100);
		return () => {
			document.documentElement.classList.replace('dark', 'light');
		};
	});
</script>

<svelte:head>
	<title>Hammer Point HOA - Resources</title>
</svelte:head>

<div id="content" class="h-full w-full bg-center pt-24">
	{#if mounted}
		<div
			class="card variant-glass-secondary mx-1 w-fit max-w-3xl px-2 py-6
			sm:mx-4 sm:px-6 md:mx-auto"
			in:fade={{ duration: 800, easing: sineIn }}
		>
			<h1 class="h1 text-center">Community Resources</h1>
			<div class="mx-auto my-2 max-w-2xl">
				<Rope />
			</div>
			<p class="mt-4 text-center text-xl">
				The association maintains a directory of useful contacts and information for our residents.
				If you think something is missing from this page, please feel free to reach out!
			</p>
		</div>
		<div
			class="card variant-glass-secondary mx-1 my-6 flex w-fit max-w-5xl flex-row flex-wrap justify-around gap-4 px-2 py-4
			sm:mx-4
			sm:px-4
			md:mx-auto lg:max-w-6xl"
			in:fade={{ duration: 800, easing: sineIn }}
		>
			<div class="flex flex-col gap-4">
				<ResourceCard>
					<svelte:fragment slot="heading"
						>2024 State of the County and Information Guide</svelte:fragment
					>
					<p class="pt-2 text-center">
						<a class="anchor" href="/monroe-guide-2024.pdf" target="_blank">Click here</a> to download
					</p>
				</ResourceCard>
				<ResourceCard>
					<svelte:fragment slot="heading">Law Enforcement</svelte:fragment>
					<svelte:fragment slot="subtitle">Sheriff's Office</svelte:fragment>
					<dl>
						<ResourceProperty>
							<svelte:fragment slot="label">Emergency</svelte:fragment>
							<svelte:fragment slot="value">911</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Non-Emergency</svelte:fragment>
							<svelte:fragment slot="value">(305) 853-3211</svelte:fragment>
						</ResourceProperty>
					</dl>
				</ResourceCard>
				<ResourceCard>
					<svelte:fragment slot="heading">Garbage and Recycling</svelte:fragment>
					<svelte:fragment slot="subtitle">Keys Sanitary Service</svelte:fragment>
					<dl>
						<ResourceProperty>
							<svelte:fragment slot="label">Website</svelte:fragment>
							<svelte:fragment slot="value">
								<a href="https://www.keyssanitaryservice.com" target="_blank"
									>www.keyssanitaryservice.com</a
								>
							</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Mailing Address</svelte:fragment>
							<svelte:fragment slot="value">
								300 Central Avenue<br />Key Largo, FL 33037
							</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Phone Number</svelte:fragment>
							<svelte:fragment slot="value">(305) 451-2025</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Garbage Pickup</svelte:fragment>
							<svelte:fragment slot="value">Tuesdays and Fridays</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Recycling & Yard Waste Pickup</svelte:fragment>
							<svelte:fragment slot="value">Thursdays</svelte:fragment>
						</ResourceProperty>
						<hr class="my-2 !border-tertiary-500/30" />
						<p class="hyphens-auto text-justify text-sm">
							NO Yard Waste may be placed in plastic bags. Limbs/fronds must be cut to 4 feet or
							less and either placed in a garbage can or tied/bundled. Oversized items and “Bulk
							Waste” will be collected on an individual basis at no additional charge for
							residences. Please call (305) 451 2025 to arrange pick up. Place neatly at curb or
							road side without obstructing traffic. Avoid placing under power lines.
						</p>
					</dl>
				</ResourceCard>
				<ResourceCard>
					<svelte:fragment slot="heading">Fish & Wildlife</svelte:fragment>
					<svelte:fragment slot="subtitle"
						>Florida Fish and Wildlife Conservation Commission</svelte:fragment
					>
					<dl>
						<ResourceProperty>
							<svelte:fragment slot="label">Website</svelte:fragment>
							<svelte:fragment slot="value">
								<a href="https://myfwc.com" target="_blank">myfwc.com</a>
							</svelte:fragment>
						</ResourceProperty>
					</dl>
				</ResourceCard>
				<ResourceCard>
					<svelte:fragment slot="heading">Free Local Media Publications</svelte:fragment>
					<dl>
						<ResourceProperty>
							<svelte:fragment slot="label">Keys Weekly</svelte:fragment>
							<svelte:fragment slot="value">
								<a href="https://www.keysweekly.com" target="_blank">www.keysweekly.com</a>
							</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Florida Keys Free Press</svelte:fragment>
							<svelte:fragment slot="value">
								<a href="https://www.keysnews.com/flkeysfreepress" target="_blank"
									>www.keysnews.com/flkeysfreepress</a
								>
							</svelte:fragment>
						</ResourceProperty>
					</dl>
				</ResourceCard>
			</div>
			<div class="flex flex-col gap-4">
				<ResourceCard>
					<svelte:fragment slot="heading">Electric Utility</svelte:fragment>
					<svelte:fragment slot="subtitle">
						Florida Keys Electric Cooperative Association, Inc.
					</svelte:fragment>
					<dl>
						<ResourceProperty>
							<svelte:fragment slot="label">Website</svelte:fragment>
							<svelte:fragment slot="value">
								<a href="https://www.fkec.com" target="_blank">www.fkec.com</a>
							</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Mailing Address</svelte:fragment>
							<svelte:fragment slot="value">
								P.O. Box 377<br />Tavernier, FL 33070
							</svelte:fragment>
						</ResourceProperty>
					</dl>
					<hr class="my-2 !border-tertiary-500/30" />
					<p class="hyphens-auto text-justify text-sm">
						To report an outage call (305) 852-2431 or (800) 858-8845 and follow the automated
						instructions. For the fastest possible response, FKEC uses an Outage Mapping System
						which allows FKEC to rapidly pinpoint trouble areas and dispatch personnel and equipment
						more efficiently. The key to the system is the telephone number associated with each
						account, making it important that FKEC has all Member's current phone numbers.
					</p>
				</ResourceCard>
				<ResourceCard>
					<svelte:fragment slot="heading">Water Utility</svelte:fragment>
					<svelte:fragment slot="subtitle">Florida Keys Aquaduct Authority</svelte:fragment>
					<dl>
						<ResourceProperty>
							<svelte:fragment slot="label">Website</svelte:fragment>
							<svelte:fragment slot="value">
								<a href="https://www.fkaa.com" target="_blank">www.faa.com</a>
							</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Address</svelte:fragment>
							<svelte:fragment slot="value">
								91620 Overseas Highway<br />Tavernier, FL 33070
							</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Phone Number</svelte:fragment>
							<svelte:fragment slot="value">(305) 853-1999</svelte:fragment>
						</ResourceProperty>
					</dl>
				</ResourceCard>
				<ResourceCard>
					<svelte:fragment slot="heading">Sewer Utility</svelte:fragment>
					<svelte:fragment slot="subtitle">Key Largo Wastewater Treatment District</svelte:fragment>
					<dl>
						<ResourceProperty>
							<svelte:fragment slot="label">Website</svelte:fragment>
							<svelte:fragment slot="value">
								<a href="https://www.klwtd.com" target="_blank">www.klwtd.com</a>
							</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Address</svelte:fragment>
							<svelte:fragment slot="value">
								103355 Overseas Hwy<br />Key Largo, FL 33037
							</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Mailing Address</svelte:fragment>
							<svelte:fragment slot="value">
								Post Office Box 491<br />Key Largo, FL 33037
							</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Phone Number</svelte:fragment>
							<svelte:fragment slot="value">(305) 451-4019</svelte:fragment>
						</ResourceProperty>
					</dl>
				</ResourceCard>
				<ResourceCard>
					<svelte:fragment slot="heading">United Way</svelte:fragment>
					<svelte:fragment slot="subtitle"
						>United Way of Collier County and The Florida Keys</svelte:fragment
					>
					<dl>
						<ResourceProperty>
							<svelte:fragment slot="label">Resource Guide</svelte:fragment>
							<svelte:fragment slot="value">
								<a href="https://uwcollierkeys.org/keys-help-2" target="_blank"
									>uwcollierkeys.org/keys-help-2</a
								>
							</svelte:fragment>
						</ResourceProperty>
						<ResourceProperty>
							<svelte:fragment slot="label">Phone Number</svelte:fragment>
							<svelte:fragment slot="value">(305) 451-4019</svelte:fragment>
						</ResourceProperty>
					</dl>
				</ResourceCard>
			</div>
		</div>
	{/if}
</div>

<style>
	.variant-glass-secondary {
		background-color: rgb(var(--color-secondary-500) / 0.6) !important;
	}
	#content::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -10;
		background-image: url(/hammer-point-satellite-view.png);
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
