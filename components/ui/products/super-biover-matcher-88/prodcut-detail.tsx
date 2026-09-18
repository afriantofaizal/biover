'use client'

import Image, { StaticImageData } from 'next/image'
import assets from '@/src/assets/assets';
import { IconBolt, IconClipboardText } from '@tabler/icons-react';
import { FadeIn, FadeUp, Stagger, } from '@/components/motion/'

interface ProductCapability {
  title: string
}

interface ProductUseCase {
  title: string
}

interface ProductSectionData {
  image: {
    src: StaticImageData
    alt: string
  }
  overview: string
  capabilities: ProductCapability[]
  useCases: ProductUseCase[]
}

interface ProductSuperBioverMatcher88Props {
  product?: ProductSectionData
}

type Props = Partial<ProductSuperBioverMatcher88Props>

const defaultProduct: ProductSectionData = {
    image: {
        src: assets.super_biover_matcher88_1,
        alt: 'Super Biover Matcher 8.8',
    },
    overview: 'Super Biover Matcher 8.8 represents the pinnacle of biometric matching technology, combining traditional minutiae-based algorithms with deep neural network matching for unprecedented accuracy. Features hardware-accelerated neural processing, real-time adaptive learning, and sub-millisecond response times for large-scale 1:N searches across multi-billion record databases.',
    capabilities: [
        {
        title: 'Deep neural network hybrid matching',
        },
        {
        title: 'Hardware-accelerated tensor processing',
        },
        {
        title: 'Real-time adaptive learning from corrections',
        },
        {
        title: 'Multi-modal fusion scoring engine',
        },
        {
        title: 'Configurable threshold per use-case',
        },
        {
        title: 'Support for degraded and partial biometrics',
        },
    ],
    useCases: [
        {
        title: 'National ABIS backend',
        },
        {
        title: 'High-security facilities',
        },
        {
        title: 'Large-scale deduplication',
        },
        {
        title: 'Intelligence matching',
        },
    ],
}

const ProductSuperBioverMatcher88 = (props: Props) => {
    const { product } = {
    product: defaultProduct,
    ...props,
  }

  if (!product) return null

  return (
    <section className='relative overflow-hidden pb-24 md:pb-32'>
        <div className='mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12'>

            {/* =================================================
            * PRODUCT OVERVIEW
            * ================================================= */}
            <Stagger className="w-full" stagger={0.16} delay={0.05} amount={0.25} >

                {/* EYEBROW */}
                <FadeUp controlled duration={0.7} distance={24} >
                    <div className="mb-6">
                        <h4
                            className="
                                text-2xl
                                font-semibold
                                bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent
                            "
                            >
                            Product Overview
                        </h4>
                    </div>
                </FadeUp>

                {/* OVERVIEW */}
                <FadeUp controlled duration={0.8} distance={28} >
                    <p className="max-w-5xl text-base font-medium leading-tight md:text-lg text-balance">
                        {product.overview}
                    </p>
                </FadeUp>

            </Stagger>

            <div className='flex flex-col gap-8 justify-items-center lg:flex-row lg:gap-12'>

                {/* =====================================================
                * PRODUCT IMAGE
                * ===================================================== */}
                <FadeIn
                duration={1.1} delay={0.15} amount={0.25}
                className="flex w-full items-center justify-center lg:w-1/2">
                    <div className="relative w-full">
                        <Image
                            src={product.image.src}
                            alt={product.image.alt}
                            priority
                            className="h-auto w-full object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </FadeIn>

                {/* =====================================================
                * PRODUCT INFORMATION
                * ===================================================== */}
                <div className="w-full lg:w-1/2">

                    {/* =================================================
                    * KEY CAPABILITIES
                    * ================================================= */}
                    <Stagger
                    stagger={0.12} delay={0.05} amount={0.2}
                    className="mt-14">

                        {/* HEADER */}
                        <FadeUp controlled duration={0.7} distance={24} >
                            <div className="mb-5 flex items-center gap-3 text-blue-500">
                                <IconBolt
                                size={20}
                                stroke={1.5}
                                />

                                <span className="font-medium uppercase tracking-wide">
                                    Key Capabilities
                                </span>
                            </div>
                        </FadeUp>


                        {/* CAPABILITY LIST */}

                        <Stagger
                        stagger={0.1} delay={0.05} amount={0.2}
                        className="flex flex-col gap-4">
                            {product.capabilities.map((capability, index) => (
                                <FadeUp key={`${capability.title}-${index}`} controlled duration={0.65} distance={20} >
                                    <div
                                        className="
                                        flex
                                        min-h-12
                                        items-center
                                        gap-3
                                        rounded-lg
                                        border
                                        border-blue-500/40
                                        px-4
                                        py-3
                                        transition-colors
                                        hover:border-blue-500/60
                                        "
                                    >

                                        <span className="text-sm md:text-base font-medium">
                                            {capability.title}
                                        </span>
                                    </div>
                                </FadeUp>
    
                            ))}
                        </Stagger>
                    </Stagger>

                    {/* =================================================
                    * USE CASES
                    * ================================================= */}
                    <Stagger
                    stagger={0.12} delay={0.05} amount={0.2}
                    className="mt-14">

                        {/* HEADER */}
                        <FadeUp controlled duration={0.7} distance={24} >
                            <div className="mb-5 flex items-center gap-3 text-blue-500">
                                <IconClipboardText
                                size={20}
                                stroke={1.5}
                                />

                                <span className="font-medium uppercase tracking-wide">
                                    Use Cases
                                </span>
                            </div>
                        </FadeUp>

                        {/* USE CASE LIST */}
                        <Stagger
                        stagger={0.1} delay={0.05} amount={0.2}
                        className="flex flex-wrap gap-4 space-y-4">
                            {product.useCases.map((useCase, index) => (
                                <FadeUp key={`${useCase.title}-${index}`} controlled duration={0.65} distance={16} >
                                    <span
                                        className="
                                        rounded-lg
                                        bg-primary-foreground
                                        border
                                        border-border
                                        px-3.5
                                        py-2.5
                                        text-sm
                                        font-medium
                                        transition-colors
                                        hover:border-blue-500/60
                                        "
                                    >
                                        {useCase.title}
                                    </span>
                                </FadeUp>

                            ))}
                        </Stagger>
                    </Stagger>

                </div>

            </div>
        </div>
    </section>
  )
}

export { ProductSuperBioverMatcher88 }