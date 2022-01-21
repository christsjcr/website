<script lang="ts" context="module">
    export interface NavbarItem {
        route: string;
        label: string;
        children?: NavbarItem[];
    }
</script>

<script lang="ts">
    import { page } from "@lib/page";
    import width, { desktop, widescreen } from "@lib/width";

    export let layout: NavbarItem[];

    let y = 0;
    let expanded = false;

    $: fromDesktop = $width >= desktop.min;
    $: fromWidescreen = $width >= widescreen.min;

    // for the case when the user expands the menu, then resizes the screen
    $: if (fromDesktop) expanded = false;

    $: hasImage = $page.type != "primary";

    $: belowHeader =
        $page.header != null &&
        y >= $page.header.offsetTop + $page.header.offsetHeight - 64;

    // show if not transparent, if menu expanded, or if scrolled down far enough
    $: show = (!hasImage && !fromWidescreen) || expanded || belowHeader;

    $: animated = $page.type == "home" || !belowHeader;

    $: active = (item: NavbarItem) => item.route === $page.current;
</script>

<svelte:window bind:scrollY={y} />

<div class="has-navbar-fixed-top">
    <nav
        class={"navbar is-fixed-top is-transparent"}
        class:barshow={show}
        class:pr-4={fromDesktop}
        class:animated
        role="navigation"
    >
        <div class="navbar-brand">
            <a
                class={"navbar-item logo"}
                class:logoshow={$page.type != "home" || show}
                href="/"
            >
                <img
                    src="https://qjcr.org.uk/content/logo.svg"
                    width="112"
                    height="28"
                    alt="JCR Logo"
                />
            </a>
            <p
                role="button"
                class={"navbar-burger"}
                class:is-active={expanded}
                aria-label="menu"
                aria-expanded={expanded}
                on:click={() => (expanded = !expanded)}
            >
                <span style="color:white" aria-hidden="true" />
                <span style="color:white" aria-hidden="true" />
                <span style="color:white" aria-hidden="true" />
            </p>
        </div>
        <div
            class="navbar-menu"
            class:is-active={expanded}
            on:click={() => (expanded = false)}
        >
            <div class="navbar-end">
                {#each layout as parent}
                    {#if parent.children?.length}
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a
                                class="navbar-link"
                                class:is-active={active(parent)}
                                class:has-text-white={!expanded}
                                href={parent.route}
                            >
                                <b>{parent.label}</b>
                            </a>

                            <div class="navbar-dropdown" class:is-boxed={!show}>
                                {#each parent.children as child}
                                    <a
                                        class="navbar-item"
                                        class:is-active={active(child)}
                                        class:has-text-white={!expanded &&
                                            !fromDesktop}
                                        href={child.route}
                                    >
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
                        >
                            <b>{parent.label}</b>
                        </a>
                    {/if}
                {/each}
            </div>
        </div>
    </nav>

    <div>
        <slot />
    </div>
</div>

<style lang="scss">
    @import "bulma/sass/utilities/_all";

    .navbar {
        background-color: rgba($primary, 0);
    }

    .navbar.animated {
        transition: background-color 0.3s ease-in-out;
    }

    .logo img {
        width: 70px;
    }

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

    .has-navbar-fixed-top {
        margin-bottom: 5rem;
    }
</style>
