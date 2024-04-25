import type { Events } from "$components/events/event";

const year: number = 2024;

export const term: string = "Easter";

export const meetings: Events<"exec" | "council" | "open"> = [
    {
        description: "JCR Exec Meeting",
        date: [year, 4, 28],
        time: [12, 0],
        duration: [1, 0],
        location: "New Court Seminar Room",
        type: "exec",
    },
    {
        description: "JCR Open Meeting",
        date: [year, 4, 28],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "open",
    },
    {
        description: "JCR Council Meeting",
        date: [year, 5, 4],
        time: [17, 0],
        duration: [1, 0],
        location: "New Court Seminar Room",
        type: "council",
    },
    {
        description: "JCR Exec Meeting",
        date: [year, 5, 11],
        time: [14, 0],
        duration: [1, 0],
        location: "New Court Seminar Room",
        type: "exec",
    },
    {
        description: "JCR Council Meeting",
        date: [year, 5, 11],
        time: [17, 0],
        duration: [1, 0],
        location: "New Court Seminar Room",
        type: "council",
    },
    {
        description: "JCR Exec Meeting",
        date: [year, 6, 8],
        time: [15, 0],
        duration: [1, 0],
        location: "NCSR",
        type: "exec",
    },
    {
        description: "JCR Council Meeting",
        date: [year, 6, 8],
        time: [17, 0],
        duration: [1, 0],
        location: "New Court Seminar Room",
        type: "council",
    },
    {
        description: "JCR Exec Meeting",
        date: [year, 6, 13],
        time: [15, 0],
        duration: [1, 0],
        location: "New Court Seminar Room",
        type: "exec",
    },
];
