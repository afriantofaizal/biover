'use client'

import * as React from 'react'
import { FadeUp, Stagger } from '@/components/motion/'

interface HeroSolutionsBasicProps {
    eyebrow: string
    heading: string
    highlight: string
    description: string
}

interface HeroSolutionsProps extends HeroSolutionsBasicProps {}

type Props = Partial<HeroSolutionsProps>

const defaultProps: HeroSolutionsProps = {
    eyebrow: 'solutions',
    heading: 'Explore our solutions',
    highlight: 'our solutions',
    description: 'Biover global team of experts offers in-depth industry experience to deliver reliable biometric solutions. Our solutions have been deployed worldwide, addressing a wide range of use cases, from national ID management to supporting some of the largest law enforcement agencies. We also provide identity verification for global consumer brands. We understand your challenges and are committed to meeting your needs.',
}

const HeroSolutions = (props: Props) => {
    const {
        eyebrow,
        heading,
        highlight,
        description,
    } = {
        ...defaultProps,
        ...props,
    }

    return (
        <section className="relative overflow-hidden py-32 md:py-48">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">

                {/* === * HEADER * === */}
                <Stagger
                    stagger={0.18} delay={0.05} amount={0.3}
                    className="mb-16 flex w-full flex-col items-start text-left"
                >
                    {/* EYEBROW */}
                    <FadeUp controlled duration={0.7} distance={24} >
                        <div className="mb-6 flex flex-col items-center gap-1.5">
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
                        <h1 className="max-w-2xl text-4xl font-semibold lg:text-6xl leading-tight text-pretty">
                            {highlight
                            ? heading.split(highlight).map((part, index, parts) => (
                                <React.Fragment key={index}>
                                {part}

                                {index < parts.length - 1 && (
                                    <span className="bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                    {highlight}
                                    </span>
                                )}
                                </React.Fragment>
                            ))
                            : heading}
                        </h1>
                    </FadeUp>

                    {/* DESCRIPTION */}
                    <FadeUp controlled duration={0.8} distance={28} >
                        <p
                        className="
                            mt-5
                            max-w-3xl
                            text-base
                            font-medium
                            text-muted-foreground
                            md:text-lg
                            text-pretty
                        "
                        >
                        {description}
                        </p>
                    </FadeUp>

                </Stagger>
            </div>
        </section>
    )
}

export { HeroSolutions }