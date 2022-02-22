<script lang="ts">
    import { page } from "$app/stores";
    import PageHeader from "@components/PageHeader.svelte";
    import resources from "@data/resources";
    import SvelteMarkdown from "svelte-markdown";

    $: heading = $page.params.heading;

    $: resourcePage = resources[heading];
</script>

<PageHeader
    current={`/resources/${heading}`}
    title={resourcePage.title}
    description={`${resourcePage.title} resources for undergraduate students of Christ's College, Cambridge.`}
>
    <div class="outer">
        <div class="inner">
            {#each resourcePage.categories as category}
                <div class="box py-5" id={category.category}>
                    <h2 class="title is-2">
                        {category.category}
                    </h2>

                    {#each category.items as resource}
                        <div class="content">
                            <h3 class="title is-5">
                                <a href={resource.url} target="_blank"
                                    >{resource.title}</a
                                >
                            </h3>
                            <ul>
                                {#if resource.info}
                                    {#each resource.info as source}
                                        <li><SvelteMarkdown {source} /></li>
                                    {/each}
                                {/if}
                            </ul>
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</PageHeader>

<style>
    .inner {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-gap: 2rem;
        justify-content: center;
        padding: initial;
    }

    .box {
        width: 100%;
        height: 100%;
    }
</style>
