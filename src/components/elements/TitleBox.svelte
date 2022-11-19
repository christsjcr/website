<script lang="ts">
    export let header: string;
    export let color: "primary" | "dark" = "primary";
</script>

<div class="card">
    <header class="card-header">
        <p
            class="card-header-title title is-4 pb-4 mb-0 has-background-{color} has-text-white">
            {header}
        </p>
    </header>
    <div class="card-content">
        <slot />
    </div>
</div>
