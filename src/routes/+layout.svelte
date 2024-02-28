<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			border="rounded-full mx-1"
			background="variant-glass-surface"
			padding="mx-auto mt-2 w-fit px-2 py-2"
			gap="md:gap-8"
		>
			<svelte:fragment slot="lead">
				<!-- <strong class="text-xl uppercase">Hammer Point Owners Association</strong> -->
				<enhanced:img
					class="min-h-[65px] min-w-[200px]"
					width="200"
					height="65"
					src="$lib/assets/hammer-point-logo-horizontal.svg"
					alt="Hammer Point Owners Association"
				/>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<nav class="list-nav flex gap-0">
					<a
						class="anchor no-underline text-primary-800 font-semibold !px-2"
						href="/about"
						target="_blank"
						rel="noreferrer"
					>
						About
					</a>
					<a
						class="anchor no-underline text-primary-800 font-semibold !px-2"
						href="/resources"
						target="_blank"
						rel="noreferrer"
					>
						Resources
					</a>
					<a
						class="anchor no-underline text-primary-800 font-semibold !px-2"
						href="/gallery"
						target="_blank"
						rel="noreferrer"
					>
						Gallery
					</a>
					<a
						class="anchor no-underline text-primary-800 font-semibold !px-2"
						href="/newsletter"
						target="_blank"
						rel="noreferrer"
					>
						Newsletter
					</a>
					<a
						class="anchor no-underline text-primary-800 font-semibold !px-2"
						href="/pay-dues"
						target="_blank"
						rel="noreferrer"
					>
						Pay Dues
					</a>
				</nav>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
