export enum TermcardEventTypes {
    jcr = "jcr",
    soc = "society"
}

export const term = "Summer";
export const calendarDetails = [
    {
        calendarId: "webmaster@thejcr.co.uk",
        type: TermcardEventTypes.jcr
    },
    {
        calendarId: "72ffd45359a103efdda8c306de56f775f3005d51aaed7e8111b8d1f175575157@group.calendar.google.com",
        type: TermcardEventTypes.soc
    }
];
export const startDate = new Date(Date.UTC(2024, 7, 18));
export const endDate = new Date(Date.UTC(2024, 7, 25));
