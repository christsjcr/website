<script lang="ts">
    import TitleBox from "$components/elements/TitleBox.svelte";
    import Option from "./Option.svelte";
    import type { Meal } from "./types";

    export let type: "lunch" | "dinner";
    export let data: Meal = null;
    export let dayOfWeek: number; // 0 for Sunday, 1 for Monday, etc
    export let showAllergies: boolean;

    $: isWeekend = dayOfWeek == 0 || dayOfWeek == 6;

    $: header = {
        lunch: isWeekend ? "🍳 Brunch" : "🥪 Lunch",
        dinner: "🍕 Dinner",
    }[type];

    $: getMealTime = () => {
        if (type === "lunch") {
            if (dayOfWeek == 6) return "11:00-12:30";
            if (dayOfWeek == 0) return "10:30-12:00";
            return "12:00-13:45";
        } else {
            return "17:50-19:00/20:00";
        }
    };
</script>

<TitleBox
    {header}
    alongside={getMealTime()}
    infoLink={"/resources?search=Meal%20Times"}>
    <div class="content">
        {#if data}
            <h5>Mains</h5>
            <ul>
                {#each data.mains as main}
                    <li class="pb-2">
                        <Option option={main} {showAllergies} />
                    </li>
                {/each}
            </ul>
            {#if data.dessert}
                <h5>Dessert</h5>
                <ul>
                    <li><Option option={data.dessert} {showAllergies} /></li>
                </ul>
            {/if}
        {:else}
            <ul>
                <li class="pb-2">Full English Breakfast</li>
                <li class="pb-2">Includes vegan sausage option</li>
            </ul>
        {/if}
    </div>
</TitleBox>
