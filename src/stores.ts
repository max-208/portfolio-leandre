import { writable } from "svelte/store";
export const enum Directions {
    None = "NONE",
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

export const selectedDirection = writable(Directions.None)