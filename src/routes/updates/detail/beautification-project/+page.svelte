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
	
			<PhotoRow
				photos={applyAltText(
					[newSign, waterMeter, quiricoShinners],
					'New sign at the front entrance'
				)}
			/>
			<p>The first phase of the Beautification project for the Front Entrance is finally underway!</p>
			<p>
				A second Hammer Point sign was procured and installed, on the south side of the entrance for
				better visibility from US1, by Miriam Baez of Ivanhoe Ct. as well as some preliminary
				plantings.
			</p>
			<p>
				We were waiting on Florida Keys Aqueduct Authority (FKAA) to install the water meter, to allow
				water supply to the median, and the meter is now installed.
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
		
	{/snippet}
</UpdateDetailPost>
