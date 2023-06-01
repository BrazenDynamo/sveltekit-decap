<script>
  import { navItems } from '$lib/config'
  import { isMenuOpen } from '$lib/assets/js/store'
  import NavItem from './NavItem.svelte'
  import HamburgerMenuButton from './HamburgerMenuButton.svelte'
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav 
  class="
    fixed top-0 left-0 w-full h-full flex justify-center items-center bg-red-950 text-red-50 z-50
    invisible opacity-0 transition-all pointer-events-none translate-x-[-100vw]
    data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto data-[open=true]:visible data-[open=true]:translate-x-0

    sm:static sm:w-auto sm:h-auto sm:bg-inherit
    sm:visible sm:opacity-100 sm:transition-none sm:pointer-events-auto sm:translate-x-0
  "
  data-open={$isMenuOpen}
>
  <ul
    class="
      list-none flex flex-wrap justify-center gap-x-6 p-0 m-0

      sm:mt-2 sm:mr-auto sm:mb-0 sm:pt-2 sm:border-t sm:border-t-red-900 sm:w-max
    "
  >
    {#each navItems as { route, title, ...aOptions }, i}
      <NavItem href={route} count={i} {...aOptions}>
        {title}
      </NavItem>
    {/each}
  </ul>
  <HamburgerMenuButton closeOnly />
</nav>
