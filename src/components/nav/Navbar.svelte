<script lang="ts">
    import type { NavbarItem } from "./NavbarItem";
    import Nav from "./Nav.svelte";
    import { fade } from "svelte/transition";
    import stateTransition from "../stateTransition";

    export let current: string;
    export let transparent: boolean = false;
    export let scroll_limit: HTMLElement = null;

    let y = 0;
    let expanded = false;
    let width;

    const animation = stateTransition(transparent);
    const state = animation.state;

    $: isTransparent =
        transparent &&
        !expanded &&
        (scroll_limit == null ||
            y < scroll_limit.offsetTop + scroll_limit.offsetHeight);

    $: animation.transitionTo(isTransparent);

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
    {#if $state === true}
        <div transition:fade on:outroend={animation.onOutro}>
            <Nav
                {current}
                {layout}
                {expanded}
                {toggleExpanded}
                transparent={true}
            />
        </div>
    {:else if $state === false}
        <div transition:fade on:outroend={animation.onOutro}>
            <Nav {current} {layout} {expanded} {toggleExpanded} />
        </div>
    {/if}

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
