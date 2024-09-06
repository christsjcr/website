export enum MeetingTypes {
    exec = "exec",
    council = "council",
    open = "open"
}

export const term = "Michaelmas";
export const calendarDetails = [
    {
        calendarId: "da5521c8c3b2c5e4461b8d84e3058d6874f5d6a13cd1f636b9693cfb40b76146@group.calendar.google.com",
        type: MeetingTypes.exec
    },
    {
        calendarId: "e0ea2c5ec1fb4dba96b45c86b06e46ffb2be9abf8b43ba317c6e9a3bd22d5ce9@group.calendar.google.com",
        type: MeetingTypes.council
    },
    {
        calendarId: "6d53ff189078c025f719062586b21cbb6f84b256915d6f97d13069d25747b8b3@group.calendar.google.com",
        type: MeetingTypes.open
    }
];
export const startDate = new Date(Date.UTC(2024, 9, 5));
export const endDate = new Date(Date.UTC(2024, 11, 8));
