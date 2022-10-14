<script lang="ts">
    import NotificationLink from "$components/elements/NotificationLink.svelte";
    import PageHeader from "$components/PageHeader.svelte";
</script>

<PageHeader
    current="/about"
    title="About"
    metaDescription="Christ's JCR is the undergraduate student body at Christ's College, Cambridge.">
    <div slot="description">
        Christ's JCR is the undergraduate student body at Christ's College,
        Cambridge. We are your student-elected Committee, representing your
        interests to help you make the most of your time here!
    </div>
    <div class="columns my-6">
        <div class="column is-one-third">
            <NotificationLink
                href="/about/committee"
                title="Committee 🧍‍♀️🧍🧍‍♂️"
                content="Get to know the current members of the JCR Committee!" />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="/about/constitution-and-guidelines"
                title="Constitution & Guidelines 📜"
                content="Take a look at a copy of the JCR constitution, and explore the exciting world of funding guidelines & financial conduct." />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="/about/meetings"
                title="Meetings ⏰"
                content="Interested in changing Christ's for the better? Come to our meetings!" />
        </div>
    </div>
</PageHeader>
