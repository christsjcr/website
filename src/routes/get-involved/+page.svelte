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
    <div class="column">
        <NotificationLink
            href="/get-involved/talk-support"
            title="Talk & Support 💬"
            content="Need to talk to someone? Reach out to the Welfare Officers, anonymously if you'd like." />
    </div>
</div>
    <div class="columns mt-6">
        <div class="column" />
        <div class="column is-one-third">
            <NotificationLink
                href="/get-involved/freshers"
                title="Freshers 🐣"
                content="View the freshers' timetable, see what's on at Upper Hall, and find your way about with a map of Christ's!" />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="/get-involved/termcard"
                title="Termcard 🗓"
                content="See what's coming up this term on the official JCR termcard!" />
        </div>
        <div class="column" />
    </div>
    <div class="columns">
        <div class="column" />
        <div class="column is-one-third">
            <NotificationLink
                href="/get-involved/societies"
                title="Societies 🎭"
                content="Interested in trying something new? Explore a complete list of Christ's societies!" />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="/get-involved/feedback"
                title="Feedback ✍️"
                content="If you want to provide feedback, suggestions, or general problems for the JCR to consider, 
                please use this form! The JCR is there to work for you, so any and all feedback is welcome." />
        </div>
        <div class="column" />
    </div>
</PageHeader>
