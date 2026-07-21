<script lang="ts">
    let subject: string = "";
    let message: string = "";
    let agreed: boolean = false;
</script>

<form action="https://members.thejcr.co.uk/api/feedback" method="POST">
    <input type="hidden" name="type" value="specified" />
    <input type="hidden" name="share-with" value="welfare-m" />
    <input type="hidden" name="share-with" value="welfare-f" />

    <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Subject</label>
        <div class="control">
            <input
                bind:value={subject}
                name="subject"
                class="input"
                type="text"
                placeholder="e.g. Just want to talk" />
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
                placeholder="Share as much or as little as you'd like..." />
        </div>
    </div>
    <div class="field">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Anonymity (optional)</label>
        <div class="control">
            <label class="checkbox">
                <input type="checkbox" name="anonymous" />
                I wish to remain anonymous, but accept that my email may be accessed
                under the exceptional circumstances outlined in the terms and conditions
                (below). I accept that the welfare team may be limited in the action
                they can take.
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
                disabled={!agreed || subject.length == 0 || message.length == 0}>
                Submit Securely
            </button>
        </div>
    </div>
</form>