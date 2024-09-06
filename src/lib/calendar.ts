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

type CalendarDetails<T> = 
{
    calendarId: string, 
    type: T
}[];

export async function getEvents<T>(gapi, calendarDetails:CalendarDetails<T>, timeMin:Date, timeMax:Date): Promise<Events<T>> {
    let events:Events<T> = [];

    try {
        await gapi.client.init({ 
            apiKey: "AIzaSyDs-Xt2Y1ikLK7JjY5stobl9500GXTpyPo"
        });

        for (let i = 0; i < calendarDetails.length; i++) {
            const { calendarId, type } = calendarDetails[i];
            const rawRes = await gapi.client.request({
                path: `https://www.googleapis.com/calendar/v3/calendars/${ calendarId }/events?timeMin=${ timeMin.toISOString() }&timeMax${ timeMax.toISOString() }`
            });

            const parsed = rawRes.result.items.map(e => {
                const start = new Date(e.start.dateTime);
                const end = new Date(e.end.dateTime);
                const { date, time, duration } = getEventDateTimes(start, end);
                
                return {
                    description: titleCase(e.summary),
                    date,
                    time,
                    duration,
                    location: e.location ?? "TBC",
                    type
                };
            });

            events.push(...parsed);
        }
    } catch (error) {
        console.error(error);
    }

    // sort in ascending order of datetime
    return events.sort((e1, e2) => {
        const lowerMonth = e1.date[1] < e2.date[1];
        const sameMonth = e1.date[1] == e2.date[1];
        const lowerDate = e1.date[2] < e2.date[2];
        const sameDate = e1.date[2] == e2.date[2];
        const timeDiff =  (e1.time[0] + e1.time[1] / 60) - (e2.time[0] + e2.time[1] / 60);

        if (lowerMonth || (sameMonth && lowerDate)) {
            return -1;
        } else if (sameMonth && sameDate) {
            return timeDiff;
        } else {
            return 1;
        }
    });
}