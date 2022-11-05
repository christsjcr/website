<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import TitleBox from "$components/elements/TitleBox.svelte";
    import PageHeader from "$components/PageHeader.svelte";
</script>

<PageHeader
    current="/about/elections"
    title="Elections"
    metaDescription="Committee elections are a critical reason the JCR remains transparent, efficient, and representative of the student body.">
    <Content>
        <p>
            Elections for the JCR committee are held every Michaelmas and they
            decide who will sit on the JCR for the upcoming calendar year. Any
            undergraduate student at Christ's can run for a position on the JCR,
            although some roles have specific requirements. For example, people
            running for Women's Officer must not identify solely as male, and to
            run for President you must have attended at least three JCR
            meetings.
        </p>
        <p>
            Email the <a href="/about/committee#vicepresident"
                >Vice President</a> if you have any queries or if you are interested
            in running for a role and want more information.
        </p>
        <h1>2023 Michaelmas Elections</h1>
        <p>
            Half of the JCR positions are voted on in week 6 and the other half
            in week 7. Below is the timetable and list of roles for each of the
            two voting rounds.
        </p>
        <br />
        <TitleBox header="Week 6 (1st half)">
            <h5>Timeline</h5>
            <ul>
                <li>Tue 8th Nov 11am - Nominations open (Online)</li>
                <li>Fri 11th Nov 11am - Nominations close</li>
                <li>Sat 12th Nov 5-6pm - Hustings #1 (Lloyd Room)</li>
                <li>Mon 14th Nov 1pm - Elections open (Online)</li>
                <li>Tue 15th Nov 1pm - Elections close</li>
                <li>Tue 15th Nov [afternoon] - Results sent out</li>
            </ul>
            <h5>Roles up for election</h5>
            <ul>
                <li>President</li>
                <li>Entertainments Officer</li>
                <li>Male and Non-Binary Welfare Officer</li>
                <li>Female and Non-Binary Welfare Officer</li>
                <li>Access Officer</li>
                <li>Green and Charities Officer</li>
                <li>Ethnic Diversity Officer</li>
                <li>Disabled Students' Officer</li>
            </ul>
        </TitleBox>
        <br />
        <br />
        <TitleBox header="Week 7 (2nd half)">
            <h5>Timeline</h5>
            <ul>
                <li>Wed 16th Nov 11am - Nominations open (Online)</li>
                <li>Sat 19th Nov 11am - Nominations close</li>
                <li>Sun 20th Nov 5-6pm - Hustings #2 (Lloyd Room)</li>
                <li>Tue 22nd Nov 1pm - Elections open (Online)</li>
                <li>Wed 23rd Nov 1pm - Elections close</li>
                <li>Wed 23rd Nov [afternoon] - Results sent out</li>
            </ul>
            <h5>Roles up for election</h5>
            <ul>
                <li>Vice President</li>
                <li>Treasurer</li>
                <li>Secretary</li>
                <li>First Year Officer</li>
                <li>LGBT+ Officer</li>
                <li>Class Act Officer</li>
                <li>Women's Officer</li>
                <li>Internationals' Officer</li>
                <li>Catering and Facilities Officer</li>
                <li>... plus any unfilled positions from the 1st half</li>
            </ul>
        </TitleBox>
    </Content>
</PageHeader>
