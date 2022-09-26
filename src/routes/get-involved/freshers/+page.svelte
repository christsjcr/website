<script lang="ts">
    import Content from "$components/elements/Content.svelte";
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
    <Content hasText={false}>
        <div class="columns">
            <div class="column is-narrow">
                <button
                    class="button is-success"
                    on:click={() =>
                        download(
                            freshers.filter((x) => x.type === "compulsory")
                        )}>Download Compulsory Events</button
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
        <div class="columns is-centered">
            <div class="column is-narrow">
                <figure class="image">
                    <img
                        alt="Map of College"
                        src="https://www.christs.cam.ac.uk/sites/default/files/inline-images/collegemap_1.jpg"
                        loading="lazy"
                    />
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
