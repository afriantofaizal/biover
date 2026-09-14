'use client'

import * as React from 'react'
import {
  IconFlag,
  IconShieldCheck,
} from '@tabler/icons-react'
import { FadeUp, Stagger } from '@/components/motion/'

interface IndustryItem {
  title: string
  description: string
  icon: React.ReactNode
}

interface IndustryBasicProps {
  eyebrow?: string
  title?: string
  items: IndustryItem[]
}

interface IndustryProps extends IndustryBasicProps {}

type Props = Partial<IndustryProps>

const defaultProps: IndustryProps = {
  eyebrow: 'BIOVER INDUSTRIES',
  title: 'Industry Verticals',
  items: [
    {
      title: 'National Identity Registers',
      description:
        "Our biometric solution for national identity registers leverages the world's top-rated biometric algorithms to identify and verify the identity of individuals with no chance for manipulation.",
      icon: <IconFlag stroke={2} />,
    },
    {
      title: 'Trusted Voter Registration',
      description:
        'Biover has years of experience in providing trusted, scalable, and fully customizable solutions for creating biometric registries for elections and other citizen services. Leveraging top-performing fingerprint and face recognition algorithms, we can guarantee secure and fast identification and verification.',
      icon: <IconShieldCheck stroke={2} />,
    },
  ],
}

const IndustriesSection = (props: Props) => {
  const {
    eyebrow,
    title,
    items,
  } = {
    ...defaultProps,
    ...props,
  }

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">

        {/* =====================================================
         * SECTION HEADER
         * ===================================================== */}
        <Stagger 
          stagger={0.18} delay={0.05} amount={0.3}
          className="mb-16 flex w-full flex-col items-end text-right"
        >

          {/* EYEBROW */}
          <FadeUp controlled duration={0.7} distance={24} >
            <div className="mb-6 flex flex-col items-center gap-1.5">
              <span className="h-px w-44 translate-x-3 bg-linear-to-r from-transparent via-blue-500 to-transparent" />

              <span className="text-lg font-medium uppercase text-blue-500">
                {eyebrow}
              </span>

              <span className="-translate-x-3 h-px w-44 bg-linear-to-r from-transparent via-blue-500 to-transparent" />
            </div>
          </FadeUp>

          {/* TITLE */}
          <FadeUp controlled duration={0.8} distance={28} >
            <h2
              className="
                font-heading
                text-3xl
                font-medium
                tracking-tight
                sm:text-4xl
                md:text-5xl
              "
            >
              {title}
            </h2>
          </FadeUp>
        </Stagger>

        {/* =====================================================
         * INDUSTRY CARDS
         * ===================================================== */}
        <Stagger 
          stagger={0.2} delay={0.1} amount={0.25}
          className="mx-auto mt-16 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2"
        >
          {items.map((item) => (
            <FadeUp key={item.title} controlled duration={0.8} distance={36} className="h-full" >
              <IndustryCard
                item={item}
              />
            </FadeUp>
          ))}
        </Stagger>

      </div>
    </section>
  )
}

/* =============================================================
 * INDUSTRY CARD
 * ============================================================= */

interface IndustryCardProps {
  item: IndustryItem
}

const IndustryCard = ({ item }: IndustryCardProps) => {
  const cardRef = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const card = cardRef.current

    if (!card) return

    const rect = card.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="
        group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-blue-500/10 p-8 transition-all duration-300
      "
    >
      {/* =====================================================
       * CURSOR BORDER EFFECT
       * ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: `
            radial-gradient(
              180px circle at var(--mouse-x) var(--mouse-y),
              rgba(59, 130, 246, 0.8),
              transparent 100%
            )
          `,
        }}
      />

      {/* =====================================================
       * INNER BACKGROUND
       * ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0.5
          rounded-xl
          bg-background
        "
      />

      {/* =====================================================
       * CARD CONTENT
       * ===================================================== */}
      <div className="relative z-10">

        {/* ICON */}
        <div
          className="
            mb-6
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-lg
            bg-blue-500/10
            text-blue-500
            transition-all
            duration-300
            group-hover:bg-linear-to-b group-hover:from-blue-500 group-hover:to-blue-600
            group-hover:text-white
          "
        >
          {item.icon}
        </div>

        {/* TITLE */}
        <h3
          className="
            text-lg
            font-semibold
            transition-colors
            duration-300
          "
        >
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-2
            leading-tight
            font-medium
            text-muted-foreground
          "
        >
          {item.description}
        </p>

      </div>
    </div>
  )
}

export { IndustriesSection }
