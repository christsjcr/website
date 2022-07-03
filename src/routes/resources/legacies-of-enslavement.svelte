<script lang="ts">
    import SideMenu from "$components/menu/SideMenu.svelte";
    import type { MenuCategory } from "$lib/menu";

    import PageHeader from "$components/PageHeader.svelte";
    import Content from "$components/elements/Content.svelte";

    const categories: MenuCategory[] = [
        {
            category: "Introduction",
            items: [
                { title: "About", id: "Introduction" },
                { title: "Reports from 2021", id: "reports" },
            ],
        },
        {
            category: "The Project",
            items: [
                { title: "About", id: "The Project" },
                { title: "Process", id: "process" },
                { title: "Practicalities", id: "practicalities" },
                { title: "Key Individuals", id: "individuals" },
            ],
        },
    ];
</script>

<PageHeader
    current="/resources/legacies-of-enslavement"
    title="Legacies of Enslavement"
    size="small"
    metaDescription="A research project to further understand the connection between members of the College, and the legacies of enslavement."
>
    <SideMenu {categories}>
        <Content centered={false}>
            <br />
            <h2 id="Introduction">Introduction</h2>
            <p>
                In the summer of 2021, four Christ's students worked for a month
                as paid interns, researching the complex connections of College
                members with the transatlantic slave trade, the legacies of
                enslavement and the movement for abolition. Their work,
                facilitated by the College Archivist Dr Genny Silvanus, was
                intended to complement the Vice-Chancellor's initiative at the
                University level. The four students presented their work to an
                open meeting in the Lloyd Room on 21 October and also through an
                exhibition in the Old Library for two weeks from 28 October.
            </p>
            <p>
                College Council has approved a follow-up project for 2022,
                building on last year. Up to four students will be awarded
                grants to work for up to four weeks (11 July - 5 August). The
                project will be coordinated by Prof. David Reynolds and Dr
                Harriet Lyon. Dr Silvanus will offer advice on databases,
                archives etc.
            </p>
            <h3 id="reports">Reports from 2021</h3>
            <ul>
                <li>
                    Clemmie Butler Brown - <a
                        href="/doc/legacies-of-enslavement/C. Butler Brown Report.pdf"
                        target="_blank">download</a
                    >
                </li>
                <li>
                    Georgie Moore - <a
                        href="/doc/legacies-of-enslavement/G. Moore Report.pdf"
                        target="_blank">download</a
                    >
                </li>
                <li>
                    Leah Wild - <a
                        href="/doc/legacies-of-enslavement/L. Wild Report.pdf"
                        target="_blank">download</a
                    >
                </li>
            </ul>
            <br />
            <h2 id="The Project">The Project</h2>
            <p>
                The initial task this year will be to construct
                <b>the fullest possible database of College members</b>
                involved in the slave trade, slave plantations and the anti-slavery
                movement. This will exploit the substantial electronic resources
                available, e.g. the
                <a href="https://www.ucl.ac.uk/lbs/" target="_blank"
                    >Centre for the Study of the Legacies of British Slavery</a
                >
                and a
                <a href="https://venn.lib.cam.ac.uk/"
                    >Cambridge Alumni Database</a
                >. It will also identify links with particular Caribbean islands
                and British port cities, of which the most significant were
                Bristol, Liverpool and Glasgow. The research will plug into many
                lively community projects now developing across Britain, e.g.
                <a
                    href="https://www.lancasterslaveryfamilytrees.com/"
                    target="_blank">Lancaster Slavery Family Trees</a
                >.
            </p>

            <p>
                Depending on progress with the database, in the later phase of
                this summer's project there should be time to research more
                closely at some key individuals identified last summer (see note
                below). This is likely to entail <b
                    >some research in archives elsewhere in Britain</b
                >, especially Bristol and London.
            </p>

            <p>
                The students' research will result in various public outputs,
                depending on the nature of their work. As well as the database
                and individual reports, these could include blogs, websites,
                articles for Pieces/ College magazine - and another exhibition,
                if there were sufficient visual content of quality.
            </p>

            <p>
                <b>There will be a Zoom meeting on Friday 29 April, 5pm</b>, to
                outline the project and answer questions.
            </p>

            <div class="notification">
                <h4 class="title is-4">Legacies of Enslavement Zoom Meeting</h4>
                <ul>
                    <li>Time: Friday 29 April, 5pm</li>
                    <li>
                        Link: <a
                            class="has-text-link"
                            href="https://christs-cam-ac-uk.zoom.us/j/95371303035?pwd=TWk3UHpDZURqY0dvL21WQ2ZkQXlqdz09"
                            target="_blank">join here</a
                        >
                    </li>
                    <li>Meeting ID: 953 7130 3035</li>
                    <li>Passcode: 599841</li>
                </ul>
            </div>
            <br />
            <h3 id="process">The Process</h3>
            <ul>
                <li>
                    <b><u>Friday 13 May, 12 noon</u></b>: Closing date for
                    applications from undergrads and grad students (excluding
                    those appointed for this project in 2021). Submit CV +
                    statement of interest (up 500 words), showing awareness of
                    the material in this document and indicating possible
                    outputs (written, visual, etc). Send submissions to
                    <a href="mailto:tutorial@christs.cam.ac.uk" target="_blank"
                        >tutorial@christs.cam.ac.uk</a
                    >.
                </li>
                <li>
                    Applications will be considered by the appointment
                    committee. <b><u>Notification by 18 May</u></b>. There will
                    be an orientation meeting at a mutually convenient date
                    during May Week.
                </li>
                <li>
                    <b
                        ><u
                            >The research will take place in the period Monday
                            11 July to Fri 5 August</u
                        ></b
                    >. Members of the committee will be on hand to provide
                    advice and there will be provision for some more formal
                    supervision on written work and other outputs in August and
                    early September. Submission of reports and other outputs
                    <b><u>by Friday 16 September</u></b>.
                </li>
            </ul>
            <br />
            <h3 id="practicalities">The Practicalities</h3>
            <ul>
                <li>
                    Each of the students appointed will receive a stipend of
                    £1,500 to cover the four weeks of research including food
                    over the whole period and costs of lodging when in College.
                </li>
                <li>
                    In addition, they will be able to claim expenses for
                    research (e.g. copying) and for costs of research travel and
                    lodging when away from Cambridge (but not food). Trips to be
                    approved in advance by David Reynolds and reimbursed on
                    submission of receipts.
                </li>
            </ul>
            <br />
            <h3 id="individuals">Key Individuals</h3>
            <p>Here are some key individuals for possible further research:</p>
            <ul>
                <li>
                    <b>Azariah Pinney</b> (1775-1803): from a significant slave-owning
                    family on the island of Nevis [papers in University of Bristol
                    Special Collections].
                </li>
                <br />
                <li>
                    <b>John Scandrett Harford</b> (1787-1866): also from a slave-owning
                    family but he became a prominent abolitionist [Bristol City Archive].
                    The richness of both these Bristol archives was identified by
                    Clemmie Butler Brown's research in 2021.
                </li>
                <br />
                <li>
                    <b>Jonathan Blenman</b> (1753-1807): From a wealthy slave-owning
                    family in Barbados where he became Solicitor General. To follow
                    up the 2021 work of Georgie Moore in an effort to find out more
                    about his property (Duke's Farm) and the people enslaved there.
                </li>
                <br />
                <li>
                    <b>Thomas Thompson</b> (1708-1773): became a missionary in
                    Africa and authored a pamphlet offering biblical support for
                    the slave trade:
                    <em
                        >The African trade for Negro slaves: Shewn to be
                        consistent with principles of humanity, and with the
                        laws of revealed religion. By Tho. Thompson, M.A.
                        Sometime fellow of C.C.C. (1772)</em
                    >
                </li>
                <br />
                <li>
                    <b>Bishop Beilby Porteus</b> (1731-1809): Descendant of a major
                    Virginian slave-owning family; Bishop of Chester (1776-87) and
                    of London (1787-1809). A leading Anglican opponent of the slave
                    trade. Donor of College Reading Prize [Lambeth Palace Library].
                </li>
            </ul>
        </Content>
    </SideMenu>
</PageHeader>
