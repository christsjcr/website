import type { Events } from "$components/events/Calendar.svelte";

export const freshers: Events<"compulsory" | "optional"> = [
    {
        description: "Welcome Hub",
        date: [2022, 10, 1],
        time: [9, 0],
        duration: [4, 0],
        location: "Lloyd Room",
        type: "compulsory",
    },
    {
        description: "Afternoon Meeting with your Tutor",
        date: [2022, 10, 1],
        time: [14, 0],
        duration: [2, 0],
        location: "(see letter for exact time and location)",
        type: "compulsory",
    },
    {
        description: "JCR Welfare Talk",
        date: [2022, 10, 1],
        time: [17, 0],
        duration: [0, 45],
        location: "Hamied Lecture Theatre",
        type: "compulsory",
    },
    {
        description: "Folk / Pop Group",
        date: [2022, 10, 1],
        time: [18, 0],
        duration: [1, 0],
        location: "Buttery",
        type: "optional",
    },
    {
        description: "Welcome Dinner (casual wear)",
        date: [2022, 10, 1],
        time: [19, 30],
        duration: [1, 0],
        location: "Formal Hall",
        type: "compulsory",
    },
    {
        description: "Initial Impressions Mixer (dress as your initial)",
        date: [2022, 10, 1],
        time: [21, 0],
        duration: [2, 0],
        location: "Function Room",
        type: "optional",
    },
];