import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hennessy Dynasty - GTA 5 RP Family",
  description: "ჰენესების დინასტია - Nexus RP-ის ოჯახი",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ka">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
