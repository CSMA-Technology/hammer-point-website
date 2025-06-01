<script lang="ts">
	import { onMount } from 'svelte';
	import { sineIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import ResourceCard from './ResourceCard.svelte';
	import ResourceProperty from './ResourceProperty.svelte';
	import Rope from '$lib/components/Rope.svelte';

	let mounted = $state(false);
	onMount(() => {
		document.documentElement.classList.replace('light', 'dark');
		document.getElementById('content')?.classList.add('customBlur');
		mounted = true;
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
			in:fade={{ duration: 800, easing: sineIn, delay: 100 }}
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
			in:fade={{ duration: 800, easing: sineIn, delay: 100 }}
		>
			<div class="flex flex-col gap-4">
				<ResourceCard>
					{#snippet heading()}
						2024 State of the County and Information Guide
					{/snippet}
					<p class="pt-2 text-center">
						<a class="anchor" href="/monroe-guide-2024.pdf" target="_blank">Click here</a> to download
					</p>
				</ResourceCard>
				<ResourceCard>
					{#snippet heading()}
						Law Enforcement
					{/snippet}
					{#snippet subtitle()}
						Sheriff's Office
					{/snippet}
					<dl>
						<ResourceProperty>
							{#snippet label()}
								Emergency
							{/snippet}
							{#snippet value()}
								911
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Non-Emergency
							{/snippet}
							{#snippet value()}
								(305) 853-3211
							{/snippet}
						</ResourceProperty>
					</dl>
				</ResourceCard>
				<ResourceCard>
					{#snippet heading()}
						Garbage and Recycling
					{/snippet}
					{#snippet subtitle()}
						Keys Sanitary Service
					{/snippet}
					<dl>
						<ResourceProperty>
							{#snippet label()}
								Website
							{/snippet}
							{#snippet value()}
								<a href="https://www.keyssanitaryservice.com" target="_blank"
									>www.keyssanitaryservice.com</a
								>
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Mailing Address
							{/snippet}
							{#snippet value()}
								300 Central Avenue<br />Key Largo, FL 33037
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Phone Number
							{/snippet}
							{#snippet value()}
								(305) 451-2025
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Garbage Pickup
							{/snippet}
							{#snippet value()}
								Tuesdays and Fridays
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Recycling & Yard Waste Pickup
							{/snippet}
							{#snippet value()}
								Thursdays
							{/snippet}
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
					{#snippet heading()}
						Mosquito Control
					{/snippet}
					{#snippet subtitle()}
						Florida Keys Mosquito Control District
					{/snippet}
					<dl>
						<ResourceProperty>
							{#snippet label()}
								Website
							{/snippet}
							{#snippet value()}
								<a href="https://www.keysmosquito.org" target="_blank">www.keysmosquito.org</a>
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Phone Number
							{/snippet}
							{#snippet value()}
								(305) 453-1290
							{/snippet}
						</ResourceProperty>
					</dl>
				</ResourceCard>
				<ResourceCard>
					{#snippet heading()}
						Fish & Wildlife
					{/snippet}
					{#snippet subtitle()}
						Florida Fish and Wildlife Conservation Commission
					{/snippet}
					<dl>
						<ResourceProperty>
							{#snippet label()}
								Website
							{/snippet}
							{#snippet value()}
								<a href="https://myfwc.com" target="_blank">myfwc.com</a>
							{/snippet}
						</ResourceProperty>
						<hr class="my-2 !border-tertiary-500/30" />
						<p class="hyphens-auto text-balance text-justify text-sm">
							To report wildlife in distress, or a fishing, boating, or wildlife violation call the
							<strong>Wildlife Alert Hotline</strong>: (888) 404-3922.
							<br />
							To report nuisance alligators/crocodiles call (866) 392-4286.
							<br />
							For more information on these topics go to
							<a
								class="break-all"
								target="_blank"
								href="https://myfwc.com/contact/incident-reporting/"
								>myfwc.com/contact/incident-reporting</a
							>
						</p>
					</dl>
				</ResourceCard>
				<ResourceCard>
					{#snippet heading()}
						Free Local Media Publications
					{/snippet}
					<dl>
						<ResourceProperty>
							{#snippet label()}
								Keys Weekly
							{/snippet}
							{#snippet value()}
								<a href="https://www.keysweekly.com" target="_blank">www.keysweekly.com</a>
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Florida Keys Free Press
							{/snippet}
							{#snippet value()}
								<a href="https://www.keysnews.com/flkeysfreepress" target="_blank"
									>www.keysnews.com/flkeysfreepress</a
								>
							{/snippet}
						</ResourceProperty>
					</dl>
				</ResourceCard>
				<ResourceCard>
					{#snippet heading()}
						Great Walks of the Florida Keys
					{/snippet}
					{#snippet subtitle()}
						A collection of scenic local trails
					{/snippet}
					<ResourceProperty>
						{#snippet label()}
							Website
						{/snippet}
						{#snippet value()}
							<a href="https://fla-keys.com/great-walks/" target="_blank"
								>fla-keys.com/great-walks</a
							>
						{/snippet}
					</ResourceProperty>
				</ResourceCard>
			</div>
			<div class="flex flex-col gap-4">
				<ResourceCard>
					{#snippet heading()}
						Electric Utility
					{/snippet}
					{#snippet subtitle()}
						Florida Keys Electric Cooperative Association, Inc.
					{/snippet}
					<dl>
						<ResourceProperty>
							{#snippet label()}
								Website
							{/snippet}
							{#snippet value()}
								<a href="https://www.fkec.com" target="_blank">www.fkec.com</a>
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Address
							{/snippet}
							{#snippet value()}
								91630 Overseas Hwy<br /> Tavernier FL 33070
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Mailing Address
							{/snippet}
							{#snippet value()}
								P.O. Box 377<br />Tavernier, FL 33070
							{/snippet}
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
					{#snippet heading()}
						Water Utility
					{/snippet}
					{#snippet subtitle()}
						Florida Keys Aquaduct Authority
					{/snippet}
					<dl>
						<ResourceProperty>
							{#snippet label()}
								Website
							{/snippet}
							{#snippet value()}
								<a href="https://www.fkaa.com" target="_blank">www.fkaa.com</a>
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Address
							{/snippet}
							{#snippet value()}
								91620 Overseas Highway<br />Tavernier, FL 33070
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Phone Number
							{/snippet}
							{#snippet value()}
								(305) 853-1999
							{/snippet}
						</ResourceProperty>
					</dl>
				</ResourceCard>
				<ResourceCard>
					{#snippet heading()}
						Sewer Utility
					{/snippet}
					{#snippet subtitle()}
						Key Largo Wastewater Treatment District
					{/snippet}
					<dl>
						<ResourceProperty>
							{#snippet label()}
								Website
							{/snippet}
							{#snippet value()}
								<a href="https://www.klwtd.com" target="_blank">www.klwtd.com</a>
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Address
							{/snippet}
							{#snippet value()}
								103355 Overseas Hwy<br />Key Largo, FL 33037
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Mailing Address
							{/snippet}
							{#snippet value()}
								Post Office Box 491<br />Key Largo, FL 33037
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Phone Number
							{/snippet}
							{#snippet value()}
								(305) 451-4019
							{/snippet}
						</ResourceProperty>
					</dl>
				</ResourceCard>
				<ResourceCard>
					{#snippet heading()}
						United Way
					{/snippet}
					{#snippet subtitle()}
						United Way of Collier County and The Florida Keys
					{/snippet}
					<dl>
						<ResourceProperty>
							{#snippet label()}
								Resource Guide
							{/snippet}
							{#snippet value()}
								<a href="https://uwcollierkeys.org/keys-help-2" target="_blank"
									>uwcollierkeys.org/keys-help-2</a
								>
							{/snippet}
						</ResourceProperty>
						<ResourceProperty>
							{#snippet label()}
								Phone Number
							{/snippet}
							{#snippet value()}
								(305) 451-4019
							{/snippet}
						</ResourceProperty>
					</dl>
				</ResourceCard>
				<ResourceCard>
					{#snippet heading()}
						Free Compost Giveaways
					{/snippet}
					<dl>
						<ResourceProperty>
							{#snippet label()}
								Location
							{/snippet}
							{#snippet value()}
								Monroe County Transfer Station<br />11180 County Rd 905
							{/snippet}
						</ResourceProperty>
					</dl>
					<hr class="my-2 !border-tertiary-500/30" />
					<p class="hyphens-auto text-justify text-sm">
						On the first Saturday of each month from 9AM to 2PM, Monroe County and Monroe County’s
						yard waste contractor will offer free compost to unincorporated Monroe County residents
						and cities of Marathon, Key Colony Beach, Islamorada, and Layton residents
						<br /><br />
						Proof of residency is required in the form of a driver’s license, utility bill, tax bill,
						etc. Residents are limited to one pick-up (up to six bags) per household. You must be able
						to load the bags on your own or bring someone to assist you.
					</p>
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
