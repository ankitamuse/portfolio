import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ankita Sharma - Senior Software Engineer',
  description: 'Experienced Software Engineer with 8 years of expertise in backend development, data engineering, and machine learning solutions.',
  keywords: ['Software Engineer', 'Backend Developer', 'Data Engineering', 'Machine Learning', 'Python', 'Next.js'],
  authors: [{ name: 'Ankita Sharma' }],
  openGraph: {
    title: 'Ankita Sharma - Senior Software Engineer',
    description: 'Experienced Software Engineer with 8 years of expertise in backend development, data engineering, and machine learning solutions.',
    url: 'https://ankitamuse.github.io/ankitamuse',
    siteName: 'Ankita Sharma Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankita Sharma - Senior Software Engineer',
    description: 'Experienced Software Engineer with 8 years of expertise in backend development, data engineering, and machine learning solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
