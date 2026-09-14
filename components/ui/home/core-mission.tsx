'use client'

import { FadeUp, Stagger } from '@/components/motion/'

interface MissionItem {
    title: string
    caption: string
}
interface MissionBasicProps {
    eyebrow?: string
    title?: string
    description?: string
    items: MissionItem[]
}

interface MissionProps extends MissionBasicProps {}

type Props = Partial<MissionProps>

const defaultProps: MissionProps = {
    eyebrow: 'Core Mission',
    title: 'The Power of Eliminating Doubt',
    description:
        'Using biometrics we ensure the endings of all verifications and identity-checks result in complete removal of doubt. This is what sets Biover apart — not just matching identities, but creating absolute certainty. Every transaction, every border crossing, every citizen service delivery backed by unimpeachable identity truth.',
    items: [
        {
            title: '<300ms',
            caption: 'Verification Speed',
        },
        {
            title: '99.97%',
            caption: 'Match Accuracy',
        },
        {
            title: '0.001%',
            caption: 'False Accept Rate',
        },
        {
            title: 'Zero',
            caption: 'Identity Doubt',
        },
    ],
}

const CoreMissionSection = (props: Props) => {
    const {
        eyebrow,
        title,
        description,
        items,
    } = { 
        ...defaultProps, 
        ...props 
    }

        return (
        <section className="relative overflow-hidden py-24 md:py-32">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">

                {/* =====================================================
                * SECTION HEADER
                * ===================================================== */}
                <Stagger 
                    stagger={0.18} delay={0.05} amount={0.3}
                    className="mx-auto w-full text-center"
                >
                    {/* EYEBROW */}
                    <FadeUp controlled duration={0.7} distance={24} >
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
                    </FadeUp>

                    {/* TITLE */}
                    <FadeUp controlled duration={0.7} distance={24} >
                        <h2
                            className="
                            font-heading
                            text-3xl
                            font-medium
                            sm:text-4xl
                            md:text-5xl
                            "
                        >
                            {title}
                        </h2>
                    </FadeUp>

                    {/* DESCRIPTION */}
                    <FadeUp controlled duration={0.85} distance={28} >
                        <p className="max-w-6xl mt-6 text-md font-medium text-muted-foreground lg:text-xl">
                            {description}
                        </p>
                    </FadeUp>

                </Stagger>

                {/* =====================================================
                * MISSION METRICS
                * ===================================================== */}
                <Stagger 
                    stagger={0.16} delay={0.1} amount={0.25}
                    className="mx-auto mt-16 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-4"
                >
                    {items.map((item) => (
                        <FadeUp key={item.title} controlled duration={0.8} distance={36} className="h-full" >
                            <div className="
                                    group
                                    flex
                                    h-full
                                    min-h-36
                                    flex-col
                                    rounded-2xl
                                    border
                                    border-blue-500/30
                                    bg-background
                                    hover:bg-blue-500/5
                                    p-8
                                    items-center
                                    justify-center
                                    text-center
                                    transition-all
                                    duration-300
                                    hover:border-blue-500">
                                <h3 className="text-lg font-semibold text-blue-500 group-hover:scale-105 transition duration-200">{item.title}</h3>
                                <p className="mt-2 font-medium">{item.caption}</p>
                            </div>
                        </FadeUp>

                    ))}
                </Stagger>
                
                <FadeUp
                    duration={0.8} distance={20} delay={0.15} amount={0.3}
                    className="mx-auto mt-32 flex w-full items-center justify-center gap-4"
                >
                    <span className="h-px w-full bg-linear-to-r from-transparent via-blue-500 to-transparent" />
                </FadeUp>

            </div>
        </section>
    )
}

export { CoreMissionSection }