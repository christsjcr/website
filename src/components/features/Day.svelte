<script lang="ts">
    import { type Writable, writable } from "svelte/store";
    import MealComponent from "./Meal.svelte";
    import type { Day, Menu } from "./types";
    import menuJson from "$data/menu.json";

    export let increment: number;
    export let showAllergies: boolean;

    const menu: Menu = {
        start: new Date(menuJson.start),
        days: menuJson.days as Day[],
    };

    function getDay(): Date {
        let today = new Date();
        today.setDate(today.getDate() + increment);
        return today;
    }

    const today: Writable<Date> = writable(getDay());

    // repeatedly check for a new day every second
    setInterval(() => ($today = getDay()), 1000);

    $: day = Math.floor(
        ($today.getTime() - menu.start.getTime()) / (1000 * 3600 * 24)
    );
    $: currentMenu = day >= 0 && day < menu.days.length ? menu.days[day] : null;
    $: dayOfWeek = $today.getDay();
</script>

<div class="block">
    <div class="columns m-1 is-variable is-3">
        {#if currentMenu != null}
            <div class="column">
                {#if currentMenu.weekend === true}
                    <MealComponent type="lunch" {dayOfWeek} {showAllergies} />
                {:else}
                    <MealComponent
                        type="lunch"
                        data={currentMenu.lunch}
                        {dayOfWeek}
                        {showAllergies} />
                {/if}
            </div>
            <div class="column">
                <MealComponent
                    type="dinner"
                    data={currentMenu.dinner}
                    {dayOfWeek}
                    {showAllergies} />
            </div>
        {:else}
            <article class="message is-gray">
                <div class="message-header">
                    <p>Menu Unavailable!</p>
                </div>
                <div class="message-body">
                    Menu is only available during term time, and after the
                    intranet has been updated. You can still view the meal times <a
                        href="/resources?search=Meal%20Times"
                        class="has-text-link">here</a
                    >.
                </div>
            </article>
        {/if}
        <slot />
    </div>
</div>
