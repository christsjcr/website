<script lang="ts">
    import { onMount } from "svelte";

    import "../app.scss";
    import type { NavbarItem } from "$components/Navbar.svelte";
    import Navbar from "$components/Navbar.svelte";
    import links from "$data/links";

    import { library } from "@fortawesome/fontawesome-svg-core";
    import {
        faInstagram,
        faFacebook,
        faFacebookMessenger,
        faWhatsapp,
    } from "@fortawesome/free-brands-svg-icons";
    import {
        faEnvelope,
        faGlobe,
        faInfoCircle,
        faUserPlus,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import WidthUpdater from "$components/WidthUpdater.svelte";
    import TrackedLink from "$components/elements/TrackedLink.svelte";

    library.add(
        faInstagram,
        faFacebook,
        faFacebookMessenger,
        faWhatsapp,
        faEnvelope,
        faUserPlus,
        faGlobe,
        faInfoCircle
    );

    const layout: NavbarItem[] = [
        {
            route: "/",
            label: "Home",
        },
        {
            route: "/about",
            label: "About",
            children: [
                { route: "/about/committee", label: "Committee" },
                {
                    route: "/about/constitution-and-guidelines",
                    label: "Constitution & Guidelines",
                },
                { route: "/about/meetings", label: "Meetings" },
                { route: "/about/elections", label: "Elections" },
            ],
        },
        {
            route: "/get-involved",
            label: "Get Involved",
            children: [
                {
                    route: "/get-involved/freshers",
                    label: "Freshers",
                },
                {
                    route: "/get-involved/termcard",
                    label: "Termcard",
                },
                {
                    route: "/get-involved/societies",
                    label: "Societies",
                },
                {
                    route: "/get-involved/feedback",
                    label: "Feedback",
                },
            ],
        },
        {
            route: "/resources",
            label: "Resources",
        },
    ];

    // Adds a listener to disable animations on resizing.
    // Initially tried in pure Svelte, but couldn't get it to work.
    onMount(() => {
        const classes = document.body.classList;
        let timer: number;
        const disableTransitions = () => {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            } else classes.add("stop-transitions");

            timer = setTimeout(() => {
                classes.remove("stop-transitions");
                timer = null;
            }, 100);
        };
        disableTransitions();
        window.addEventListener("resize", disableTransitions);
    });
</script>

<WidthUpdater />

<div class="page">
    <Navbar {layout}>
        <slot />
    </Navbar>

    <footer class="footer">
        <div class="container has-text-centered">
            <div class="level is-mobile">
                <div class="level-item has-text-centered">
                    <TrackedLink
                        href={ links.general.JCR_INSTAGRAM }
                        id="instagram"
                        external>
                        <span class="icon is-large">
                            <Fa icon={faInstagram} size="2x" />
                        </span>
                        <p class="heading">@christsjcr</p>
                    </TrackedLink>
                </div>
                <div class="level-item has-text-centered">
                    <TrackedLink
                        href={ links.general.JCR_FACEBOOK }
                        id="facebook"
                        external>
                        <span class="icon is-large">
                            <Fa icon={faFacebook} size="2x" />
                        </span>
                        <p class="heading">@ChristsJCR</p>
                    </TrackedLink>
                </div>
            </div>
            <p>© Christ's JCR 2023</p>
            <a rel="external" href={ links.general.GITHUB }
                >Source</a>
        </div>
    </footer>
</div>

<style lang="scss">
    :global(body) {
        overflow-x: hidden;
        width: 100%;
    }

    :global(body.stop-transitions *) {
        transition: none !important;
    }

    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    footer {
        margin-top: auto;
    }
</style>
