<script lang="ts">
    import { onMount } from "svelte";

    import { type Writable, writable } from "svelte/store";
    import Meal from "./Meal.svelte";

    type Meal = { mains: string[]; dessert: string };

    type Weekday = { type: "weekday"; lunch: Meal; dinner: Meal };
    type Weekend = { type: "weekend"; dinner: Meal };
    type Day = Weekday | Weekend;

    type Menu = { start: Date; days: Day[] };

    const menu: Menu = {
        start: new Date(2022, 2, 24),
        days: [
            {
                type: "weekday",
                lunch: {
                    mains: [
                        "BBQ Jackfruit in Soft Tortilla Shell with Mustard Slaw",
                        "Ricotta Tortelloni with Spinach & Basil Cream & Garlic Slice",
                        "Honey & Garlic Salmon",
                        "Chicken Katsu with Curry Sauce",
                    ],
                    dessert: "Chocolate Churros with Chocolate Dip",
                },
                dinner: {
                    mains: [
                        "Cajun Tofu with Sweetcorn & Bean Chilli with Corn Tortillas",
                        "Quorn & Vegetable Stir Fry",
                        "Honey & Garlic Salmon",
                        "Chicken Katsu with Curry Sauce",
                    ],
                    dessert: "Fruit Crumble with Custard",
                },
            },
        ],
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
        {#if currentMenu}
            <div class="column">
                {#if currentMenu.type == "weekend"}
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
