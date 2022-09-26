import type { Events } from "$components/events/Calendar.svelte";



export const freshers: Events<"compulsory" | "optional"> = [
    {
        description: "Welcome Hub",
        date: [2022, 10, 1],
        time: [9, 0],
        duration: [4, 0],
        location: "Lloyd Room",
        geo: [52.20659, 0.12220],
        type: "compulsory",
    },
    {
        description: "Afternoon Meeting with your Tutor",
        date: [2022, 10, 1],
        time: [14, 0],
        duration: [2, 0],
        type: "compulsory",
    },
    {
        description: "JCR Welfare Talk",
        date: [2022, 10, 1],
        time: [17, 0],
        duration: [0, 45],
        location: "Hamied Lecture Theatre",
        geo: [52.20675, 0.12302],
        type: "compulsory",
    },
    {
        description: "Folk / Pop Group",
        date: [2022, 10, 1],
        time: [18, 0],
        duration: [1, 0],
        location: "Buttery",
        geo: [52.20539, 0.12253],
        type: "optional",
    },
    {
        description: "Welcome Dinner (casual wear)",
        date: [2022, 10, 1],
        time: [19, 30],
        duration: [1, 0],
        location: "Formal Hall",
        geo: [52.20548, 0.12267],
        type: "compulsory",
    },
    {
        description: "Initial Impressions Mixer (dress as your initial)",
        date: [2022, 10, 1],
        time: [21, 0],
        duration: [2, 0],
        location: "Function Room",
        geo: [52.20675, 0.12302],
        type: "optional",
    },
];