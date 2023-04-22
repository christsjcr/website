export function click(id: string) {
    window["umami"]?.track(id);
}