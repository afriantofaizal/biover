'use client'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  contactSchema,
  type ContactFormValues,
} from '@/src/lib/validations/contact'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import { FadeIn, FadeUp, Stagger } from '@/components/motion/'

interface ContactInfo {
  label: string
  value: string
  href?: string
}
interface ContactBasicProps {
    eyebrow?: string
    title?: string
    description?: string
    contactInfo: ContactInfo[]
}

interface ContactProps extends ContactBasicProps {}

type Props = Partial<ContactProps>

const defaultProps: ContactBasicProps = {
    eyebrow: 'get in touch',
    title: "Let’s build a world of instant trust.",
    description: 'Drop us a line, we will contact you within 24 hours',
    contactInfo: [
        {
            label: 'Head Quarters',
            value: '2753 Waverly Drive Los Angeles, California, 90039',
        },
        {
            label: 'Branch Office',
            value: '23 Neil Road, Singapore 088815',
        },
        {
            label: 'Email Address',
            value: 'cs@bioverbiometrics.com',
            href: 'mailto:cs@bioverbiometrics.com'
        },
    ],
}

const Contact = (props: Props) => {
    const {
        eyebrow,
        title,
        description,
        contactInfo,
        } = {
        ...defaultProps,
        ...props,
    }

  const [isSubmitting, setIsSubmitting] = useState(false)


  /* ===================================================
   * FORM
   * =================================================== */

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  })

    /* ===================================================
     * SUBMIT
     * =================================================== */

    const onSubmit = async (values: ContactFormValues) => {
        setIsSubmitting(true)

        try {
            // Sementara hanya simulasi submit
            console.log('Contact form values:', values)

            await new Promise((resolve) => setTimeout(resolve, 1000))

            form.reset()

            toast.success('Message sent successfully 🚀')
        } catch (error) {
            console.error('Contact form error:', error)

            toast.error('An error occurred; please try again')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="relative overflow-hidden py-32 md:py-48">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">
                <div className="mx-auto grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2">

                    {/* =====================================================
                    * CONTENT
                    * ===================================================== */}
                    <Stagger
                        stagger={0.18} delay={0.05} amount={0.3}
                        className="mb-16 flex w-full flex-col items-start text-left"
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

                        {/* TITLE */}
                        <FadeUp controlled duration={0.8} distance={28} >
                            <h1 className="max-w-5xl text-5xl font-semibold lg:text-6xl leading-tight text-pretty">
                                {title}
                            </h1>
                        </FadeUp>

                        {/* DESCRIPTION */}
                        <FadeUp controlled duration={0.85} distance={28} >
                            <p
                            className="
                                mt-5
                                max-w-3xl
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

                    </Stagger>

                    {/* ===================================================
                     * CONTACT FORM
                     * =================================================== */}

                    <Stagger
                        stagger={0.12} delay={0.15} amount={0.2}
                        className="w-full"
                    >
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-full"
                            autoComplete="on"
                        >
                            <FieldSet>
                                <FieldGroup>
                                    {/* Name & Company */}
                                    <FadeUp controlled duration={0.7} distance={24} >
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <Field>
                                                <FieldLabel htmlFor="name">
                                                    Name
                                                </FieldLabel>

                                                <Input
                                                    id="name"
                                                    placeholder="Your name"
                                                    {...form.register('name')}
                                                    autoComplete="name"
                                                />

                                                {form.formState.errors.name && (
                                                    <FieldError>
                                                        {form.formState.errors.name.message}
                                                    </FieldError>
                                                )}
                                            </Field>

                                            <Field>
                                                <FieldLabel htmlFor="company">
                                                    Company
                                                </FieldLabel>

                                                <Input
                                                    id="company"
                                                    placeholder="Company name"
                                                    {...form.register('company')}
                                                    autoComplete="off"
                                                />

                                                {form.formState.errors.company && (
                                                    <FieldError>
                                                        {form.formState.errors.company.message}
                                                    </FieldError>
                                                )}
                                            </Field>
                                        </div>
                                    </FadeUp>


                                    {/* Email & Phone */}
                                    <FadeUp controlled duration={0.7} distance={24} >
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <Field>
                                                <FieldLabel htmlFor="email">
                                                    Email
                                                </FieldLabel>

                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="you@company.com"
                                                    {...form.register('email')}
                                                    autoComplete="email"
                                                />

                                                {form.formState.errors.email && (
                                                    <FieldError>
                                                        {form.formState.errors.email.message}
                                                    </FieldError>
                                                )}
                                            </Field>

                                            <Field>
                                                <FieldLabel htmlFor="phone">
                                                    Phone
                                                </FieldLabel>

                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="e.g. +62 812 3456 7890"
                                                    {...form.register('phone')}
                                                    autoComplete="off"
                                                />

                                                {form.formState.errors.phone && (
                                                    <FieldError>
                                                        {form.formState.errors.phone.message}
                                                    </FieldError>
                                                )}
                                            </Field>
                                        </div>
                                    </FadeUp>


                                    {/* Message */}
                                    <FadeUp controlled duration={0.7} distance={24} >
                                        <Field>
                                            <FieldLabel htmlFor="message">
                                                Message
                                            </FieldLabel>

                                            <Textarea
                                                id="message"
                                                placeholder="Tell us how we can help..."
                                                className="h-32"
                                                {...form.register('message')}
                                                autoComplete="off"
                                            />

                                            {form.formState.errors.message && (
                                                <FieldError>
                                                    {form.formState.errors.message.message}
                                                </FieldError>
                                            )}
                                        </Field>
                                    </FadeUp>

                                    {/* Submit */}
                                    <FadeUp controlled duration={0.75} distance={20} >
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="mt-2 h-12 w-full uppercase"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </Button>
                                    </FadeUp>

                                </FieldGroup>
                            </FieldSet>
                        </form>
                    </Stagger>
                </div>
                <FadeIn duration={0.9} delay={0.15} amount={0.2} >
                    <div className="mx-auto my-32 flex w-full items-center justify-center gap-4">
                        <span className="h-px w-full bg-linear-to-r from-transparent via-blue-500 to-transparent" />
                    </div>
                </FadeIn>

                
                <Stagger
                stagger={0.2}
                delay={0.1}
                amount={0.2}
                className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-3"
                >
                {contactInfo.map((contact, index) => (
                    <FadeUp
                    key={contact.label}
                    controlled
                    duration={0.8}
                    distance={36}
                    className="flex h-full"
                    >
                    <div className="flex w-full items-start">
                        {/* CONTACT CONTENT */}
                        <div className="flex w-full flex-col">
                        {contact.href ? (
                            <Link
                            href={contact.href}
                            className="flex flex-col transition-opacity duration-300 hover:opacity-80"
                            >
                            <p className="mb-2 font-medium text-muted-foreground">
                                {contact.label}
                            </p>

                            <p className="text-base text-pretty leading-tight lg:text-lg">
                                {contact.value}
                            </p>
                            </Link>
                        ) : (
                            <>
                            <p className="mb-2 font-medium text-muted-foreground">
                                {contact.label}
                            </p>

                            <p className="text-base text-pretty leading-tight lg:text-lg">
                                {contact.value}
                            </p>
                            </>
                        )}
                        </div>

                        {/* SEPARATOR */}
                        {index < contactInfo.length - 1 && (
                        <Separator
                            orientation="vertical"
                            className="hidden h-16 shrink-0 md:block"
                        />
                        )}
                    </div>
                    </FadeUp>
                ))}
                </Stagger>

            </div>
        </section>
    )
}

export { Contact }