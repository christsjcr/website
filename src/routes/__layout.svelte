<script lang="ts">
    import { onMount } from "svelte";

    import "../app.scss";
    import type { NavbarItem } from "../components/Navbar.svelte";
    import Navbar from "../components/Navbar.svelte";

    import { library } from "@fortawesome/fontawesome-svg-core";
    import {
        faInstagram,
        faFacebook,
    } from "@fortawesome/free-brands-svg-icons";
    import { FontAwesomeIcon } from "fontawesome-svelte";

    library.add(faInstagram, faFacebook);

    const layout: NavbarItem[] = [
        { route: "/", label: "Home" },
        {
            route: "/resources",
            label: "Resources",
            children: [
                { route: "", label: "X" },
                { route: "", label: "Y" },
            ],
        },
        { route: "/roles", label: "Roles" },
        { route: "/meetings", label: "Meetings" },
    ];

    // Adds a listener to disable animations on resizing.
    // Initially tried in pure Svelte, but couldn't get it to work.
    onMount(() => {
        const classes = document.body.classList;
        let timer;
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

<div class="page">
    <Navbar {layout}>
        <slot />
    </Navbar>

    <footer class="footer">
        <div class="content has-text-centered">
            <nav class="level is-mobile">
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
            </nav>
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
