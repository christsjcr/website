<script lang="ts">
    import PageHeader from "$components/PageHeader.svelte";
    import SocietyCard from "$components/societies/Society.svelte";
    import { societies, type Society } from "$data/societies";

    function copy(society: Society): Society & { search: string } {
        return {
            ...society,
            search:
                society.title.toLowerCase() +
                    society.description?.toLowerCase() ?? "",
        };
    }

    let search: string = "";

    let filterFunding: "funded" | "unfunded" | "inactive" = null;
    let filterType: "mens sport" | "womens sport" | "mixed sport" | "academic" =
        null;
    let showInactive = false;

    let filtered: Society[] = [];

    const sorted: (Society & { search: string })[] = societies.map(copy);
    sorted.sort((a, b) => a.title.localeCompare(b.title));

    $: {
        const terms = search
            .split(" ")
            .filter((x) => x.length > 0)
            .map((x) => x.toLowerCase());

        filtered = sorted.filter((soc) => {
            if (filterFunding && soc.tags.status !== filterFunding)
                return false;
            if (
                filterFunding == null &&
                !showInactive &&
                soc.tags.status === "inactive"
            )
                return false;
            if (filterType && soc.tags.type !== filterType) return false;

            if (terms.length > 0) {
                const title = soc.title.toLowerCase();
                const description = soc.description?.toLowerCase() ?? "";
                const search = title + description;
                for (var t of terms) {
                    if (!search.includes(t)) {
                        return false;
                    }
                }
            }
            return true;
        });
    }
</script>

<PageHeader
    current="/societies"
    title="Societies"
    size="small"
    description="Resources for undergraduate students of Christ's College, Cambridge."
>
    <div class="block content">
        <blockquote>
            <p>
                Clubs and societies are typically open to all Christ's students
                (undergraduates and postgraduates), and membership is always
                free. Some clubs and societies may charge for tickets at certain
                optional events. The JCR oversees all activities by clubs,
                including their financial conduct, and encourages them to engage
                with new members. The JCR is also the ultimate owner of all
                property held by clubs and societies that are part of the
                Amalgamated Clubs. Any queries about clubs and societies can be
                directed to JCR Officers, as well as club/society leaders
                themselves.
            </p>
            <p>
                Is information about your society incorrect or out-of-date? Fill
                in the <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfTnmDLCwVwiblfuTXfJzC64iIhH3ooZFJCkNIYG2p-Bn0wWg/viewform?usp=sf_link"
                    target="_blank">society update form</a
                >.
            </p>
        </blockquote>
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

    <div class="block">
        <div class="columns is-mobile is-vcentered">
            <div class="column is-narrow">
                <div class="select">
                    <select bind:value={filterFunding}>
                        <option value={null}>Any funding</option>
                        <option value="funded">💰 JCR Funded</option>
                        <option value="unfunded">💸 Independent</option>
                        <option value="inactive">😴 Inactive</option>
                    </select>
                </div>
            </div>
            <div class="column is-narrow">
                <div class="select">
                    <select bind:value={filterType}>
                        <option value={null}>All Types</option>
                        <option value="academic">🎓 Academic</option>
                        <option value="mens sport">♂ Men's Sport</option>
                        <option value="womens sport">♀ Women's Sport</option>
                        <option value="mixed sport">⚤ Mixed Sport</option>
                    </select>
                </div>
            </div>
            {#if filterFunding === null}
                <div class="column is-narrow">
                    <label class="checkbox">
                        <input type="checkbox" bind:checked={showInactive} />
                        Show Inactive
                    </label>
                </div>
            {/if}
        </div>
    </div>

    <div class="block">
        {#each filtered as society}
            <SocietyCard {society} />
        {/each}
    </div></PageHeader
>
