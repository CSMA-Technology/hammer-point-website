<script lang="ts">
	import UpdateDetailPost from '$lib/components/UpdateDetailPost.svelte';
	import PhotoRow, { applyAltText } from '$lib/components/PhotoRow.svelte';

	import newSign from '$lib/assets/updates/beautification/new-sign.jpg';
	import waterMeter from '$lib/assets/updates/beautification/water-meter.jpg';
	import quiricoShinners from '$lib/assets/updates/beautification/quirico-shinners.jpg';
</script>

<UpdateDetailPost>
	{#snippet title()}
		Front Entrance Beautification Project
	{/snippet}
	{#snippet children()}
		<div class="card space-y-4 bg-white/40 p-4 text-lg max-sm:text-sm">
			<h2 class="h2 text-center">Update #2</h2>
			<p>
				We are pleased to announce, that the much awaited 2nd phase of the Main Entrance
				Beautification, will be getting underway in the next month.
			</p>
			<p>
				We had a little delay getting the water meter and sprinkler installations squared away, as
				well as procuring a landscaper, but that has all been accomplished.
			</p>
			<p>
				We are contracting with Florida Keys Landscaping, who will prepare the beds and do the
				planting.
			</p>
			<p>
				Your neighbors. Todd and Linda Flack, have graciously agreed to donate the plants. We are
				truly grateful to the Flack Family for their generosity and commitment to our neighborhood.
			</p>
			<p>
				We will use mostly Native Plants, to support the environment of the Upper Keys, conserve
				water, reduce maintenance, waste and pollution and create a wildlife habitat. Hopefully we
				can be designated as a Florida Friendly Garden by the Monroe County UF/IFAS Extension
				(University of Florida/ Institute of Food and Agricultural Sciences)
			</p>
			<p>
				We want to extend a special thank you, to all of you who have generously donated to this
				project and we appreciate your patience. Hopefully soon you can see the impact of your
				contributions.
			</p>
			<p>We will keep you posted on the projects progress</p>
			<p>Thank You,</p>
			<strong>Helen Shinners</strong>
			<strong>For the Hammer Point Homeowners Board of Directors</strong>
		</div>
		<div
			class="card flex flex-col gap-2 space-y-4 hyphens-auto bg-white/40 p-4 text-justify text-lg max-sm:text-sm"
		>
			<h2 class="h2 text-center">Update #1</h2>
			<PhotoRow
				photos={applyAltText(
					[newSign, waterMeter, quiricoShinners],
					'New sign at the front entrance'
				)}
			/>
			<p>
				The first phase of the Beautification project for the Front Entrance is finally underway!
			</p>
			<p>
				A second Hammer Point sign was procured and installed, on the south side of the entrance for
				better visibility from US1, by Miriam Baez of Ivanhoe Ct. as well as some preliminary
				plantings.
			</p>
			<p>
				We were waiting on Florida Keys Aqueduct Authority (FKAA) to install the water meter, to
				allow water supply to the median, and the meter is now installed.
			</p>
			<p>
				Had to obtain a back flow water pressure valve, which has also been installed, thanks to the
				volunteer efforts of Rick Hamilton, of Camelot. FKAA had to then inspect the valve to allow
				for the project to move forward. After approval of the back flow valve, by FKAA, we will
				proceed to install the irrigation system.
			</p>
			<p>
				Maria Quirico, Master Gardener, Extension Environmental Agent (pictured above w/ Helen
				Shinners President HPHOA) and Karen Sunderland, Master Gardener & Environmental Consultant;
				both with the University of Florida/ IFSA extension, made a visit to provide guidance as to
				which natives to plant according to the My Florida Gardens Initiative and Florida Friendly
				Landscape. Planting of some the recommended vegetation should be completed by end of July.
			</p>
			<p>We hope you will enjoy the new look at the entrance to our beautiful community.</p>
			<strong>Hammer Point Owners Association - Board of Directors</strong>
		</div>
	{/snippet}
</UpdateDetailPost>
