import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Atsuyoshi-N | Portfolio',
  description: 'portfolio',
  openGraph: {
    title: 'Atsuyoshi-N | Portfolio',
    description: 'portfolio',
    type: 'website',
    url: 'https://atsuyoshi-n.github.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
