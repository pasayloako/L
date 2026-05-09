import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Supabase Authentication App',
  description: 'Complete authentication system with Supabase and Next.js',
  keywords: 'authentication, supabase, nextjs, login, register',
  authors: [{ name: 'Your Name' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
