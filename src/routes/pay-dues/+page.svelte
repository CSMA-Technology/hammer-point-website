<script lang="ts">
	import Rope from '$lib/components/Rope.svelte';
	import { onMount } from 'svelte';
	import { sineIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Hammer Point HOA - Pay Dues</title>
</svelte:head>

{#if mounted}
	<div class="mx-2 mt-24" in:fade={{ duration: 800, easing: sineIn, delay: 100 }}>
		<div
			class="card variant-glass-secondary mx-auto max-w-2xl p-1 shadow-md
						lg:mt-28 lg:p-6"
		>
			<h1
				class="h1 mt-2 text-center
					lg:mt-0"
			>
				Pay Your Annual Dues
			</h1>
			<div class="mx-auto my-2 max-w-xl">
				<Rope />
			</div>
			<div class="text-lg">
				<p class="mt-4">
					The Hammer Point Owners Association is a volunteer-led, non-profit organization, and we
					rely on your contributions to keep our community clean, safe, and informed.
				</p>
				<p class="mt-2">
					<strong>Annual dues are $100.00 per year, per property</strong>. Dues cover the calendar
					year (January-December) in which they are paid. Please make checks payable to
					<strong>Hammer Point Owners Association</strong> and mail to:
				</p>
				<p class="mx-auto my-2 w-fit">PO Box 90<br /> Tavernier Fl 33070</p>
				<p>
					Please fill out <a class="anchor" href="/HP_Dues_Form.pdf" target="_blank">this form</a> and
					include it with your payment. Your information is not shared with any third parties. This allows
					us to contact you in the event of an emergency that may affect your property. It also helps
					keep you informed of community events and items of interest through our Hammer Point Newsletter.
				</p>
				<h2 class="h2 mt-4 text-center">We now accept Venmo!</h2>
				<p class="mt-2">
					You can now pay your annual dues via Venmo
					<a
						class="anchor"
						href="https://account.venmo.com/pay?recipients=hammerpointhoa"
						target="_blank">@hammerpointhoa</a
					>
					<br />Please include your name and property address in the notes section of your payment.
				</p>
			</div>
		</div>
	</div>
{/if}
