<script>
	import { isMenuOpen } from '$lib/assets/js/store'
	import HamburgerSVG from './svg/HamburgerSVG.svelte'
	import XSVG from './svg/XSVG.svelte'

	export let closeOnly = false

	const toggleIsMenuOpen = () => {
		isMenuOpen.set(!$isMenuOpen)
	}
</script>

<!-- TODO: Create a new component for the close button -->
<button
	on:click={toggleIsMenuOpen}
	aria-pressed={$isMenuOpen}
	tabindex={($isMenuOpen || !closeOnly) ? '0' : '-1'}
	class="menu-button
		m-0 bg-transparent p-0 border-0 w-8

		sm:hidden
	"
	class:absolute={closeOnly}
	class:top-8={closeOnly}
	class:right-8={closeOnly}
>
	<span class="sr-only">Toggle hamburger menu</span>
	{#if closeOnly}
		<XSVG />
	{:else}
		<HamburgerSVG />
	{/if}
</button>