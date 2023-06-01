<script>
	import MainNav from './MainNav.svelte'
	import HamburgerMenuButton from './HamburgerMenuButton.svelte'
	import { siteTitle } from '$lib/config'

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<header
	class="
		py-10 px-9 flex justify-between items-center bg-red-300 text-red-950

		sm:justify-center sm:flex-wrap sm:h-auto
	"
>
	<a
		on:click|preventDefault={focusMain}
		href="#main"
		class="
			absolute -top-24 left-0 p-2 opacity-0 flex justify-center items-center h-12 no-underline
			focus:translate-y-24 focus:opacity-100
		"
	>
		Skip to main content
	</a>
	
	<a
		href="/"
		class="site-title
			text-4xl leading-none text-center m-0 block font-bold text-red-900
			sm:w-full sm:text-3xl
		"
	>
		{siteTitle}
	</a>
	
	<HamburgerMenuButton />
	<MainNav />

</header>