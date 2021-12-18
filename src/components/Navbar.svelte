<script lang="ts">
    export let current: string;
    export let transparent: boolean = false;
    export let scroll_limit: HTMLElement = null;

    let y = 0;
    let expanded = false;
    let width: number;

    // for the case when the user expands the menu, then resizes the screen
    $: if (width >= 1024) expanded = false;

    // show if not transparent, if menu expanded, or if scrolled down far enough
    $: show =
        !transparent ||
        expanded ||
        (scroll_limit != null &&
            y >= scroll_limit.offsetTop + scroll_limit.offsetHeight);

    interface NavbarItem {
        route: string;
        label: string;
        children?: NavbarItem[];
    }

    let layout: NavbarItem[] = [
        { route: "/", label: "Home" },
        {
            route: "/resources",
            label: "Resources",
            children: [
                { route: "", label: "X" },
                { route: "", label: "Y" },
            ],
        },
        { route: "/roles", label: "Roles" },
        { route: "/meetings", label: "Meetings" },
    ];

    const active = (item: NavbarItem) => item.route == current;
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={width} />

<div class="has-navbar-fixed-top">
    <nav class={"navbar is-fixed-top"} class:barshow={show} role="navigation">
        <div class="navbar-brand">
            <a class={"navbar-item logo"} class:logoshow={show} href="/">
                <img
                    src="https://qjcr.org.uk/content/logo.svg"
                    width="112"
                    height="28"
                    alt="JCR Logo"
                />
            </a>
            <p
                role="button"
                class={"navbar-burger pushfront"}
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
        <div class="navbar-menu" class:is-active={expanded}>
            <div class="navbar-end">
                {#each layout as parent}
                    {#if parent.children?.length}
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a
                                class="navbar-link"
                                class:is-active={active(parent)}
                                class:has-text-white={show && !expanded}
                                href={parent.route}
                            >
                                {parent.label}
                            </a>

                            <div class="navbar-dropdown">
                                {#each parent.children as child}
                                    <a
                                        class="navbar-item"
                                        class:is-active={active(child)}
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
                            class:has-text-white={!show}
                            href={parent.route}
                        >
                            {parent.label}
                        </a>
                    {/if}
                {/each}
            </div>
        </div>
    </nav>

    <div class="pushmiddle" class:pushdown={!transparent}>
        <slot />
    </div>
</div>

<style lang="scss">
    .navbar {
        transition: background-color 0.4s ease-in-out;
        background-color: rgba($primary, 0);
    }

    .barshow {
        transition: background-color 0.4s ease-in-out;
        background-color: rgba($primary, 1);
    }

    .logo {
        transition: opacity 0.4s ease-in-out;
        opacity: 0;
    }

    .logoshow {
        transition: opacity 0.4s ease-in-out;
        opacity: 1;
    }

    .pushmiddle {
        z-index: 200;
    }

    .pushfront {
        z-index: 1000;
    }

    .pushdown {
        margin-top: 52px;
    }
</style>
