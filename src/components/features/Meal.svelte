<script lang="ts" context="module">
    export type Meal = { mains: string[]; dessert: string };
</script>

<script lang="ts">
    export let header: string;
    export let data: Meal = null;
</script>

<div class="card">
    <header class="card-header">
        <p
            class="card-header-title title is-4 pb-4 mb-0 has-background-primary has-text-white"
        >
            {header}
        </p>
    </header>
    <div class="card-content content">
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
</div>
