// app/register/page.js
import AuthForm from '@/components/AuthForm'
import { Suspense } from 'react'

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AuthForm type="register" />
    </Suspense>
  )
}
