import { writable, type Writable } from "svelte/store";

export type Page = { type: "home" | "image" | "primary", current: string, header: HTMLElement };

export const page: Writable<Page> = writable({ current: null, type: "primary", header: null });