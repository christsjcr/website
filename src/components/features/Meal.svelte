<script lang="ts" context="module">
    export type Meal = { mains: string[]; dessert: string };
</script>

<script lang="ts">
    import TitleBox from "$components/elements/TitleBox.svelte";

    export let header: string;
    export let data: Meal = null;
</script>

<TitleBox {header}>
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
