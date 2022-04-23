<script lang="ts">
    import { onMount } from "svelte";

    import "../app.scss";
    import type { NavbarItem } from "$components/Navbar.svelte";
    import Navbar from "$components/Navbar.svelte";

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
        faUserPlus,
    } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "fontawesome-svelte";
    import WidthUpdater from "$components/WidthUpdater.svelte";

    library.add(
        faInstagram,
        faFacebook,
        faFacebookMessenger,
        faWhatsapp,
        faEnvelope,
        faUserPlus,
        faGlobe
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
                { route: "/about/constitution", label: "Constitution" },
                { route: "/about/meetings", label: "Meetings" },
            ],
        },
        {
            route: "/societies",
            label: "Societies",
        },
        {
            route: "/resources",
            label: "Resources",
            children: [
                { route: "/resources/college", label: "College Life" },
                {
                    route: "/resources/academic-and-careers",
                    label: "Academic & Careers",
                },
                { route: "/resources/welfare", label: "Welfare" },
                {
                    route: "/resources/legacies-of-enslavement",
                    label: "Legacies of Enslavement",
                },
            ],
        },
    ];

    // Adds a listener to disable animations on resizing.
    // Initially tried in pure Svelte, but couldn't get it to work.
    onMount(() => {
        const classes = document.body.classList;
        let timer: NodeJS.Timeout;
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
                    <a
                        href="https://www.instagram.com/christsjcr/"
                        target="_blank"
                    >
                        <span class="icon is-large">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </span>
                        <p class="heading">@christsjcr</p>
                    </a>
                </div>
                <div class="level-item has-text-centered">
                    <a
                        href="https://www.facebook.com/ChristsJCR"
                        target="_blank"
                    >
                        <span class="icon is-large">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </span>
                        <p class="heading">@ChristsJCR</p>
                    </a>
                </div>
            </div>
            <p>© Christ's JCR 2021</p>
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
