<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import TrackedLink from "$components/elements/TrackedLink.svelte";
    import Calendar from "$components/events/Calendar.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import links from "$data/links"
    import { 
        term, 
        startDate, 
        endDate, 
        calendarDetails 
    } from "./meetings";
</script>

<PageHeader
    current="/about/meetings"
    title="Meetings"
    metaDescription="Get information on JCR meetings, and learn how you can make sure that your voice is heard.">
    <Content>
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
        <p>Please refer to <a href={ links.internal.MOTIONS_GUIDE }>this guide</a> on drafting a motion,
            and submit a form <a href={ links.internal.MOTIONS_FORM }>here</a> to register a motion for the next open meeting.</p>
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
        <h3>Meeting Minutes</h3>
        <p>
            You can access the minutes for all meetings <TrackedLink
                href={ links.internal.MINUTES_FOLDER }
                id="meeting-minutes">here</TrackedLink
            >.
        </p>

        <h2 class="title is-2">{term} Term</h2>
        <p>
            <a href={ links.calendar.JCR_EXEC_MEETINGS }>
                <button class="button is-success"
                    >Subscribe to Exec Meetings</button>
            </a>
        </p>
        <p>
            <a href={ links.calendar.JCR_COUNCIL_MEETINGS }>
                <button class="button is-primary"
                    >Subscribe to Council Meetings</button>
            </a>
        </p>
        <p>
            <a href={ links.calendar.JCR_OPEN_MEETINGS }>
                <button class="button is-link"
                    >Subscribe to Open Meetings</button>
            </a>
        </p>
        <Calendar
            calendarDetails={ calendarDetails }
            timeMax={ endDate }
            timeMin={ startDate }
            colors={{
                exec: "#ad34cb", council: "#146A46", open: "#A28000" 
            }}
            type="listYear" />
        <br />
    </Content>
</PageHeader>
