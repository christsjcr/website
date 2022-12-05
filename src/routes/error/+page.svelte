<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import { onMount } from "svelte";

    let title: string;
    let message: string | undefined;
    let reason: string | undefined;
    let retryLink: string | undefined;

    onMount(() => {
        const params = new URLSearchParams(document.location.search);
        title = params.get("title") ?? "Something went wrong!";
        message = params.get("message");
        reason = params.get("reason");
        retryLink = params.get("retry");
    });
</script>

<PageHeader current="/error" title="Error" size="small" metaDescription="">
    <Content>
        <section class="hero is-warning">
            <div class="hero-body">
                <p class="title">{title}</p>
                {#if message}
                    <p class="subtitle">
                        {message}
                    </p>
                {/if}
                {#if reason}
                    <p>
                        Reason: {reason}
                    </p>
                {/if}
                {#if retryLink}
                    <p class="subtitle">
                        <u><a class="link" href={retryLink}>Retry ↺</a></u>
                    </p>
                {/if}
            </div>
        </section>
    </Content>
</PageHeader>
