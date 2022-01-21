<script lang="ts">
    import PageHeader from "@components/PageHeader.svelte";
    import week from "@lib/week";
</script>

<PageHeader
    current="/"
    title="Christ's JCR"
    titleSrc="/img/logo_big.png"
    background={{
        src: "/img/home.jpg",
        alt: "Christ's College Second Court",
    }}
    size="large"
    home
>
    <div class="content">
        <blockquote>
            Christ's JCR is the undergraduate student body at Christ's College,
            Cambridge. We are your student-elected Committee, representing your
            interests to help you make the most of your time here!
        </blockquote>
    </div>

    <div class="columns my-6">
        <div class="column is-one-third">
            <a href="/about/roles">
                <div class="notification is-primary">
                    <h3 class="title is-5">The Committee</h3>
                    <p class="block">
                        Get to know the current members of the JCR Committee!
                    </p>
                    <p class="block"><a href="/about/roles">Read more</a></p>
                </div>
            </a>
        </div>
        <div class="column is-one-third">
            <a href="/">
                <div class="notification is-primary">
                    <h3 class="title is-5">Prospective Students</h3>
                    <p class="block">
                        Interested in applying to Christ's? Read our alternative
                        prospectus!
                    </p>
                    <p class="block"><a href="/">Coming Soon</a></p>
                </div>
            </a>
        </div>
        <div class="column is-one-third">
            <a href="/">
                <div class="notification is-primary">
                    <h3 class="title is-5">Christ's Freshers</h3>
                    <p class="block">
                        Take a look at our freshers' guide, or check out the
                        freshers' week timetable!
                    </p>
                    <p class="block"><a href="/">Coming Soon</a></p>
                </div>
            </a>
        </div>
    </div>

    <h1 class="title is-2">Quick Links</h1>
    <div class="columns m-1">
        <div class="column">
            <div class="content">
                <subtitle class="subtitle">Food</subtitle>
                <ul class="list">
                    <li>
                        <a
                            href={`https://intranet.christs.cam.ac.uk/upper-hall-menus#Week${week()}`}
                            >Menu</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://intranet.christs.cam.ac.uk/mealbooking/"
                            >Meal booking</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div class="column">
            <div class="content">
                <subtitle class="subtitle">Facilities</subtitle>
                <ul class="list">
                    <li>
                        <a
                            href="https://christscollege.roombookingsystem.co.uk/overviewday"
                            >Room booking</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://intranet.christs.cam.ac.uk/fault-reporting"
                            >Fault reporting</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div class="column">
            <div class="content">
                <subtitle class="subtitle">Porters</subtitle>
                <ul class="list">
                    <li>
                        <a href="tel:+44-1223-334900">+44 1223 334900</a>
                    </li>
                    <li>
                        <a href="mailto:porters@christs.cam.ac.uk"
                            >porters@christs.cam.ac.uk</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div class="column">
            <div class="content">
                <subtitle class="subtitle">Finance</subtitle>
                <ul class="list">
                    <li>
                        <a href="/">Reimbursement</a>
                    </li>
                    <li>
                        <a
                            href="https://intranet.christs.cam.ac.uk/mealbooking/EPOS.aspx"
                            >College Balance</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</PageHeader>
