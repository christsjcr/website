<script lang="ts">
    import { page } from "../components/Navbar.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        page.set({
            current: "/meetings",
        });
    });
</script>
