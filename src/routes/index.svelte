<script lang="ts">
    import { page } from "../components/Navbar.svelte";
    import { onMount } from "svelte";

    let img;

    onMount(() => {
        page.set({
            current: "/",
            img,
        });
    });
</script>

<div bind:this={img} class="fill">
    <img
        src="/img/home.jpg"
        alt="Christ's College Second Court"
        class="darkened"
    />
</div>

<div class="block">
    <h1 class="title is-1">Welcome to Christ's JCR</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">HERE</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>
<div class="block">
    <h1 class="title is-1">Christ's JCR TESTING INSADJASD</h1>
</div>

<style lang="scss">
    .fill {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: max(50vh, 500px);
    }
    .fill img {
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
</style>
