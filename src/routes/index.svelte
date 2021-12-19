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

<div id="wrapper">
    <div bind:this={img} class="fill">
        <img
            src="/img/home.jpg"
            alt="Christ's College Second Court"
            class="darkened"
        />
    </div>
    <img src="/img/logo_big.png" alt="JCR Logo" class="centered" />
</div>

<div class="container">
    <div class="notification is-primary m-3">
        The JCR (Junior Combination Room) is the undergraduate student body at
        Christ's College. The student-led Committee represents the students in
        Christ's to the College, so you can make the most of your time here.
    </div>
    <div class="columns">
        <div class="column">
            <div class="block">
                <h1 class="title is-1">Welcome to Christ's JCR</h1>
            </div>
        </div>
        <div class="column is-one-quarter">Fourth column</div>
    </div>
</div>

<style lang="scss">
    .fill {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 100vh;
    }
    .fill img {
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
    #wrapper {
        position: relative;
    }
    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 75%;
        transform: translate(-50%, -50%);
        object-fit: contain;
    }
</style>
