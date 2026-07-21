<script lang="ts">
    import Content from "$components/elements/Content.svelte";
    import PageHeader from "$components/PageHeader.svelte";
    import WelfareForm from "./WelfareForm.svelte";
</script>

<PageHeader
    current="/get-involved/talk-support"
    title="Talk & Support"
    size="small"
    metaDescription="Get in touch with the JCR welfare officers, anonymously if you'd like.">
    <Content>
        <p>
            This is an optionally-anonymous form to voice any concerns or worries you may have during your time in college. No question or concern is silly! Only our lovely JCR Welfare officers will be able to view your response and you can choose to remain anonymous if you'd like.
        <p>
            This form isn't monitored in real time — if you or someone else needs
            urgent help, please contact the Porters, College nurse, 999, etc.
        </p>
        <p>
            You'll need to log in with Raven to submit this form — that's just to
            confirm you're a Christ's student. If you tick "anonymous" below, the
            welfare officers will only ever see an encrypted, unreadable version of
            your identity, not your name or email.
        </p>
        <WelfareForm />
        <h1>Terms and Conditions</h1>
        <ul>
            <li>
                You agree that the information you provide on this form will be
                emailed to the Male & NB and Female & NB Welfare Officers only.
            </li>
            <li>
                You agree that the content you provide is genuine and not intended
                to cause harm or distress to others.
            </li>
            <li>
                If you choose to share your email address, then it will be
                included alongside the form information and shared with the
                Welfare Officers.
            </li>
            <li>
                If you choose to remain anonymous, then an encrypted
                (unreadable) form of your email address will be included, so that
                the Welfare Officers can use the anonymous response system to
                reply to your message without revealing your identity.
            </li>
            <li>
                Under exceptional circumstances, the Welfare Officers may decide to
                access the email address attached to an anonymous form
                submission. Reasons for doing this may include (but are not
                limited to) responding to an immediate risk of harm. Decrypting
                an email in this way will trigger a notification to members of
                the Exec and the webmaster, to prevent abuse of this system.
            </li>
        </ul>
    </Content>
</PageHeader>