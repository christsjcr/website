<script lang="ts">
    export let subject: string;
    export let recipient: string;
    export let notify: string[];

    let message: string = "";
    let agreed: boolean = false;
</script>

<form action="https://members.thejcr.co.uk/api/feedback/respond" method="POST">
    <input type="hidden" name="recipient" value={recipient} />
    <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Subject</label>
        <div class="control">
            <input
                value={subject}
                name="subject"
                class="input"
                type="text"
                readonly />
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
                placeholder="e.g. Thanks for letting us know about..." />
        </div>
    </div>
    {#each notify as id}
        <input type="hidden" name="notify" value={id} />
    {/each}
    <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Terms and Conditions</label>
        <div class="control">
            <label class="checkbox">
                <input name="agreed" type="checkbox" bind:checked={agreed} />
                I have discussed this response with all relevant recipients of the
                original feedback (as well as members of the Exec, should you have
                any concerns about the original feedback or how to respond).
            </label>
        </div>
    </div>
    <div class="field mt-5">
        <div class="control">
            <button
                class="button is-link"
                disabled={!agreed || message.length == 0}
                >Login & Submit</button>
        </div>
    </div>
</form>
