import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Jared's Blog",
  description: 'NextJS Practice Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div>
        <h1>Jared's Blog</h1>
        <p>Welcom to my tech blog</p>
        <br />
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Developed by Jared</h3>
      </div>
    </footer>
  );
    
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      {header}
      {children}
      {footer}
    </html>
  )
}
