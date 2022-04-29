<script lang="ts">
    export let href: string = null;
    export let title: string;
    export let content: string;
    export let external: boolean = false;
    export let grey: boolean = false;

    let hovered = false;

    import { page } from "$app/stores";
</script>

<a
    href={href ?? $page.url.toString()}
    on:mouseenter={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
    target={external ? "_blank" : ""}
>
    <div
        class="notification"
        class:is-primary={!grey && !hovered}
        class:is-link={hovered}
        class:is-grey={grey && !hovered}
        class:has-text-dark={grey && !hovered}
    >
        <h3 class="title is-5">{title}</h3>
        <p class="block">
            {content}
        </p>
        <br />
        <p class="block is-underlined">
            {href == null ? "Coming Soon" : "Read More"}
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
