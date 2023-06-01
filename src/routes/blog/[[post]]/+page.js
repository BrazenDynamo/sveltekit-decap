import { error } from '@sveltejs/kit'

export const load = async ({ url, fetch, params }) => {
	if (params.post) {
		// Show post
		try {	
			const post = await import(`../../../collections/posts/${params.post}.md`)

			return {
				PostContent: post.default,
				meta: { ...post.metadata, slug: params.post } 
			}
		} catch(err) {
			throw error(404, err)
		}

	} else {
		// Show post list
		const postRes = await fetch(`${url.origin}/api/posts.json`)
		const posts = await postRes.json()

		const totalRes = await fetch(`${url.origin}/api/posts/count`)
		const total = await totalRes.json()

		return { posts, total }
	}
}
