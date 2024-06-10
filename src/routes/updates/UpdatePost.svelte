<div class="card bg-paper-light p-6 shadow-md">
	<div class="flex flex-row flex-wrap gap-4 xl:flex-nowrap">
		<div class="mx-auto xs:h-64 xs:w-64 xs:shrink-0">
			<div class="flex h-full flex-col justify-center">
				<slot name="image" />
			</div>
		</div>
		<div class="">
			<h3 class="h3 mb-2">
				<slot name="title" />
			</h3>
			<p class="lg:text-base">
				<slot name="description" />
			</p>
			<slot name="video" />
		</div>
	</div>
</div>
