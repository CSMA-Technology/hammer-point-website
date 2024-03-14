<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	import closeIcon from '$lib/assets/close-icon.svg';
	import { browser } from '$app/environment';

	const links = [
		{ href: '/about', text: 'About' },
		{ href: '/resources', text: 'Resources' },
		{ href: '/gallery', text: 'Gallery' },
		{ href: '/newsletter', text: 'Newsletter' },
		{ href: '/pay-dues', text: 'Pay Dues' }
	];

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	if (browser) {
		window.onclick = () => {
			if (isMenuOpen) {
				isMenuOpen = false;
			}
		};
	}
</script>

<div class="w-full px-6">
	<AppBar
		border={`rounded-[2.5rem] mx-1 mb-[-100%] ${isMenuOpen ? 'h-64' : 'h-20'} transition-[height]`}
		background="variant-glass-tertiary shadow-sm relative z-50"
		padding="mx-auto mt-2 w-fit max-md:w-full px-2 py-2"
		gap="md:gap-8"
	>
		<svelte:fragment slot="lead">
			<a href="/" class="flex flex-row items-center">
				<!-- <strong class="text-xl uppercase">Hammer Point Owners Association</strong> -->
				<img
					class="min-w-[65px] min-h-[65px]"
					width="65"
					height="65"
					src="$lib/assets/hammer-point-logo-condensed.png"
					alt="Hammer Point Owners Association"
				/>
				<div class="ml-1">
					<div class="font-heading-token leading-tight mb-0 text-lg font-semibold">
						HAMMER POINT
					</div>
					<div
						class="font-heading-token leading-tight mt-0 text-xs font-semibold text-center tracking-wide"
					>
						OWNERS ASSOCIATION
					</div>
				</div>
			</a>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<div>
				<nav class="list-nav flex gap-0 max-md:hidden">
					{#each links as link}
						<a
							class="anchor no-underline text-tertiary-500 font-semibold !px-2"
							href={link.href}
							rel="noreferrer"
						>
							{link.text}
						</a>
					{/each}
				</nav>

				<div class="md:hidden pl-6 pr-4">
					<button
						role="menu"
						class="flex flex-col justify-between w-5 h-5 bg-transparent border-none cursor-pointer"
						on:click|stopPropagation={toggleMenu}
					>
						{#if !isMenuOpen}
							<span class="w-full h-0.5 bg-tertiary-500"></span>
							<span class="w-full h-0.5 bg-tertiary-500"></span>
							<span class="w-full h-0.5 bg-tertiary-500"></span>
						{:else}
							<img src={closeIcon} alt="" />
						{/if}
					</button>

					{#if isMenuOpen}
						<nav
							in:fade={{ duration: 100, delay: 50 }}
							class="absolute top-1/4 left-0 w-full -z-30
					flex flex-col items-center rounded-b-xl p-4"
						>
							{#each links as link}
								<a class="mobile-menu-link" href={link.href} rel="noreferrer">
									{link.text}
								</a>
							{/each}
						</nav>
					{/if}
				</div>
			</div>
		</svelte:fragment>
	</AppBar>
</div>

<style>
	.mobile-menu-link {
		margin-bottom: 8px;
		color: #000;
		text-decoration: none;
		font-weight: bold;
	}
</style>
