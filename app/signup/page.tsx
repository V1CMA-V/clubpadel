import { SignupForm } from '@/components/signup-form'
import Image from 'next/image'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <Link href="/" className="mb-6 md:mb-8">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={50}
          className="h-auto w-32 md:w-80"
        />
      </Link>

      <div className="w-full max-w-sm md:max-w-4xl">
        <SignupForm />
      </div>
    </div>
  )
}
