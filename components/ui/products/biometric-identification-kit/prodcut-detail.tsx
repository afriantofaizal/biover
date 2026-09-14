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

interface ProductBiometricIdentificationProps {
  product?: ProductSectionData
}

type Props = Partial<ProductBiometricIdentificationProps>

const defaultProduct: ProductSectionData = {
    image: {
        src: assets.biometric_identification_kit2,
        alt: 'Biometric Identification Kit',
    },
    overview: 'A compact verification terminal for high-throughput identity confirmation at service delivery points. Connects to central ABIS via encrypted tunnel, providing sub-second verification results for cashless payments, physical access, and entitlement programs. Optimized for banking, healthcare, and government service delivery environments.',
    capabilities: [
        {
        title: 'Contactless fingerprint',
        },
        {
        title: 'Anti-spoofing PAD Level 2',
        },
        {
        title: 'Integrated NFC chip reader',
        },
        {
        title: 'Real-time match result display',
        },
        {
        title: 'Webhook event streaming',
        },
        {
        title: 'White-label branded UI',
        },
    ],
    useCases: [
        {
        title: 'Social welfare disbursement',
        },
        {
        title: 'Banking KYC',
        },
        {
        title: 'Hospital patient ID',
        },
        {
        title: 'Physical access control',
        },
    ],
}

const ProductBiometricIdentification = (props: Props) => {
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
                    <div className="mb-6 flex w-full flex-col items-start text-left">
                        <div className="flex flex-col items-center gap-1.5">
                            <span className="h-px w-46 bg-linear-to-r from-transparent via-blue-500 to-transparent translate-x-3" />
                                <span
                                    className="
                                        text-lg
                                        font-medium
                                        uppercase
                                        text-blue-500
                                    "
                                    >
                                    Product Overview
                                </span>
                            <span className="h-px w-46 bg-linear-to-r from-transparent via-blue-500 to-transparent -translate-x-3" />
                        </div>
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

export { ProductBiometricIdentification }