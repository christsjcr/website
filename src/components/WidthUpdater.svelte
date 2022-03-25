<script lang="ts">
    import width from "$lib/width";

    let w;
    $: width.set(w);
</script>

<svelte:window bind:innerWidth={w} />
