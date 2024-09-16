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