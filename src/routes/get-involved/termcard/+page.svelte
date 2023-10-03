<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import Calendar from "$components/events/Calendar.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import { termcard, term } from "./termcard";
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
                <a href={`webcal://thejcr.co.uk/calendar/termcard/jcr.ics`}>
                    <button class="button is-primary"
                        >Subscribe to JCR Events</button>
                </a>
            </div>
            <div class="column is-narrow">
                <a href={`webcal://thejcr.co.uk/calendar/termcard/society.ics`}>
                    <button class="button is-link"
                        >Subscribe to Society Events</button>
                </a>
            </div>
        </div>
        <Calendar
            events={termcard}
            colors={{ society: "#A28000", jcr: "#146A46" }}
            type="listYear" />
    </Content>
</PageHeader>
