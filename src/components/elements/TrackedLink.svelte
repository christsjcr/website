<script lang="ts">
    export let href: string;
    export let id: string;
    export let external: boolean = false;

    import ClickTracker from "./ClickTracker.svelte";
</script>

<ClickTracker {id}>
    <a {href} target={external ? "_blank" : ""}>
        <slot />
    </a>
</ClickTracker>
