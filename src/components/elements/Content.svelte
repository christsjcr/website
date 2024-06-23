<script lang="ts">
    export let centered = true;
    export let hasText = true;
</script>

<div class="columns" class:is-centered={centered}>
    <div class="column is-narrow">
        <div class="{hasText ? "content " : ""}text">
            <slot />
        </div>
    </div>
</div>
