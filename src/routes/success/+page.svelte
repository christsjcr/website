<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import { onMount } from "svelte";

    let title: string;
    let message: string;

    onMount(() => {
        const params = new URLSearchParams(document.location.search);
        title = params.get("title") ?? "Congratulations!";
        message =
            params.get("message") ?? "Your action completed successfully.";
    });
</script>

<PageHeader current="/success" title="Success" size="small" metaDescription="">
    <Content>
        <section class="hero is-info">
            <div class="hero-body">
                <p class="title">{title}</p>
                <p class="subtitle">
                    {message}
                </p>
                <p class="subtitle">
                    <u><a class="link" href="/">Go Home →</a></u>
                </p>
            </div>
        </section>
    </Content>
</PageHeader>
