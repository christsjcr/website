<script lang="ts">
    import PageHeader from "$components/PageHeader.svelte";
    import resources from "./resources";
    import Category from "./Category.svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let search = "";

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
        <p class="block fscontrol">
            <input
                class="input"
                type="text"
                placeholder="Search"
                bind:value={search} />
        </p>
        <p class="block">
            Can't find what you're looking for here? Email or use the <a
                href="/get-involved/feedback">feedback form</a> to send a message
            to the webmaster, and I'll add it as soon as possible!
        </p>
    </div>
    {#each Object.keys(resources) as category}
        <Category {category} search={search.toLowerCase()} />
    {/each}
</PageHeader>
