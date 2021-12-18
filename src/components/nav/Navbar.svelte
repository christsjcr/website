<script lang="ts">
    import type { NavbarItem } from "./NavbarItem";
    import Nav from "./Nav.svelte";

    export let current: string;
    export let transparent: boolean = false;
    export let scroll_limit: HTMLElement = null;

    let y = 0;
    let expanded = false;
    let width;

    $: isTransparent =
        transparent &&
        !expanded &&
        (scroll_limit == null ||
            y < scroll_limit.offsetTop + scroll_limit.offsetHeight);

    $: if (width >= 1024) expanded = false;

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

    const toggleExpanded = () => (expanded = !expanded);
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={width} />

<div class="has-navbar-fixed-top">
    <Nav
        {current}
        {layout}
        {expanded}
        {toggleExpanded}
        transparent={isTransparent}
    />

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
