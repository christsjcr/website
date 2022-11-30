<script lang="ts">
    import { page } from "$app/stores";
    import Content from "$components/elements/Content.svelte";
    import PageHeader from "$components/PageHeader.svelte";
</script>

<PageHeader
    current="/get-involved/feedback/error"
    title="Feedback"
    size="small"
    metaDescription="">
    <Content>
        <section class="hero is-warning">
            <div class="hero-body">
                <p class="title">Something Went Wrong!</p>
                <p class="subtitle">
                    Something wasn't quite right, and we couldn't submit your
                    feedback. Please contact the webmaster if this issue
                    persists.
                </p>
                {#if $page.url.searchParams.get("reason")}
                    <p>
                        Reason: {$page.url.searchParams.get("reason") ?? ""}
                    </p>
                {/if}
                <p class="subtitle">
                    <u
                        ><a class="link" href="/get-involved/feedback/"
                            >Retry ↺</a
                        ></u>
                </p>
            </div>
        </section>
    </Content>
</PageHeader>
