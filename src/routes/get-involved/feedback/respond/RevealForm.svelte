<script lang="ts">
    export let encrypted: string;

    let agreed: boolean = false;
</script>

<form action="https://members.thejcr.co.uk/api/feedback/reveal" method="POST">
    <input type="hidden" name="encrypted" value={encrypted} />
    <div class="field">
        <div class="control">
            <label class="checkbox">
                <input name="agreed" type="checkbox" bind:checked={agreed} />
                I have discussed this action with all relevant recipients of the
                original feedback, as well as both the Exec and the Webmaster. I
                agree that any member of the JCR Committee may be alerted of this
                action.
            </label>
        </div>
    </div>
    <div class="field mt-5">
        <div class="control">
            <button class="button is-danger" disabled={!agreed}
                >Reveal Original Sender</button>
        </div>
    </div>
</form>
