<script lang="ts">
    import Calendar from "$components/events/Calendar.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import { freshers } from "./freshers";
</script>

<PageHeader
    current="/get-involved/freshers"
    title="Freshers"
    size="small"
    metaDescription="Resources for undergraduate students of Christ's College, Cambridge."
>
    <Calendar
        events={freshers}
        colors={{ compulsory: "#ba55d3", optional: "#8fbc8f" }}
    />
</PageHeader>
