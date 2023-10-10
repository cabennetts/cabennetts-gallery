import './globals.css'
import type { Metadata } from 'next'
import { Barlow_Condensed } from 'next/font/google'

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] },)

export const metadata: Metadata = {
  title: 'CABENNETTS Gallery',
  description: 'By Caleb Bennetts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        {children}
      </body>
    </html>
  )
}
