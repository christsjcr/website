<script lang="ts">
    export let current: string;
    export let transparent: boolean = true;
    export let scroll_limit = 0;

    let y = 0;

    let expanded = false;

    $: isTransparent =
        transparent && !expanded && (!transparent || y < scroll_limit);

    $: console.log(y);

    interface NavbarItem {
        route?: string;
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

<svelte:window bind:scrollY={y} />

<div class="has-navbar-fixed-top">
    <nav
        class={"navbar is-fixed-top" +
            (isTransparent ? "is-transparent pushback" : " is-primary")}
        role="navigation"
    >
        <div class="navbar-brand">
            <a class={"navbar-item"} class:is-hidden={isTransparent} href="/">
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
                on:click={() => {
                    expanded = !expanded;
                }}
            >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </p>
        </div>
        <div class={"navbar-menu" + (expanded ? " is-active" : "")}>
            <div class="navbar-end">
                {#each layout as parent}
                    {#if parent.children?.length}
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a
                                class="navbar-link"
                                class:is-active={active(parent)}
                                class:has-text-white={isTransparent}
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
                            class:has-text-white={isTransparent}
                            href={parent.route}
                        >
                            {parent.label}
                        </a>
                    {/if}
                {/each}
            </div>
        </div>
    </nav>

    <div class={"pushmiddle" + (transparent ? "" : " pushdown")}>
        <slot />
    </div>
</div>

<style>
    .pushback {
        z-index: 0;
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
