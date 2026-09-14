'use client'

import * as React from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { IconBulb, IconMailShare } from '@tabler/icons-react';
import { Separator } from "@/components/ui/separator"
import { cn } from '@/src/lib/utils'
import { FadeUp, Stagger, } from '@/components/motion/'

interface StatsItem {
    title: string
    caption: string
}
interface aboutButton {
  text: string
  url: string
  icon?: React.ReactNode
}
interface Buttons {
  primary?: aboutButton
  secondary?: aboutButton
}
interface HeroAboutBasicProps {
    eyebrow: string
    heading: string
    highlight: string
    description: string
    buttons?: Buttons
    className?: string
    stats: StatsItem[]
}

interface heroAboutProps extends HeroAboutBasicProps {}

type Props = Partial<heroAboutProps>

const defaultProps: heroAboutProps = {
    eyebrow: 'Trust through technology',
    heading: 'Securing Global Identities with Uncompromising Precision',
    highlight: 'Uncompromising Precision',
    description: 'BIOVER is an independent provider of trusted biometric solutions. We build secure, reliable, and highly scalable systems tailored for governments and modern enterprises worldwide.',
    buttons: {
        primary: {
            text: 'Explore Our Solutions',
            url: '/solutions',
        },
        secondary: {
            text: 'Contact Our Sales',
            url: '/contact',
        },
    },
    stats: [
        {
            title: '5+',
            caption: 'Years of Active Innovation',
        },
        {
            title: '45+',
            caption: 'Sovereign State Implementations',
        },
        {
            title: '99.98%',
            caption: 'Biometric Matching Accuracy',
        },
        {
            title: '1.2B+',
            caption: 'Verified Identities Protected',
        },
    ],
}

const HeroAbout = (props: Props) => {
    const {
        eyebrow,
        heading,
        highlight,
        description,
        buttons,
        stats,
    } = {
        ...defaultProps,
        ...props,
    }

    return (
        <section className="relative overflow-hidden py-32 md:py-48">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">

                    {/* === * HEADER * === */}
                    <Stagger 
                        stagger={0.25} delay={0.25} amount={0.3}
                        className="mb-16 flex w-full flex-col items-start text-left"
                    >
                        {/* EYEBROW */}
                        <FadeUp controlled duration={0.8} distance={40}>
                            <div className="mb-6 flex flex-col items-center gap-1.5">
                                <span className="h-px w-64 bg-linear-to-r from-transparent via-blue-500 to-transparent translate-x-3" />
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
                                <span className="h-px w-64 bg-linear-to-r from-transparent via-blue-500 to-transparent -translate-x-3" />
                            </div>
                        </FadeUp>

                        {/* === * TITLE + DESCRIPTION * === */}
                        <FadeUp controlled duration={0.9} distance={40}>
                            <h1 className="max-w-5xl text-5xl font-semibold lg:text-6xl leading-tight text-pretty">
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
                            <p className="mt-5 max-w-4xl text-pretty text-muted-foreground font-medium lg:text-xl">
                                {description}
                            </p>
                        </FadeUp>

                        {/* === * BUTTONS * === */}
                        <FadeUp controlled duration={0.8} distance={40}>
                            <div className='flex w-full flex-col gap-4 sm:flex-row mt-10'>
                                {buttons?.primary && (
                                <Link 
                                    href={buttons.primary.url}
                                    className={cn(
                                        buttonVariants
                                        ({ size: 'lg' }),
                                        'h-12 px-8'
                                        )}
                                    >
                                    {buttons.primary.text}
                                    <IconBulb stroke={2} />
                                </Link>
                                        
                                )}
                                {buttons?.secondary && (
                                <Link 
                                    href={buttons.secondary.url}
                                        className={cn(
                                        buttonVariants
                                        ({ size: 'lg', variant: 'outline' }),
                                        'h-12 px-8'
                                    )}
                                    >
                                    {buttons.secondary.text}
                                    <IconMailShare stroke={2} />
                                </Link>
                                )}
                            </div>
                        </FadeUp>

                    </Stagger>

                    {/* === * SATS * === */}
                    <Stagger
                        stagger={0.16}
                        delay={0.1}
                        amount={0.25}
                        className="mx-auto mt-32 flex w-full flex-col gap-12 md:flex-row md:gap-0"
                    >
                    {stats.map((item, index) => (
                        <FadeUp
                            key={item.title}
                            controlled
                            duration={0.8}
                            distance={36}
                            className="flex flex-1 items-center"
                        >
                            {/* STAT */}
                            <div className="flex flex-1 flex-col items-center justify-center text-center">
                                <h3 className="text-3xl font-semibold text-blue-500">
                                    {item.title}
                                </h3>

                                <p className="mt-2 font-medium">
                                    {item.caption}
                                </p>
                            </div>

                            {/* SEPARATOR */}
                            {index < stats.length - 1 && (
                                <Separator
                                    orientation="vertical"
                                    className="hidden h-16 md:block"
                                />
                            )}
                        </FadeUp>
                    ))}
                    </Stagger>

            </div>
        </section>
    )
}

export { HeroAbout }