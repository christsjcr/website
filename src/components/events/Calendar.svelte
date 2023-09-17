<script lang="ts">
    import { getDay, type Events, getStart, getEnd } from "./event";

    import Calendar from "@event-calendar/core";
    import List from "@event-calendar/time-grid";

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
