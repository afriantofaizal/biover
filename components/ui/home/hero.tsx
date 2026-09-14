'use client'

import * as React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { GridPattern } from '@/components/ui/grid-pattern'
import { Status, StatusIndicator } from '../status'
import { IconArrowUpRight, IconChevronRight, IconBulb } from '@tabler/icons-react';
import { cn } from '@/src/lib/utils'
import { FadeUp, Stagger, } from '@/components/motion/'
 
interface heroButton {
  text: string
  url: string
  icon?: React.ReactNode
}
interface Buttons {
  primary?: heroButton
  secondary?: heroButton
}
interface Badge {
  text: string
  announcement?: string
  url?: string
}
interface HeroBasicProps {
  badge: Badge
  heading: string
  highlight?: string
  description: string
  buttons?: Buttons
  className?: string
}

interface HeroProps extends HeroBasicProps {}

type Props = Partial<HeroProps>

const defaultProps: HeroProps = {
  badge: {
    text: "What's new",
    announcement: 'Biometric Identification Kit',
  },
  heading: "We're Building a World of Instant Trust",
  description: 'We are an independent provider of trusted biometric solutions for governments and enterprises.',
  highlight: 'Instant Trust',
  buttons: {
    primary: {
      text: 'VIEW PRODUCTS',
      url: '#products',
    },

    secondary: {
      text: 'OUR SOLUTIONS',
      url: '#solutions',
    },
  },
}

const Hero = (props: Props) => {
  const {
    badge,
    heading,
    highlight,
    description,
    buttons,
  } = {
    ...defaultProps,
    ...props,
  }

  return (
    <section className='relative min-h-screen overflow-hidden'>
      {/* ===========================================
       * Background Grid Pattern
       * =========================================== */}
        <GridPattern 
            fade="radial"
            width={48}
            height={48}
            className="
            opacity-60
            stroke-muted-foreground/30
            fill-muted-foreground/30"
        />
        <div className='relative z-10 flex flex-col min-h-screen items-center justify-center px-6 md:px-8 lg:px-14 xl:px-20'>

          <Stagger className="flex w-full flex-col items-center" stagger={0.25} delay={0.25} amount={0.3} >
            {/* === * BADGE * === */}
            {badge && (
              <FadeUp controlled duration={0.8} distance={40}>
                <div className='group mb-8'>
                  <Link href='/products/biometric-identification-kit'>
                    <Status
                        status="online"
                        className='px-2 py-3 bg-accent/50'
                    >
                        <StatusIndicator />
                        <p className='text-sm'>
                            {badge.text}
                        </p>
                        <span className='flex gap-1 text-sm text-muted-foreground items-center'>
                            • {badge.announcement}
                            <IconArrowUpRight stroke={2} size={16} className='group-hover:text-blue-500 group-hover:translate-x-0.5 transition duration-300' />
                        </span>
                    </Status>
                  </Link>
                </div>
              </FadeUp>
            )}

            {/* === * HEADING + DESCRIPTION * === */}
            <FadeUp controlled duration={0.9} distance={40}>
              <div className="mx-auto flex max-w-5xl flex-col gap-6 text-center">
                  <h1 className="mx-auto text-5xl font-semibold lg:text-7xl leading-tight text-pretty">
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
                  <p className="mx-auto max-w-3xl text-balance text-muted-foreground font-medium lg:text-xl">
                      {description}
                  </p>
              </div>
            </FadeUp>

            {/* === * BUTTONS * === */}
            <FadeUp controlled duration={0.8} distance={40}>
              <div className='flex w-full flex-col justify-center gap-4 sm:flex-row mt-10'>

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
                        <IconChevronRight stroke={2} />
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
                      <IconBulb stroke={2} />
                      {buttons.secondary.text}
                    </Link>
                  )}

              </div>
            </FadeUp>

          </Stagger>

        </div>
    </section>
  )
}


export { Hero }