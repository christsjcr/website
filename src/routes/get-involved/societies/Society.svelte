<script lang="ts">
    import type { Society } from "./societies";
    import Fa from "svelte-fa";
    import {
        faInstagram,
        faFacebook,
        faFacebookMessenger,
        faWhatsapp,
    } from "@fortawesome/free-brands-svg-icons";

    import {
        faEnvelope,
        faUserPlus,
        faGlobe,
    } from "@fortawesome/free-solid-svg-icons";
    import Tag from "./Tag.svelte";
    import Markdown from "$components/markdown/Markdown.svelte";
    import ExternalLink from "$components/markdown/ExternalLink.svelte";
    import links from "$data/links"

    export let society: Society;
    let expanded = false;

    // automatically close whenever society is updated
    $: {
        society;
        expanded = false;
    }
</script>

<div class="box">
    <div class="columns is-multiline is-vcentered">
        <div class="column is-narrow" style="max-width:fit-content;">
            <div class="columns is-mobile is-vcentered">
                <div class="column is-narrow">
                    <div class="title is-3">
                        {society.icon ?? "⬜"}
                    </div>
                </div>
                <div class="column">
                    <h5
                        class="title is-4 mr-5"
                        class:has-text-grey={society.status === "inactive"}>
                        {society.title}
                    </h5>
                </div>
            </div>
        </div>
        <div class="column is-narrow">
            <div class="columns is-mobile is-multiline is-variable is-1">
                {#if society.status === "inactive"}
                    <Tag
                        color="grey"
                        tooltipSide="right"
                        tooltip="This society hasn't responded to our messages 💔">
                        😴 Inactive
                    </Tag>
                {/if}
                {#if society.status === "independent"}
                    <Tag
                        color="warning"
                        tooltipSide="right"
                        tooltip="This society is active, but does not &nbsp; &nbsp; receive funding from the JCR.">
                        💸 Independent
                    </Tag>
                {/if}
                {#if society.status === "funded"}
                    <Tag
                        color="primary"
                        tooltipSide="right"
                        tooltip="This society is active and receiving funding from the JCR.">
                        💰 JCR Funded
                    </Tag>
                {/if}
                {#if society.type === "mens sport"}
                    <Tag
                        color="info"
                        tooltip="This society is primarily aimed at men's sport.">
                        ♂ Men's Sport
                    </Tag>
                {/if}
                {#if society.type === "womens sport"}
                    <Tag
                        color="danger"
                        tooltip="This society is primarily aimed at women's sport.">
                        ♀ Women's Sport
                    </Tag>
                {/if}
                {#if society.type === "mixed sport"}
                    <Tag
                        color="grey"
                        tooltip="This society is open to anyone, &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; regardless of gender!">
                        ⚤ Mixed Sport
                    </Tag>
                {/if}
                {#if society.type === "subject"}
                    <Tag
                        color="grey"
                        tooltip="This society is affiliated with a subject, but open to everyone.">
                        🎓 Subject-Affiliated
                    </Tag>
                {/if}
            </div>
        </div>
        {#if society.notEndorsed}
            <div class="column is-narrow">
                <div class="columns is-mobile is-multiline is-variable is-1">
                    <Tag
                        color="dark"
                        tooltipSide="right"
                        tooltip="The practices of this society may be deemed controversial, and are not &nbsp; &nbsp; endorsed by the JCR.">
                        ⚠ Caution
                    </Tag>
                </div>
            </div>
        {/if}
    </div>

    <div class="content">
        {#if society.description}
            <Markdown externalLinks source={society.description} />
        {/if}
        {#if expanded}
            {#if society.events}
                <h6>Regular Events</h6>
                <Markdown externalLinks source={society.events} />
            {/if}
            {#if society.interested}
                <h6>Interested in Joining?</h6>
                <Markdown externalLinks source={society.interested} />
            {/if}
            {#if society.people && society.people.length > 0}
                <h6>Contacts</h6>
                <ul>
                    {#each society.people as person}
                        <li>
                            {person.name}
                            &nbsp;
                            <em>{person.crsid ? `(${person.crsid})` : ""}</em>
                        </li>
                    {/each}
                </ul>
            {/if}
            <p />
        {/if}
    </div>

    {#if !expanded && (society.events || society.interested || (society.people && society.people.length > 0))}
        <a
            rel="external"
            href={null}
            on:click={() => {
                expanded = true;
                return false;
            }}>See more</a>
    {/if}

    {#if society.contact && expanded}
        <hr />
        <div class="level">
            {#if society.contact?.register}
                <div class="level-item has-text-centered">
                    <a
                        href={society.contact?.register}
                        target="_blank"
                        rel="noreferrer">
                        <span class="icon">
                            <Fa icon={faUserPlus} size="1x" />
                        </span>
                        <p class="heading">Register Interest</p>
                    </a>
                </div>
            {/if}
            {#if society.contact.instagram}
                <div class="level-item has-text-centered">
                    <a
                        href="https://www.instagram.com/{society.contact
                            .instagram}/"
                        target="_blank"
                        rel="noreferrer">
                        <span class="icon">
                            <Fa icon={faInstagram} size="1x" />
                        </span>
                        <p class="heading">
                            @{society.contact.instagram}
                        </p>
                    </a>
                </div>
            {/if}
            {#if society.contact.facebook}
                <div class="level-item has-text-centered">
                    <a
                        href="https://www.facebook.com/{society.contact
                            .facebook}"
                        target="_blank"
                        rel="noreferrer">
                        <span class="icon">
                            <Fa icon={faFacebook} size="1x" />
                        </span>
                        <p class="heading">
                            @{society.contact.facebook}
                        </p>
                    </a>
                </div>
            {/if}
            {#if society.contact.facebookGroup}
                <div class="level-item has-text-centered">
                    <a
                        href="https://www.facebook.com/groups/{society.contact
                            .facebookGroup}"
                        target="_blank"
                        rel="noreferrer">
                        <span class="icon">
                            <Fa icon={faFacebook} size="1x" />
                        </span>
                        <p class="heading">Facebook Group</p>
                    </a>
                </div>
            {/if}
            {#if society.contact.messenger}
                <div class="level-item has-text-centered">
                    <a
                        href={society.contact.messenger}
                        target="_blank"
                        rel="noreferrer">
                        <span class="icon">
                            <Fa icon={faFacebookMessenger} size="1x" />
                        </span>
                        <p class="heading">Messenger</p>
                    </a>
                </div>
            {/if}
            {#if society.contact.whatsapp}
                <div class="level-item has-text-centered">
                    <a
                        href={society.contact.whatsapp}
                        target="_blank"
                        rel="noreferrer">
                        <span class="icon">
                            <Fa icon={faWhatsapp} size="1x" />
                        </span>
                        <p class="heading">WhatsApp</p>
                    </a>
                </div>
            {/if}
            {#if society.contact.email}
                <div class="level-item has-text-centered">
                    <a
                        href="mailto:{society.contact.email}"
                        target="_blank"
                        rel="noreferrer">
                        <span class="icon">
                            <Fa icon={faEnvelope} size="1x" />
                        </span>
                        <p class="heading">
                            {society.contact.email}
                        </p>
                    </a>
                </div>
            {/if}
            {#if society.contact.website}
                <div class="level-item has-text-centered">
                    <a
                        href={society.contact.website.url}
                        target="_blank"
                        rel="noreferrer">
                        <span class="icon">
                            <Fa icon={faGlobe} size="1x" />
                        </span>
                        <p class="heading">
                            {society.contact.website.name}
                        </p>
                    </a>
                </div>
            {/if}
        </div>
    {/if}
    {#if expanded}
        <div class="columns is-mobile is-vcentered">
            <div class="column is-narrow">
                <a
                    rel="external"
                    href={null}
                    on:click={() => {
                        expanded = false;
                        return false;
                    }}>See less</a>
            </div>
            <div class="column has-text-centered mr-2">
                <i>Updated {society.lastUpdated}</i>
            </div>
            <div class="column has-text-right is-narrow ml-5">
                <ExternalLink
                    href={ links.internal.UPDATE_SOCIETY_FORM }
                    >Edit</ExternalLink>
            </div>
        </div>
    {/if}
</div>
