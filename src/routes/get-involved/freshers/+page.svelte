<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import Calendar from "$components/events/Calendar.svelte";
    import NotificationLink from "$components/elements/NotificationLink.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import { calendarDetails, startDate, endDate } from "./freshers";
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
                        href="https://drive.google.com/file/d/14EI6qLV49_kLvd9GedcMl5qMNUGW_VaJ/view?usp=drive_link"
                        title="Freshers' Guide 🐣"
                        external
                        compact />
                </div>
                <div class="column">
                    <NotificationLink
                        href="https://drive.google.com/file/d/1NE1HYnA1JaFH1e7nRfF9fxNMcgazLnzB/view?usp=drive_link"
                        title="International Freshers' Guide ✈️"
                        external
                        compact />
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <NotificationLink
                        href="https://drive.google.com/file/d/10B4hgiyuOBksYWfDC988anwTu8_0r_fu/view?usp=drive_link"
                        title="Welfare Guide 💛"
                        external
                        compact />
                </div>
                <div class="column">
                    <NotificationLink
                        href="https://www.timetable.cam.ac.uk"
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
                    href={
                    "https://calendar.google.com/calendar/ical/\
                    98f933efaa927a1b41a85f92bba67e064a0270676b3c1241ca901610f556ea84%40group.calendar.google.com/public/basic.ics"
                }>
                    <button class="button is-success"
                        >Subscribe to Compulsory Events</button>
                </a>
            </div>
            <div class="column is-narrow">
                <a
                    href={
                    "https://calendar.google.com/calendar/ical/\
                    f47cb082566f93a9a682f20026f24aace73dc0203899ace553a6e54aaf2ca555%40group.calendar.google.com/public/basic.ics"
                }>
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
                        src="https://www.christs.cam.ac.uk/sites/default/files/inline-images/collegemap_1.jpg"
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
