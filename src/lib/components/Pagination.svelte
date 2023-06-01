<script>
	import { postsPerPage } from '$lib/config'

	export let currentPage
	export let totalPosts
	export let path = '/blog/page'
	
	let pagesAvailable
	$: pagesAvailable = Math.ceil(totalPosts / postsPerPage)

	const isCurrentPage = (page) => page == currentPage
</script>

<!-- For some reasotext-ellipsispagination wasn't re-rendering properly during navigation without the #key block -->
{#key currentPage}
	{#if pagesAvailable > 1}
		<nav
			aria-label="Pagination navigation"
			class="pagination mt-0 mr-0 mb-4"
		>
			<ul class="flex flex-wrap justify-start list-none gap-2 m-0 p-0">
				{#each Array.from({length: pagesAvailable}, (_, i) => i + 1) as page}
					<li class="m-0">
						<a
							href="{path}/{page}"
							aria-current="{isCurrentPage(page)}"
							data-current="{isCurrentPage(page)}"
							class="
								bg-red-200 no-underline leading-none flex items-center justify-center w-8 h-8 font-bold transition-colors
								hover:bg-red-300 hover:text-red-100
								data-[current=true]:bg-red-400 data-[current=true]:text-red-100 data-[current=true]:border data-[current=true]:border-current
							"
						>
							<span class="sr-only">
								{#if isCurrentPage(page)}
									Current page: 
								{:else}
									Go to page 
								{/if}
							</span>
							{page}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
{/key}
