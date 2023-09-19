<script lang="ts">
    export let href: string = "";
    export let title: string = null;
</script>

<!-- Opens link in new tab when clicked -->
<a {href} {title} target="_blank" rel="noreferrer"><slot /></a>
