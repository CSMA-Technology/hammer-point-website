<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	import closeIcon from '$lib/assets/close-icon.svg';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	const links = [
		{ href: '/about', text: 'About' },
		{ href: '/resources', text: 'Resources' },
		{ href: '/gallery', text: 'Gallery' },
		{ href: '/updates', text: 'Updates' },
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
				<img
					class="min-w-[65px] min-h-[65px]"
					width="65"
					height="65"
					src="$lib/assets/hammer-point-logo-condensed.png"
					alt=""
				/>
				<div class="ml-1">
					<img
						src="$lib/assets/hammer-point-logo-text.png"
						alt="Hammer Point Owner's Association"
						width="165"
					/>
				</div>
			</a>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<div>
				<nav class="list-nav flex gap-0 max-md:hidden lg:min-w-[472px]">
					{#each links as link}
						<a
							class={`anchor no-underline !text-inherit font-semibold !px-3 mx-1 ${link.href === $page.url.pathname ? '!bg-surface-500/30' : ''}`}
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
		text-decoration: none;
	}
</style>
