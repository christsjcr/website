<script lang="ts">
    import PageHeader from "$components/PageHeader.svelte";
    import resources from "./resources";
    import Category from "./Category.svelte";

    let search = "";
</script>

<PageHeader
    current="/resources"
    title="Resources"
    size="small"
    metaDescription="Resources for undergraduate students of Christ's College, Cambridge.">
    <div class="block">
        <p class="control">
            <input
                class="input"
                type="text"
                placeholder="Search"
                bind:value={search} />
        </p>
    </div>
    {#each Object.keys(resources) as category}
        <Category {category} search={search.toLowerCase()} />
    {/each}
</PageHeader>
