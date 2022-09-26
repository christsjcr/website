<script lang="ts">
    import Calendar, { download } from "$components/events/Calendar.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import { freshers } from "./freshers";
</script>

<PageHeader
    current="/get-involved/freshers"
    title="Freshers"
    size="small"
    metaDescription="Resources for undergraduate students of Christ's College, Cambridge."
>
    <button
        class="button is-success"
        on:click={() =>
            download(freshers.filter((x) => x.type === "compulsory"))}
        >Download Compulsory</button
    >
    <button
        class="button is-primary"
        on:click={() => download(freshers.filter((x) => x.type === "optional"))}
        >Download Optional</button
    >
    <br />
    <br />
    <Calendar
        events={freshers}
        colors={{ compulsory: "#ad34cb", optional: "#146A46" }}
    />
</PageHeader>
