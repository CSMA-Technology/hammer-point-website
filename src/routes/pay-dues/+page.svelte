<script lang="ts">
	import Rope from '$lib/components/Rope.svelte';
	import { slide } from 'svelte/transition';

	let isSameAddress = false;
</script>

<svelte:head>
	<title>Hammer Point HOA - Pay Dues</title>
</svelte:head>

<div class="mx-auto mt-28 flex max-w-3xl flex-col gap-4">
	<div class="card variant-glass-secondary p-4">
		<h1 class="h1 text-center font-semibold">Pay Dues</h1>
		<div class="mx-auto max-w-xs">
			<Rope />
		</div>
		<div class="my-2 text-center text-lg">
			<p>We rely on voluntary dues to maintain the beauty of Hammer Point!</p>
			<p>
				We accept payment online or via check mailed to our P.O. box. See below for more details.
			</p>
		</div>
	</div>
	<div class="card variant-glass-secondary p-4">
		<h2 class="h2 text-center">Pay Online</h2>
		<div class="text-center text-lg">
			<p>To pay your dues online, please fill out the information below.</p>
			<p>We accept payment via credit card or Paypal</p>
		</div>
		<form>
			<h3 class="h3 mt-2">Member Information</h3>
			<div class="flex flex-col gap-4">
				<div class="flex w-full flex-row flex-wrap gap-2">
					<label class="label grow">
						Name
						<input required type="text" name="name" class="input" />
					</label>
					<label class="label grow">
						Email
						<input
							type="email"
							name="email"
							class="input"
							required
							placeholder="example@hammerpointhoa.com"
						/>
					</label>
				</div>
				<label>
					Hammer Point Address
					<input
						type="text"
						name="address"
						class="input"
						placeholder="123 Camelot Drive, Tavernier, FL 33070"
					/>
				</label>
				<div class="ml-2 flex flex-row">
					<input
						bind:checked={isSameAddress}
						id="sameAddressCheckbox"
						class="checkbox mr-1"
						type="checkbox"
					/>
					<label class="label" for="sameAddressCheckbox">
						My Hammer Point address is my mailing address
					</label>
				</div>
				<div>
					{#if !isSameAddress}
						<label transition:slide|local>
							Mailing Address
							<input
								placeholder="321 Faraway Lane, Somewhere, FL 54321"
								type="text"
								name="address"
								class="input"
							/>
						</label>
					{/if}
				</div>
				<h3 class="h3">Dues and Donations</h3>
				<div class="flex flex-row align-bottom">
					<label for="donationAmount" class="label self-end">Donation Amount</label>
					<span class="price flex grow text-right">
						<div class="priceContainer">
							<input
								type="number"
								placeholder="0.00"
								id="donationAmount"
								name="amount"
								class="input relative w-20"
							/>
						</div>
					</span>
				</div>

				<div class="flex flex-col gap-2">
					<button class="variant-filled-primary btn">Pay Dues</button>
				</div>
			</div>
		</form>
	</div>
</div>

<style>
	.price::before {
		content: '';
		background: repeating-linear-gradient(
			to right,
			currentColor,
			currentColor 1px,
			transparent 2px,
			transparent 4px
		);
		height: 1px;
		flex-grow: 1;
		display: inline-block;
		align-self: flex-end;
		margin-bottom: 6px;
		margin-left: 5px;
		margin-right: 5px;
	}

	.priceContainer::before {
		content: '$';
		font-size: 1.3rem;
	}
</style>
