<script lang="ts">
    import type { Option } from "./types";

    export let option: Option;
    export let showAllergies: boolean;
</script>

{option.title}
{#if showAllergies && option.allergies && option.allergies.length}
    <span class="has-text-grey">({option.allergies.join(", ")})</span>
{/if}
