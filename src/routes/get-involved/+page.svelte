<script lang="ts">
    import NotificationLink from "$components/elements/NotificationLink.svelte";

    import PageHeader from "$components/PageHeader.svelte";
</script>

<PageHeader
    current="/get-involved"
    title="Get Involved"
    size="small"
    metaDescription="Find out what's going on at Christ's!">
    <div class="columns mt-6">
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
    <div class="columns">
        <div class="column" />
        <div class="column is-one-third">
            <NotificationLink
                href="/get-involved/feedback"
                title="Feedback ✍️"
                content="If you want to provide feedback, suggestions, or general problems for the JCR to consider, please use this form! The JCR is there to work for you, so any and all feedback is welcome." />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="https://docs.google.com/spreadsheets/d/14Qti74nuVV0V03_281T_Je5p2LZccf4FQiKxXRwvWQY/edit?usp=sharing"
                title="Lost and Found 🔎"
                content="Lost or found something in college recently? Use this spreadsheet to report any finds, or check to see if any missing items have been recovered."
                external />
        </div>
        <div class="column" />
    </div>
</PageHeader>
