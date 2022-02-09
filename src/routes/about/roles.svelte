<script lang="ts">
    import PageHeader from "@components/PageHeader.svelte";
    import type { MenuItem } from "@components/menu/ScrollMenu.svelte";
    import type { MenuCategory } from "@components/menu/ScrollMenu.svelte";

    import width, { desktop } from "@lib/width";
    import SideMenu from "@components/menu/SideMenu.svelte";

    $: profileColumns = $width >= 512;
    $: fromDesktop = $width >= desktop.min;

    interface RoleItem extends MenuItem {
        name: string;
    }

    interface RoleCategory extends MenuCategory {
        items: RoleItem[];
    }

    const categories: RoleCategory[] = [
        {
            category: "Core",
            items: [
                {
                    title: "President",
                    name: "Sam Carling",
                    id: "president",
                },
                {
                    title: "Vice President",
                    name: "Tamsin Wood",
                    id: "vicepresident",
                },
                {
                    title: "Treasurer",
                    name: "Fergus Kirman",
                    id: "treasurer",
                },
                {
                    title: "Secretary",
                    name: "Immi Sandhu",
                    id: "secretary",
                },
            ],
        },
        {
            category: "Events",
            items: [
                {
                    title: "Freshers' Reps",
                    label: "Freshers'",
                    name: "Vivek Bilous & Charlotte Westwood",
                    id: "firstyearrep",
                },
                {
                    title: "Internationals' Rep",
                    label: "Internationals'",
                    name: "Tudor Serban",
                    id: "intl",
                },
                {
                    title: "Events Officer (Ents)",
                    label: "Ents",
                    name: "Hannah Huang",
                    id: "ents",
                },
                {
                    title: "Catering & Facilities Officer",
                    label: "Catering & Facilities",
                    name: "Jonathon Konig",
                    id: "facilities",
                },
            ],
        },
        {
            category: "Welfare",
            items: [
                {
                    title: "Male & NB Welfare Officer",
                    label: "Male & NB",
                    name: "Ossie Visick",
                    id: "welfare-m",
                },
                {
                    title: "Female & NB Welfare Officer",
                    label: "Female & NB",
                    name: "Christina Lawrence",
                    id: "welfare-f",
                },
            ],
        },
        {
            category: "Diversity",
            items: [
                {
                    title: "Access Officer",
                    label: "Access",
                    name: "Romany Whittall",
                    id: "access",
                },
                {
                    title: "Ethnic Diversity Officer",
                    label: "Ethnic Diversity",
                    name: "Abhi Gowda",
                    id: "edo",
                },
                {
                    title: "LGBT+ Officer",
                    label: "LGBT+",
                    name: "Kit Burley",
                    id: "lgbt",
                },
                {
                    title: "Women's Officer",
                    label: "Women's",
                    name: "Leah Almeida",
                    id: "womens",
                },
            ],
        },
        {
            category: "Misc",
            items: [
                {
                    title: "Green Officer",
                    label: "Green",
                    name: "Camille McCarthy",
                    id: "green",
                },
                {
                    title: "Webmaster",
                    name: "Miles Watson",
                    id: "webmaster",
                },
            ],
        },
    ];
</script>

<PageHeader
    current="/about/roles"
    title="JCR Roles"
    description="The JCR Committee is made up of a group of Christ's students who have been elected to represent the views of the undergraduate students at college and university level. The central role of the JCR Committee is to represent the interests and look after the welfare of the student body."
>
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
    <SideMenu {categories}>
        {#each categories as category}
            <div class="section px-0" id={category.category}>
                <h2 class="title is-2">
                    {category.category}
                </h2>
                {#each category.items as role}
                    <div
                        id={role.id}
                        class="columns"
                        class:is-mobile={profileColumns}
                    >
                        <div class="column">
                            <img
                                class="profile"
                                src={`/img/roles/${role.id}.webp`}
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

                                    <a href={`mailto:${role.id}@thejcr.co.uk`}
                                        ><small class:level-right={fromDesktop}
                                            >{role.id}@thejcr.co.uk</small
                                        ></a
                                    >
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Proin ornare magna eros, eu
                                    pellentesque tortor vestibulum ut. Maecenas
                                    non massa sem. Etiam finibus odio quis
                                    feugiat facilisis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                {/each}
            </div>
        {/each}
    </SideMenu>
</PageHeader>

<style lang="scss">
    @import "bulma/sass/utilities/_all";
    .profile {
        width: 100%;
    }
</style>
