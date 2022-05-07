<script lang="ts">
    import { click } from "$lib/track";

    export let id: string;
</script>

<div on:click={() => click(id)}>
    <slot />
</div>
