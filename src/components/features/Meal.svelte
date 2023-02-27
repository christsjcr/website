<script lang="ts" context="module">
    export type Meal = { mains: string[]; dessert: string };
</script>

<script lang="ts">
    import TitleBox from "$components/elements/TitleBox.svelte";

    export let type: "lunch" | "dinner";
    export let data: Meal = null;
    export let dayOfWeek: number; // 0 for Sunday, 1 for Monday, etc

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
            if (isWeekend) return "17:50-19:00";
            return "17:50-19:20";
        }
    };
</script>

<TitleBox
    {header}
    alongside={getMealTime()}
    infoLink={"http://localhost:5173/resources/college-life#Meals"}>
    <div class="content">
        {#if data}
            <h5>Mains</h5>
            <ul>
                {#each data.mains as main}
                    <li>{main}</li>
                {/each}
            </ul>
            <h5>Dessert</h5>
            <ul>
                <li>{data.dessert}</li>
            </ul>
        {:else}
            <ul>
                <li>Full English Breakfast</li>
                <li>Includes vegan sausage option</li>
            </ul>
        {/if}
    </div>
</TitleBox>
