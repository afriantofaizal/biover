'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GridPattern } from '@/components/ui/grid-pattern'
import { Status, StatusIndicator } from '../status'
import { IconArrowUpRight, IconChevronRight, IconBulb } from '@tabler/icons-react';
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
                        className='px-2 py-3 bg-accent/50 group-hover:border-blue-500/30'
                    >
                        <StatusIndicator />
                        <p className='text-sm'>
                            {badge.text}
                        </p>
                        <span className='flex gap-1 text-sm text-muted-foreground items-center group-hover:text-foreground transition duration-300'>
                            • {badge.announcement}
                            <IconArrowUpRight stroke={2} size={16} className='group-hover:text-blue-500 group-hover:rotate-45 transition duration-300' />
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
            <FadeUp
              controlled
              duration={0.8}
              distance={40}
              className="w-full"
            >
              <div className="mt-10 w-full">
                <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">

                  {buttons?.primary && (
                    <Link
                      href={buttons.primary.url}
                      className="block w-full sm:w-auto"
                    >
                      <Button className="h-12 w-full px-8 sm:w-auto">
                        {buttons.primary.text}
                        <IconChevronRight stroke={2} />
                      </Button>
                    </Link>
                  )}

                  {buttons?.secondary && (
                    <Link
                      href={buttons.secondary.url}
                      className="block w-full sm:w-auto"
                    >
                      <Button
                        variant="outline"
                        className="h-12 w-full px-8 sm:w-auto"
                      >
                        <IconBulb stroke={2} />
                        {buttons.secondary.text}
                      </Button>
                    </Link>
                  )}

                </div>
              </div>
            </FadeUp>

          </Stagger>

        </div>
    </section>
  )
}


export { Hero }