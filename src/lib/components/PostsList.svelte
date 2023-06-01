<script>
	export let posts = []
</script>


<ul class="list-none p-0">
	{#if posts.length > 0}
		{#each posts as post}
			<li class="mb-24">
				<article>
					<a href="/blog/{post.slug}" class="block">
						<img
						src={post.coverImage}
						alt=""
						width={post.coverWidth}
						height={post.coverHeight}
						style="ratio: {post.coverWidth} / {post.coverHeight}"
						/>
						<h2 class="mt-4">
							{post.title}
						</h2>
					</a>
				</article>

				<p>{post.excerpt}</p>
			</li>
		{/each}
	{:else}
		<p>We're still cooking things up here. Check back again soon!</p>
	{/if}
</ul>