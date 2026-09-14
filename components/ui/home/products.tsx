'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import {
  IconArrowUpRight,
} from '@tabler/icons-react'
import { cn } from '@/src/lib/utils'
import assets from '@/src/assets/assets'
import { FadeUp, Stagger } from '@/components/motion/'

/* =========================================================
 * TYPES
 * ========================================================= */

type ProductLayout =
  | 'featured'
  | 'wide'
  | 'small'
  | 'tall'
  | 'medium'

interface Product {
  title: string
  description: string
  image: StaticImageData
  url: string

  layout: ProductLayout

  /**
   * Position image.
   *
   * Example:
   * "center"
   * "top"
   * "bottom"
   * "left"
   * "right"
   * "50% 30%"
   */
  imagePosition?: string
}

interface ProductSectionProps {
  eyebrow?: string
  title?: string
  description?: string

  products?: Product[]

  className?: string
}

/* =========================================================
 * DEFAULT PRODUCTS
 * ========================================================= */

const defaultProducts: Product[] = [
  /* ---------------------------------------------------------
   * FEATURED
   * --------------------------------------------------------- */

  {
    title: 'Biometric Registration Kit',
    description:
      'A mobile registration office, packed in one rugged case',
    image: assets.biometric_registration_kit,
    url: '/products/biometric-registration-kit',
    layout: 'featured',
    imagePosition: 'center',
  },

  /* ---------------------------------------------------------
   * TOP RIGHT / WIDE
   * --------------------------------------------------------- */

  {
    title: 'Biometric Identification Kit',
    description:
      'An all-in-one, Windows-based biometric tablet device',
    image: assets.biometric_identification_kit,
    url: '/products/biometric-identification-kit',
    layout: 'wide',
    imagePosition: 'center',
  },

  /* ---------------------------------------------------------
   * TOP RIGHT / SMALL
   * --------------------------------------------------------- */

  {
    title: 'Biover ABIS',
    description:
      'Multimodal biometric system for large-scale fingerprint matching, iris and face recognition',
    image: assets.biover_abis,
    url: '/products/biover-abis',
    layout: 'small',
    imagePosition: 'center',
  },

  {
    title: 'AFIS/ABIS for Criminal Investigation',
    description:
      'Forensic-Grade Identity Intelligence Platform',
    image: assets.afis_abis,
    url: '/products/afis-abis',
    layout: 'small',
    imagePosition: 'center',
  },

  /* ---------------------------------------------------------
   * BOTTOM LEFT / TALL
   * --------------------------------------------------------- */

  {
    title: 'Super Biover Matcher 8.8',
    description:
      'Next-Generation Neural Biometric Matching',
    image: assets.super_biover_matcher88,
    url: '/products/super-biover-matcher-8-8',
    layout: 'tall',
    imagePosition: 'center',
  },

  /* ---------------------------------------------------------
   * BOTTOM CENTER / MEDIUM
   * --------------------------------------------------------- */

  {
    title: 'Super Biover Matcher 4.2',
    description:
      'Proven Enterprise Matching Foundation',
    image: assets.super_biover_matcher42,
    url: '/products/super-biover-matcher-4-2',
    layout: 'medium',
    imagePosition: 'center',
  },

  {
    title: 'ADINT Mass Collection',
    description:
      'Capturing massive data on a global scale remotely with six months of historical insights',
    image: assets.adint_mass_collection,
    url: '/products/adint-mass-collection',
    layout: 'medium',
    imagePosition: 'center',
  },

  /* ---------------------------------------------------------
   * BOTTOM RIGHT / TALL
   * --------------------------------------------------------- */

  {
    title: 'ADINT Data Optimization',
    description:
      "Once data is collected into the system, Biover's experts begin to study, analyze, and enhance the compiled data",
    image: assets.adint_data_optimization,
    url: '/products/adint-data-optimization',
    layout: 'tall',
    imagePosition: 'center',
  },
]

/* =========================================================
 * IMAGE OVERLAY
 * ========================================================= */

function ProductOverlay() {
  return (
    <>
      {/* Base dark overlay */}
      <div
        className="
          absolute
          inset-0
          bg-background/20
        "
      />

      {/* Bottom gradient */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-t
          from-background
          via-background/45
          to-background/5
        "
      />

      {/* Subtle left gradient */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-background/25
          via-transparent
          to-transparent
        "
      />

      {/* Hover blue tint */}
      <div
        className="
          absolute
          inset-0
          bg-blue-600/0
          transition-colors
          duration-500
          group-hover:bg-blue-600/5
        "
      />
    </>
  )
}

/* =========================================================
 * PRODUCT CARD
 * ========================================================= */

interface ProductCardProps {
  product: Product
  featured?: boolean
}

function ProductCard({
  product,
  featured = false,
}: ProductCardProps) {
  return (
    <Link
      href={product.url}
      className={cn(
        'group relative block h-full overflow-hidden rounded-2xl',
        'bg-card',
        'border border-border/40',
        'transition-all duration-500 ease-out',
        'hover:border-blue-500',
      )}
    >
      {/* =====================================================
       * IMAGE
       * ===================================================== */}

      <Image
        src={product.image}
        alt={product.title}
        fill
        priority={featured}
        sizes="
          (max-width: 768px) 100vw,
          (max-width: 1280px) 50vw,
          700px
        "
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.04]
        "
        style={{
          objectPosition:
            product.imagePosition ?? 'center',
        }}
      />

      {/* =====================================================
       * OVERLAY
       * ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-background/20
        "
      />

      {/* Bottom gradient */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-t
          from-background
          from-0%
          via-background/50
          via-25%
          to-transparent
          to-50%
        "
      />

      {/* Left subtle gradient */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-background/25
          via-transparent
          to-transparent
        "
      />

      {/* Hover blue tint */}
      <div
        className="
          absolute
          inset-0
          transition-colors
          duration-500
          group-hover:bg-blue-600/5
        "
      />

      {/* =====================================================
       * CONTENT
       * ===================================================== */}

      <div
        className={cn(
          'relative z-10 flex h-full flex-col',
          featured
            ? 'justify-start p-6 md:p-7'
            : 'justify-end p-5 md:p-6',
        )}
      >
        <div
          className={cn(
            featured
              ? 'max-w-[90%]'
              : 'max-w-xl',
          )}
        >
          {/* =================================================
           * TITLE
           * ================================================= */}

          <h3
            className="
              font-heading
              text-lg
              font-semibold
              leading-tight
              tracking-tight
              text-foreground

              transition-colors
              duration-300

              group-hover:text-blue-500

              md:text-xl
            "
          >
            {product.title}
          </h3>

          {/* =================================================
           * DESCRIPTION
           * ================================================= */}

          <p
            className="
              mt-2
              max-w-xl
              text-sm
              font-medium
              text-muted-foreground

              transition-colors
              duration-300

              group-hover:text-foreground

              md:text-[15px]
            "
          >
            {product.description}
          </p>
        </div>
      </div>

      {/* =====================================================
       * ARROW
       * ===================================================== */}

      <div
        className="
          absolute
          right-5
          top-5
          z-20

          bg-blue-500/10 
          dark:bg-blue-950/50
          border
          border-blue-500/20
          rounded-md

          flex
          size-8
          shrink-0
          items-center
          justify-center

          opacity-0
          translate-y-2
          scale-90

          transition-all
          duration-300
          ease-out

          group-hover:opacity-100
          group-hover:translate-y-0
          group-hover:scale-100
        "
      >
        <IconArrowUpRight
          stroke={2}
          className="
            text-blue-500
            transition-transform
            duration-500
            group-hover:-translate-y-1
            group-hover:translate-x-1
          "
        />
      </div>
    </Link>
  )
}

/* =========================================================
 * PRODUCT SECTION
 * ========================================================= */

export function ProductSection({
  eyebrow = 'PRODUCTS',
  title = 'Selected Products',
  description =
    'Biover is a trusted provider of biometric solutions based in the European Union for governments and enterprises. BIOVER algorithm consistently ranks among the fastest and most accurate in fingerprint and face recognition.',
  products = defaultProducts,
  className,
}: ProductSectionProps) {
  /* ---------------------------------------------------------
   * FIND PRODUCTS
   * --------------------------------------------------------- */

  const featured = products.find(
    (product) => product.layout === 'featured',
  )

  const wide = products.find(
    (product) => product.layout === 'wide',
  )

  const small = products.filter(
    (product) => product.layout === 'small',
  )

  const tall = products.filter(
    (product) => product.layout === 'tall',
  )

  const medium = products.filter(
    (product) => product.layout === 'medium',
  )

  return (
    <section
      id='products'
      className={cn(
        'relative overflow-hidden py-24 md:py-32',
        className,
      )}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-6
          md:px-8
          lg:px-12
        "
      >
        {/* ===================================================
         * HEADER
         * =================================================== */}
          {/* Heading */}
          <Stagger
            className="mb-16 flex w-full flex-col items-start text-left"
            stagger={0.18} delay={0.05} amount={0.3}
          >
            {/* EYEBROW */}
            <FadeUp controlled duration={0.7} distance={24} >
              <div className="mb-6 flex flex-col items-center gap-1.5">
                  <span className="h-px w-24 bg-linear-to-r from-transparent via-blue-500 to-transparent translate-x-3" />
                      <span
                          className="
                              text-lg
                              items-center
                              font-medium
                              uppercase
                              text-blue-500
                          "
                          >
                          {eyebrow}
                      </span>
                  <span className="h-px w-24 bg-linear-to-r from-transparent via-blue-500 to-transparent -translate-x-3" />
              </div>
            </FadeUp>

            {/* TITLE */}
            <FadeUp controlled duration={0.8} distance={28} >
              <h2
                className="
                  text-left
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

            {/* DESCRIPTION */}
            <FadeUp controlled duration={0.8} distance={28} >
              <p
                className="
                  text-left
                  mt-5
                  max-w-3xl
                  text-base
                  font-medium
                  text-muted-foreground
                  md:text-lg
                "
              >
                {description}
              </p>
            </FadeUp>
          </Stagger>

        {/* ===================================================
         * BENTO GRID
         * =================================================== */}

        <Stagger
          stagger={0.15} delay={0.05} amount={0.2}
          className="
            grid
            grid-cols-1
            gap-3

            md:grid-cols-2

            lg:grid-cols-14
            lg:auto-rows-63
            lg:gap-3.5
          "
        >
          {/* =================================================
           * FEATURED
           *
           * 7 / 14 columns
           * 2 rows
           * ================================================= */}

          {featured && (
            <FadeUp
              controlled duration={0.9} distance={40}

              className="
                min-h-130

                md:col-span-2

                lg:col-span-7
                lg:row-span-2
                lg:min-h-0
              "
            >
              <ProductCard
                product={featured}
                featured
              />
            </FadeUp>
          )}

          {/* =================================================
           * RIGHT SIDE
           *
           * 7 / 14 columns
           * ================================================= */}

          <div
            className="
              flex
              min-h-130
              flex-col
              gap-3.5

              md:col-span-2

              lg:col-span-7
              lg:row-span-2
              lg:min-h-0
            "
          >
            {/* -----------------------------------------------
             * WIDE CARD
             * ----------------------------------------------- */}

            {wide && (
              <FadeUp 
                controlled duration={0.8} distance={40}
                className="h-63 shrink-0"
              >
                <ProductCard product={wide} />
              </FadeUp>
            )}

            {/* -----------------------------------------------
             * TWO SMALL CARDS
             * ----------------------------------------------- */}

            <Stagger
              stagger={0.15} delay={0.05} amount={0.2}
              className="
                grid
                min-h-0
                flex-1
                grid-cols-2
                gap-3.5
              "
            >
              {small.map((product) => (
                <FadeUp key={product.title} controlled duration={0.75} distance={32} >
                  <ProductCard
                    key={product.title}
                    product={product}
                  />
                </FadeUp>

              ))}
            </Stagger>
          </div>

          {/* =================================================
           * BOTTOM SECTION
           *
           * 5 / 5 / 4 columns
           * ================================================= */}

          {/* -----------------------------------------------
           * LEFT — 5 COLUMNS
           * ----------------------------------------------- */}

          {tall[0] && (
            <FadeUp
              controlled duration={0.85} distance={40}
              className="
                min-h-130

                md:col-span-2

                lg:col-span-4
                lg:row-span-2
                lg:min-h-0
              "
            >
              <ProductCard product={tall[0]} />
            </FadeUp>
          )}

          {/* -----------------------------------------------
           * Two stacked cards
           * ----------------------------------------------- */}

            <Stagger
              stagger={0.15} delay={0.05} amount={0.2} 
              className="
                flex
                min-h-130
                flex-col
                gap-3.5

                md:col-span-1

                lg:col-span-5
                lg:row-span-2
              "
            >
              {medium.map((product) => (
                
                  <FadeUp
                    controlled duration={0.8} distance={36}
                    key={product.title}
                    className="
                      min-h-62.5
                      flex-1
                    "
                  >
                    <ProductCard product={product} />
                  </FadeUp>
              ))}
            </Stagger>

          {/* -----------------------------------------------
           * RIGHT — 4 COLUMNS
           * ----------------------------------------------- */}

          {tall[1] && (
            <FadeUp
              className="
                min-h-130

                md:col-span-1

                lg:col-span-5
                lg:row-span-2
                lg:min-h-0
              "
            >
              <ProductCard product={tall[1]} />
            </FadeUp>
          )}
        </Stagger>
      </div>
    </section>
  )
}

export default ProductSection