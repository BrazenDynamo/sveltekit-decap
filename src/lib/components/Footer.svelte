<script>
	import { siteAuthor } from '$lib/config';
</script>

<footer
	class="
		py-10 px-8 bg-red-900 text-red-50 grid grid-cols-1 items-stretch gap-8

		sm:grid-cols-[1fr_1fr_2fr]
	"
>
	<!-- <nav>
		<ul>
			<li>
				<a href="/api/rss.xml" data-sveltekit-reload>RSS</a>
			</li>
			<li>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav> -->
	<span></span>
	<span></span>
	<p class="m-0 text-xs text-right">&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>
