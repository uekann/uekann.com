import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const spartanRegular = localFont({
  src: '../../public/fonts/Spartan/Spartan-Regular.ttf',
  variable: '--font-spartan-regular',
})

const spartanExtraBold = localFont({
  src: '../../public/fonts/Spartan/Spartan-ExtraBold.ttf',
  variable: '--font-spartan-extrabold',
})

export const metadata: Metadata = {
  title: 'Uekann',
  description: 'Uekann Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`min-h-screen bg-black text-white text-[1.5rem] ${spartanRegular.variable} ${spartanExtraBold.variable} font-spartan-regular`}>
        {children}
      </body>
    </html>
  )
}