<script lang="ts">
    export let href: string = null;
    export let title: string;
    export let content: string | undefined = null;
    export let external: boolean = false;
    export let grey: boolean = false;
    export let compact: boolean = false;

    let hovered = false;

    import { page } from "$app/stores";
</script>

<a
    href={href ?? $page.url.toString()}
    on:mouseenter={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
    target={external ? "_blank" : ""}>
    <div
        class="notification"
        class:p-4={compact}
        class:is-primary={!grey && !hovered}
        class:is-link={hovered}
        class:is-grey={grey && !hovered}
        class:has-text-dark={grey && !hovered}>
        <h3
            class="title"
            class:is-5={!compact}
            class:is-6={compact}
            class:pb-2={compact}>
            {title}
        </h3>
        {#if content}
            <p class="block">
                {content}
            </p>
            <br />
        {/if}
        <p class="block is-underlined">
            {href == null
                ? "Coming Soon"
                : external
                    ? "Read More ↗"
                    : "Read More →"}
        </p>
    </div>
</a>

<style>
    .notification {
        height: 100%;
    }

    .is-underlined {
        position: absolute;
        bottom: 1rem;
    }
</style>
