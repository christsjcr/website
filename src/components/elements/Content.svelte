<script lang="ts">
    export let centered = true;
</script>

<div class="columns" class:is-centered={centered}>
    <div class="column is-narrow">
        <div class="content text">
            <slot />
        </div>
    </div>
</div>
