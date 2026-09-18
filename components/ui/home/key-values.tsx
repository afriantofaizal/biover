'use client'

import { IconBolt, IconLockCheck, IconWorldShare } from '@tabler/icons-react';
import { FadeUp, Stagger } from '@/components/motion/'

interface ValueItem {
    title: string
    description: string
    icon: React.ReactNode
}
interface ValuesBasicProps {
    eyebrow?: string
    title?: string
    description?: string
    items: ValueItem[]
}

interface MissionProps extends ValuesBasicProps {}

type Props = Partial<MissionProps>

const defaultProps: MissionProps = {
    eyebrow: 'Key Values',
    title: 'Trust in Biometrics',
    description:
        'Governments and businesses need to know their users and customers are who they say they are.',
    items: [
        {
            title: 'Instant Trust',
            description: 'Our top-rated algorithms are designed to prevent ID fraud. From identifying criminals to checking liveness, our R&D team is a pioneer of the latest trends.',
            icon: <IconBolt stroke={1} size={40} />,
        },
        {
            title: 'You are in Control',
            description: 'The data of your users are always fully under your supervision, control and ownership. Our solutions support most hardware and software configurations.',
            icon: <IconLockCheck stroke={1} size={40} />,
        },
        {
            title: 'Global Experience',
            description: 'You can rely on our 5 years in the biometric business. After over hundreds projects in over 10 countries, we can help you solve many difficult challenges.',
            icon: <IconWorldShare stroke={1} size={40} />,
        },
    ],
}

const ValuesSection = (props: Props) => {
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

                {/* === * HEADER * === */}
                <Stagger 
                className="mx-auto w-full text-center"
                stagger={0.18} delay={0.05} amount={0.3}>

                    {/* EYEBROW */}
                    <FadeUp controlled duration={0.7} distance={24} >
                        <div className="mb-6 flex flex-col items-center justify-center gap-1.5">
                            <span className="h-px w-32 bg-linear-to-r from-transparent via-blue-500 to-transparent translate-x-3" />
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
                            <span className="h-px w-32 bg-linear-to-r from-transparent via-blue-500 to-transparent -translate-x-3" />
                        </div>
                    </FadeUp>

                    {/* TITLE */}
                    <FadeUp controlled duration={0.8} distance={28} >
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

                    <FadeUp controlled duration={0.8} distance={28} >
                        <p className="max-w-6xl mt-6 text-md font-medium text-muted-foreground lg:text-xl">
                            {description}
                        </p>
                    </FadeUp>

                </Stagger>

                {/* === * VALUE ITEMS * === */}
                <Stagger 
                    className="mx-auto mt-24 grid grid-cols-1 items-stretch gap-16 md:grid-cols-3 md:gap-12"
                    stagger={0.2} delay={0.1} amount={0.2}
                >
                    {items.map((item) => (
                        <FadeUp key={item.title} controlled duration={0.8} distance={36} >
                            <div className="
                                    flex
                                    h-full
                                    flex-col
                                    items-center
                                    justify-center
                                    text-center">
                                <div className="mb-4 text-blue-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 font-medium text-muted-foreground">{item.description}</p>
                            </div>
                        </FadeUp>

                    ))}
                </Stagger>
            </div>
        </section>
    )
}

export { ValuesSection }