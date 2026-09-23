'use client'

import { FadeUp } from '@/components/motion'

interface TermsOfUseBasicProps {
    eyebrow: string
    heading: string
    date: string
}

interface TermsOfUseProps extends TermsOfUseBasicProps {}

type Props = Partial<TermsOfUseProps>

const defaultProps: TermsOfUseProps = {
    eyebrow: 'terms of use',
    heading: 'Biover Terms of Use',
    date: 'September 21, 2026',
}

const TermsOfUse = (props: Props) => {
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
                <FadeUp delay={0} duration={0.7}>
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
                </FadeUp>


                {/* =====================================================
                 * INTRODUCTION
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="mb-8 space-y-4 text-lg font-medium leading-relaxed">
                        <p>
                            Welcome to the Biover website. These Terms of Use
                            ("Terms") govern your access to and use of the Biover
                            website and its related pages and services that link to
                            these Terms.
                        </p>

                        <p>
                            By accessing or using this website, you agree to be bound
                            by these Terms. If you do not agree with these Terms,
                            please do not use the website.
                        </p>

                        <p>
                            These Terms apply to visitors, prospective customers,
                            business partners, and other users of the website.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 1
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            1. Use of the Website
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            Biover provides this website for general informational
                            and business purposes, including providing information
                            about our company, products, solutions, technologies,
                            and services.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            You may access and use the website only for lawful
                            purposes and in accordance with these Terms.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            You agree not to:
                        </p>

                        <ul className="space-y-1 text-lg font-medium">
                            <li>
                                - Use the website in violation of any applicable law
                                or regulation.
                            </li>
                            <li>
                                - Attempt to gain unauthorized access to the website,
                                its systems, servers, or related infrastructure.
                            </li>
                            <li>
                                - Interfere with or disrupt the operation or security
                                of the website.
                            </li>
                            <li>
                                - Introduce malicious code, malware, viruses, or
                                other harmful material.
                            </li>
                            <li>
                                - Use automated systems to access or collect website
                                content in a manner that places unreasonable load on
                                our systems.
                            </li>
                            <li>
                                - Use the website to engage in fraudulent,
                                deceptive, abusive, or unlawful activity.
                            </li>
                        </ul>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 2
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            2. Business and Product Information
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            The information presented on this website is provided
                            for general informational and business purposes.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            Product names, descriptions, specifications,
                            capabilities, images, technical information, and other
                            materials may be updated or changed from time to time.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            The availability, configuration, functionality, and
                            performance of a product or solution may depend on the
                            specific deployment, customer requirements, technical
                            environment, contractual arrangements, and applicable
                            regulations.
                        </p>

                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                            Information published on this website should not be
                            interpreted as a guarantee that a particular product,
                            feature, specification, or solution will be available or
                            suitable for every application or environment.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 3
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            3. Intellectual Property
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            Unless otherwise stated, the content and materials
                            available on this website are owned by or licensed to
                            Biover and are protected by applicable intellectual
                            property laws.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            This may include, without limitation:
                        </p>

                        <ul className="space-y-1 text-lg font-medium">
                            <li>- Text and written content.</li>
                            <li>- Logos, trademarks, and service marks.</li>
                            <li>- Product names and descriptions.</li>
                            <li>- Graphics, photographs, and other visual content.</li>
                            <li>- Website design and layout.</li>
                            <li>- Software, code, and other technical materials.</li>
                        </ul>

                        <p className="text-lg font-medium leading-relaxed">
                            You may view and access website content for your own
                            lawful informational or business purposes.
                        </p>

                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                            You may not reproduce, modify, distribute, publicly
                            display, publish, sell, license, create derivative works
                            from, or otherwise exploit website content without prior
                            written permission from Biover, except where permitted
                            by applicable law.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 4
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            4. Trademarks
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            Biover and other names, logos, product names, service
                            names, and marks displayed on this website may be
                            trademarks or service marks of Biover or their
                            respective owners.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            Nothing on this website grants you any license or right
                            to use any trademark, service mark, logo, or other
                            proprietary mark without the prior written permission
                            of the applicable owner.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 5
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            5. Contact Form and Communications
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            The website may provide a contact form that allows you
                            to submit inquiries, business requests, partnership
                            proposals, or other communications to Biover.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            You agree that information you provide through the
                            contact form will be accurate and not misleading.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            Submission of an inquiry does not create a contractual
                            relationship, agency relationship, partnership, joint
                            venture, employment relationship, or other formal
                            business relationship between you and Biover.
                        </p>

                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                            Please do not submit confidential, proprietary,
                            biometric, financial, authentication, or other sensitive
                            information through the public contact form unless
                            Biover has specifically requested that information
                            through an appropriate and secure channel.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 6
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            6. Biometric Technologies and Solutions
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            Biover develops and provides biometric technologies and
                            solutions that may be used in government, financial,
                            identity, security, and other environments.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            Information about biometric technologies presented on
                            this website is intended to describe the capabilities
                            and potential applications of Biover's products and
                            solutions.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            The website itself does not provide biometric
                            identification or authentication services to website
                            visitors.
                        </p>

                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                            The actual processing of biometric information, identity
                            data, or other sensitive information through a Biover
                            product or solution is governed by the applicable
                            customer deployment, agreements, product documentation,
                            system configuration, and applicable laws and
                            regulations.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 7
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            7. Third-Party Links and Services
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            The website may contain links to websites, platforms,
                            products, or services operated by third parties.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            These links are provided for convenience or informational
                            purposes and do not necessarily constitute an endorsement,
                            sponsorship, or recommendation by Biover.
                        </p>

                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                            Biover does not control and is not responsible for the
                            content, availability, security, privacy practices, or
                            terms of third-party websites or services. Your use of
                            third-party websites and services is subject to their
                            respective terms and policies.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 8
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            8. Disclaimer of Warranties
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            To the maximum extent permitted by applicable law, the
                            website and its content are provided on an "as is" and
                            "as available" basis.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            Biover does not represent or warrant that:
                        </p>

                        <ul className="space-y-1 text-lg font-medium">
                            <li>
                                - The website will always be available, uninterrupted,
                                or error-free.
                            </li>
                            <li>
                                - The website will be free from viruses or other
                                harmful components.
                            </li>
                            <li>
                                - Information provided on the website will always be
                                complete, accurate, or current.
                            </li>
                            <li>
                                - The website or its content will meet every user's
                                specific requirements.
                            </li>
                        </ul>

                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                            To the extent permitted by law, Biover disclaims all
                            warranties, express or implied, including warranties of
                            merchantability, fitness for a particular purpose,
                            non-infringement, and any warranties arising from course
                            of dealing or usage of trade.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 9
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            9. Limitation of Liability
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            To the maximum extent permitted by applicable law,
                            Biover and its affiliates, officers, directors,
                            employees, representatives, and service providers will
                            not be liable for indirect, incidental, special,
                            consequential, exemplary, or punitive damages arising
                            out of or relating to your use of, or inability to use,
                            the website.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            This includes, without limitation, losses arising from
                            interruption of service, loss of data, loss of business
                            opportunities, loss of profits, or reliance on
                            information presented on the website.
                        </p>

                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                            Nothing in these Terms excludes or limits liability that
                            cannot lawfully be excluded or limited under applicable
                            law.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 10
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            10. Indemnification
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            To the extent permitted by applicable law, you agree to
                            defend, indemnify, and hold harmless Biover and its
                            affiliates, officers, directors, employees, and
                            representatives from claims, liabilities, damages,
                            losses, costs, and expenses arising out of or related to:
                        </p>

                        <ul className="space-y-1 text-lg font-medium">
                            <li>
                                - Your violation of these Terms.
                            </li>
                            <li>
                                - Your misuse of the website.
                            </li>
                            <li>
                                - Your violation of applicable law or the rights of
                                another person or entity.
                            </li>
                            <li>
                                - Information or materials you submit through the
                                website that violate these Terms or applicable law.
                            </li>
                        </ul>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 11
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            11. Website Availability and Changes
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            Biover may modify, suspend, restrict, or discontinue any
                            part of the website at any time, with or without notice.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            We may also modify, update, remove, or replace website
                            content, product information, features, or services from
                            time to time.
                        </p>

                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                            We are not responsible for any loss or inconvenience
                            resulting from the unavailability, modification, or
                            discontinuation of the website or any portion of it.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 12
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            12. Privacy
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            Your use of this website is also subject to our Privacy
                            Policy, which explains how Biover collects, uses, and
                            protects personal information submitted through the
                            website.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            By using the website, you acknowledge that you have had
                            the opportunity to review our Privacy Policy.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 13
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            13. Governing Law
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            These Terms are governed by and construed in accordance
                            with the laws of the State of California, United States,
                            without regard to its conflict of laws principles.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            To the extent permitted by applicable law, disputes
                            arising out of or relating to these Terms or your use of
                            the website will be subject to the applicable courts
                            located in California.
                        </p>

                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                            Nothing in this section is intended to limit any
                            mandatory rights or remedies that may apply to you under
                            the laws of your jurisdiction.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 14
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            14. Changes to These Terms
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            Biover may update or modify these Terms from time to time
                            to reflect changes in our website, business practices,
                            services, technology, or applicable legal requirements.
                        </p>

                        <p className="text-lg font-medium leading-relaxed">
                            When changes are made, we will update the Effective Date
                            displayed at the beginning of these Terms.
                        </p>

                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                            Your continued use of the website after updated Terms
                            become effective constitutes use of the website under the
                            revised Terms, to the extent permitted by applicable law.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 15
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            15. Severability
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            If any provision of these Terms is determined to be
                            invalid, unlawful, or unenforceable, that provision will
                            be enforced to the maximum extent permitted by law, and
                            the remaining provisions will remain in full force and
                            effect.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 16
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            16. Entire Agreement
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            These Terms, together with the Privacy Policy and any
                            other policies or notices expressly incorporated by
                            reference, constitute the terms governing your use of the
                            website.
                        </p>

                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">
                            These Terms do not replace or modify any separate written
                            agreement that may govern your purchase, licensing,
                            deployment, implementation, or use of Biover products or
                            services.
                        </p>
                    </div>
                </FadeUp>


                {/* =====================================================
                 * POINT 17
                 * ===================================================== */}
                <FadeUp delay={0.05}>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            17. Contact Us
                        </h4>

                        <p className="text-lg font-medium leading-relaxed">
                            If you have questions about these Terms or the use of
                            this website, please contact us:
                        </p>

                        <div className="space-y-1 pt-2 text-lg font-medium">
                            <p className="font-semibold uppercase">
                                Biover
                            </p>

                            <p className="pt-4 font-semibold">
                                Head Quarters
                            </p>

                            <div className='text-muted-foreground'>
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

                            <div className='text-muted-foreground'>
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
                            We will review and respond to inquiries regarding these
                            Terms in accordance with applicable law.
                        </p>
                    </div>
                </FadeUp>

            </div>
        </section>
    )
}

export { TermsOfUse }