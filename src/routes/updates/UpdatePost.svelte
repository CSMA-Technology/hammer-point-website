<div class="card bg-surface-200 shadow-md p-6">
	<div class="flex flex-row xl:flex-nowrap flex-wrap gap-4">
		<div class="w-52 h-52 shrink-0 mx-auto">
			<div class="h-full flex flex-col justify-center">
				<slot name="image" />
			</div>
		</div>
		<div class="">
			<h3 class="h3 mb-2">
				<slot name="title" />
			</h3>
			<p class="lg:text-lg">
				<slot name="description" />
			</p>
		</div>
	</div>
</div>
