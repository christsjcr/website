import type { Events } from "$components/events/event";

const year: number = 2023;

export const term: string = "Michaelmas";

export const meetings: Events<"exec" | "council" | "open"> = [
    {
        description: "JCR Council Meeting",
        date: [year, 10, 7],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "council",
    },
    {
        description: "JCR Exec Meeting",
        date: [year, 10, 14],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "exec",
    },
    {
        description: "JCR Council Meeting",
        date: [year, 10, 21],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "council",
    },
    {
        description: "JCR Exec Meeting",
        date: [year, 10, 28],
        time: [14, 30],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "exec",
    },
    {
        description: "JCR Open Meeting",
        date: [year, 10, 28],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "open",
    },
    {
        description: "JCR Council Meeting",
        date: [year, 11, 4],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "council",
    },
    {
        description: "JCR Exec Meeting",
        date: [year, 11, 11],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "exec",
    },
    {
        description: "JCR Council Meeting",
        date: [year, 11, 18],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "council",
    },
    {
        description: "JCR Exec Meeting",
        date: [year, 11, 28],
        time: [14, 30],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "exec",
    },
    {
        description: "JCR Open Meeting",
        date: [year, 11, 28],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "open",
    },
];