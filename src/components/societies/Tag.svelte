<script lang="ts">
    export let color:
        | "grey"
        | "dark"
        | "primary"
        | "info"
        | "warning"
        | "danger";

    export let tooltip: string;
    export let first: boolean = false;
</script>

<div
    class={`level-item tag is-${color} is-multiline has-tooltip-arrow ${
        first
            ? "has-tooltip-right has-tooltip-bottom-tablet has-tooltip-multiline"
            : "has-tooltip-bottom"
    }`}
    data-tooltip={tooltip}
>
    <slot />
</div>
