<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import Calendar from "$components/events/Calendar.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import { 
        calendarDetails,
        term,
        startDate,
        endDate, 
    } from "./termcard";
</script>

<PageHeader
    current="/get-involved/termcard"
    title="Termcard"
    size="small"
    metaDescription="See what's coming up this term on the official JCR termcard!">
    <Content hasText={false}>
        <h2 class="title is-2">{term} Term</h2>
        <div class="columns">
            <div class="column is-narrow">
                <a href={"https://calendar.google.com/calendar/ical/webmaster%40thejcr.co.uk/public/basic.ics"}>
                    <button class="button is-primary"
                        >Subscribe to JCR Events</button>
                </a>
            </div>
            <div class="column is-narrow">
                <a href={"https://calendar.google.com/calendar/ical/72ffd45359a103efdda8c306de56f775f3005d51aaed7e8111b8d1f175575157%40group.calendar.google.com/public/basic.ics"}>
                    <button class="button is-link"
                        >Subscribe to Society Events</button>
                </a>
            </div>
        </div>
        <Calendar
            calendarDetails={ calendarDetails }
            timeMax={ endDate }
            timeMin={ startDate }
            colors={{ society: "#A28000", jcr: "#146A46" }}
            type="listYear" />
    </Content>
</PageHeader>
