<script lang="ts">
    export let color:
    | "grey"
    | "dark"
    | "primary"
    | "info"
    | "warning"
    | "danger";

    export let tooltipSide: "bottom" | "right" = "bottom";

    export let tooltip: string;
</script>

<div class="column is-narrow">
    <div
        class={`tag is-${color} has-tooltip-multiline has-tooltip-arrow has-tooltip-${tooltipSide} has-tooltip-bottom-tablet`}
        data-tooltip={tooltip}>
        <slot />
    </div>
</div>
