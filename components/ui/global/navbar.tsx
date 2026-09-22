'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import assets from '@/src/assets/assets'
import { buttonVariants } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { IconMenu2 } from '@tabler/icons-react';
import { cn } from '@/src/lib/utils'


interface MenuItem {
  title: string
  url: string
  description?: string
  icon?: React.ReactNode
  items?: MenuItem[]
}
interface NavButton {
  text: string
  url: string
  icon?: React.ReactNode
}
interface GettingStarted {
  image: StaticImageData
  imageAlt: string
  title: string
  description: string
  button: NavButton
}
interface Buttons {
  primary?: NavButton
  secondary?: NavButton
}
interface NavbarProps {
  className?: string
  logo?: {
    url: string
    light: StaticImageData
    dark: StaticImageData
    alt: string
    className?: string
  }
  menu?: MenuItem[]
  buttons?: Buttons
  gettingStarted?: GettingStarted
}

const Navbar = ({
  logo = {
    url: '/',
    light: assets.logo_light,
    dark: assets.logo_dark,
    alt: 'logo',
  },

  menu = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Products',
      url: '#',
      items: [
        {
          title: "Biometric Registration Kit",
          description: "A mobile registration office, packed in one rugged case",
          url: "/products/biometric-registration-kit",
        },
        {
          title: "Biometric Identification Kit",
          description: "An all-in-one, Windows-based biometric tablet device",
          url: "/products/biometric-identification-kit",
        },
        {
          title: "Biover ABIS",
          description: "Multimodal biometric system for large-scale fingerprint matching, iris and face recognition",
          url: "/products/biover-abis",
        },
        {
          title: "AFIS/ABIS for Criminal Investigation",
          description: "Forensic-Grade Identity Intelligence Platform",
          url: "/products/afis-abis-for-criminal-investigation",
        },
        {
          title: "Super Biover Matcher 8.8",
          description: "Next-Generation Neural Biometric Matching",
          url: "/products/super-biover-matcher-88",
        },
        {
          title: "Super Biover Matcher 4.2",
          description: "Proven Enterprise Matching Foundation",
          url: "/products/super-biover-matcher-42",
        },
        {
          title: "ADINT Mass Collection",
          description: "Capturing massive data on a global scale remotely with six months of historical insights",
          url: "/products/adint-mass-collection",
        },
        {
          title: "ADINT Data Optimization",
          description: "Once data is collected into the system, Biover's experts begin to study, analyze, and enhance the compiled data",
          url: "/products/adint-data-optimization",
        },
      ],
    },
    {
      title: 'Solutions',
      url: '/solutions',
    },
    {
      title: 'About Us',
      url: '/about-us',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ],

  gettingStarted = {
    image: assets.biometric,
    imageAlt: 'Getting Started',
    title: 'Getting Started',
    description:
      "Challenge or limitation facing your identity infrastructure? We'd love to explore how Biover can help you achieve breakthrough identity certainty at scale.",
    button: {
      text: 'Contact Sales',
      url: '/contact',
    },
  },

  buttons= {
    secondary: {
      text: 'Product verification',
      url: '/license-verification',
    },
  },

  className,

}: NavbarProps) => {


  /* ===========================================
   * Theme
   * =========================================== */

  const { resolvedTheme } = useTheme()

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])


  const logoSrc =
    mounted && resolvedTheme === 'dark'
      ? logo.dark
      : logo.light

      return (
        <section
            className={cn(
            'fixed top-0 inset-x-0 z-50',
            'mx-4 w-auto max-w-5xl',
            'my-4 md:mx-auto',
            'border border-border',
            'bg-transparent p-3',
            'backdrop-blur-xl rounded-xl',
            className
        )}
        >

            {/* ===========================================
            * Desktop
            * =========================================== */}
            <div className="hidden lg:block">
                <nav className="flex items-center justify-between">
                    {/* Logo */}

                    <Link
                        href={logo.url}
                        className="flex items-center gap-2"
                    >

                        <Image
                        src={logoSrc}
                        className={cn(
                            'h-auto max-h-8 w-auto',
                            logo.className
                        )}
                        alt={logo.alt}
                        />

                    </Link>

                    {/* Navigation */}
                    <div className="flex items-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {menu.map((item) => (
                                <div key={item.title} >

                                    {renderMenuItem(item, gettingStarted)}

                                </div>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Verification Button */}
                    {buttons?.secondary && (
                    <Link
                        href={buttons.secondary.url}
                            className={cn(
                                buttonVariants({ size: 'lg' }),
                            )}
                    >
                        {buttons.secondary.text}
                    </Link>
                    )}
                </nav>
            </div>

            {/* ===========================================
            * Mobile
            * =========================================== */}

            <div className="block lg:hidden">


                <div className="flex items-center justify-between">


                {/* Logo */}

                <Link
                    href={logo.url}
                    className="flex items-center gap-2"
                >

                    <Image
                    src={logoSrc}
                    className={cn(
                        'h-auto max-h-8 w-auto',
                        logo.className
                    )}
                    alt={logo.alt}
                    />

                </Link>


                {/* Mobile Menu */}

                <Drawer showSwipeHandle>

                  <DrawerTrigger
                    render={
                      <button
                        className={cn(
                          buttonVariants({
                            variant: 'outline',
                            size: 'icon',
                          })
                        )}
                      />
                    }
                  >
                    <IconMenu2 stroke={2} />
                  </DrawerTrigger>

                  <DrawerContent className="bg-transparent backdrop-blur-2xl">

                    <DrawerHeader className='p-6'>
                      <DrawerTitle>
                        <Link
                          href={logo.url}
                          className="flex items-center gap-2"
                        >
                          <Image
                            src={logoSrc}
                            className={cn(
                              'h-auto max-h-8 w-auto',
                              logo.className
                            )}
                            alt={logo.alt}
                          />
                        </Link>
                      </DrawerTitle>
                    </DrawerHeader>

                    <div className="flex-1 scroll-fade overflow-y-auto p-6">

                      <Accordion className="flex w-full flex-col gap-4">
                        {menu.map((item) => (
                          renderMobileMenuItem(item)
                        ))}
                      </Accordion>

                    </div>

                    <DrawerFooter>
                      {buttons?.secondary && (
                        <Link
                          href={buttons.secondary.url}
                          className={cn(
                            buttonVariants({ size: 'lg' }),
                            'mt-6 w-full'
                          )}
                        >
                          {buttons.secondary.text}
                        </Link>
                      )}
                    </DrawerFooter>

                  </DrawerContent>

                </Drawer>

                </div>

            </div>
        </section>
      )
    }


/* ===========================================
 * Desktop Menu Item
 * =========================================== */

const renderMenuItem = (item: MenuItem, gettingStarted: GettingStarted) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="hover:text-blue-500">
          {item.title}
        </NavigationMenuTrigger>

        <NavigationMenuContent className="w-5xl p-4">
          <div className="grid grid-cols-[2fr_1fr] gap-2">
            {/* ===========================================
            * PRODUCTS
            * =========================================== */}
            <div className="grid grid-cols-2 gap-x-2">
                {item.items.map((subItem) => (
                    <NavigationMenuLink
                      key={subItem.title}
                      href={subItem.url}
                      className="
                          w-full
                          rounded-lg
                          p-4
                          transition-colors
                          hover:bg-blue-500/10
                          hover:ring ring-blue-500/50
                      "
                      >
                      <SubMenuLink item={subItem} />
                    </NavigationMenuLink>
                ))}
            </div>

            {/* ===========================================
            * GETTING STARTED
            * =========================================== */}
            <div className="rounded-xl border border-border/50 bg-accent/50 p-3">

                <div className="overflow-hidden rounded-md">
                    <Image
                      src={gettingStarted.image}
                      alt={gettingStarted.imageAlt}
                      className="h-auto w-full object-cover"
                    />
                </div>

                <div className="mt-4">
                    <h3 className="text-lg font-semibold">
                        {gettingStarted.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-tight text-muted-foreground">
                        {gettingStarted.description}
                    </p>

                    <Link href="/contact"
                        className={cn(
                            buttonVariants({ size: 'lg' }),
                            'mt-4 w-full'
                        )}
                    >
                        Contact Sales
                    </Link>
                </div>

            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="
          group inline-flex w-max
          items-center justify-center
          px-4 py-2
          text-base font-medium
          transition-colors
          hover:bg-transparent
          hover:text-blue-500
        "
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <div className="flex flex-col justify-start gap-1">
      <h5 className="text-sm font-semibold leading-tight">
        {item.title}
      </h5>

      {item.description && (
        <p className="text-sm font-medium leading-tight text-muted-foreground">
          {item.description}
        </p>
      )}
    </div>
  )
}

/* ===========================================
 * Mobile Menu Item
 * =========================================== */

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem
        key={item.title}
        value={item.title}
        className="border-b-0"
      >
        <AccordionTrigger
          className="
            py-0
            font-sans
            font-semibold
            hover:no-underline
            hover:text-blue-500
          "
        >
          {item.title}
        </AccordionTrigger>

        <AccordionContent className="mt-2 pb-0">
          <div className="flex flex-col">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                href={subItem.url}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-blue-500/10 hover:border border-blue-500/50 no-underline!"
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    )
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="
        text-md
        font-semibold
        transition-colors
        hover:text-blue-500
      "
    >
      {item.title}
    </Link>
  )
}


export { Navbar }