<script lang="ts">
    import { onMount } from "svelte";
    import { type Writable, writable } from "svelte/store";

    export let mode: Writable<"visitor" | "current_student"> =
        writable("visitor");

    onMount(() => {
        const loaded = localStorage.getItem("mode");

        mode = writable(
            loaded === "current_student" ? "current_student" : "visitor"
        ) as Writable<"visitor" | "current_student">;

        mode.subscribe((val) => {
            if (val !== "visitor" && val !== "current_student") {
                mode.set("visitor");
            }
        });

        mode.subscribe((val) => localStorage.setItem("mode", val));
    });

    $: currentStudent = $mode == "current_student";
</script>

<div class="field">
    <p class="has-text-centered"><b>I am a current student:</b></p>
    <input
        id="modeSwitch"
        type="checkbox"
        class="switch"
        bind:checked={currentStudent}
        on:click={() =>
            ($mode =
                $mode === "current_student" ? "visitor" : "current_student")}
    />
    <label for="modeSwitch" />
</div>
