<script lang="ts">
    import { type Writable, writable } from "svelte/store";
    import Meal from "./Meal.svelte";
    import menuJson from "@data/menu.json";

    type Meal = { mains: string[]; dessert: string };

    type Weekday = { weekend: false; lunch: Meal; dinner: Meal };
    type Weekend = { weekend: true; dinner: Meal };
    type Day = Weekday | Weekend;

    type Menu = { start: Date; days: Day[] };

    const menu: Menu = {
        start: new Date(menuJson.start),
        days: menuJson.days as Day[],
    };

    const today: Writable<Date> = writable(new Date());
    setInterval(() => ($today = new Date()), 1000);

    $: day = Math.floor(
        ($today.getTime() - menu.start.getTime()) / (1000 * 3600 * 24)
    );

    $: currentMenu = day >= 0 && day < menu.days.length ? menu.days[day] : null;
</script>

<div class="block">
    <div class="columns m-1 is-variable is-3">
        {#if currentMenu != null}
            <div class="column">
                {#if currentMenu.weekend === true}
                    <Meal header="🍳 Brunch" />
                {:else}
                    <Meal header="🥪 Lunch" data={currentMenu.lunch} />
                {/if}
            </div>
            <div class="column">
                <Meal header="🍕 Dinner" data={currentMenu.dinner} />
            </div>
        {:else}
            <article class="message is-gray">
                <div class="message-header">
                    <p>Menu Unavailable!</p>
                </div>
                <div class="message-body">
                    Menu data is only available during term times.
                </div>
            </article>
        {/if}
    </div>
</div>
