<script lang="ts">
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
</script>

<Navbar {layout}>
    <slot />
</Navbar>
