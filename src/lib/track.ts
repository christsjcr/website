export function click(id: string) {
    window["umami"].trackEvent(id, "click");
}