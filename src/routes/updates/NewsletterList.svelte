<script lang="ts">
	const issues = [
		{
			title: 'September 2023',
			date: '2023-09-25',
			url: '/pelican-press/2023-09-25.pdf'
		},
		{
			title: 'January 2023',
			date: '2023-01-26',
			url: '/pelican-press/2023-01-26.pdf'
		},
		{
			title: 'October 2022',
			date: '2022-10-26',
			url: '/pelican-press/2022-10-26.pdf'
		}
	].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
</script>

<ul class="mt-2 flex flex-row flex-wrap gap-2">
	{#each issues as issue}
		<li class="mx-auto w-48 !rounded-md bg-paper p-4 shadow-md">
			<a href={issue.url} target="_blank"> 🗞️ {issue.title} </a>
		</li>
	{/each}
	<!-- <li class="mx-auto w-48 !rounded-md bg-primary-300 p-4 shadow-md">
		<a href="/pelican-press/archive"> 🧾 Full Archive </a>
	</li> -->
</ul>
