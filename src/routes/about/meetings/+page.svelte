<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import TrackedLink from "$components/elements/TrackedLink.svelte";
    import PageHeader from "$components/PageHeader.svelte";
</script>

<PageHeader
    current="/about/meetings"
    title="Meetings"
    metaDescription="Get information on JCR meetings, and learn how you can make sure that your voice is heard.">
    <Content>
        <h2>Michaelmas Term</h2>
        <ul>
            <li>8th October 5pm - Council Meeting (Sosnow Room)</li>
            <li>15th October 2:30pm - Exec Meeting (Lloyd Room)</li>
            <li>15th October 5pm - Open Meeting (Lloyd Room)</li>
            <li>22nd October 5pm - Council Meeting (Lloyd Room)</li>
            <li>29th October 5pm - Exec Meeting (New Court Seminar Room)</li>
            <li>5th November 5pm - Council Meeting (Lloyd room)</li>
            <li>12th November 5pm - Exec Meeting (New Court Seminar Room)</li>
            <li>19th November 5pm - Council Meeting (Lloyd Room)</li>
            <li>26th November 2:30pm - Exec Meeting (Lloyd Room)</li>
            <li>26th November 5pm - Open Meeting (Lloyd Room)</li>
        </ul>
        <p>
            You can access the minutes for these meetings <TrackedLink
                href="https://drive.google.com/drive/u/2/folders/1gr4x820W2ZcDi8RGAz7fYeOEMiBLx6jA"
                id="meeting-minutes">here</TrackedLink
            >.
        </p>

        <h2>Open Meetings</h2>
        <p>
            Undergraduate students of Christ's may attend an open meeting with
            the right to vote on all motions or amendments proposed during the
            meeting.
        </p>
        <p>Open meetings typically cover topics such as:</p>
        <ul>
            <li>
                the making of new societies (after the original Michaelmas
                deadline)
            </li>
            <li>current issues raised by students</li>
            <li>changes to the JCR Constitution</li>
            <li>voting in SU elections</li>
            <li>the signing of open letters</li>
        </ul>
        <h1>JCR Meetings</h1>
        <p>
            Undergraduate students of Christ's may attend JCR meetings, although
            they do not have the right to vote.
        </p>
        <h3>Council Meetings</h3>
        <p>
            All council members are expected to attend these meetings. Any
            member of the JCR may attend and can speak with permission of the
            Chair, though may not vote.
        </p>
        <p>
            Business declared reserved by the Chair may only be heard by members
            of the Council, and the Chair shall have the power to ask other
            attendees to leave when such business is raised.
        </p>

        <h3>Exec Meetings</h3>
        <p>
            These are similar to Council meetings, except only Exec members (the
            President, Vice President, Treasurer, Welfare Officers and
            Secretary) are expected to attend.
        </p>
    </Content>
</PageHeader>
