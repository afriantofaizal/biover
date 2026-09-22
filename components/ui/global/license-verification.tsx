'use client'

import Image, { StaticImageData } from 'next/image'
import assets from '@/src/assets/assets';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { StarfieldBackground } from '@/components/ui/star-field'
import { cn } from '@/src/lib/utils'
import { FadeIn, FadeUp, Stagger } from '@/components/motion/'

interface Image {
  src: StaticImageData
  alt: string
  url: string
}
interface LicenseVerificationBasicProps {
    eyebrow?: string
    heading?: string
    description?: string
    logo: Image
}

interface LicenseVerificationProps extends LicenseVerificationBasicProps {}

type Props = Partial<LicenseVerificationProps>

const defaultProps: LicenseVerificationBasicProps = {
    eyebrow: 'product verification',
    heading: 'Do you already own one of our products?',
    description: 'Check the product license key you own below.',
    logo: {
        src: assets.logo_dark,
        alt: 'BIOVER',
        url: '/',
    },
}

const LicenseVerification = (props: Props) => {
  const {
    eyebrow,
    heading,
    description,
    logo,
  } = {
    ...defaultProps,
    ...props,
  }

  return (
    <section className='relative min-h-screen overflow-hidden'>
        {/* ===================================================== 
        * BACKGROUND 
        * ===================================================== */}
        <StarfieldBackground />

        {/* ===================================================== 
        * CONTENT 
        * ===================================================== */}
        <div className='relative z-10 flex flex-col min-h-screen items-center justify-center px-6 md:px-8 lg:px-14 xl:px-20'>
            <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">

                {/* ===================================================== 
                * HEADER 
                * ===================================================== */}
                <Stagger 
                className="flex flex-col items-center" 
                stagger={0.16} delay={0.05} amount={0.3} >

                    {/* Eyebrow */}
                    <FadeUp controlled duration={0.7} distance={24} >
                        <div className="mb-6 flex flex-col items-center gap-1.5">
                            <span className="h-px w-48 bg-linear-to-r from-transparent via-blue-500 to-transparent translate-x-3" />
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
                            <span className="h-px w-48 bg-linear-to-r from-transparent via-blue-500 to-transparent -translate-x-3" />
                        </div>
                    </FadeUp>

                    {/* Heading */}
                    <FadeUp controlled duration={0.8} distance={30} >
                        <h2
                        className="
                            text-3xl
                            font-medium
                            tracking-tight
                            sm:text-4xl
                            md:text-5xl
                            leading-tight
                            text-pretty
                        "
                        >
                        {heading}
                        </h2>
                    </FadeUp>

                    {/* Description */}
                    <FadeUp controlled duration={0.8} distance={24} >
                        <p
                        className="
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

                {/* ===================================================== 
                * VERIFICATION FORM
                * ===================================================== */}
                <FadeUp duration={0.9} delay={0.35} distance={32} amount={0.25} className="w-full max-w-3xl mx-auto" >
                    <form className="mt-6">
                        <FieldSet>
                            <FieldGroup>
                                <div className='flex gap-4'>
                                    <Field>
                                        <Input className={cn('h-12 px-4 lg:text-lg font-medium')} id='verification' type='text' placeholder='Enter license key...'  />
                                    </Field>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="h-12 px-8 uppercase"
                                    >
                                        Check
                                    </Button>
                                </div>
                            </FieldGroup>
                        </FieldSet>
                    </form>
                </FadeUp>

                {/* ===================================================== 
                * POWERED BY
                * ===================================================== */}
                <Stagger
                stagger={0.12} delay={0.05} amount={0.25}
                className='flex flex-col gap-2 items-center mt-8'>
                    <FadeUp controlled duration={0.65} distance={16} >
                        <p className='text-sm'>Powered by</p>
                    </FadeUp>
                    
                    <FadeIn duration={0.9} delay={0.05} amount={0.25} >
                        <Link
                            href={logo.url}
                            className="flex items-center gap-2"
                        >

                            <Image
                            src={logo.src}
                            className={cn(
                                'h-auto max-h-8 w-auto',
                            )}
                            alt={logo.alt}
                            />

                        </Link>
                    </FadeIn>

                </Stagger>
            </div>
        </div>
    </section>
  )
}

export { LicenseVerification }