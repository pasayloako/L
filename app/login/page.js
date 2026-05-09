// app/login/page.js
import AuthForm from '@/components/AuthForm'
import { Suspense } from 'react'

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AuthForm type="login" />
    </Suspense>
  )
}
