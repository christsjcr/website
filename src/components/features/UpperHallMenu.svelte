<script lang="ts">
    import width, { tablet } from "$lib/width";

    import Day from "./Day.svelte";

    let today = true;
    let showAllergies = false;
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
            on:keypress={() => (today = false)}>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a rel="external">Tomorrow</a>
        </li>
    </ul>
</div>
{#if today}
    <div><Day increment={0} {showAllergies} /></div>
{:else}
    <div><Day increment={1} {showAllergies} /></div>
{/if}

<div class="columns is-centered">
    <div class="column has-text-centered">
        <label class="field">
            <p class="has-text-centered">
                <b>Show Allergens</b>
            </p>
            <input
                id="modeSwitch"
                type="checkbox"
                class="switch"
                on:click={() => {
                    if (!showAllergies) {
                        window.alert(
                            "Allergy information is retrieved from the College Intranet, but the JCR cannot guarantee it is accurate or up-to-date. Always make sure to double-check with the catering staff."
                        );
                    }
                }}
                bind:checked={showAllergies} />

            <!-- label needed, otherwise bulma-switch breaks -->
            <label for="modeSwitch" />
        </label>
    </div>
</div>
