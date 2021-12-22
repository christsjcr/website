import { writable, type Writable } from "svelte/store";

export interface Page {
    current: string;
    transparentLimit: HTMLElement;
    type: "home" | "primary" | "image";
}

export const page: Writable<Page> = writable({ current: null, transparentLimit: null, type: "home" });