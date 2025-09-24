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
  title: "Lady Justice Initiative",
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
  icons: {
    icon: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1758706743/istockphoto-1140705087-170667a_fx7mpq.jpg",
    shortcut: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1758706743/istockphoto-1140705087-170667a_fx7mpq.jpg",
    apple: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1758706743/istockphoto-1140705087-170667a_fx7mpq.jpg",
  },
  openGraph: {
    title: "Lady Justice Initiative - Empowering Women, Shaping Justice",
    description:
      "A student-led organization promoting gender equality, women's empowerment, legal literacy, rights awareness, and SRHR.",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ddkkfumkl/image/upload/v1758706743/istockphoto-1140705087-170667a_fx7mpq.jpg",
        width: 1200,
        height: 630,
        alt: "Lady Justice Initiative - Lady Justice Statue",
      },
    ],
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
