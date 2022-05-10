<script lang="ts">
    import NotificationLink from "$components/elements/NotificationLink.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import week from "$lib/week";

    import Mode from "$components/Mode.svelte";
    import type { Writable } from "svelte/store";
    import UpperHallMenu from "$components/features/UpperHallMenu.svelte";
    import TrackedLink from "$components/elements/TrackedLink.svelte";

    let mode: Writable<"current_student" | "visitor">;
</script>

<PageHeader
    current="/"
    title="Christ's JCR"
    titleSrc="/img/logo_big.webp"
    metaDescription="Christ's JCR is the undergraduate student body at Christ's College, Cambridge."
    background={{
        src: "/img/home.webp",
        alt: "Christ's College Second Court",
    }}
    size="large"
    home
>
    <div class="content">
        <blockquote>
            Christ's JCR is the undergraduate student body at Christ's College,
            Cambridge. We are your student-elected Committee, representing your
            interests to help you make the most of your time here!
        </blockquote>
    </div>
    {#if $mode === "visitor"}
        <div class="columns my-6">
            <div class="column is-one-third">
                <NotificationLink
                    href="/about/committee"
                    title="The Committee 🐐"
                    content="Get to know the current members of the JCR Committee!"
                />
            </div>
            <div class="column is-one-third">
                <NotificationLink
                    href="/societies"
                    title="Societies 🎭"
                    content="Interested in trying something new? Explore a complete list of Christ's societies!"
                />
            </div>
            <div class="column is-one-third">
                <NotificationLink
                    href="/resources/legacies-of-enslavement"
                    title="Legacies of 
                    Enslavement 📜"
                    content="Read about the 2021 summer research project, and get involved with the upcoming one!"
                />
            </div>
        </div>
    {:else}
        <h2 class="title is-2">Updates & Feedback</h2>
        <div class="columns m-1 is-desktop">
            <!--
            <div class="column is-two-thirds-desktop">
                <TitleBox header="Updates ⚙️">
                    <div class="content">
                        <p>Nothing to see here at the moment!</p>
                    </div>
                </TitleBox>
            </div>
            -->
            <div class="column is-half is-one-third-desktop">
                <NotificationLink
                    href="https://docs.google.com/forms/d/e/1FAIpQLSchG-F00FNgO02T5OepdfuFSkVi7HgnfpI0a6qDjhhXctG6Hw/viewform"
                    title="Contact Form ✍️"
                    content="If you want to provide feedback, suggestions, or general problems for the JCR to consider, please use this form!
                        The JCR is there to work for you, so any and all feedback is welcome."
                    external
                    grey
                />
            </div>
        </div>
        <br />
        <h2 class="title is-2">Upper Hall Menu</h2>
        <UpperHallMenu />

        <h2 class="title is-2">Quick Links</h2>
        <div class="columns m-1 clickable-lists">
            <div class="column">
                <div class="content">
                    <subtitle class="subtitle">Food</subtitle>
                    <ul class="list">
                        <li>
                            <TrackedLink
                                href={`https://intranet.christs.cam.ac.uk/upper-hall-menus#Week${week()}`}
                                id="intranet-menu"
                                external>Menu</TrackedLink
                            >
                        </li>
                        <li>
                            <TrackedLink
                                href="https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fmealbooking%2F"
                                id="meal-booking">Meal booking</TrackedLink
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
                            <TrackedLink
                                href="https://christscollege.roombookingsystem.co.uk/overviewday"
                                id="room-booking"
                                external>Room booking</TrackedLink
                            >
                        </li>
                        <li>
                            <TrackedLink
                                href="https://intranet.christs.cam.ac.uk/fault-reporting"
                                id="fault-reporting"
                                external>Fault reporting</TrackedLink
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
                            <TrackedLink
                                href="tel:+44-1223-334900"
                                id="phone-porters">+44 1223 334900</TrackedLink
                            >
                        </li>
                        <li>
                            <TrackedLink
                                href="mailto:porters@christs.cam.ac.uk"
                                id="email-porters"
                                >porters@christs.cam.ac.uk</TrackedLink
                            >
                        </li>
                    </ul>
                </div>
            </div>
            <div class="column">
                <div class="content">
                    <subtitle class="subtitle">Finance</subtitle>
                    <ul class="list">
                        <li>
                            <TrackedLink
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdjETgdH68GhpuQMi8jonTSEwZYkElj1VkjHfTC13kJCPmBFw/viewform"
                                id="reimbursement-form"
                                external>Reimbursement</TrackedLink
                            >
                        </li>
                        <li>
                            <TrackedLink
                                href="https://docs.google.com/forms/d/e/1FAIpQLSf1Hz_a6Ceg49VoDovKoQNxaTmPi6pRGYHd3nVtbtSjcxqkAw/viewform"
                                id="prescription-form"
                                external>Prescription Scheme</TrackedLink
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    {/if}
    <div class="has-text-centered mt-6">
        <Mode bind:mode />
    </div>
</PageHeader>
