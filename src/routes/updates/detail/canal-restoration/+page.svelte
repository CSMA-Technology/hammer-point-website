<script lang="ts">
	import UpdateDetailPost from '$lib/components/UpdateDetailPost.svelte';
	import PhotoRow, { applyAltText } from '$lib/components/PhotoRow.svelte';

	import canal1 from '$lib/assets/updates/canal/canal-restoration-1.jpg';
	import canal2 from '$lib/assets/updates/canal/canal-restoration-2.jpg';
	import canal3 from '$lib/assets/updates/canal/canal-restoration-3.jpg';
	import canal4 from '$lib/assets/updates/canal/canal-restoration-4.jpg';
</script>

<UpdateDetailPost>
	{#snippet title()}
		Canal 90 Restoration Project
	{/snippet}
	{#snippet children()}
	
			<PhotoRow
				photos={applyAltText([canal1, canal2, canal3, canal4], 'Canal 90 Restoration Project')}
			/>
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
		
	{/snippet}
</UpdateDetailPost>
