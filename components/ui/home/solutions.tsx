'use client'

import Image, { StaticImageData } from 'next/image'
import assets from '@/src/assets/assets'
import { FadeIn, FadeUp, Stagger } from '@/components/motion/'

/* =========================================================
 * TYPES
 * ========================================================= */

interface SolutionItem {
  number: string
  tags: string[]
  title: string
  description: string
  image: StaticImageData | string
  imageAlt: string
}
interface SolutionBasicProps {
  eyebrow?: string
  title?: string
  description?: string
  items: SolutionItem[]
}

interface SolutionProps extends SolutionBasicProps {}

type Props = Partial<SolutionProps>

const defaultProps: SolutionProps = {
  eyebrow: 'BIOVER SOLUTIONS',
  title: 'Built for Every Mission',
  items: [
    {
        number: '01',
        tags: ['Registration', 'Issuance', 'Verification'],
        title: 'Citizen Identity Solutions for All',
        description:
        'We put people at the center of our solutions and provide fast, easy and secure identity verification and authentication – whenever the circumstances. With a Fit-For-Purpose mindset, we offer cost-effective, robust, multi-modal biometric hardware and software solutions to meet the rapidly changing identity demands of citizens.',
        image: assets.solution1,
        imageAlt: 'Citizen identity solutions',
    },
    {
        number: '02',
        tags: ['Frontline', 'Investigations', 'Forensic'],
        title: 'Citizen Identity Solutions for Law Enforcement Officials',
        description:
        'Our hardware and software solutions ensure law enforcement officials are well-equipped to manage biometric needs. Whether you are recording or gathering evidence, know your authentication laptops and kits are rugged, reliable, and will keep you connected to send findings from anywhere you need to. Accurate, time-saving, mobile, secure authentication and verification on the go is a combination of many key requirements for those in the security industry.',
        image: assets.solution2,
        imageAlt: 'Law enforcement identity solutions',
    },
    {
        number: '03',
        tags: ['Analytics', 'Intelligence', 'Law Enforcement'],
        title: 'Utilizing the Ad Tech Network in Order to Generate Intelligence Insights',
        description:
        'Our Intelligence Solutions are the ultimate answer to the challenges faced by Law Enforcement and Intelligence Agencies when conducting investigations on a global scale. Powered by Advanced Intelligence (ADINT), our cutting-edge platform empowers to delve deep into the digital world of mobile internet users, gathering essential data from across the globe. Our solution excels in conducting mass collections of mobile users’ digital footprints, or metadata, all done remotely and tailored to the specific country where the investigation is required.',
        image: assets.solution3,
        imageAlt: 'Intelligence solutions',
    },
  ],
}

const SolutionSection = (props: Props) => {
  const eyebrow = props.eyebrow ?? defaultProps.eyebrow
  const title = props.title ?? defaultProps.title
  const items = props.items ?? defaultProps.items ?? []

  return (
    <section id='solutions' className="relative overflow-hidden py-24 md:py-32">

        {/* === * HEADING * === */}
        <div className="mx-auto w-full max-w-7xl px-6  md:px-8 lg:px-12">
          
            <Stagger
              stagger={0.18} delay={0.05} amount={0.3}
              className="mx-auto max-w-3xl text-center"
            >
              {/* EYEBROW */}
              <FadeUp controlled duration={0.7} distance={24} >
                <div className="mb-6 flex flex-col items-center justify-center gap-1.5">
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
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 md:px-8 md:pt-32 lg:px-12">
            <div className="space-y-32 md:space-y-56 lg:space-y-60">
                {items.map((item, index) => (
                    <SolutionRow
                    key={item.number}
                    item={item}
                    reversed={index % 2 === 1}
                    />
                ))}
            </div>
        </div>

    </section>
  )
}

function SolutionRow({
  item,
  reversed,
}: {
  item: SolutionItem
  reversed: boolean
}) {

  return (
    <article className="relative">

      <div className="
          relative
          grid
          items-center
          gap-12
          lg:grid-cols-12
          lg:gap-10">


        {/* =================================================
         * IMAGE
         * ================================================= */}

          <FadeIn 
          duration={0.9} amount={0.25}
          className={`
            relative
            z-10
            lg:col-span-6
            ${reversed ? 'lg:order-2' : 'lg:order-1'}
          `}>
            <div className='
              relative
              aspect-3/2
              w-full
              overflow-hidden
              rounded-xl
              bg-muted'>

                <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                />
            </div>
          </FadeIn>

        {/* =================================================
         * CONTENT
         * ================================================= */}
        <Stagger
          stagger={0.14} delay={0.08} amount={0.25}
          className={`
            relative
            z-10
            lg:col-span-6
            ${reversed ? 'lg:order-1 lg:pr-10' : 'lg:order-2 lg:pl-4'}
          `}
        >
          {/* =================================================
           * NUMBER
           * ================================================= */}

          <FadeUp controlled duration={0.75} distance={28} >
            <span
              aria-hidden="true"
              className={`
                absolute
                -top-24
                font-heading
                text-8xl
                font-bold
                leading-none
                bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent
                lg:-top-28
                lg:text-9xl
                ${
                  reversed
                    ? 'left-0 lg:left-auto lg:right-0'
                    : 'left-0'
                }
              `}
            >
              {item.number}
            </span>
          </FadeUp>

          {/* =================================================
           * TEXT CONTENT
           * ================================================= */}

          <div className="relative pt-8 lg:pt-12">

            {/* Tags */}
            <FadeUp controlled duration={0.65} distance={20} >
              <div className="mb-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-md
                      border
                      border-border
                      bg-muted/50
                      px-3
                      py-1
                      font-medium
                      text-muted-foreground
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>

            {/* Heading */}
            <FadeUp controlled duration={0.75} distance={24} >
              <h3
                className="
                  max-w-xl
                  font-heading
                  text-2xl
                  lg:text-3xl
                  font-bold
                  tracking-tight
                  text-foreground
                "
              >
                {item.title}
              </h3>
            </FadeUp>

            {/* Description */}
            <FadeUp controlled duration={0.8} distance={24} >
              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  lg:text-base
                  text-balance
                  font-medium
                  text-muted-foreground
                "
              >
                {item.description}
              </p>
            </FadeUp>

          </div>
        </Stagger>
      </div>
    </article>
  )
}

export { SolutionSection }