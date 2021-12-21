<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "@lib/page";

    export let current: string;
    export let background: { src: string; alt: string } = null;
    export let title: string;
    export let titleSrc: string = null;
    export let large: boolean = false;
    export let hideLogo: boolean = false;

    let smallDelay = false;
    let mounted = false;
    let bgShowing = false;
    let fgShowing = false;

    let img;

    onMount(() => {
        mounted = true;
        page.set({
            current,
            transparentLimit: img,
            hideLogo,
        });
        setTimeout(() => (smallDelay = true), 300);
    });

    const bgload = (el) => {
        el.addEventListener("load", () => {
            bgShowing = true;
        });
    };

    const fgload = (el) => {
        el.addEventListener("load", () => {
            fgShowing = true;
        });
    };
</script>

<div bind:this={img} class="wrapper" class:black={titleSrc != null} class:large>
    {#if background}
        {#if mounted}
            <div class="fill" class:showing={bgShowing}>
                <img
                    src={background.src}
                    alt={background.alt}
                    class="darkened"
                    use:bgload
                />
            </div>
        {/if}
    {/if}
    {#if titleSrc && mounted}
        <img
            src={titleSrc}
            alt={title}
            class="headerImg"
            use:fgload
            class:showing={fgShowing}
        />
    {/if}
    {#if !titleSrc || (!fgShowing && smallDelay)}
        <div class="header">
            <h1 class="title is-1 has-text-white">{title}</h1>
        </div>
    {/if}
</div>

<div class="container px-5"><div class="m-5"><slot /></div></div>

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
        height: 20vh;
    }
    .wrapper.large {
        height: 70vh;
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
    }
</style>
