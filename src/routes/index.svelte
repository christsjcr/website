<script lang="ts">
    import NotificationLink from "$components/elements/NotificationLink.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import week from "$lib/week";

    import Mode from "$components/Mode.svelte";
    import type { Writable } from "svelte/store";
    import UpperHallMenu from "$components/features/UpperHallMenu.svelte";

    let mode: Writable<"current_student" | "visitor">;
</script>

<PageHeader
    current="/"
    title="Christ's JCR"
    titleSrc="/img/logo_big.webp"
    description="Christ's JCR is the undergraduate student body at Christ's College, Cambridge. We are your student-elected Committee, representing your interests to help you make the most of your time here!"
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
                    href="/about/roles"
                    title="The Committee"
                    content="Get to know the current members of the JCR Committee!"
                />
            </div>
            <div class="column is-one-third">
                <NotificationLink
                    title="Prospective Students"
                    content="Interested in applying to Christ's? Read our alternative
                prospectus!"
                />
            </div>
            <div class="column is-one-third">
                <NotificationLink
                    title="Christ's Freshers"
                    content="Take a look at our freshers' guide, or check out the
                freshers' week timetable!"
                />
            </div>
        </div>
    {:else}
        <h2 class="title is-2">Upper Hall Menu</h2>
        <UpperHallMenu />

        <h2 class="title is-2">Quick Links</h2>
        <div class="columns m-1 clickable-lists">
            <div class="column">
                <div class="content">
                    <subtitle class="subtitle">Food</subtitle>
                    <ul class="list">
                        <li>
                            <a
                                href={`https://intranet.christs.cam.ac.uk/upper-hall-menus#Week${week()}`}
                                target="_blank">Menu</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fmealbooking%2F"
                                target="_blank">Meal booking</a
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
                                target="_blank">Room booking</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://intranet.christs.cam.ac.uk/fault-reporting"
                                target="_blank">Fault reporting</a
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
                    <subtitle class="subtitle">Finance</subtitle>
                    <ul class="list">
                        <li>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdjETgdH68GhpuQMi8jonTSEwZYkElj1VkjHfTC13kJCPmBFw/viewform"
                                target="_blank">Reimbursement</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fmealbooking%2FEPOS.aspx"
                                target="_blank">College Balance</a
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
