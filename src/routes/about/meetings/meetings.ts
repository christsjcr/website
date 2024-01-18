import type { Events } from "$components/events/event";

const year: number = 2024;

export const term: string = "Lent";

export const meetings: Events<"exec" | "council" | "open"> = [
    {
        description: "JCR Exec Meeting",
        date: [year, 1, 20],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "exec",
    },
    {
        description: "JCR Council Meeting",
        date: [year, 1, 27],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "council",
    },
    {
        description: "JCR Exec Meeting",
        date: [year, 2, 3],
        time: [14, 0],
        duration: [1, 0],
        location: "Sosnow Room",
        type: "exec",
    },
    {
        description: "JCR Open Meeting",
        date: [year, 2, 3],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "open",
    },
    {
        description: "JCR Council Meeting",
        date: [year, 2, 10],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "council",
    },
    {
        description: "JCR Exec Meeting",
        date: [year, 2, 17],
        time: [17, 0],
        duration: [1, 0],
        location: "NCSR",
        type: "exec",
    },
    {
        description: "JCR Council Meeting",
        date: [year, 2, 24],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "council",
    },
    {
        description: "JCR Exec Meeting",
        date: [year, 3, 2],
        time: [14, 0],
        duration: [1, 0],
        location: "Sosnow Room",
        type: "exec",
    },
    {
        description: "JCR Open Meeting",
        date: [year, 3, 9],
        time: [17, 0],
        duration: [1, 0],
        location: "Lloyd Room",
        type: "open",
    },
    {
        description: "JCR Council Meeting",
        date: [year, 3, 10],
        time: [17, 0],
        duration: [1, 0],
        location: "TBC",
        type: "council",
    },
];
