<script lang="ts">
    import type { NavbarItem } from "./NavbarItem";
    export let layout: NavbarItem[];
    export let current: string;
    export let transparent: boolean = false;
    export let expanded: boolean;
    export let toggleExpanded: () => void;

    const active = (item: NavbarItem) => item.route == current;
</script>

<nav
    class={"navbar is-fixed-top" +
        (transparent ? " is-transparent pushback" : " is-primary")}
    role="navigation"
>
    <div class="navbar-brand">
        <a class={"navbar-item"} class:is-hidden={transparent} href="/">
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
            on:click={toggleExpanded}
        >
            <span style="color:white" aria-hidden="true" />
            <span style="color:white" aria-hidden="true" />
            <span style="color:white" aria-hidden="true" />
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
                            class:has-text-white={transparent && !expanded}
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
                        class:has-text-white={transparent && !expanded}
                        href={parent.route}
                    >
                        {parent.label}
                    </a>
                {/if}
            {/each}
        </div>
    </div>
</nav>
