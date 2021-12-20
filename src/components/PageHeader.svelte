<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "../components/Navbar.svelte";

    export let current: string;
    export let background: { src: string; alt: string } = null;
    export let title: string;
    export let titleSrc: string = null;
    export let large: boolean = false;

    let img;

    onMount(() => {
        page.set({
            current,
            img,
        });
    });
</script>

<div
    bind:this={img}
    class="wrapper"
    class:black={titleSrc != null}
    style={`height: ${large ? "70vh" : "30vh"};`}
>
    {#if background}
        <div class="fill">
            <img src={background.src} alt={background.alt} class="darkened" />
        </div>
    {/if}
    {#if titleSrc}
        <img src={titleSrc} alt={title} class="headerImg" />
    {:else}
        <div class="header">
            <h1 class="title is-1 has-text-white">{title}</h1>
        </div>
    {/if}
</div>

<style lang="scss">
    .fill {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 100%;
    }
    .fill img {
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
    .wrapper {
        position: relative;
        background-color: $primary;
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
    }
    .header {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
