<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import Calendar from "$components/events/Calendar.svelte";
    import UpperHallMenu from "$components/features/UpperHallMenu.svelte";
    import ExternalLink from "$components/markdown/ExternalLink.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import { freshers, year } from "./freshers";
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
            <h5>
                Freshers' Guide - <ExternalLink
                    href="https://drive.google.com/file/d/14EI6qLV49_kLvd9GedcMl5qMNUGW_VaJ/view?usp=drive_link"
                    >View</ExternalLink>
            </h5>
            <h5>
                International Freshers' Guide - <ExternalLink
                    href="https://drive.google.com/file/d/1NE1HYnA1JaFH1e7nRfF9fxNMcgazLnzB/view?usp=drive_link"
                    >View</ExternalLink>
            </h5>
            <h5>
                Academic Timetable (Available Sept 25th) - <ExternalLink
                    href="https://www.timetable.cam.ac.uk">View</ExternalLink>
            </h5>
            <br />
            <h2>Freshers' Week Timetable</h2>
        </div>
        <div class="columns">
            <div class="column is-narrow">
                <a
                    href={`webcal://thejcr.co.uk/calendar/freshers/compulsory${year}.ics`}>
                    <button class="button is-success"
                        >Subscribe to Compulsory Events</button>
                </a>
            </div>
            <div class="column is-narrow">
                <a
                    href={`webcal://thejcr.co.uk/calendar/freshers/optional${year}.ics`}>
                    <button class="button is-primary"
                        >Subscribe to Optional Events</button>
                </a>
            </div>
        </div>
        <Calendar
            events={freshers}
            colors={{ compulsory: "#ad34cb", optional: "#146A46" }} />
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
