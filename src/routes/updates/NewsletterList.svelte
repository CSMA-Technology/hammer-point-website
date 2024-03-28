<script lang="ts">
	const issues = [
		{
			title: 'January 2024',
			date: '2024-01-01',
			url: '/newsletter/2024-01-01'
		},
		{
			title: 'October 2023',
			date: '2023-10-01',
			url: '/newsletter/2023-10-01'
		},
		{
			title: 'July 2023',
			date: '2023-07-01',
			url: '/newsletter/2023-07-01'
		}
	].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
</script>

<ul class="mt-2 flex flex-row flex-wrap gap-2">
	{#each issues as issue}
		<li class="bg-paper shadow-md w-48 p-4 !rounded-md mx-auto">
			<a href={issue.url}> 🗞️ {issue.title} </a>
		</li>
	{/each}
	<li class="bg-primary-300 shadow-md w-48 p-4 !rounded-md mx-auto">
		<a href="/newsletter/archive"> 🧾 Full Archive </a>
	</li>
</ul>
