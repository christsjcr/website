<script lang="ts">
    import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    export let header: string;
    export let alongside: string = "";
    export let infoLink: string | null = null;
    export let color: "primary" | "dark" = "primary";
</script>

<div class="card">
    <header class="card-header">
        <p
            class="card-header-title title is-4 pb-4 mb-0 has-background-{color} has-text-white">
            {header}
        </p>
        {#if infoLink}
            <a
                class="card-header-icon title is-6 pb-4 mb-0 has-background-{color} has-text-grey-lighter"
                href={infoLink ?? ""}>
                {alongside}
                {#if infoLink}
                    <span class="icon is-small ml-2">
                        <Fa icon={faInfoCircle} />
                    </span>
                {/if}
            </a>
        {:else}
            <p
                class="card-header-icon title is-6 pb-4 mb-0 has-background-{color} has-text-grey-lighter"
                style:pointer-events="none">
                {alongside}
            </p>
        {/if}
    </header>
    <div class="card-content">
        <slot />
    </div>
</div>
