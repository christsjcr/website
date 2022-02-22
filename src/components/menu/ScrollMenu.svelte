<script lang="ts">
    import type { MenuCategory } from "@lib/menu";

    export let categories: MenuCategory[];

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
</script>

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
                    {#each category.items as role}
                        <li>
                            <a
                                href={`#${role.id}`}
                                on:click={(e) => scrollTo(e, role.id)}
                                >{role.label ? role.label : role.title}
                            </a>
                        </li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</aside>
