<script lang="ts">
    import { page } from "$lib/page";

    let current = $page.current;

    let path: { route: string; name: string; last: boolean }[] = [];

    $: {
        let split = current.split("/").slice(1);
        path = split.map((x, i) => ({
            route: "/" + split.slice(0, i + 1).join("/"),
            name: x
                .split("-")
                .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
                .join(" ")
                .replace(" And ", " & ")
                .replace(" Of ", " of "),
            last: i == split.length - 1,
        }));
    }
</script>

{#if path.length > 1}
    <div class="block mb-3 mt-6 px-2">
        <nav
            class="breadcrumb is-medium has-arrow-separator is-centered"
            aria-label="breadcrumbs"
        >
            <ul>
                {#each path as item}
                    <li class:is-active={item.last}>
                        <a
                            aria-current={item.last ? "page" : false}
                            href={item.route}>{item.name}</a
                        >
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
    <hr />
    <br />
{/if}
