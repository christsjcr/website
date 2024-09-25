export enum FreshersEventTypes {
    com = "compulsory",
    opt = "optional",
    int = "international"
}

export const calendarDetails = [
    {
        calendarId: "f47cb082566f93a9a682f20026f24aace73dc0203899ace553a6e54aaf2ca555@group.calendar.google.com",
        type: FreshersEventTypes.com
    },
    {
        calendarId: "98f933efaa927a1b41a85f92bba67e064a0270676b3c1241ca901610f556ea84@group.calendar.google.com",
        type: FreshersEventTypes.opt
    }, 
    {
        calendarId: "12976251fe9451b67ab24ac082e838b261fd2521a0a24318890433515993c4c4@group.calendar.google.com",
        type: FreshersEventTypes.int
    }
];
export const startDate = new Date(Date.UTC(2024, 8, 25));
export const endDate = new Date(Date.UTC(2024, 9, 10));
