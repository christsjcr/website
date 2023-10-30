<script lang="ts">
    import Content from "$components/elements/Content.svelte";

    import PageHeader from "$components/PageHeader.svelte";
    import SocietyCard from "./Society.svelte";
    import { societies, type Society } from "./societies";
    import NotificationLink from "$components/elements/NotificationLink.svelte";

    function copy(society: Society): Society & { search: string } {
        return {
            ...society,
            search:
                society.title.toLowerCase() +
                    society.description?.toLowerCase() ?? "",
        };
    }

    let search = "";

    let filterFunding: "funded" | "independent" | "inactive" = null;
    let filterType: "mens sport" | "womens sport" | "mixed sport" | "subject" =
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
            if (filterFunding && soc.status !== filterFunding) return false;
            if (
                filterFunding == null &&
                !showInactive &&
                soc.status === "inactive"
            )
                return false;
            if (filterType && soc.type !== filterType) return false;

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
    current="/get-involved/societies"
    title="Societies"
    size="small"
    metaDescription="A complete list of student societies at Christ's College, Cambridge.">
    <Content>
        <blockquote>
            <p>
                Clubs and societies are typically open to all Christ's students
                (undergraduates and postgraduates), and membership is always
                free. Some clubs and societies may charge for tickets at certain
                optional events. Any queries about clubs and societies can be
                directed to JCR Officers, as well as club/society leaders
                themselves.
            </p>
        </blockquote>
        <div class="columns mt-2">
            <div class="column">
                <NotificationLink
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfTnmDLCwVwiblfuTXfJzC64iIhH3ooZFJCkNIYG2p-Bn0wWg/viewform?usp=sf_link"
                    title="Update Society Info 🔄"
                    content="Is information about your society incorrect or out-of-date? Fill in the society update form."
                    external />
            </div>
            <div class="column">
                <NotificationLink
                    href="/get-involved/societies/create"
                    title="Create a Society 🎭"
                    content="Want to join a society that doesn't exist? Get information about how to set up and run new one." />
            </div>
        </div>
    </Content>
    <br />
    <Content hasText={false}>
        <div class="block">
            <p class="control">
                <input
                    class="input"
                    type="text"
                    placeholder="Search"
                    bind:value={search} />
            </p>
        </div>

        <div class="block">
            <div class="columns is-mobile is-vcentered is-multiline">
                <div class="column is-narrow">
                    <div class="select">
                        <select bind:value={filterFunding}>
                            <option value={null}>Any funding</option>
                            <option value="funded">💰 JCR Funded</option>
                            <option value="independent">💸 Independent</option>
                            <option value="inactive">😴 Inactive</option>
                        </select>
                    </div>
                </div>
                <div class="column is-narrow">
                    <div class="select">
                        <select bind:value={filterType}>
                            <option value={null}>All Types</option>
                            <option value="mens sport">♂ Men's Sport</option>
                            <option value="womens sport"
                                >♀ Women's Sport</option>
                            <option value="mixed sport">⚤ Mixed Sport</option>
                            <option value="subject"
                                >🎓 Subject-Affiliated</option>
                            <option value="other">✨ Other</option>
                        </select>
                    </div>
                </div>
                {#if filterFunding === null}
                    <div class="column is-narrow" style="min-width:200px;">
                        <label class="checkbox px-5">
                            <input
                                type="checkbox"
                                bind:checked={showInactive} />
                            Show Inactive
                        </label>
                    </div>
                {/if}
            </div>
        </div>

        <hr />

        <div class="block">
            {#each filtered as society}
                <SocietyCard {society} />
            {/each}
        </div>
    </Content>
</PageHeader>
