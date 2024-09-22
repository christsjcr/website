<script lang="ts">
    import NotificationLink from "$components/elements/NotificationLink.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import UpperHallMenu from "$components/features/UpperHallMenu.svelte";
    import TrackedLink from "$components/elements/TrackedLink.svelte";
    import width, { desktop } from "$lib/width";
    import links from "$data/links"
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
                ? "pt-4"
                : "px-5"}">
            {#if $width > desktop.min}
                <br />
                <br />
            {/if}
            <br />
            <div>
                <NotificationLink
                    href="/get-involved/feedback"
                    title="Feedback Form ✍️"
                    content=
                    "If you want to provide feedback, suggestions, or general problems for the JCR to consider, please use this form! 
                    The JCR is there to work for you, so any and all feedback is welcome."
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
                            href={ links.meals.UPPER_HALL_MENU }
                            id="intranet-menu"
                            external>Menu</TrackedLink>
                    </li>
                    <li>
                        <TrackedLink
                            href={ links.meals.MEAL_BOOKING }
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
                            href={ links.facilities.ROOM_BOOKING }
                            id="room-booking"
                            external>Room booking</TrackedLink>
                    </li>
                    <li>
                        <TrackedLink
                            href={ links.facilities.FAULT_REPORTING }
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
                            href={ links.contacts.PORTERS_PHONE }
                            id="phone-porters">+44 1223 334900</TrackedLink>
                    </li>
                    <li>
                        <TrackedLink
                            href={ links.contacts.PORTERS_EMAIL }
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
                            href={ links.finance.JCR_FUNDING_REQUEST_FORM }
                            id="JCR-funding-form"
                            external>Unified JCR Funding Form</TrackedLink>
                    </li>
                    <li>
                        <TrackedLink
                            href={ links.finance.FLEXIBLE_GRANT }
                            id="flexible-grant"
                            external>Flexible Grant 2023/24</TrackedLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</PageHeader>
