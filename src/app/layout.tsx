import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientProviders from '@/components/ClientProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CrackVerbal - GMAT Prep & MBA Admissions Consulting',
  description: 'Master the GMAT with personalized strategy. Get mentored by GMAT experts and achieve your dream score.',
  keywords: 'GMAT, MBA, test prep, admissions consulting, business school',
  openGraph: {
    title: 'CrackVerbal - GMAT Prep & MBA Admissions Consulting',
    description: 'Master the GMAT with personalized strategy',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
