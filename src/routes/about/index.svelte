<script lang="ts">
    import NotificationLink from "@components/elements/NotificationLink.svelte";
    import PageHeader from "@components/PageHeader.svelte";
</script>

<PageHeader
    current="/about"
    title="About"
    description="Christ's JCR is the undergraduate student body at Christ's College, Cambridge. We are your student-elected Committee, representing your interests to help you make the most of your time here!"
>
    <div class="content">
        <blockquote>
            Christ's JCR is the undergraduate student body at Christ's College,
            Cambridge. We are your student-elected Committee, representing your
            interests to help you make the most of your time here!
        </blockquote>
    </div>
    <div class="columns my-6">
        <div class="column is-one-third">
            <NotificationLink
                href="/about/roles"
                title="Roles"
                content="Get to know the current members of the JCR Committee!"
            />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="/about/constitution"
                title="Constitution"
                content="Take a look at a copy of the JCR constitution!"
            />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="/about/meetings"
                title="Meetings"
                content="Interested in changing Christ's for the better? Come to our meetings!"
            />
        </div>
    </div>
</PageHeader>
