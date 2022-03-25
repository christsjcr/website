<script lang="ts">
    import type { MenuCategory } from "$lib/menu";
    import ScrollMenu from "./ScrollMenu.svelte";
    export let categories: MenuCategory[];
</script>

<div class="columns is-variable is-5 is-desktop">
    <div class="column is-one-third-desktop is-one-quarter-widescreen">
        <ScrollMenu {categories} />
    </div>
    <div class="column">
        <slot />
    </div>
</div>
