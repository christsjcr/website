<script lang="ts">
    export let href: string = "";
    export let title: string = null;
</script>

{#if href.length == 0 || href[0] != "/"}
    <!-- Opens link in new tab when clicked -->
    <a {href} {title} target="_blank" rel="noreferrer"><slot /></a>
{:else}
    <a {href} {title}><slot /></a>
{/if}
