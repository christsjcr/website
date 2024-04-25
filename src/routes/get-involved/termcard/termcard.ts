import type { Events } from "$components/events/event";

const year: number = 2024;

export const term: string = "Easter";

export const termcard: Events<"jcr" | "society"> = [
    {
        description: "Spring Has Sprung Bop",
        date: [year, 4, 26],
        time: [21, 30],
        duration: [3, 0],
        location: "Buttery",
        type: "jcr",
    },
    {
        description: "Christ's Maths Society talks",
        date: [year, 5, 2],
        time: [19, 0],
        duration: [1, 0],
        location: "Yusuf Hamied Theatre",
        type: "society",
    },
    {
        description: "Pool Party",
        date: [year, 6, 14],
        time: [19, 0],
        duration: [2, 0],
        location: "Malcolm Bowie Bathing Pool",
        type: "jcr",
    },
    {
        description: "(Bad at) Sports Day",
        date: [year, 6, 17],
        time: [0, 0],
        duration: [24, 0],
        location: "TBC",
        type: "jcr",
    },
    {
        description: "Christ's May Ball",
        date: [year, 6, 18],
        time: [19, 0],
        duration: [5, 0],
        location: "Christ's College",
        type: "jcr",
    },
];
