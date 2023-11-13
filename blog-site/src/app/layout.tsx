import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

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
      <div className ="text-center bg-slate-800 p-8 my-6 rounded-md" >
        <Link href="/">
          <h1 className="text-3xl text-white" >Jared's Blog</h1>
        </Link>
        <p className='text-slate-300'>Welcome to my tech blog</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
        <h3>Developed by Jared</h3>
      </div>
    </footer>
  );
    
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <div className="mx-auto max-w-2xl px-6">
        {header}
        {children}
        {footer}
      </div>
      
    </html>
  )
}
