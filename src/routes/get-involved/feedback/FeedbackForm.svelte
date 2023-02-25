<script lang="ts">
    import Checkbox from "$components/elements/Checkbox.svelte";

    let subject: string = "";
    let message: string = "";
    let shareWith: "committee" | "specified" = "committee";
    let agreed: boolean = false;

    const officers = {
        president: "President",
        vicepresident: "Vice President",
        treasurer: "Treasurer",
        secretary: "Secretary",
        "welfare-m": "Male & NB Welfare Officer",
        "welfare-f": "Female & NB Welfare Officer",
        ents: "Entertainment Officer",
        firstyearrep: "First Year Rep",
        classact: "Class Act",
        edo: "Ethnic Diversity Officer",
        womens: "Womens' Officer",
        intl: "Internationals' Officer",
        lgbt: "LGBTQ+ Officer",
        access: "Access Officer",
        facilities: "Facilities Officer",
        green: "Green Officer",
        webmaster: "Webmaster",
    };

    const officerIds = Object.keys(officers) as Array<keyof typeof officers>;

    let selected: Set<keyof typeof officers> = new Set();
</script>

<form action="https://members.thejcr.co.uk/api/feedback" method="POST">
    <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Subject</label>
        <div class="control">
            <input
                bind:value={subject}
                name="subject"
                class="input"
                type="text"
                placeholder="e.g. Upper Hall Prices" />
        </div>
    </div>
    <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Message</label>
        <div class="control">
            <textarea
                bind:value={message}
                name="message"
                class="textarea"
                placeholder="e.g. Hi, just wanted to let you know that..." />
        </div>
    </div>
    <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Share With</label>
        <div class="control">
            <div class="select">
                <select
                    name="type"
                    bind:value={shareWith}
                    on:change={() => {
                        if (shareWith == "specified") selected = new Set();
                    }}>
                    <option value="committee">Committee</option>
                    <option value="specified">Specific officers only</option>
                </select>
            </div>
        </div>
    </div>
    {#if shareWith == "specified"}
        <div class="field">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">Share With</label>
            {#each officerIds as officer}
                <div class="control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="checkbox">
                        <Checkbox
                            name={"share-with"}
                            value={officer}
                            onChange={(checked) => {
                                checked
                                    ? selected.add(officer)
                                    : selected.delete(officer);
                                selected = selected;
                            }} />
                        {officers[officer]}
                    </label>
                </div>
            {/each}
        </div>
    {:else}
        <div class="field">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label">Sensitive (optional)</label>
            <div class="control">
                <label class="checkbox">
                    <input type="checkbox" name="exec" />
                    This message could constitute a direct complaint about the behaviour
                    of a Committee member (and not just a comment on a specific policy),
                    and so should be shared only with the Exec so that it can be
                    passed on discretely.
                </label>
            </div>
        </div>
    {/if}
    <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Anonymity (optional)</label>
        <div class="control">
            <label class="checkbox">
                <input type="checkbox" name="anonymous" />
                I wish to remain anonymous, but accept that my email may be accessed
                under the exceptional circumstances outlined in the terms and conditions
                (below). I accept that the JCR Committee may be limited in the action
                they can take, for example due to concerns about the authenticity
                of the information provided.
            </label>
        </div>
    </div>
    <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Terms and Conditions</label>
        <div class="control">
            <label class="checkbox">
                <input name="agreed" type="checkbox" bind:checked={agreed} />
                I agree to the terms and conditions (see below)
            </label>
        </div>
    </div>
    <div class="field mt-5">
        <div class="control">
            <button
                class="button is-link"
                disabled={!agreed ||
                    (shareWith == "specified" && selected.size == 0) ||
                    subject.length == 0 ||
                    message.length == 0}>Login & Submit</button>
        </div>
    </div>
</form>
