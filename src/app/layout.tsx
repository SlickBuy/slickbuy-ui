'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from './ThemeRegistry'
import Footer from './components/footer/footer'
import NavBar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Supplement store',
  description: 'Supplement store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <ThemeRegistry options={{ key: 'mui' }}>
          <NavBar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  )
}
