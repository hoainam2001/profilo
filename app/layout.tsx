import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './provider'
import NavbarCom from './components/Navbar/Navbar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <NavbarCom />
          {children}
        </Providers>
      </body>
    </html>
  )
}
