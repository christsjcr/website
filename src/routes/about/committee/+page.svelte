<script lang="ts">
    import PageHeader from "$components/PageHeader.svelte";

    import width, { desktop } from "$lib/width";
    import SideMenu from "$components/menu/SideMenu.svelte";
    import committee from "./committee";

    import { scrollTo } from "$components/menu/ScrollMenu.svelte";
    import EmailHider from "$components/elements/EmailHider.svelte";

    $: profileColumns = $width >= 512;
    $: fromDesktop = $width >= desktop.min;
</script>

<PageHeader
    current="/about/committee"
    title="Committee"
    metaDescription="The JCR Committee is comprised of students who have been elected to represent the views of Christ's undergrads."
>
    <div slot="description">
        The JCR Committee is made up of a group of Christ's students who have
        been elected to represent the views of the undergraduate students at
        college and university level. The central role of the JCR Committee is
        to represent the interests and look after the welfare of the student
        body. This could include anything from running events to discussing
        food, accommodation or access in our meetings. Each member of the JCR
        committee has a specific responsibility. Find out more about each
        position below!
    </div>
    <SideMenu categories={committee}>
        {#each committee as category}
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
                                src={`/img/committee/${role.id}.webp`}
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

                                    <small class:level-right={fromDesktop}
                                        ><EmailHider
                                            username={role.id}
                                            domain="thejcr.co.uk"
                                        /></small
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
                <a href="#top" on:click={(e) => scrollTo(e, "top")}>
                    <button class="button is-link"> Back to top </button>
                </a>
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
