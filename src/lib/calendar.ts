import ical from "node-ical";
import type { VEvent } from "node-ical";
import type { Events } from "$components/events/event";
import { titleCase } from "title-case";

type EventDateTimes = {
    date: [number, number, number],
    time: [number, number],
    duration: [number, number]
};

function getEventDateTimes (start: Date, end: Date):EventDateTimes {
    const date = start.getDate();
    const month = start.getMonth() + 1;
    const year = start.getFullYear();
    const hour = start.getHours();
    const minute = start.getMinutes();
    const durationInMins = Math.round((end.getTime() - start.getTime()) / 60000);

    return {
        date: [year, month, date],
        time: [hour, minute],
        duration: [Math.floor(durationInMins / 60), durationInMins % 60]
    }
}

export async function getEvents<T>(calendarURL: string, start: Date, end: Date, identifyType: (type: string) => T): Promise<Events<T>> {
    let events:Events<T> = [];
    const rawCalendar = await ical.async.fromURL(calendarURL);
    events = Object.values(rawCalendar)
        .filter(e => e.type == "VEVENT" && e.start > start && e.start < end)
        .map((e:VEvent) => {
            const eventDetails = /(?<type>jcr|soc): ?(?<title>[A-Za-z0-9-\/ ]+)/gmi.exec(e.summary).groups;
            const { date, time, duration } = getEventDateTimes(e.start, e.end);

            return {
                description: titleCase(eventDetails.title),
                date,
                time,
                duration,
                location: e.location,
                type: identifyType(eventDetails.type)
            };
        });
    
    console.log(events);
    return events;
}
