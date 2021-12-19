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

<div bind:this={img} id="wrapper">
    <div class="fill">
        <img
            src="https://www.christs.cam.ac.uk/sites/www.christs.cam.ac.uk/files/styles/banner/public/2018-01/Christs_College_banner.jpg"
            alt="Christ's College Second Court"
            class="darkened"
        />
    </div>
    <img src="/img/logo_big.png" alt="JCR Logo" class="centered" />
</div>

<div class="container p-5">
    <div class="content m-5">
        <blockquote>
            Christ's JCR (Junior Combination Room) is the undergraduate student
            body at Christ's College, Cambridge. The student-elected Committee
            represents the interests of the undergrads at Christ's, so you can
            make the most of your time here!
        </blockquote>
    </div>

    <div class="columns m-3">
        <div class="column is-one-third">
            <div class="notification is-primary">
                <h3 class="title is-5">The Committee</h3>
                <p class="block">
                    Get to know the current members of the JCR Comittee!
                </p>
                <p class="block"><a href="/">Read more</a></p>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="notification is-primary">
                <h3 class="title is-5">Prospective Students</h3>
                <p class="block">
                    Interested in applying to Christ's? Read our alternative
                    prospectus!
                </p>
                <p class="block"><a href="/">Coming Soon</a></p>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="notification is-primary">
                <h3 class="title is-5">Christ's Freshers</h3>
                <p class="block">
                    Take a look at our freshers' guide, or check out the
                    freshers' week timetable!
                </p>
                <p class="block"><a href="/">Read more</a></p>
            </div>
        </div>
    </div>
    <h1 class="title is-2 m-5">Quick Links</h1>
    <div class="columns m-5">
        <div class="column">
            <div class="content">
                <subtitle class="subtitle">Food</subtitle>
                <ul class="list">
                    <li>
                        <a href="https://intranet.christs.cam.ac.uk/meal-times"
                            >Menu</a
                        >
                    </li>
                    <li>
                        <a href="https://intranet.christs.cam.ac.uk/meal-times"
                            >Meal times</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://intranet.christs.cam.ac.uk/mealbooking/"
                            >Meal booking</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div class="column">
            <div class="content">
                <subtitle class="subtitle">Facilities</subtitle>
                <ul class="list">
                    <li>
                        <a
                            href="https://christscollege.roombookingsystem.co.uk/overviewday"
                            >Room booking</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://intranet.christs.cam.ac.uk/fault-reporting"
                            >Fault reporting</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div class="column">
            <div class="content">
                <subtitle class="subtitle">Porters</subtitle>
                <ul class="list">
                    <li>
                        <a href="tel:+44-1223-334900">+44 1223 334900</a>
                    </li>
                    <li>
                        <a href="mailto:porters@christs.cam.ac.uk"
                            >porters@christs.cam.ac.uk</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div class="column">
            <div class="content">
                <subtitle class="subtitle">Misc</subtitle>
                <ul class="list">
                    <li>
                        <a href="/">Reimbursement</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
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
    #wrapper {
        position: relative;
        background-color: black;
        height: 70vh;
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
