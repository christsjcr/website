import { writable, type Writable } from "svelte/store";

export type Page = ({ type: "home" | "image", header: HTMLElement } | { type: "primary" }) & { current: string };

export const page: Writable<Page> = writable({ current: null, type: "primary" });