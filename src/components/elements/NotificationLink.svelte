<script lang="ts">
    export let href: string = null;
    export let title: string;
    export let content: string;

    let hovered = false;
</script>

<a
    {href}
    on:mouseenter={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
>
    <div
        class="notification"
        class:is-primary={!hovered}
        class:is-link={hovered}
    >
        <h3 class="title is-5">{title}</h3>
        <p class="block">
            {content}
        </p>
        <p class="block">
            <a {href}>{href == null ? "Coming Soon" : "Read More"}</a>
        </p>
    </div>
</a>
