import { type Writable, writable } from "svelte/store";

const width: Writable<number> = writable(0);

export interface Size {
    min: number, // inclusive
    max: number, // inclusive
}

export const mobile: Size = { min: 0, max: 768 };
export const tablet: Size = { min: 769, max: 1023 };
export const desktop: Size = { min: 1024, max: 1215 };
export const widescreen: Size = { min: 1216, max: 1407 };
export const fullhd: Size = { min: 1408, max: 10000 };

export default width;
