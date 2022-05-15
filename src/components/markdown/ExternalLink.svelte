<script lang="ts">
    export let href: string = "";
    export let title: string = null;
</script>

<a {href} {title} target="_blank"><slot /></a>
