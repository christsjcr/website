<script lang="ts">
    export let header: string;
</script>

<div class="card">
    <header class="card-header">
        <p
            class="card-header-title title is-4 pb-4 mb-0 has-background-primary has-text-white">
            {header}
        </p>
    </header>
    <div class="card-content">
        <slot />
    </div>
</div>
