<script lang="ts">
    import Calendar from "$components/events/Calendar.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import { freshers } from "$data/freshers";
    import * as ics from "ics";
    import { onMount } from "svelte";

    var date = new Date(2022, 10, 1);

    onMount(() =>
        ics.createEvents(
            [
                {
                    title: "Event",
                    start: [
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDay(),
                        date.getHours(),
                        date.getMinutes(),
                    ],
                    duration: { hours: 1 },
                    organizer: {
                        name: "Miles Watson",
                        email: "contact@domain.com",
                    },
                },
                {
                    title: "Event",
                    start: [
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDay(),
                        date.getHours() + 2,
                        date.getMinutes(),
                    ],
                    duration: { hours: 1 },
                    organizer: {
                        name: "Miles Watson",
                        email: "contact@domain.com",
                    },
                },
            ],
            (error, value) => {
                if (error) {
                    console.log(error);
                }
                var filename = `invite.ics`;
                console.log(value);
                var blob = new Blob([value], {
                    type: "text/calendar",
                });
                console.log(blob.type);

                var elem = window.document.createElement("a");
                elem.href = window.URL.createObjectURL(blob);
                elem.download = filename;
                document.body.appendChild(elem);
                elem.click();
                document.body.removeChild(elem);
            }
        )
    );
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
