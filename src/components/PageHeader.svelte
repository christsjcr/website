<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$lib/page";
    import width, { tablet } from "$lib/width";
    import Breadcrumbs from "./elements/Breadcrumbs.svelte";

    export let current: string;
    export let background: { src: string; alt: string } = null;
    export let title: string;
    export let titleSrc: string = null;
    export let metaDescription: string;
    export let size: "small" | "medium" | "large" = "small";
    export let home = false;

    let smallDelay = false;
    let mounted = false;
    let bgShowing = false;
    let fgShowing = false;

    let img: HTMLElement;

    $: page.set({
        current,
        type: background == null ? "primary" : "image",
        header: img,
    });

    onMount(() => {
        mounted = true;
        setTimeout(() => (smallDelay = true), 300);
    });

    const bgload = (el: HTMLElement) => {
        el.addEventListener("load", () => {
            bgShowing = true;
        });
    };

    const fgload = (el: HTMLElement) => {
        el.addEventListener("load", () => {
            fgShowing = true;
        });
    };
</script>

<svelte:head>
    <title>{home ? "Christ's JCR" : `${title} | Christ's JCR`}</title>
    <meta name="description" content={metaDescription} />
    <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link
        rel="canonical"
        href={`https://thejcr.co.uk${current === "/" ? "" : current}`} />
</svelte:head>

<div
    bind:this={img}
    class="wrapper"
    class:black={titleSrc != null}
    class:large={size == "large"}
    class:medium={size == "medium"}>
    {#if background}
        {#if mounted}
            <div class="fill" class:showing={bgShowing}>
                <img
                    src={background.src}
                    alt={background.alt}
                    class="darkened"
                    width="2000"
                    height="875"
                    use:bgload />
            </div>
        {/if}
    {/if}
    {#if titleSrc && mounted}
        <img
            src={titleSrc}
            alt={title}
            class="headerImg"
            use:fgload
            class:showing={fgShowing} />
    {/if}
    {#if !titleSrc || (!fgShowing && smallDelay)}
        <div class="header">
            <h1 class="title is-1 has-text-white">{title}</h1>
        </div>
    {/if}
</div>

<div class="container">
    <div id="inner" class="mx-4 m-5" class:mx-5={$width >= tablet.min}>
        <Breadcrumbs />
        {#if $$slots.description}
            <div class="content">
                <blockquote>
                    <slot name="description" />
                </blockquote>
            </div>
        {/if}

        <slot />
    </div>
</div>

<style lang="scss">
    .fill {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 100%;
        opacity: 0;
    }
    .showing {
        opacity: 1 !important;
        transition: opacity 0.3s ease-in-out;
    }
    .fill img {
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
    .wrapper {
        position: relative;
        background-color: $primary;
        height: 14rem;
    }
    .wrapper.large {
        height: 70vh;
    }
    .wrapper.medium {
        height: 45vh;
    }
    .black {
        background-color: black;
    }
    .headerImg {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 75%;
        transform: translate(-50%, -50%);
        object-fit: contain;
        opacity: 0;
    }
    .header {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
    }
</style>
