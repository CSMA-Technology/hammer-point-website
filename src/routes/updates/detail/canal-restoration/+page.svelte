<script lang="ts">
	import { getModalStore, type ModalComponent } from '@skeletonlabs/skeleton';
	import ImageModal from '$lib/components/ImageModal.svelte';
	const modalComponent: ModalComponent = { ref: ImageModal };

	const modalStore = getModalStore();

	import canal1 from '$lib/assets/updates/canal/canal-restoration-1.jpg';
	import canal2 from '$lib/assets/updates/canal/canal-restoration-2.jpg';
	import canal3 from '$lib/assets/updates/canal/canal-restoration-3.jpg';
	import canal4 from '$lib/assets/updates/canal/canal-restoration-4.jpg';
</script>

<h1 class="h2 text-center max-md:top-1">Canal 90 Restoration Project</h1>
<div class="card variant-glass-secondary bg-paper-light p-4 sm:p-6">
	<div
		class="flex flex-col gap-2 hyphens-auto text-justify
  max-sm:text-sm"
	>
		<div class="flex flex-row flex-wrap justify-around gap-2 max-sm:justify-center">
			{#each [canal1, canal2, canal3, canal4] as img}
				<button
					on:click={() => {
						modalStore.trigger({
							type: 'component',
							component: modalComponent,
							image: img
						});
					}}
				>
					<img
						src={img}
						alt="Canal 90 Restoration Project"
						class="h-44 w-44 rounded-md max-sm:h-32 max-sm:w-32"
					/>
				</button>
			{/each}
		</div>
		<p>
			Restoration work began March 1, 2024, on Canal 90 (between Hilson Ct and Ivanhoe Ct.). The
			work is funded by a Florida Department of Environmental Protection Keys Stewardship grant to
			Monroe County. The contract allows four months to complete the work. Rhonda Haag, Chief
			Resilience Officer for Monroe County was in charge of the project.
		</p>
		<p>
			WSP is the engineering firm overseeing the project. Greg Corning is the lead engineer in
			charge.
		</p>
		<p>
			A local firm, Adventure Environmental, was selected as the vendor contractor. They are located
			in Tavernier, and are very familiar with this canal. Greg Tolpin, owner.
		</p>
		<p>
			The restoration work included backfilling the canal with approximately 11,588 tons of fill. .
			Backfilling raises the canal bottom to an optimum depth of about 8-7 feet to allow maximum
			flushing and tidal flow in and out of the canal. This restoration technique will increase the
			levels of dissolved oxygen throughout the canal. “These improvements restore the canal’s
			impaired waters and bring the dissolved oxygen levels up to meet the State of Florida water
			quality standards. This greatly enhances the levels of marine life in the canals,” said Monroe
			County Chief Resilience Officer Rhonda Haag. “Residents should see an immediate increase in
			marine life once the project is completed.” Once the restoration is complete, it will result
			in a canal that flushes fully and has much higher levels of dissolved oxygen, which will
			provide a better environment for marine life and increased enjoyment of your canal.
		</p>
		<p>
			They averaged 22-24 truckloads of material per day. The least they had delivered was 15, and
			the most was 32 in a single day.
		</p>
		<p>
			After the fill was completed surveyors reviewed and inspected the work. They set up several
			control points, at the canal, around the neighborhood, and on US1. The report indicated there
			were a couple of areas in the canal that needed additional fill, because the targeted depth
			was not obtained. That work was completed the week of June 10-14.
		</p>
		<p>Boat traffic access was restored as of June 14, 2004.</p>
		<p>
			I believe the contractor did a very good job keeping the projects’ process flowing and
			completing the work.
		</p>
		<p>Hopefully we can all enjoy the use of our canal once again.</p>
		<p>
			Thanks to all, especially the homeowners on Hilson Ct. and Ivanhoe Ct, for your patience and
			cooperation during this project.
		</p>
		<p>Everyone enjoy a wonderful Summer!</p>
		<p>
			Helen Shinners
			<br />
			President, HPHOA
		</p>
	</div>
</div>
