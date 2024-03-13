<script lang="ts">
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
</script>

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
	<button class="hamburger-menu" on:click={toggleMenu}>
		<span class="hamburger-line"></span>
		<span class="hamburger-line"></span>
		<span class="hamburger-line"></span>
	</button>

	{#if isMenuOpen}
		<nav
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

<style>
	.hamburger-menu {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 24px;
		height: 20px;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	.hamburger-line {
		width: 100%;
		height: 2px;
		background-color: #000;
	}

	.mobile-menu-link {
		margin-bottom: 8px;
		color: #000;
		text-decoration: none;
		font-weight: bold;
	}
</style>
