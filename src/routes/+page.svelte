<script lang="ts">
    import NotificationLink from "$components/elements/NotificationLink.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import week from "$lib/week";
    import UpperHallMenu from "$components/features/UpperHallMenu.svelte";
    import TrackedLink from "$components/elements/TrackedLink.svelte";
    import width, { desktop } from "$lib/width";
</script>

<PageHeader
    current="/"
    title="Christ's JCR"
    titleSrc="/img/logo_big.webp"
    metaDescription="Christ's JCR is the undergraduate student union of Christ's College, Cambridge."
    background={{
        src: "/img/home.webp",
        alt: "Christ's College Second Court",
    }}
    size="large"
    home>
    <div slot="description">
        Christ's JCR is the undergraduate student union of Christ's College,
        Cambridge. We are your student-elected Committee, representing your
        interests to help you make the most of your time here!
    </div>

    <div class="columns my-6">
        <div class="column is-one-third">
            <NotificationLink
                href="/about/committee"
                title="The Committee 🐐"
                content="Get to know the current members of the JCR Committee!" />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="/get-involved/freshers"
                title="Freshers 🐣"
                content="View the freshers' timetable, see what's on at Upper Hall, and find your way about with a map of Christ's!" />
        </div>
        <div class="column is-one-third">
            <NotificationLink
                href="/resources"
                title="Resources 🔗"
                content="Explore an instantly searchable list of college, university, and welfare related resources!" />
        </div>
    </div>
    <div class="columns my-6 is-desktop">
        <div class="column is-two-thirds-desktop">
            <UpperHallMenu />
        </div>
        <div
            class="column is-one-third-desktop {$width > desktop.min
                ? 'pt-4'
                : 'px-5'}">
            {#if $width > desktop.min}
                <br />
                <br />
            {/if}
            <br />
            <div>
                <NotificationLink
                    href="/get-involved/feedback"
                    title="Feedback Form ✍️"
                    content="If you want to provide feedback, suggestions, or general problems for the JCR to consider, please use this form! The JCR is there to work for you, so any and all feedback is welcome."
                    grey />
            </div>
        </div>
    </div>
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
                            external>Menu</TrackedLink>
                    </li>
                    <li>
                        <TrackedLink
                            href="https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fmealbooking%2F"
                            id="meal-booking"
                            external>Meal booking</TrackedLink>
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
                            external>Room booking</TrackedLink>
                    </li>
                    <li>
                        <TrackedLink
                            href="https://intranet.christs.cam.ac.uk/fault-reporting"
                            id="fault-reporting"
                            external>Fault reporting</TrackedLink>
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
                            id="phone-porters">+44 1223 334900</TrackedLink>
                    </li>
                    <li>
                        <TrackedLink
                            href="mailto:porters@christs.cam.ac.uk"
                            id="email-porters"
                            >porters@christs.cam.ac.uk</TrackedLink>
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
                            href="https://docs.google.com/forms/d/e/1FAIpQLSd_OPkwdGAjx_W39T9ROzyDzTTvFmUnl94PLwo2q8esqIaRug/viewform"
                            id="reimbursement-form"
                            external>Reimbursement</TrackedLink>
                    </li>
                    <li>
                        <TrackedLink
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdxUXonMs2fV6hZk0WfqhoKw-RLL-BzNhEoCD3g-TPFMJFa6w/viewform"
                            id="prescription-form"
                            external>Prescription Scheme</TrackedLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</PageHeader>
