import type { Timeline } from "$components/events/Timeline.svelte";

export const timeline: Timeline = [
    { type: "week", number: 1 },
    {
        type: "event", name: "Thing", description: "a description", date: new Date(2022, 4, 12), time: "10:00", 
    },
];