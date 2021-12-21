<script lang="ts">
    import PageHeader from "../components/PageHeader.svelte";

    let width;
    $: profileColumns = width >= 512;
    $: desktop = width >= 1024;
    $: widescreen = width >= 2016;

    $: console.log(width);

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
        console.log(pos);
        window.scrollBy(0, pos - 70);
    }

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

<svelte:window bind:innerWidth={width} />

<PageHeader current="/roles" title="JCR Roles">
    <div class="content">
        <blockquote>
            The JCR Committee is made up of a group of Christ's students who
            have been elected to represent the views of the undergraduate
            students at college and university level. The JCR President,
            Vice-President and Treasurer also make up the CCSU committee. The
            central role of the JCR Committee is to represent the interests and
            look after the welfare of the student body. This could include
            anything from running events to discussing food, accommodation or
            access in our meetings. Each member of the JCR committee has a
            specific responsibility. Find out more about each position below!
        </blockquote>
    </div>
    <div class="columns">
        <div
            class="column"
            class:is-one-quarter={widescreen}
            class:is-one-third={!widescreen}
        >
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
                                    <div class="my-0" class:level={desktop}>
                                        <div
                                            class:level-left={desktop}
                                            class="title is-6 my-0"
                                        >
                                            {role.title}
                                        </div>

                                        <small class:level-right={desktop}
                                            >{role.email_prefix}@thejcr.co.uk</small
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
