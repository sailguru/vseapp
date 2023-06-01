import './globals.css'
import { Inter } from 'next/font/google'
import { Helmet } from "react-helmet";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: process.env.META_APPLICATION_NAME + ' - ' + process.env.META_APPLICATION_DESCRIPTION,
  description: process.env.META_APPLICATION_DESCRIPTION,
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
