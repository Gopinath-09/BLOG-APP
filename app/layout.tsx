import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const inter = Outfit({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
})

export const metadata: Metadata = {
  title: 'Blog each one',
  description: 'Generated by NEXT.js',
  keywords:''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
