<script lang="ts">
    import { showEmails } from "$lib/stores";

    export let username: string;
    export let domain: string;
</script>

{#if $showEmails}
    <a href={`mailto:${username}@${domain}`}>{username}@{domain}</a>
{:else}
    <a href={null} on:click={() => showEmails.set(true)} rel="external"
        >[Show Emails]</a>
{/if}
