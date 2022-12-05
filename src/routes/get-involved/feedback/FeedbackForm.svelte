<script lang="ts">
    import Checkbox from "$components/elements/Checkbox.svelte";

    let subject: string = "";
    let message: string = "";
    let type: "general" | "sensitive" = "general";
    let agreed: boolean = false;

    const officers = {
        "welfare-m": "Male & NB Welfare Officer",
        "welfare-f": "Female & NB Welfare Officer",
        lgbt: "LGBTQ+ Officer",
        edo: "Ethnic Diversity Officer",
        disabilities: "Disabilities Officer",
        classact: "Class Act Officer",
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
        <label class="label">Type</label>
        <div class="control">
            <div class="select">
                <select
                    name="type"
                    bind:value={type}
                    on:change={() => {
                        if (type == "sensitive") selected = new Set();
                    }}>
                    <option value="general">General</option>
                    <option value="sensitive"
                        >Sensitive (share with specific officers only)</option>
                </select>
            </div>
        </div>
    </div>
    {#if type == "sensitive"}
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
                    (type == "sensitive" && selected.size == 0) ||
                    subject.length == 0 ||
                    message.length == 0}>Login & Submit</button>
        </div>
    </div>
</form>
