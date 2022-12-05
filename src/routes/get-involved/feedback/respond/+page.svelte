<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import { onMount } from "svelte";
    import ResponseForm from "./ResponseForm.svelte";

    let recipient: string;
    let subject: string;

    onMount(() => {
        const params = new URLSearchParams(document.location.search);
        recipient = params.get("recipient");
        subject = params.get("subject");
    });
</script>

<PageHeader
    current="/get-involved/feedback/respond"
    title="Feedback Response"
    size="small"
    metaDescription="">
    <Content>
        {#if recipient && subject}
            <ResponseForm {subject} {recipient} />
        {/if}
    </Content>
</PageHeader>
