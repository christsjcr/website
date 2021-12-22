<script lang="ts">
    import PageHeader from "@components/PageHeader.svelte";

    import width, { desktop, widescreen } from "@lib/width";

    $: profileColumns = $width >= 512;
    $: fromDesktop = $width >= desktop.min;
    $: fromWidescreen = $width >= widescreen.min;

    interface Role {
        label?: string;
        title: string;
        name: string;
        email_prefix: string;
        img?: string;
    }

    interface Category {
        category: string;
        roles: Role[];
    }

    function scrollTo(e: Event, id: string) {
        e.preventDefault();
        let pos = document.getElementById(id).getBoundingClientRect().top;
        let doc = document.documentElement;
        let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        animateScrollTo(top + pos - 70, 500);
    }

    const animateScrollTo = (to: number, duration: number) => {
        const element = document.scrollingElement || document.documentElement;
        const start = element.scrollTop;
        const change = to - start;
        const startDate = +new Date();
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        const easeInOutQuad = (t, b, c, d) => {
            let t2 = t;
            t2 /= d / 2;
            if (t2 < 1) return (c / 2) * t2 * t2 + b;
            t2 -= 1;
            return (-c / 2) * (t2 * (t2 - 2) - 1) + b;
        };
        const animateScroll = () => {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(
                easeInOutQuad(currentTime, start, change, duration),
                10
            );
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                element.scrollTop = to;
            }
        };
        animateScroll();
    };

    const categories: Category[] = [
        {
            category: "Core",
            roles: [
                {
                    title: "President",
                    name: "Sam Carling",
                    email_prefix: "president",
                },
                {
                    title: "Vice President",
                    name: "Tamsin Wood",
                    email_prefix: "vicepresident",
                },
                {
                    title: "Treasurer",
                    name: "Fergus Kirman",
                    email_prefix: "treasurer",
                },
                {
                    title: "Secretary",
                    name: "Immi Sandhu",
                    email_prefix: "secretary",
                },
            ],
        },
        {
            category: "Events",
            roles: [
                {
                    title: "Freshers' Reps",
                    label: "Freshers'",
                    name: "Vivek Bilous & Charlotte Westwood",
                    email_prefix: "firstyearrep",
                },
                {
                    title: "Internationals' Rep",
                    label: "Internationals'",
                    name: "Tudor Serban",
                    email_prefix: "intl",
                },
                {
                    title: "Events Officer (Ents)",
                    label: "Ents",
                    name: "Hannah Huang",
                    email_prefix: "ents",
                },
                {
                    title: "Catering & Facilities Officer",
                    label: "Catering & Facilities",
                    name: "Jonathon Konig",
                    email_prefix: "facilities",
                },
            ],
        },
        {
            category: "Welfare",
            roles: [
                {
                    title: "Male & NB Welfare Officer",
                    label: "Male & NB",
                    name: "Ossie Visick",
                    email_prefix: "welfare-m",
                },
                {
                    title: "Female & NB Welfare Officer",
                    label: "Female & NB",
                    name: "Christina Lawrence",
                    email_prefix: "welfare-f",
                },
            ],
        },
        {
            category: "Diversity",
            roles: [
                {
                    title: "Access Officer",
                    label: "Access",
                    name: "Romany Whittall",
                    email_prefix: "access",
                },
                {
                    title: "Ethnic Diversity Officer",
                    label: "Ethnic Diversity",
                    name: "Abhi Gowda",
                    email_prefix: "edo",
                },
                {
                    title: "LGBT+ Officer",
                    label: "LGBT+",
                    name: "Kit Burley",
                    email_prefix: "lgbt+",
                },
                {
                    title: "Women's Officer",
                    label: "Women's",
                    name: "Leah Almeida",
                    email_prefix: "womens",
                },
            ],
        },
        {
            category: "Misc",
            roles: [
                {
                    title: "Green Officer",
                    label: "Green",
                    name: "Camille McCarthy",
                    email_prefix: "green",
                },
                {
                    title: "Webmaster",
                    name: "Miles Watson",
                    email_prefix: "webmaster",
                },
            ],
        },
    ];
</script>

<PageHeader current="/about/roles" title="JCR Roles">
    <div class="content">
        <blockquote>
            The JCR Committee is made up of a group of Christ's students who
            have been elected to represent the views of the undergraduate
            students at college and university level. The central role of the
            JCR Committee is to represent the interests and look after the
            welfare of the student body. This could include anything from
            running events to discussing food, accommodation or access in our
            meetings. Each member of the JCR committee has a specific
            responsibility. Find out more about each position below!
        </blockquote>
    </div>
    <div class="columns is-variable is-5 is-desktop">
        <div class="column is-one-third-desktop is-one-quarter-widescreen">
            <aside class="menu my-6">
                <ul class="menu-list">
                    {#each categories as category}
                        <li>
                            <a
                                class="is-active"
                                href={`#${category.category}`}
                                on:click={(e) => scrollTo(e, category.category)}
                                >{category.category}</a
                            >
                            <ul>
                                {#each category.roles as role}
                                    <li>
                                        <a
                                            href={`#${role.email_prefix}`}
                                            on:click={(e) =>
                                                scrollTo(e, role.email_prefix)}
                                            >{role.label
                                                ? role.label
                                                : role.title}
                                        </a>
                                    </li>
                                {/each}
                            </ul>
                        </li>
                    {/each}
                </ul>
            </aside>
        </div>
        <div class="column">
            {#each categories as category}
                <div class="section px-0" id={category.category}>
                    <h2 class="title is-2">
                        {category.category}
                    </h2>
                    {#each category.roles as role}
                        <div
                            id={role.email_prefix}
                            class="columns"
                            class:is-mobile={profileColumns}
                        >
                            <div class="column">
                                <img
                                    class="profile"
                                    src={role.img ??
                                        "https://bulma.io/images/placeholders/128x128.png"}
                                    alt={role.title}
                                />
                            </div>
                            <div class="column is-two-thirds">
                                <div class="content">
                                    <h3 class="title is-4 my-1">{role.name}</h3>
                                    <div class="my-0" class:level={fromDesktop}>
                                        <div
                                            class:level-left={fromDesktop}
                                            class="title is-6 my-0"
                                        >
                                            {role.title}
                                        </div>

                                        <a
                                            href={`mailto:${role.email_prefix}@thejcr.co.uk`}
                                            ><small
                                                class:level-right={fromDesktop}
                                                >{role.email_prefix}@thejcr.co.uk</small
                                            ></a
                                        >
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Proin ornare magna
                                        eros, eu pellentesque tortor vestibulum
                                        ut. Maecenas non massa sem. Etiam
                                        finibus odio quis feugiat facilisis.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr />
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</PageHeader>

<style lang="scss">
    @import "bulma/sass/utilities/_all";
    .profile {
        width: 100%;
    }
</style>
