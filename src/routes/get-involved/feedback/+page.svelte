<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import FeedbackForm from "./FeedbackForm.svelte";
</script>

<PageHeader
    current="/get-involved/feedback"
    title="Feedback"
    size="small"
    metaDescription="">
    <Content>
        <blockquote>
            This new feedback form is currently in the "testing" stage - please
            use the <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSchG-F00FNgO02T5OepdfuFSkVi7HgnfpI0a6qDjhhXctG6Hw/viewform"
                >old feedback form</a> whilst the details are being worked out!
        </blockquote>
        <FeedbackForm />
        <h1>Terms and Conditions</h1>
        <ul>
            <li>
                You agree that the information you provide on this form may be
                emailed to members of the JCR Committee (any member if you have
                selected "General", or only the ticked members if you have
                selected "Sensitive").
            </li>
            <li>
                You agree that the feedback you have provided is professional
                and unoffensive. Criticism of policies is welcome, verbal abuse
                or vitriol aimed at any student will result in future responses
                being blocked.
            </li>
            <li>
                If you choose to share your email address, then it will be
                included alongside the form information and shared with the
                aforementioned Committee members.
            </li>
            <li>
                If you choose to remain anonymous, then an encrypted
                (unreadable) form of your email address will be included in the
                emails, so that Committee members can use the anonymous response
                system to reply to your message without revealing your identity.
            </li>
            <li>
                Under exceptional circumstances, the Committee may decide to
                access the email address attached to an anonymous form
                submission. Reasons for doing this may include (but are not
                limited to) to respond to an immediate risk of harm, or to
                prevent verbal abuse / vitriol. Decrypting an email in this way
                will trigger a notification to members of the Exec and the
                webmaster, to prevent abuse of this system.
            </li>
        </ul>
    </Content>
</PageHeader>
