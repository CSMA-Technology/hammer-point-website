<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	import closeIcon from '$lib/assets/close-icon.svg';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	const links = [
		{ href: '/', text: 'Home' },
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

<div class="w-full sm:px-6">
	<AppBar
		border={`rounded-[2.5rem] mx-1 mb-[-100%] ${isMenuOpen ? 'h-72' : 'h-20'} transition-[height]`}
		background="variant-glass-tertiary shadow-sm relative z-50"
		padding="mx-auto mt-2 w-fit max-lg:w-full px-2 py-2"
		gap="lg:gap-8"
	>
		<svelte:fragment slot="lead">
			<a href="/" class="flex flex-row items-center">
				<div class="hidden xxs:block">
					<img
						class="sm:min-h-[65px] sm:min-w-[65px]"
						width="65"
						height="65"
						src="$lib/assets/hammer-point-holiday-logo.png"
						alt=""
					/>
				</div>
				<div class="ml-4 flex min-h-[65px] min-w-[165px] flex-col justify-center xxs:ml-1">
					<img
						class="dark:hidden"
						src="$lib/assets/hammer-point-logo-text.png"
						alt="Hammer Point Owner's Association"
						width="165"
					/>
					<img
						class="hidden dark:block"
						src="$lib/assets/hammer-point-logo-text-dark.png"
						alt="Hammer Point Owner's Association"
						width="165"
					/>
				</div>
			</a>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<div>
				<nav class="list-nav flex gap-0 max-lg:hidden lg:min-w-[472px]">
					{#each links as link}
						<a
							class={`anchor mx-1 !px-3 font-semibold !text-inherit no-underline ${link.href === $page.url.pathname ? '!bg-surface-500/30' : ''}`}
							href={link.href}
							rel="noreferrer"
						>
							{link.text}
						</a>
					{/each}
				</nav>

				<div class="pl-6 pr-4 lg:hidden">
					<button
						role="menu"
						class="flex h-5 w-5 cursor-pointer flex-col justify-between border-none bg-transparent"
						on:click|stopPropagation={toggleMenu}
					>
						{#if !isMenuOpen}
							<span class="h-0.5 w-full bg-tertiary-500"></span>
							<span class="h-0.5 w-full bg-tertiary-500"></span>
							<span class="h-0.5 w-full bg-tertiary-500"></span>
						{:else}
							<img src={closeIcon} alt="" />
						{/if}
					</button>

					{#if isMenuOpen}
						<nav
							in:fade={{ duration: 100, delay: 50 }}
							class="absolute left-0 top-1/4 -z-30 flex
					w-full flex-col items-center rounded-b-xl p-4"
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
