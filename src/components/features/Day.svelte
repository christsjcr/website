<script lang="ts">
    import { type Writable, writable } from "svelte/store";
    import MealComponent from "./Meal.svelte";
    import menuJson from "$data/menu.json";

    export let increment: number;

    type Meal = { mains: string[]; dessert: string };

    type Weekday = { weekend: false; lunch: Meal; dinner: Meal };
    type Weekend = { weekend: true; dinner: Meal };
    type Day = Weekday | Weekend;

    type Menu = { start: Date; days: Day[] };

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
                    <MealComponent type="lunch" {dayOfWeek} />
                {:else}
                    <MealComponent
                        type="lunch"
                        data={currentMenu.lunch}
                        {dayOfWeek} />
                {/if}
            </div>
            <div class="column">
                <MealComponent
                    type="dinner"
                    data={currentMenu.dinner}
                    {dayOfWeek} />
            </div>
        {:else}
            <article class="message is-gray">
                <div class="message-header">
                    <p>Menu Unavailable!</p>
                </div>
                <div class="message-body">
                    Menu is only available during term time.
                </div>
            </article>
        {/if}
        <slot />
    </div>
</div>
