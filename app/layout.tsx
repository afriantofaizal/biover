import { Science_Gothic, Rajdhani, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/src/lib/utils"
import { Toaster } from "@/components/ui/sonner"

const scienceGothic = Science_Gothic({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth antialiased",
        fontMono.variable,
        scienceGothic.variable,
        rajdhani.variable,
        "font-sans",
      )}
    >
      <body>
        <ThemeProvider>
          {children}
          <Toaster             
            position="top-center"
            richColors
          />
        </ThemeProvider>
      </body>
    </html>
  )
}