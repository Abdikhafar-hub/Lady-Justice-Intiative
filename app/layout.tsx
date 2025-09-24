import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lady Justice Initiative - Empowering Women, Shaping Justice",
  description:
    "A student-led organization promoting gender equality, women's empowerment, legal literacy, rights awareness, and Sexual & Reproductive Health and Rights (SRHR).",
  generator: "v0.app",
  keywords: [
    "gender equality",
    "women empowerment",
    "legal literacy",
    "SRHR",
    "student organization",
    "justice",
    "advocacy",
  ],
  authors: [{ name: "Lady Justice Initiative" }],
  openGraph: {
    title: "Lady Justice Initiative - Empowering Women, Shaping Justice",
    description:
      "A student-led organization promoting gender equality, women's empowerment, legal literacy, rights awareness, and SRHR.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
