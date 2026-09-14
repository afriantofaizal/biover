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
import { FadeUp, Stagger } from '@/components/motion/'

interface GetInTouchBasicProps {
    eyebrow?: string
    title?: string
    description?: string
}

interface GetInTouchProps extends GetInTouchBasicProps {}

type Props = Partial<GetInTouchProps>

const defaultProps: GetInTouchBasicProps = {
    eyebrow: 'Get in Touch',
    title: 'Start the Conversation',
    description: "Challenge or limitation facing your identity infrastructure? We’d love to explore how Biover can help you achieve breakthrough identity certainty at scale.",
}

const GetInTouchSection = (props: Props) => {
    const {
        eyebrow,
        title,
        description,
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
        <section className="relative overflow-hidden pb-24 md:pb-32">
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
                
            </div>
        </section>
    )
}

export { GetInTouchSection }