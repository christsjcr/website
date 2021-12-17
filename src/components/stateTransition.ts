import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export default function stateTransition<T>(initialState: T): { state: Writable<T>, transitionTo: (T) => void, onOutro: () => void } {
    const state = writable(initialState);
    let nextState = initialState;

    function transitionTo(newState: T) {
        if (nextState === newState) return;
        nextState = newState
        state.set(null)
    }

    function onOutro() {
        state.set(nextState)
    }

    return {
        state,
        transitionTo,
        onOutro
    }
}