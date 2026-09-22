'use client'

import * as React from 'react'
import { useTheme } from "next-themes";
import Image, { StaticImageData } from 'next/image'
import assets from '@/src/assets/assets'
import { cn } from "@/src/lib/utils";
import { ThemeToggleButton, useThemeTransition, }from '@/components/ui/theme-toggle';

interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}
interface FooterLogo {
  url: string;
  light: StaticImageData;
  dark: StaticImageData;
  alt: string;
  title: string;
  className?: string;
}
interface FooterProps {
  logo?: FooterLogo
  description?: string
  copyright?: string
  sections?: FooterSection[]
  className?: string
}

const Footer = ({
  logo = {
    url: '/',
    light: assets.logo_light,
    dark: assets.logo_dark,
    alt: 'Logo',
    title: 'Logo',
  },

    description = 'We are an independent provider of trusted biometric solutions for governments and enterprises.',

    sections = [
        {
        title: "Products",
            links: [
                { name: "Biometric Registration Kit", href: "/products/biometric-registration-kit" },
                { name: "Biometric Identification Kit", href: "/products/biometric-identification-kit" },
                { name: "Biover ABIS", href: "/products/biover-abis" },
                { name: "AFIS/ABIS for Criminal Investigation", href: "/products/afis-abis-for-criminal-investigation" },
                { name: "Super Biover Matcher 8.8", href: "/products/super-biover-matcher-88" },
                { name: "Super Biover Matcher 4.2", href: "/products/super-biover-matcher-42" },
                { name: "ADINT Mass Collection", href: "/products/adint-mass-collection" },
                { name: "ADINT Data Optimization", href: "/products/adint-data-optimization" },
            ],
        },
        {
        title: "Company",
            links: [
                { name: "Solutions", href: "/solutions" },
                { name: "About Us", href: "/about-us" },
                { name: "Contact Sales", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Use", href: "/terms-of-use" },
            ],
        },
    ],

    copyright = '© 2026 Biover. All rights reserved',

  className,
}: FooterProps) => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const { theme, setTheme } = useTheme()
    const { startTransition } = useThemeTransition()

    React.useEffect(() => {
    setMounted(true);
    }, []);

    const logoSrc =
    mounted && resolvedTheme === "dark"
        ? logo.dark
        : logo.light;

    const MAX_SECTIONS = 2;
    const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

    const toggleTheme = () => {
  startTransition(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  })
}

        return (
        <section className={cn("pt-8 lg:pt-32 pb-8 border border-t-blue-500/20 bg-primary-foreground/50", className)}>
            <div className='mx-auto px-6 md:px-24 lg:px-40'>
                <footer>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div className='max-w-sm mb-8 lg:mb-0'>
                            <div className='flex items-center lg:justify-start'>
                                {/* Logo */}
                                <a href={logo.url} className="flex items-center gap-2">
                                    <Image
                                    src={logoSrc}
                                    className={cn("h-auto max-h-12 w-auto", logo.className)}
                                    alt={logo.alt}
                                    />
                                </a>
                            </div>
                            <p className="mt-8 font-medium">
                                {description}
                            </p>
                        </div>
                        <div className='grid grid-cols-2 gap-8'>
                            {visibleSections.map((section, sectionIdx) => (
                                <div key={sectionIdx}>
                                    <h3 className="mb-4 text-sm font-semibold tracking-tight">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                        key={linkIdx}
                                        className="font-medium hover:text-blue-500 transition-colors"
                                        >
                                        <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 flex justify-between gap-4 border-t border-border pt-8">
                        <p className='text-sm font-medium text-muted-foreground'>{copyright}</p>
                        <ThemeToggleButton
                            onClick={toggleTheme}
                            variant="circle-blur"
                            start="bottom-right"
                        />
                    </div>  
                </footer>
            </div>
        </section>
    );
}

export { Footer };