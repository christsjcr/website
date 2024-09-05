export enum TermcardEventTypes {
    jcr = "jcr",
    soc = "society"
}

export const term = "Summer";
export const termcardURL = "https://calendar.google.com/calendar/ical/webmaster%40thejcr.co.uk/public/basic.ics";
export const startDate = new Date(Date.UTC(2024, 7, 18));
export const endDate = new Date(Date.UTC(2024, 7, 25));

export function identifyTermcardEventType (type: string) {
    if (type.toLowerCase() == "jcr") return TermcardEventTypes.jcr;
    else return TermcardEventTypes.soc;
}