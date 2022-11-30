<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import PageHeader from "$components/PageHeader.svelte";
</script>

<PageHeader
    current="/get-involved/feedback/success"
    title="Feedback"
    size="small"
    metaDescription="">
    <Content>
        <section class="hero is-info">
            <div class="hero-body">
                <p class="title">Feedback Submitted Successfully!</p>
                <p class="subtitle">
                    Your feedback has been submitted successfully. We will do
                    our best to get back to you in a reasonable timeframe.
                </p>
                <p class="subtitle">
                    <u><a class="link" href="/">Go Home →</a></u>
                </p>
            </div>
        </section>
    </Content>
</PageHeader>
