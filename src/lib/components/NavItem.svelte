<script>
  import { fly } from 'svelte/transition'
	import { currentPage, isMenuOpen } from '$lib/assets/js/store'

	export let href
	export let count

	$: isCurrentPage = $currentPage.startsWith(href)

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false)
		}
	}
</script>

{#key $isMenuOpen}
<li
	in:fly={{ x: -20, duration: 200, delay: 150 + 50 * (count + 1) }}
	class="
		block text-center text-xl w-full mb-4

		sm:mb-0 sm:text-base sm:w-auto sm:text-start
	"
>
	<a
		href={href}
		on:click={maybeCloseMenu}
		data-active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
		class="
			text-red-50
			hover:underline
			data-[active=true]:font-bold data-[active=true]:text-red-500

			sm:text-red-900
		"
		{...$$restProps}
	>
		<slot />
	</a>
</li>
{/key}