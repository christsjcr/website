<script context="module" lang="ts">
    interface Event {
        type: "event";
        name: string;
        description: string;
        date: Date;
        time: string;
    }

    interface Week {
        type: "week";
        number: number;
    }

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    export type Timeline = (Week | Event)[];
</script>

<script lang="ts">
    export let timeline: Timeline;
</script>

<div class="container">
    <div class="timeline is-centered">
        <header class="timeline-header">
            <span class="tag is-medium">Term Start</span>
        </header>
        <div class="timeline-item" />
        {#each timeline as item}
            {#if item.type === "week"}
                <header class="timeline-header">
                    <span class="tag is-primary">Week {item.number}</span>
                </header>
            {:else}
                <div class="timeline-item">
                    <div class="timeline-marker is-link" />
                    <div class="timeline-content">
                        <p class="heading">
                            {months[item.date.getMonth()]}
                            {item.date.getDate()}
                        </p>
                        <div class="content">
                            <h2 class="mb-0">{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
        <header class="timeline-header">
            <span class="tag is-medium">Term End</span>
        </header>
    </div>
</div>
