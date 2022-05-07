<script lang="ts">
    export let id: string;
</script>

<div on:click={() => window["umami"].trackEvent(id, "click")}>
    <slot />
</div>
