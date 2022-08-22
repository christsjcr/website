<script lang="ts">
    import NotificationLink from "$components/elements/NotificationLink.svelte";

    import PageHeader from "$components/PageHeader.svelte";
</script>

<PageHeader
    current="/resources"
    title="Resources"
    size="medium"
    metaDescription="Resources for undergraduate students of Christ's College, Cambridge."
>
    <div class="columns my-6">
        <div class="column is-one-third">
            <NotificationLink
                href="/resources/college-life "
                title="College Life 🏫"
                content="Useful links relating to everyday life in Christ's College, Cambridge."
            />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="/resources/academic-and-careers"
                title="Academic and Careers 🎓"
                content="Can't remember where to enroll for exams, or how to access the careers service? Click here!"
            />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="/resources/welfare"
                title="Welfare 💛"
                content="Resources for general and targeted support - anything related to physical, sexual, or mental health."
            />
        </div>
    </div>
</PageHeader>
