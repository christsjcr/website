<script lang="ts">
    import PageHeader from "$components/PageHeader.svelte";
    import resources from "./resources";
    import Category from "./Category.svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let search = "";
    let selectedCategory: string | undefined = undefined;

    onMount(() => {
        if ($page.url.searchParams.has("search")) {
            search = $page.url.searchParams.get("search");
        }
    });
</script>

<PageHeader
    current="/resources"
    title="Resources"
    size="small"
    metaDescription="Resources for undergraduate students of Christ's College, Cambridge.">
    <div class="block">
        <div class="field has-addons">
            <div class="control">
                <div class="select">
                    <select bind:value={selectedCategory}>
                        <option value={undefined}>All Sections</option>
                        {#each Object.keys(resources) as category}
                            <option value={category}
                                >{resources[category].title}</option>
                        {/each}
                    </select>
                </div>
            </div>
            <div class="control" style="width: 100%">
                <input
                    class="input"
                    type="text"
                    placeholder="Search"
                    bind:value={search} />
            </div>
        </div>
        <p class="block">
            Can't find what you're looking for here? Email or use the <a
                href="/get-involved/feedback">feedback form</a> to send a message
            to the webmaster, and I'll add it as soon as possible!
        </p>
        <div class="block control" />
    </div>
    {#if selectedCategory}
        <Category category={selectedCategory} search={search.toLowerCase()} />
    {:else}
        {#each Object.keys(resources) as category}
            <Category {category} search={search.toLowerCase()} />
        {/each}
    {/if}
</PageHeader>
