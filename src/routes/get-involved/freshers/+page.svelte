<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import Calendar from "$components/events/Calendar.svelte";
    import NotificationLink from "$components/elements/NotificationLink.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import { calendarDetails, startDate, endDate } from "./freshers";
    import links from "$data/links"
</script>

<PageHeader
    current="/get-involved/freshers"
    title="Freshers"
    size="small"
    metaDescription="Resources for undergraduate students of Christ's College, Cambridge.">
    <Content hasText={false}>
        <div class="content">
            <!--
            <blockquote>
                Sadly, Freshers' Week 2022 has now ended, and so this timetable
                is a bit out of date. Fear not though, we'll keep this page up
                for first-years to look back on, and so that prospective
                students can get a taste of what Freshers' week is like at
                Christ's!
            </blockquote>
            -->
            <blockquote>
                Welcome to Christ's! Bookmark this page for quick access to your
                freshers' week timetable, freshers' guide, and a map of the
                college. You can also use the buttons below to automatically add
                the timetable to your personal calendar (tip - you can probably
                set the colours so that optional and compulsory events appear
                differently).
            </blockquote>
            <br />

            <div class="columns">
                <div class="column">
                    <NotificationLink
                        href={ links.freshers.FRESHERS_GUIDE }
                        title="Freshers' Guide 🐣"
                        external
                        compact />
                </div>
                <div class="column">
                    <NotificationLink
                        href={ links.freshers.INTERNATIONAL_GUIDE }
                        title="International Freshers' Guide ✈️"
                        external
                        compact />
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <NotificationLink
                        href={ links.welfare.JCR_WELFARE_GUIDE }
                        title="Welfare Guide 💛"
                        external
                        compact />
                </div>
                <div class="column">
                    <NotificationLink
                        href={ links.academic.TIMETABLES }
                        title="Academic Timetable 📚"
                        external
                        compact />
                </div>
            </div>
            <p>
                Remember to sign in with your Cambridge Google account to access
                the guides! By default, your academic timetable is blank - you
                need to manually log on to the site above using a desktop and
                add the relevant modules for them to show up.
            </p>
            <h2>Freshers' Week Timetable</h2>
        </div>
        <div class="columns">
            <div class="column is-narrow">
                <a
                    href={ links.calendar.FRESHERS }>
                    <button class="button is-success"
                        >Subscribe to Compulsory Events</button>
                </a>
            </div>
            <div class="column is-narrow">
                <a
                    href={ links.calendar.FRESHERS_OPTIONAL }>
                    <button class="button is-primary"
                        >Subscribe to Optional Events</button>
                </a>
            </div>
        </div>
        <Calendar
            calendarDetails={ calendarDetails }
            timeMin={ startDate }
            timeMax={ endDate }
            colors={{ compulsory: "#ad34cb", optional: "#146A46" }}
            type="timeGridDay" />
        <br />
        <div class="columns is-centered">
            <div class="column is-narrow">
                <figure class="image">
                    <img
                        alt="Map of College"
                        src={ links.general.COLLEGE_MAP }
                        loading="lazy" />
                </figure>
            </div>
        </div>
    </Content>
</PageHeader>

<style>
    .image {
        text-align: center;
        margin: 0;
    }
</style>
