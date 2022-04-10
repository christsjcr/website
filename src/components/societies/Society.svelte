<script lang="ts">
    import type { Society } from "$data/societies";
    import { FontAwesomeIcon } from "fontawesome-svelte";
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

    export let society: Society;
</script>

<div class="box">
    <div class="level">
        <div class="level-left">
            <div class="level is-mobile">
                <div class="level-left">
                    <div class="level-item">
                        <div class="title is-4 mr-5">
                            {society.icon ?? "⬜"}
                        </div>
                    </div>
                    <div class="level-item">
                        <h5
                            class="title is-4 mr-5"
                            class:has-text-grey={society.tags?.inactive}
                        >
                            {society.title}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        {#if society.tags}
            <div class="level-item is-justify-content-left">
                <div class="tags">
                    {#if society.tags.inactive}
                        <div class="tag">😴 Inactive</div>
                    {/if}
                    {#if society.tags.unfunded}
                        <div class="tag is-warning">💸 Independent</div>
                    {/if}
                    {#if society.tags.type === "mens sport"}
                        <div class="tag is-info">♂ Men's Sport</div>
                    {/if}
                    {#if society.tags.type === "womens sport"}
                        <div class="tag is-danger">♀ Women's Sport</div>
                    {/if}
                    {#if society.tags.type === "mixed sport"}
                        <div class="tag">⚤ Mixed Sport</div>
                    {/if}
                    {#if society.tags.type === "academic"}
                        <div class="tag is-gray">🎓 Academic</div>
                    {/if}
                </div>
            </div>
        {/if}
    </div>

    <div class="columns">
        {#if society.description || society.events}
            <div class="column content">
                {#if society.description}
                    <p>
                        {society.description}
                    </p>
                {/if}
                {#if society.events}
                    <h6>Regular Events</h6>
                    <p>{society.events}</p>
                {/if}
            </div>
        {/if}
        <div class="column content">
            {#if society.interested}
                <h6>Interested in Joining?</h6>
                <p>{society.interested}</p>
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
        </div>
    </div>

    {#if society.contact}
        <hr />
        <div class="level">
            {#if society.contact?.register}
                <div class="level-item has-text-centered">
                    <a href={society.contact?.register} target="_blank">
                        <span class="icon">
                            <FontAwesomeIcon icon={faUserPlus} size="1x" />
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
                    >
                        <span class="icon">
                            <FontAwesomeIcon icon={faInstagram} size="0.5x" />
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
                    >
                        <span class="icon">
                            <FontAwesomeIcon icon={faFacebook} size="1x" />
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
                    >
                        <span class="icon">
                            <FontAwesomeIcon icon={faFacebook} size="1x" />
                        </span>
                        <p class="heading">Facebook Group</p>
                    </a>
                </div>
            {/if}
            {#if society.contact.messenger}
                <div class="level-item has-text-centered">
                    <a href={society.contact.messenger} target="_blank">
                        <span class="icon">
                            <FontAwesomeIcon
                                icon={faFacebookMessenger}
                                size="1x"
                            />
                        </span>
                        <p class="heading">Messenger</p>
                    </a>
                </div>
            {/if}
            {#if society.contact.whatsapp}
                <div class="level-item has-text-centered">
                    <a href={society.contact.whatsapp} target="_blank">
                        <span class="icon">
                            <FontAwesomeIcon icon={faWhatsapp} size="1x" />
                        </span>
                        <p class="heading">WhatsApp</p>
                    </a>
                </div>
            {/if}
            {#if society.contact.email}
                <div class="level-item has-text-centered">
                    <a href="mailto:{society.contact.email}" target="_blank">
                        <span class="icon">
                            <FontAwesomeIcon icon={faEnvelope} size="1x" />
                        </span>
                        <p class="heading">
                            {society.contact.email}
                        </p>
                    </a>
                </div>
            {/if}
            {#if society.contact.website}
                <div class="level-item has-text-centered">
                    <a href={society.contact.website.url} target="_blank">
                        <span class="icon">
                            <FontAwesomeIcon icon={faGlobe} size="1x" />
                        </span>
                        <p class="heading">
                            {society.contact.website.name}
                        </p>
                    </a>
                </div>
            {/if}
        </div>
    {/if}
</div>

<style lang="scss">
    @import "bulma/sass/utilities/_all";

    @include until($tablet) {
        .tags {
            margin-top: 1.5rem;
        }
    }
</style>
