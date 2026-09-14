'use client'

import * as React from 'react'
import { IconEyeSearch, IconTargetArrow } from '@tabler/icons-react';
import { FadeUp, Stagger } from '@/components/motion/'

interface Item {
    title: string
    caption: string
    icon: React.ReactNode
}
interface VisionMissionProps {
    eyebrow?: string
    heading?: string
    description?: string
    items: Item[]
}

type Props = Partial<VisionMissionProps>

const defaultProps: VisionMissionProps = {
    eyebrow: 'core principles',
    heading: 'Our Foundation',
    description: 'A double-pronged commitment to shape global standards while providing rock-solid real-world security today.',
    items: [
        {
            title: 'Our Vision',
            caption: 'To shape the absolute future of secure global identity verification. We envision a world where governments, organizations, and citizens connect with friction-free, secure, and privacy-respecting biometrics that eliminate identity fraud globally.',
            icon: <IconEyeSearch stroke={2} />,
        },
        {
            title: 'Our Mission',
            caption: 'To construct and deploy cutting-edge, high-trust biometric systems that secure state institutions and power enterprises. We promise strict NIST alignment, uncompromising reliability, and independent architectures tailored for sovereignty.',
            icon: <IconTargetArrow stroke={2} />,
        },
    ],
}

const VisionMission = (props: Props) => {
    const {
        eyebrow,
        heading,
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
                          <span className="h-px w-40 bg-linear-to-r from-transparent via-blue-500 to-transparent translate-x-3" />
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
                          <span className="h-px w-40 bg-linear-to-r from-transparent via-blue-500 to-transparent -translate-x-3" />
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
                          {heading}
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
                * CARDS
                * ===================================================== */}
                <Stagger
                  stagger={0.2} delay={0.1} amount={0.25}
                  className="mx-auto mt-16 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2"
                >
                    {items.map((item) => (
                      <FadeUp key={item.title} controlled duration={0.8} distance={36} className="h-full" >
                        <Card
                            key={item.title}
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
 * CARD
 * ============================================================= */

interface CardProps {
  item: Item
}

const Card = ({ item }: CardProps) => {
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
        group
        relative
        overflow-hidden
        border
        rounded-2xl
        bg-blue-500/10
        p-8
        transition-all
        duration-300
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
          {item.caption}
        </p>

      </div>
    </div>
  )
}

export { VisionMission }