<script lang="ts">
    export let current: string;

    let expanded = false;

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
                { route: "/", label: "Home" },
                { route: "/", label: "Home" },
            ],
        },
        { route: "/roles", label: "Roles" },
        { route: "/meetings", label: "Meetings" },
    ];

    function active(item: NavbarItem): string {
        return item.route == current ? " is-active" : "";
    }
</script>

<div class="has-navbar-fixed-top">
    <nav class="navbar is-fixed-top is-primary" role="navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img
                    src="https://qjcr.org.uk/content/logo.svg"
                    width="112"
                    height="28"
                    alt="JCR Logo"
                />
            </a>
            <p
                role="button"
                class={"navbar-burger" + (expanded ? " is-active" : "")}
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
                        <div
                            class={"navbar-item has-dropdown is-hoverable" +
                                active(parent)}
                        >
                            <a class="navbar-link" href={parent.route}>
                                {parent.label}
                            </a>

                            <div class="navbar-dropdown">
                                {#each parent.children as child}
                                    <a
                                        class={"navbar-item" + active(child)}
                                        href={child.route}
                                    >
                                        {child.label}
                                    </a>
                                {/each}
                            </div>
                        </div>
                    {:else}
                        <a
                            class={"navbar-item" + active(parent)}
                            href={parent.route}
                        >
                            {parent.label}
                        </a>
                    {/if}
                {/each}
            </div>
        </div>
    </nav>

    <div id="slot">
        <slot />
    </div>
</div>

<style>
    #slot {
        margin-top: 52px;
    }
</style>
