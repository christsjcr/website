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
        description: string;
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
                    description:
                        "Sam, our President, acts as the main undergraduate representative in College governance. He will be focusing on negotiating a reduction in yearly rent increases, heating the pool, bringing back the college punt, improving facilities in the hostels, and co-ordinating the JCR's responses to wider political issues that arise.",
                },
                {
                    title: "Vice President",
                    name: "Tamsin Wood",
                    id: "vicepresident",
                    description:
                        "Tamsin, our Vice President, will be continuing to help with Alt Bops at Christ's and promote them at the SU's Student Council, as well as work with Miles and Immi on ensuring that the JCR website is accessible and as informative as possible.",
                },
                {
                    title: "Treasurer",
                    name: "Fergus Kirman",
                    id: "treasurer",
                    description:
                        "Fergus, our Treasurer, is mainly focusing on getting the Prescription Reimbursement Scheme up and running. This will mean that the JCR will reimburse students who would otherwise pay the fixed charge of £9.35 for their NHS prescriptions (up to a cap of 4 per student during its pilot phase).",
                },
                {
                    title: "Secretary",
                    name: "Immi Sandhu",
                    id: "secretary",
                    description:
                        "Immi, our Secretary, is hoping to reinvent our JCR social media platforms, including partaking in the construction of the new JCR website, Instagram and Facebook, send important weekly email bulletins and organise the JCR meetings throughout term. After the success of the student takeovers and tours on Instagram last year, Immi would like to continue this and open this up to members of staff and more students across year groups and subjects.",
                },
            ],
        },
        {
            category: "Events",
            items: [
                {
                    title: "Events Officer (Ents)",
                    label: "Ents",
                    name: "Hannah Huang",
                    id: "ents",
                    description:
                        "Hannah, our Ents Officer, is planning on increasing the diversity of events in collaboration with Abhi, bringing back SuperBops (Bops with other colleges) and continuing to form relationships with local businesses and venues.",
                },
                {
                    title: "Freshers' Reps",
                    label: "Freshers'",
                    name: "Vivek Bilous & Charlotte Westwood",
                    id: "firstyearrep",
                    description:
                        "Vivek and Charlotte, our Freps/First Year Officers, aim to make Christ's a welcoming environment for next year's Freshers, as well as host events for their year, such as college marriages, formals and a SuperBop.",
                },
                {
                    title: "Internationals' Rep",
                    label: "Internationals'",
                    name: "Tudor Serban",
                    id: "intl",
                    description:
                        "Tudor, our Internationals' Officer, is planning to create more opportunities for Internationals to meet with each other during Internationals' Week and throughout term, work with College and the JCR to ensure the welfare of International students, and expand the interactions of internationals from Christ's with those from other colleges.",
                },
                {
                    title: "Fourth Years' Officer",
                    label: "Fourth Years'",
                    name: "Oliver O'Brien",
                    id: "fourth",
                    description:
                        "Oli, our Fourth Years' Officer, is planning to run another Fourth Year pub crawl and organise for all Fourth Years to go to Grad Hall together.",
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
                    description:
                        "Christina and Ossie, our Welfare Officers, are aiming to diversify the plethora of welfare activities throughout term, as well as ensuring that concerns around mental health are taken seriously by College whilst providing resources to mitigate sources of stress.",
                },
                {
                    title: "Female & NB Welfare Officer",
                    label: "Female & NB",
                    name: "Christina Lawrence",
                    id: "welfare-f",
                    description:
                        "Christina and Ossie, our Welfare Officers, are aiming to diversify the plethora of welfare activities throughout term, as well as ensuring that concerns around mental health are taken seriously by College whilst providing resources to mitigate sources of stress.",
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
                    description:
                        "Romany, our Access officer, will be working with outside agencies and Cambridge-wide programmes to ensure students from non-traditional backgrounds are prepared for admission processes, make the 2022 Shadowing Scheme rewarding and enjoyable, develop the Bridging Course further for offer-holders, and support students who want to run their own Access and outreach events.",
                },
                {
                    title: "Class Act Officer",
                    label: "Class Act",
                    name: "Laura Goodchild",
                    id: "classact",
                    description:
                        "Laura, our Class Act Officer, is aiming to establish a Class Act community at Christ's, support all students who self-identify as a Class Act and make Christ's more Class Act friendly.",
                },
                {
                    title: "Ethnic Diversity Officer",
                    label: "Ethnic Diversity",
                    name: "Abhi Gowda",
                    id: "edo",
                    description:
                        "Abhi, our Ethnic Diversity Officer, will be assisting with access work of applicants from diverse ethnic backgrounds, voicing any concerns from students regarding discrimination, celebrating various cultures through important events in collaboration with Hannah, and supporting the introduction of the prayer room in college for individuals of all faiths.",
                },
                {
                    title: "LGBT+ Officer",
                    label: "LGBT+",
                    name: "Kit Burley",
                    id: "lgbt",
                    description:
                        "Kit, our LGBT+ and Sexual Health Representative, will be putting on events to build the LGBT+ community at Christ's, as well as run an anonymous sexual health supplies scheme to be discreetly delivered into Pidges.",
                },
                {
                    title: "Women's Officer",
                    label: "Women's",
                    name: "Leah Almeida",
                    id: "womens",
                    description:
                        "Leah, our Womens' Officer, will be promoting a safe space for discussion surrounding gender expression, organising informative events on issues surrounding intersectional feminism and misogyny, holding FemSoc events and socials, as well as continuing with the sustainable period product scheme.",
                },
            ],
        },
        {
            category: "Misc",
            items: [
                {
                    title: "Catering & Facilities Officer",
                    label: "Catering & Facilities",
                    name: "Jonathon Konig",
                    id: "facilities",
                    description:
                        "Jonathan, our Catering and Facilities Officer, will be hoping to improve Upper Hall menu options for all dietary preferences, work with Sam to bring back the college punt, and continue introducing new gym equipment and arrange seating plans for Formal Halls in an equitable fashion.",
                },
                {
                    title: "Green Officer",
                    label: "Green",
                    name: "Camille McCarthy",
                    id: "green",
                    description:
                        "Camille, our Green and Charities Officer, will be establishing a Christ's Green Committee so students are able to become directly involved with campaigns and sustainability projects, as well as campaign for JCRs and MCRs to move their banks away from those who invest heavily in fossil fuels, and switch to more ethical alternatives. On the charities side, Camille would like to reinvigorate the food bank collection and look at ways to link individuals' fundraising efforts to college charities.",
                },
                {
                    title: "Webmaster",
                    name: "Miles Watson",
                    id: "webmaster",
                    description:
                        "Miles, our Webmaster, is mainly focusing on reintroducing and reinventing a new JCR website that can be accessed by both prospective and current students, staff and the general public to give an insight into what life is like at Christ's, why students should apply, and quick access to important information like JCR meetings/welfare resources/booking systems.",
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
                                    {role.description}
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
