<script lang="ts">
    import { onMount } from "svelte";

    import "../app.scss";
    import type { NavbarItem } from "../components/Navbar.svelte";
    import Navbar from "../components/Navbar.svelte";

    const layout: NavbarItem[] = [
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

    // Adds a listener to disable animations on resizing.
    // Initially tried in pure Svelte, but couldn't get it to work.
    onMount(() => {
        const classes = document.body.classList;
        let timer;
        window.addEventListener("resize", function () {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            } else classes.add("stop-transitions");

            timer = setTimeout(() => {
                classes.remove("stop-transitions");
                timer = null;
            }, 100);
        });
    });
</script>

<Navbar {layout}>
    <slot />
</Navbar>

<style>
    :global(body.stop-transitions *) {
        transition: none !important;
    }
</style>
