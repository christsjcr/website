<script lang="ts">
    import PageHeader from "$components/PageHeader.svelte";
    import { societies, type Society } from "$data/societies";

    function copy(society: Society): Society {
        return { ...society };
    }

    let search: string = "";
    let filtered: Society[] = [];

    $: {
        const sorted = societies.map(copy);
        sorted.sort((a, b) => a.title.localeCompare(b.title));

        const terms = search
            .split(" ")
            .filter((x) => x.length > 0)
            .map((x) => x.toLowerCase());

        if (terms.length > 0) {
            filtered = sorted.filter((soc) => {
                const title = soc.title.toLowerCase();
                for (var t of terms) {
                    if (!title.includes(t)) {
                        return false;
                    }
                }
                return true;
            });
        } else {
            filtered = sorted;
        }
    }
</script>

<PageHeader
    current="/societies"
    title="Societies"
    size="small"
    description="Resources for undergraduate students of Christ's College, Cambridge."
>
    <div class="block content">
        <blockquote>Societies...</blockquote>
    </div>

    <div class="block">
        <p class="control">
            <input
                class="input"
                type="text"
                placeholder="Search"
                bind:value={search}
            />
        </p>
    </div>

    {#each filtered as society}
        <div class="box">
            <h5 class="title is-5">{society.icon ?? "⬜"} {society.title}</h5>
            <p>Type: {society.category}</p>
        </div>
    {/each}
</PageHeader>
