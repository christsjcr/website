<script lang="ts">
    import NotificationLink from "$components/elements/NotificationLink.svelte";

    import PageHeader from "$components/PageHeader.svelte";
</script>

<PageHeader
    current="/get-involved"
    title="Get Involved"
    size="small"
    metaDescription="Find out what's going on at Christ's!"
>
    <div class="columns my-6">
        <div class="column is-one-third" />
        <div class="column is-one-third">
            <NotificationLink
                href="/get-involved/societies"
                title="Societies 🎭"
                content="Interested in trying something new? Explore a complete list of Christ's societies!"
            />
        </div>
        <div class="column is-one-third" />
    </div>
</PageHeader>
