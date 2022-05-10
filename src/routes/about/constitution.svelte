<script lang="ts">
    import PageHeader from "$components/PageHeader.svelte";
</script>

<PageHeader
    current="/about/constitution"
    title="Constitution"
    metaDescription="The JCR is guided by a Constitution which dictates the structure of the Committee and its responsibilities to Christ's students."
>
    <div slot="description">
        The JCR is guided by a Constitution which dictates the composition of
        the Executive Committee and the responsibilities of its officers to
        Christ's students. It also governs more mundane procedural matters and
        the nature of the relationship between the JCR and the College. Although
        wordy and a little dry in places, the Constitution is a crucial document
        which enshrines the rights of all Christ's students and ensures that the
        JCR Exec is held accountable for its actions. It is regularly updated
        and often undergoes major revisions to suit the changing needs of the
        Christ's student body.
    </div>
    <br />
    <div class="content">
        <h1><a href="/doc/constitution.pdf" download>Download</a></h1>
        <h1>Preview</h1>
    </div>

    <iframe title="Constitution" src="/doc/constitution.pdf" />
</PageHeader>

<style>
    iframe {
        width: 100%;
        height: 80vh;
    }
</style>
