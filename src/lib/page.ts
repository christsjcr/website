import { writable, type Writable } from "svelte/store";

export interface Page {
    current: string;
    transparentLimit?: HTMLElement;
    hideLogo?: boolean;
}

export const page: Writable<Page> = writable({ current: null });