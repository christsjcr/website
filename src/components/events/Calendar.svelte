<script context="module" lang="ts">
    interface Event<T> {
        description: string;
        date: [number, number, number];
        time: [number, number];
        duration: [number, number];
        location: string;
        type: T;
    }

    export function getDay<T>(x: Event<T>): Date {
        return new Date(x.date[0], x.date[1] - 1, x.date[2]);
    }

    export function getStart<T>(x: Event<T>): Date {
        return new Date(x.date[0], x.date[1] - 1, x.date[2], ...x.time);
    }

    export function getEnd<T>(x: Event<T>): Date {
        return new Date(
            getStart(x).getTime() +
                3600000 * x.duration[0] +
                60000 * x.duration[1]
        );
    }

    export type Events<T> = Event<T>[];

    export function download<T>(events: Events<T>) {
        ics.createEvents(
            events.map((x) => {
                const start = getStart(x);
                return {
                    title: x.description,
                    start: [
                        start.getUTCFullYear(),
                        start.getUTCMonth() + 1,
                        start.getUTCDate(),
                        start.getUTCHours(),
                        start.getUTCMinutes(),
                    ],
                    startInputType: "utc",
                    duration: { hours: x.duration[0], minutes: x.duration[1] },
                    location: x.location,
                };
            }),

            (error, value) => {
                if (error) {
                    console.log(error);
                }
                var filename = `invite.ics`;
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
        );
    }
</script>

<script lang="ts">
    import Calendar from "@event-calendar/core";
    import List from "@event-calendar/time-grid";
    import * as ics from "ics";

    type K = $$Generic<string | number | symbol>;
    export let events: Events<K>;
    export let colors: { [key in K]: string };

    let startDate = getDay(events[0]);
    let endDate = getDay(events[events.length - 1]);
    endDate.setDate(endDate.getDate() + 1);

    let now = new Date();

    let eventHtml = (event: any, timeText: any) => {
        var time = "<p>" + timeText + "</p>";
        var hours = (event.end.getTime() - event.start.getTime()) / 3600000;
        if (hours >= 1) return time + event.title;
        else if (hours >= 0.75)
            return time + event.title.replaceAll("</p><p>", " ");
        else return (time + event.title).replaceAll("</p><p>", " ");
    };

    let options = {
        view: "timeGridDay",
        events: events.map((x) => ({
            start: getStart(x),
            end: getEnd(x),
            title: `<p><b>${x.description}</b></p><p><i>${x.location}</i></p>`,
            color: colors[x.type],
        })),
        headerToolbar: {
            start: "title",
            center: "",
            end: "prev next",
        },
        slotMinTime: "08:00:00",
        slotMaxTime: "24:00:00",
        slotHeight: 36,
        nowIndicator: true,
        eventContent: ({ event, timeText }) => ({
            html: eventHtml(event, timeText),
        }),

        date: startDate <= now && now < endDate ? now : startDate,
    };
</script>

<div class="freshers-calendar">
    <Calendar plugins={[List]} {options} />
</div>

<style>
    :global(.freshers-calendar .ec-time) {
        height: 36px;
    }
    :global(.freshers-calendar .ec-line) {
        height: 36px;
    }
</style>
