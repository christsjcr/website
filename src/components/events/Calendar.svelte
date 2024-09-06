<svelte:head>
    <script src="https://apis.google.com/js/api.js" fetchpriority="high" defer on:load={ initGapi }></script>
</svelte:head>

<script lang="ts">
    import {
        getDay, type Events, getStart, getEnd 
    } from "./event";
    import { getEvents } from "$lib/calendar";
    import Calendar from "@event-calendar/core";
    import TimeGrid from "@event-calendar/time-grid";
    import List from "@event-calendar/list";

    type K = $$Generic<string | number | symbol>;
    export let calendarDetails: {
        calendarId: string,
        type: K
    }[];
    export let timeMin: Date;
    export let timeMax: Date;
    export let colors: { [key in K]: string };
    export let type: "timeGridDay" | "listYear";

    function initGapi() {
        gapi.load("client", fetchCalendar);
    }

    function fetchCalendar() {
        getEvents<K>(gapi, calendarDetails, timeMin, timeMax).then((events:Events<K>) => {
            generateCalendarDisplay(document.getElementById("calendar-wrapper"), events);
        });
    }

    function generateCalendarDisplay(parent:HTMLElement, events: Events<K>) {
        if (!events || events.length == 0) {
            const p = document.createElement("p");
            p.innerText = "No calendar events at the moment. Please check again later";
            parent.replaceChildren(p);
            return p;
        } 

        let startDate = getDay(events[0]);
        let endDate = getDay(events[events.length - 1]);
        endDate.setDate(endDate.getDate() + 1);

        let now = new Date();

        let eventHtml = (event: any, timeText: any) => {
            var time = "<p>" + timeText + "</p>";
            var hours = (event.end.getTime() - event.start.getTime()) / 3600000;
            if (hours >= 1 || type == "listYear") return time + event.title;
            else if (hours >= 0.75)
                return time + event.title.replaceAll("</p><p>", " ");
            else return (time + event.title).replaceAll("</p><p>", " ");
        };

        const options = {
            allDaySlot: false,
            view: type,
            events: events.map((x) => ({
                start: getStart(x),
                end: getEnd(x),
                title: `<p><b>${x.description}</b></p><p><i>${x.location}</i></p>`,
                color: colors[x.type],
            })),
            headerToolbar:
                type == "listYear"
                    ? {
                        start: "", center: "", end: "" 
                    }
                    : {
                        start: "title",
                        center: "",
                        end: "prev next",
                    },
            slotMinTime: "08:00:00",
            slotMaxTime: "24:00:00",
            slotHeight: 36,
            nowIndicator: true,
            eventContent: ({ event, timeText }) => ({html: eventHtml(event, timeText),}),
            date: startDate <= now && now < endDate ? now : startDate,
        };

        const calendar = new Calendar({
            target: document.getElementById("calendar-wrapper"),
            props: {
                plugins: [TimeGrid, List],
                options
            }
        });
        return calendar;
    }
</script>

<div class="freshers-calendar" id="calendar-wrapper">
</div>

<style>
    :global(.freshers-calendar .ec-body .ec-time) {
        height: 36px;
    }
    :global(.freshers-calendar .ec-line) {
        height: 36px;
    }
</style>
