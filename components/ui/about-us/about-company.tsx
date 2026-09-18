'use client'

import Image, { StaticImageData } from 'next/image'
import { IconCircleCheck } from '@tabler/icons-react';
import assets from '@/src/assets/assets';
import { FadeIn, FadeUp, Stagger } from '@/components/motion/'

interface Image {
  src: StaticImageData
  alt: string
}
interface AboutCompanyProps {
    image: Image
    eyebrow: string
    heading: string
    description: string
    capability: string[]
    className?: string
}

type Props = Partial<AboutCompanyProps>

const defaultProps: AboutCompanyProps = {
    image: {
        src: assets.about,
        alt: 'About Biover',
    },
    eyebrow: 'about biover',
    heading: 'Architecting the Standard for Sovereign Security',
    description: 'For over a decade, BIOVER has stood at the intersection of deep cryptography and high-throughput biometric research. As an independent provider, we remain uncompromised by proprietary ecosystems, delivering flexible, open-standard AFIS/ABIS architectures. From regional border control programs to large-scale national identity voter registries, our kits are battle-tested in the most demanding physical and network conditions.',
    capability: [
        'NIST-compliant fingerprint, iris, and facial matching engines',
        'Decentralized offline biometric registration with secure hardware kits',
        'Zero-Trust design guarantees extreme privacy and security compliance',
    ],
}

const AboutCompany = (props: Props) => {
    const {
        image,
        eyebrow,
        heading,
        description,
        capability,
        } = {
        ...defaultProps,
        ...props,
    }

    return (
        <section className='relative overflow-hidden py-24 md:py-32'>
            <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">
                <div className="mx-auto flex flex-col gap-12 lg:flex-row items-center">

                    {/* === * IMAGE * === */}
                    <FadeIn
                          duration={1.2} delay={0.2} amount={0.25}
                          className='basis-1/3'
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            priority
                        />
                    </FadeIn>

                    {/* === * HEADER * === */}
                    <Stagger
                        stagger={0.16} delay={0.05} amount={0.25}
                       className="basis-2/3 flex w-full flex-col items-start text-left"
                    >

                        {/* EYEBROW */}
                        <FadeUp controlled duration={0.7} distance={24} >
                            <div className="mb-6 flex flex-col items-center gap-1.5">
                                <span className="h-px w-32 bg-linear-to-r from-transparent via-blue-500 to-transparent translate-x-3" />
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
                                <span className="h-px w-32 bg-linear-to-r from-transparent via-blue-500 to-transparent -translate-x-3" />
                            </div>
                        </FadeUp>

                        {/* HEADING */}
                        <FadeUp controlled duration={0.85} distance={32} >
                            <h3
                                className="
                                text-3xl
                                font-medium
                                md:text-5xl
                                leading-tight
                                "
                            >
                                {heading}
                            </h3>
                        </FadeUp>

                        {/* DESCRIPTION */}
                        <FadeUp controlled duration={0.8} distance={28} >
                            <p
                            className="
                                mt-5
                                text-base
                                font-medium
                                text-muted-foreground
                                md:text-lg
                                text-balance
                            "
                            >
                                {description}
                            </p>
                        </FadeUp>

                        {/* === * CAPABILITIES * === */}
                        <Stagger
                            stagger={0.14} delay={0.05} amount={0.2}
                            className="mt-8 space-y-4">
                                {capability.map((item) => (
                                    <FadeUp key={item} controlled duration={0.65} distance={20} >
                                        <li className="flex items-center gap-4 font-medium leading-5">
                                            <IconCircleCheck stroke={1} className='text-blue-500'/>

                                            <p>{item}</p>
                                        </li>
                                    </FadeUp>
                                ))}
                        </Stagger>
                    </Stagger>

                </div>
            </div>
        </section>  
    )
}

export { AboutCompany }