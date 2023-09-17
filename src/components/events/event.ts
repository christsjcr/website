import * as ics from "ics";

interface Event<T> {
    description: string;
    date: [number, number, number];
    time: [number, number];
    duration: [number, number];
    location: string;
    type: T;
}

export function getDay<T>(x: Event<T>): Date {
    return new Date(x.date[0], x.date[1] - 1, x.date[2]);
}

export function getStart<T>(x: Event<T>): Date {
    return new Date(x.date[0], x.date[1] - 1, x.date[2], ...x.time);
}

export function getEnd<T>(x: Event<T>): Date {
    return new Date(
        getStart(x).getTime() +
                3600000 * x.duration[0] +
                60000 * x.duration[1],
    );
}

export type Events<T> = Event<T>[];

export function getICS<T>(calendarName: string, events: Events<T>): string {
    let { error, value } = ics.createEvents(
        events.map((x) => {
            const start = getStart(x);
            return {
                calName: calendarName,
                title: x.description,
                start: [
                    start.getUTCFullYear(),
                    start.getUTCMonth() + 1,
                    start.getUTCDate(),
                    start.getUTCHours(),
                    start.getUTCMinutes(),
                ],
                startInputType: "utc",
                duration: { hours: x.duration[0], minutes: x.duration[1] },
                location: x.location,
            };
        }),
    );
    if (error) {
        throw error;
    }
    return value;
}
