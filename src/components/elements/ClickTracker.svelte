<script lang="ts">
    import { click } from "$lib/track";

    export let id: string;
</script>

<span on:click={() => click(id)} on:keypress={() => click(id)} role="none">
    <slot />
</span>
