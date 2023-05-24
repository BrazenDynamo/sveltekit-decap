<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
import PostsList from '$lib/components/PostsList.svelte'
import Pagination from '$lib/components/Pagination.svelte'
import { siteDescription } from '$lib/config'

export let data

const title = data?.meta?.title
const excerpt = data?.meta?.excerpt
const date = data?.meta?.date
const updated = data?.meta?.updated
const coverImage = data?.meta?.coverImage
const coverWidth = data?.meta?.coverWidth
const coverHeight = data?.meta?.coverHeight
const categories = data?.meta?.categories
const { PostContent } = data
</script>


<svelte:head>
	{#if PostContent}
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content="{excerpt}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
	{:else}
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription}>
	{/if}
</svelte:head>

{#if PostContent}
<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<img
		class="cover-image"
		src="{coverImage}"
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>

	<h1>{ title }</h1>
	
	<div class="meta">
		<b>Published:</b> {date}
		<br>
		<b>Updated:</b> {updated}
	</div>

	<svelte:component this={PostContent} />

	{#if categories}
		<aside class="post-footer">
			<h2>Posted in: </h2>
			<ul>
				{#each categories as category}
					<li>
						<a href="/blog/category/{category}/">
							{ category }
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article> 
{:else}
<h1>Blog</h1>

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />
{/if}