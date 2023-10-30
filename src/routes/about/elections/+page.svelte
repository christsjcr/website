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
        <h1>Michaelmas 2023 Elections</h1>
        <p>
            Half of the JCR positions are voted on in week 6 and the other half
            in week 7. Below is the timetable and list of roles for each of the
            two voting rounds.
        </p>
        <br />

        <TitleBox header="Week 6 (1st half)" color="primary">
            <h5>Timeline</h5>
            <ul>
                <li>Mon 30th Oct 12pm - Nominations open (Online)</li>
                <li>Tue 31st Oct 12pm - Nominations close</li>
                <li>Sun 5th Nov 5-6pm - Hustings #1 (Lloyd Room)</li>
                <li>Thu 9th Nov 12pm - Voting opens (Online)</li>
                <li>Fri 10th Nov 12pm - Voting closes</li>
            </ul>
            <h5>Available Roles</h5>
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
        <TitleBox header="Week 7 (2nd half)" color="primary">
            <h5>Timeline</h5>
            <ul>
                <li>Mon 13th Nov 12pm - Nominations open (Online)</li>
                <li>Tue 14th Nov 12pm - Nominations close</li>
                <li>Sun 19th Nov 5-6pm - Hustings #1 (Lloyd Room)</li>
                <li>Mon 20th Nov 12pm - Voting opens (Online)</li>
                <li>Tue 21st Nov 12pm - Voting closes</li>
            </ul>
            <h5>Elected Roles</h5>
            <ul>
                <li>Vice President</li>
                <li>Treasurer</li>
                <li>Secretary</li>
                <li>Male and Non-Binary Freshers' Rep</li>
                <li>Female and Non-Binary Freshers' Rep</li>
                <li>Class Act Officer</li>
                <li>Women's Officer</li>
                <li>Internationals' Officer</li>
                <li>Catering and Facilities Officer</li>
            </ul>
        </TitleBox>
    </Content>
</PageHeader>
