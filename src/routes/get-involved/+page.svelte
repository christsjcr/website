<script lang="ts">
    import NotificationLink from "$components/elements/NotificationLink.svelte";

    import PageHeader from "$components/PageHeader.svelte";
</script>

<PageHeader
    current="/get-involved"
    title="Get Involved"
    size="small"
    metaDescription="Find out what's going on at Christ's!">
    <div class="columns my-6">
        <div class="column is-one-third">
            <NotificationLink
                href="/get-involved/freshers"
                title="Freshers 🐣"
                content="View the freshers' timetable, see what's on at Upper Hall, and find your way about with a map of Christ's!" />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="/doc/termcard.pdf"
                title="Termcard 🗓"
                content="See what's coming up this term on the official JCR termcard!"
                external />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="/get-involved/societies"
                title="Societies 🎭"
                content="Interested in trying something new? Explore a complete list of Christ's societies!" />
        </div>
    </div>
</PageHeader>
