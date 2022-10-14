<script lang="ts">
    import width, { tablet } from "$lib/width";

    import Day from "./Day.svelte";

    let today = true;
</script>

<div
    class="tabs"
    class:is-centered={$width <= tablet.max}
    class:is-fullwidth={$width <= tablet.max}>
    <ul>
        <li
            class:is-active={today}
            on:click={() => (today = true)}
            on:keypress={() => (today = true)}>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a rel="external">Today</a>
        </li>
        <li
            class:is-active={!today}
            on:click={() => (today = false)}
            on:keypress={() => (today = true)}>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a rel="external">Tomorrow</a>
        </li>
    </ul>
</div>
{#if today}
    <div><Day increment={0} /></div>
{:else}
    <div><Day increment={1} /></div>
{/if}
