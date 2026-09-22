'use client'

interface PrivacyPolicyBasicProps {
    eyebrow: string
    heading: string
    date: string
}

interface PrivacyPolicyProps extends PrivacyPolicyBasicProps {}

type Props = Partial<PrivacyPolicyProps>

const defaultProps: PrivacyPolicyProps = {
    eyebrow: 'privacy policy',
    heading: 'Biover Privacy Policy',
    date: 'September 21, 2026',
}

const PrivacyPolicy = (props: Props) => {
    const {
        eyebrow,
        heading,
        date,
    } = {
        ...defaultProps,
        ...props,
    }

    return (
        <section className="relative overflow-hidden py-32 md:py-48">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12 space-y-12">

                {/* =====================================================
                 * HEADER
                 * ===================================================== */}
                <div className="mb-16 flex w-full flex-col items-start text-left">

                    {/* EYEBROW */}
                    <div className="mb-6 flex flex-col items-center gap-1.5">
                        <span className="h-px w-36 bg-linear-to-r from-transparent via-blue-500 to-transparent translate-x-3" />

                        <span
                            className="
                                text-lg
                                font-medium
                                uppercase
                                text-blue-500
                            "
                        >
                            {eyebrow}
                        </span>

                        <span className="h-px w-36 bg-linear-to-r from-transparent via-blue-500 to-transparent -translate-x-3" />
                    </div>

                    {/* HEADING */}
                    <h1 className="max-w-2xl text-4xl font-semibold lg:text-6xl leading-tight text-pretty">
                        {heading}
                    </h1>

                    {/* EFFECTIVE DATE */}
                    <p className="mt-16 text-xl font-semibold lg:text-2xl text-muted-foreground">
                        Effective Date: {date}
                    </p>
                </div>


                {/* =====================================================
                 * INTRODUCTION
                 * ===================================================== */}
                <div className="mb-8 space-y-4 text-lg font-medium leading-relaxed">
                    <p>
                        Biover ("Biover", "we", "us", or "our") respects your privacy
                        and is committed to protecting the personal information you
                        provide when using our website.
                    </p>

                    <p>
                        This Privacy Policy explains what information we collect
                        through our website, how we use it, how we protect it, and
                        the choices available to you.
                    </p>

                    <p>
                        This Privacy Policy applies to the Biover website and its
                        related pages and services that link to this Privacy Policy.
                    </p>
                </div>


                {/* =====================================================
                 * POINT 1
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        1. Information We Collect
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        We collect personal information that you voluntarily provide
                        to us through our website.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        When you use our contact form, we may collect:
                    </p>

                    <ul className="space-y-1 text-lg font-medium">
                        <li>- Name</li>
                        <li>- Company</li>
                        <li>- Email address</li>
                        <li>- Phone number</li>
                        <li>- Message or other information you choose to provide</li>
                    </ul>

                    <p className="pt-2 text-lg font-medium leading-relaxed text-muted-foreground">
                        You are not required to provide information that is not
                        necessary for your inquiry. However, if you choose not to
                        provide certain information, we may not be able to respond
                        adequately to your request.
                    </p>

                    <h5 className="pt-6 text-xl font-semibold">
                        Information Collected Automatically
                    </h5>

                    <div className="space-y-4 text-lg font-medium leading-relaxed text-muted-foreground">
                        <p>
                            Our website does not currently use analytics or
                            advertising tracking technologies.
                        </p>

                        <p>
                            We do not intentionally collect personal information
                            through analytics platforms, advertising pixels, or
                            similar tracking technologies on this website.
                        </p>

                        <p>
                            Our hosting and infrastructure providers may nevertheless
                            process limited technical information that is necessary
                            to deliver, secure, and maintain the website, such as
                            server logs, IP addresses, browser information, or
                            request information. Such information is handled by the
                            applicable service providers according to their own
                            policies and the services they provide to us.
                        </p>
                    </div>
                </div>


                {/* =====================================================
                 * POINT 2
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        2. How We Use Personal Information
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        We use the personal information submitted through our
                        website primarily to:
                    </p>

                    <ul className="space-y-1 text-lg font-medium">
                        <li>- Respond to inquiries and requests.</li>
                        <li>
                            - Communicate with you regarding our products,
                            solutions, and services.
                        </li>
                        <li>
                            - Follow up on business or partnership inquiries.
                        </li>
                        <li>- Provide information you request from us.</li>
                        <li>
                            - Maintain the security and functionality of our website.
                        </li>
                        <li>
                            - Comply with applicable legal and regulatory obligations.
                        </li>
                    </ul>

                    <p className="pt-2 text-lg font-medium leading-relaxed text-muted-foreground">
                        We do not use the information submitted through our contact
                        form for unrelated purposes that are incompatible with the
                        reason for which it was provided.
                    </p>
                </div>


                {/* =====================================================
                 * POINT 3
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        3. Contact Form Information
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        When you submit information through our contact form, the
                        information is sent to our designated business or sales
                        email account for the purpose of responding to your inquiry.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        We do not currently use a separate customer-facing account
                        system or public database through the website.
                    </p>

                    <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                        Please do not submit sensitive personal information,
                        biometric information, passwords, financial account
                        credentials, or other confidential information through the
                        website contact form unless specifically requested by Biover
                        through an appropriate and secure channel.
                    </p>
                </div>


                {/* =====================================================
                 * POINT 4
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        4. Biometric Information
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        Biover provides biometric technologies and solutions for
                        various applications.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        The existence of biometric products or solutions described
                        on this website does not mean that this website collects
                        biometric information from visitors.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        We do not intentionally collect fingerprints, facial
                        biometric data, iris data, voice biometric data, or other
                        biometric identifiers from visitors through this website's
                        contact form.
                    </p>

                    <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                        Any biometric or other sensitive personal information
                        processed through a Biover product, solution, deployment,
                        or customer environment is subject to the applicable
                        contractual arrangements, product documentation, customer
                        responsibilities, and applicable privacy and data protection
                        requirements governing that particular implementation.
                    </p>
                </div>


                {/* =====================================================
                 * POINT 5
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        5. How We Share Personal Information
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        We do not sell your personal information.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        We may disclose personal information to service providers
                        or other parties when reasonably necessary to operate our
                        website, communicate with you, provide requested services,
                        maintain security, or comply with legal obligations.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        For example, information submitted through our contact form
                        may be processed by email, hosting, infrastructure, or
                        other technology providers used to operate our website and
                        business communications.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        We do not authorize third parties to use information
                        submitted through our contact form for their own independent
                        marketing purposes.
                    </p>

                    <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                        We may also disclose information when required by law,
                        legal process, court order, governmental authority, or when
                        reasonably necessary to protect the rights, property, or
                        security of Biover, our users, or others.
                    </p>
                </div>


                {/* =====================================================
                 * POINT 6
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        6. Cookies and Tracking Technologies
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        Our website does not currently use analytics or advertising
                        cookies for tracking visitor behavior.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        We may use technologies that are strictly necessary for the
                        operation, security, or delivery of the website.
                    </p>

                    <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                        If our use of cookies or tracking technologies changes
                        materially, we will update this Privacy Policy and provide
                        any notices or choices required by applicable law.
                    </p>
                </div>


                {/* =====================================================
                 * POINT 7
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        7. Data Retention
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        We retain personal information only for as long as reasonably
                        necessary to:
                    </p>

                    <ul className="space-y-1 text-lg font-medium">
                        <li>- Respond to and manage your inquiry.</li>
                        <li>- Maintain our business records.</li>
                        <li>- Provide or improve our services.</li>
                        <li>
                            - Comply with legal, regulatory, accounting, or reporting
                            requirements.
                        </li>
                        <li>
                            - Establish, exercise, or defend legal claims.
                        </li>
                    </ul>

                    <p className="pt-2 text-lg font-medium leading-relaxed text-muted-foreground">
                        The actual retention period may vary depending on the nature
                        of the information and the purpose for which it was collected.
                    </p>
                </div>


                {/* =====================================================
                 * POINT 8
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        8. Data Security
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        We take reasonable administrative, technical, and
                        organizational measures designed to protect personal
                        information against unauthorized access, disclosure,
                        alteration, loss, or misuse.
                    </p>

                    <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                        However, no method of transmission or storage over the
                        Internet can be guaranteed to be completely secure.
                        Accordingly, we cannot guarantee absolute security of
                        information transmitted to us through the Internet.
                    </p>
                </div>


                {/* =====================================================
                 * POINT 9
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        9. International Data Transfers
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        Biover operates internationally, with a Head Quarters in
                        Los Angeles, California, USA, and a Branch Office in
                        Singapore.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        Depending on the nature of your interaction with us and the
                        service providers we use, your information may be accessed,
                        processed, or stored in countries other than the country in
                        which you reside.
                    </p>

                    <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                        Where required by applicable data protection law, we will
                        take appropriate measures to protect personal information
                        when it is transferred across borders.
                    </p>
                </div>


                {/* =====================================================
                 * POINT 10
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        10. Your Privacy Rights
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        Depending on where you live and the laws that apply to you,
                        you may have rights regarding your personal information.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        These rights may include the right to:
                    </p>

                    <ul className="space-y-1 text-lg font-medium">
                        <li>
                            - Request access to personal information we hold about you.
                        </li>
                        <li>
                            - Request correction of inaccurate or incomplete information.
                        </li>
                        <li>
                            - Request deletion of personal information, subject to
                            applicable exceptions.
                        </li>
                        <li>
                            - Request information about how your personal information
                            is collected, used, or disclosed.
                        </li>
                        <li>
                            - Object to or restrict certain processing.
                        </li>
                        <li>
                            - Withdraw consent where processing is based on consent.
                        </li>
                        <li>
                            - Exercise other rights provided by applicable privacy
                            or data protection laws.
                        </li>
                    </ul>

                    <p className="pt-2 text-lg font-medium leading-relaxed text-muted-foreground">
                        We will process privacy requests in accordance with the laws
                        applicable to the individual and the relevant processing activity.
                    </p>

                    <h5 className="pt-6 text-xl font-semibold">
                        California Privacy Rights
                    </h5>

                    <div className="space-y-4 text-lg font-medium leading-relaxed">
                        <p>
                            If California privacy law applies to you and to Biover's
                            processing of your personal information, you may have
                            additional rights under applicable California privacy
                            laws, including rights relating to access, deletion,
                            correction, and information about the collection and
                            disclosure of personal information.
                        </p>

                        <p>
                            Biover does not sell personal information collected
                            through this website.
                        </p>

                        <p>
                            To exercise an applicable privacy right, please contact
                            us using the information in the Contact Us section below.
                        </p>

                        <p>
                            We may need to verify your identity before completing
                            certain requests. We will only request information
                            reasonably necessary to verify and process your request.
                        </p>

                        <p className="text-muted-foreground">
                            We will not discriminate against you for exercising
                            privacy rights available to you under applicable law.
                        </p>
                    </div>
                </div>


                {/* =====================================================
                 * POINT 11
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        11. Children's Privacy
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        Our website is intended for business and professional
                        audiences.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        We do not knowingly collect personal information from
                        children through the website.
                    </p>

                    <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                        If you believe that a child has provided personal information
                        to us through the website, please contact us so that we can
                        review and take appropriate action.
                    </p>
                </div>


                {/* =====================================================
                 * POINT 12
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        12. Third-Party Websites
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        Our website may contain links to third-party websites,
                        platforms, or services.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        Those third-party websites operate independently from Biover
                        and may have their own privacy policies and terms of use.
                    </p>

                    <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                        We are not responsible for the privacy practices, content,
                        security, or policies of third-party websites. We encourage
                        you to review the privacy policies of any third-party website
                        you visit.
                    </p>
                </div>


                {/* =====================================================
                 * POINT 13
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        13. Changes to This Privacy Policy
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        We may update this Privacy Policy from time to time to
                        reflect changes in our business, website, technology, legal
                        requirements, or privacy practices.
                    </p>

                    <p className="text-lg font-medium leading-relaxed">
                        When we make changes, we will update the Effective Date at
                        the beginning of this Privacy Policy.
                    </p>

                    <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                        We encourage you to periodically review this page for the
                        latest information about our privacy practices.
                    </p>
                </div>


                {/* =====================================================
                 * POINT 14
                 * ===================================================== */}
                <div className="space-y-4">
                    <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        14. Contact Us
                    </h4>

                    <p className="text-lg font-medium leading-relaxed">
                        If you have questions about this Privacy Policy, our privacy
                        practices, or wish to submit a privacy-related request,
                        please contact us:
                    </p>

                    <div className="space-y-1 pt-2 text-lg font-medium">
                        <p className="font-semibold">
                            Biover
                        </p>

                        <p className="pt-4 font-semibold">
                            Head Quarters
                        </p>

                        <div className="text-muted-foreground">
                            <p>
                                2753 Waverly Drive
                            </p>

                            <p>
                                Los Angeles, California 90039
                            </p>

                            <p>
                                United States
                            </p>
                        </div>

                        <p className="pt-4 font-semibold">
                            Branch Office
                        </p>

                        <div className="text-muted-foreground">
                            <p>
                                23 Neil Road
                            </p>

                            <p>
                                Singapore 088815
                            </p>
                        </div>

                        <p className="pt-4">
                            <span className="font-semibold">Email:</span>{' '}
                            cs@bioverbiometrics.com
                        </p>
                    </div>

                    <p className="pt-4 text-lg font-medium leading-relaxed text-muted-foreground">
                        We will review and respond to privacy-related requests in
                        accordance with applicable law.
                    </p>
                </div>

            </div>
        </section>
    )
}

export { PrivacyPolicy }