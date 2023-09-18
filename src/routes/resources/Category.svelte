<script lang="ts">
    import Markdown from "$components/markdown/Markdown.svelte";
    import resources from "./resources";

    export let category: string;
    export let search: string;

    $: resourceCategory = resources[category];

    $: filteredSections = resourceCategory.title.toLowerCase().includes(search)
        ? resourceCategory.sections
        : resourceCategory.sections
              .map((section) => ({
                  ...section,
                  items: section.title.toLowerCase().includes(search)
                      ? section.items
                      : section.items.filter((item) =>
                            (item.title + "\n" + (item.info ?? []).join("\n"))
                                .toLowerCase()
                                .includes(search)
                        ),
              }))
              .filter((section) => section.items.length > 0);
</script>

{#if filteredSections.length > 0}
    <div class="my-5 py-5">
        <h2 class="title is-2">{resourceCategory.title}</h2>
        <div class="inner">
            {#each filteredSections as section}
                <div class="box py-5" id={section.title}>
                    <h3 class="title is-3">
                        {section.title}
                    </h3>

                    {#each section.items as resource}
                        <div class="content">
                            <h3 class="title is-5">
                                <a
                                    href={resource.url}
                                    target="_blank"
                                    rel="noreferrer">{resource.title}</a>
                            </h3>
                            <ul>
                                {#if resource.info}
                                    {#each resource.info as source}
                                        <li>
                                            <Markdown externalLinks {source} />
                                        </li>
                                    {/each}
                                {/if}
                            </ul>
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
{/if}

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
