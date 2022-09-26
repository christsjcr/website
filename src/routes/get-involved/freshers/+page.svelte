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
    <div class="columns">
        <div class="column is-narrow">
            <button
                class="button is-success"
                on:click={() =>
                    download(freshers.filter((x) => x.type === "compulsory"))}
                >Download Compulsory Events</button
            >
        </div>
        <div class="column is-narrow">
            <button
                class="button is-primary"
                on:click={() =>
                    download(freshers.filter((x) => x.type === "optional"))}
                >Download Optional Events</button
            >
        </div>
    </div>
    <Calendar
        events={freshers}
        colors={{ compulsory: "#ad34cb", optional: "#146A46" }}
    />
    <br />
    <nav class="level has-text-centered">
        <div class="level-item">
            <figure class="image">
                <img
                    alt="Map of College"
                    src="https://www.christs.cam.ac.uk/sites/default/files/inline-images/collegemap_1.jpg"
                    loading="lazy"
                />
            </figure>
        </div>
    </nav>
</PageHeader>

<style>
    .image {
        text-align: center;
    }
    img {
        max-width: 767px;
    }
</style>
