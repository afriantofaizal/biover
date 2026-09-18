'use client'

import Image, { StaticImageData } from 'next/image'
import assets from '@/src/assets/assets';
import { FadeIn, FadeUp, Stagger } from '@/components/motion/'

interface Image {
  src: StaticImageData
  alt: string
}
interface HeroBiometricIdentificationProps {
    eyebrow: string
    heading: string
    description: string
    image: Image
}

type Props = Partial<HeroBiometricIdentificationProps>

const defaultProps: HeroBiometricIdentificationProps = {
    image: {
        src: assets.biometric_identification_kit1,
        alt: 'Biometric Identification Kit',
    },
    eyebrow: 'VERIFICATION SYSTEMS',
    heading: 'Biometric Identification Kit',
    description: 'An all-in-one, Windows-based biometric tablet device',
}

const HeroBiometricIdentification = (props: Props) => {
    const {
        image,
        eyebrow,
        heading,
        description,
        } = {
        ...defaultProps,
        ...props,
    }

    return (
        <section className="relative overflow-hidden pt-48 md:pt-56">
            {/* Background Image */} 
            <FadeIn
                duration={1.2} delay={0.15} amount={0.2}
                className="
                absolute
                right-0
                top-0
                z-0
                w-3/5
                max-w-7xl
                mask-l-from-80% mask-l-to-90% mask-b-from-0% mask-b-to-80% mask-radial-from-0% mask-radial-to-90% mask-radial-at-right
                "
            >
                <Image
                src={image.src}
                alt={image.alt}
                priority
                className="block h-auto w-full"
                />
            </FadeIn>

            {/* =====================================================
             * CONTENT 
             * ===================================================== */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">

                <Stagger
                stagger={0.18} delay={0.05} amount={0.3}
                className="mb-16 flex w-full flex-col items-start text-left">

                    {/* EYEBROW */}
                    <FadeUp controlled duration={0.7} distance={24} >
                        <div className="mb-6 flex flex-col items-center gap-1.5">
                            <span className="h-px w-52 bg-linear-to-r from-transparent via-blue-500 to-transparent translate-x-3" />
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
                            <span className="h-px w-52 bg-linear-to-r from-transparent via-blue-500 to-transparent -translate-x-3" />
                        </div>
                    </FadeUp>

                    {/* HEADING */}
                    <FadeUp controlled duration={0.85} distance={32} >
                        <h2 className="font-semibold text-4xl lg:text-5xl leading-tight">
                            {heading}
                        </h2>
                    </FadeUp>

                    {/* DESCRIPTION */} 
                    <FadeUp controlled duration={0.8} distance={28} >
                        <p className="mt-5 max-w-2xl text-pretty text-muted-foreground font-medium lg:text-xl">
                            {description}
                        </p>
                    </FadeUp>

                </Stagger>

                {/* ===================================================== 
                * DIVIDER 
                * ===================================================== */}
                <FadeIn duration={0.9} delay={0.15} amount={0.2} >
                    <div className="mx-auto my-32 flex w-full items-center justify-center gap-4">
                        <span className="h-px w-full bg-linear-to-r from-transparent via-blue-500 to-transparent" />
                    </div>
                </FadeIn>
                
            </div>
        </section>
    )
}

export { HeroBiometricIdentification }