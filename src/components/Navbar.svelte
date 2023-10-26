<script lang="ts" context="module">
    export interface NavbarItem {
        route: string;
        label: string;
        children?: NavbarItem[];
        external?: boolean;
    }
</script>

<script lang="ts">
    import { page } from "$lib/page";
    import width, { desktop } from "$lib/width";
    import { onMount } from "svelte";

    export let layout: NavbarItem[];

    let scrollY = 0;

    // prevents the green bar from flashing up on homepage until JS has loaded
    let hidden = true;
    onMount(() => {
        hidden = false;
    });

    $: fromDesktop = $width >= desktop.min;
    $: belowHeader =
        $page.header != null &&
        scrollY >= $page.header.offsetTop + $page.header.offsetHeight - 64;

    // whether the navbar has been expanded
    let expanded = false;

    // for the case when the user expands the menu, then resizes the screen
    $: if (fromDesktop) expanded = false;

    $: hasImage = $page.type != "primary";

    // display as blocks if below header
    $: dropdownBoxed = expanded || belowHeader;

    // show if not transparent, if menu expanded, or if scrolled down far enough
    $: notTransparent = !hasImage || dropdownBoxed;

    $: animated = $page.type == "image" || !belowHeader;

    $: active = (item: NavbarItem) => item.route === $page.current;
</script>

<svelte:window bind:scrollY />

<div class="has-navbar-fixed-top">
    <div {hidden}>
        <nav
            class={"navbar is-fixed-top is-transparent"}
            class:barshow={notTransparent}
            class:pr-4={fromDesktop}
            class:animated>
            <div class="navbar-brand">
                <a
                    class={"navbar-item logo"}
                    class:logoshow={$page.type != "image" || notTransparent}
                    href="/">
                    <img
                        src="/img/logo_small.webp"
                        width="112"
                        height="28"
                        alt="JCR Logo" />
                </a>
                <button
                    class={"navbar-burger"}
                    class:is-active={expanded}
                    aria-label="menu"
                    aria-expanded={expanded}
                    on:click={() => (expanded = !expanded)}
                    on:keypress={() => (expanded = !expanded)}>
                    <span style="color:white" aria-hidden="true" />
                    <span style="color:white" aria-hidden="true" />
                    <span style="color:white" aria-hidden="true" />
                </button>
            </div>
            <div class="navbar-menu" class:is-active={expanded}>
                <div class="navbar-end">
                    {#each layout as parent}
                        {#if parent.children?.length}
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a
                                    class="navbar-link"
                                    class:is-active={active(parent)}
                                    class:has-text-white={!expanded}
                                    href={parent.route}
                                    target={parent.external ? "_blank" : ""}
                                    on:click={() => (expanded = false)}>
                                    <b>{parent.label}</b>
                                </a>

                                <div
                                    class="navbar-dropdown"
                                    class:is-boxed={!dropdownBoxed}
                                    class:last-dropdown={parent ==
                                        layout[layout.length - 1]}>
                                    {#each parent.children as child}
                                        <a
                                            class="navbar-item"
                                            class:is-active={active(child)}
                                            class:has-text-white={!expanded &&
                                                !fromDesktop}
                                            href={child.route}
                                            target={child.external
                                                ? "_blank"
                                                : ""}
                                            on:click={() => (expanded = false)}>
                                            {child.label}
                                        </a>
                                    {/each}
                                </div>
                            </div>
                        {:else}
                            <a
                                class="navbar-item"
                                class:is-active={active(parent)}
                                class:has-text-white={!expanded}
                                href={parent.route}
                                on:click={() => (expanded = false)}>
                                <b>{parent.label}</b>
                            </a>
                        {/if}
                    {/each}
                </div>
            </div>
        </nav>
    </div>

    <div>
        <slot />
    </div>
</div>

<style lang="scss">
    @import "bulma/sass/utilities/_all";

    // for the last dropdown in the menu, prevents spilling over into next window
    .last-dropdown {
        right: 0;
        left: auto;
    }

    .navbar {
        background-color: rgba($primary, 0);
    }

    .navbar.animated {
        transition: background-color 0.3s ease-in-out;
    }

    .logo img {
        width: 112px;
    }

    // for the mobile dropdown animation
    @include until($desktop) {
        .navbar-menu {
            display: block;
            opacity: 0;

            position: absolute;
            left: 0;
            right: 0;

            transform: translateY(-50%);
            transition: all 0.3s ease-in-out;
            pointer-events: none;
        }

        .navbar-menu.is-active {
            opacity: 1;
            transform: none;
            pointer-events: auto;
        }
    }

    /// used to hide and show the green bar / logo

    .barshow {
        background-color: rgba($primary, 1);
    }

    .barshow.animated {
        transition: background-color 0.3s ease-in-out;
    }

    .logo {
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }

    .logoshow {
        transition: opacity 0.3s ease-in-out;
        opacity: 1;
    }

    // leaves some space before the footer
    .has-navbar-fixed-top {
        margin-bottom: 5rem;
    }
</style>
