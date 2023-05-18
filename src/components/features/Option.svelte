<script lang="ts" context="module">
    export type Option = { title: string; allergies: string[] };
</script>

<script lang="ts">
    export let option: Option;
    export let showAllergies: boolean;
</script>

{option.title}
{#if showAllergies && option.allergies}
    <span class="has-text-grey">({option.allergies.join(", ")})</span>
{/if}
