<script context="module" lang="ts">
    interface Event<T> {
        description: string;
        date: [number, number, number];
        time: [number, number];
        duration: [number, number];
        type: T;
    }

    export const ASDF = 5;
    export type Events<T> = Event<T>[];
</script>

<script lang="ts">
    import Calendar from "@event-calendar/core";
    import List from "@event-calendar/time-grid";

    type K = $$Generic<string | number | symbol>;
    export let events: Events<K>;
    export let colors: { [key in K]: string };

    let options = {
        view: "timeGridDay",
        events: events.map((x) => {
            var start = new Date(
                x.date[0],
                x.date[1] - 1,
                x.date[2],
                ...x.time
            );
            var end = new Date(
                start.getTime() +
                    3600000 * x.duration[0] +
                    60000 * x.duration[1]
            );
            return {
                start: start,
                end: end,
                title: x.description,
                color: colors[x.type],
            };
        }),
        headerToolbar: {
            start: "title",
            center: "",
            end: "prev next",
        },
        slotMinTime: "08:00:00",
        slotMaxTime: "23:00:00",
        slotHeight: 36,
    };

    console.log(options);
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
