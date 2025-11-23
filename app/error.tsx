'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col">
      <section className="px-6 py-20 md:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Something went wrong
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
              We encountered an unexpected error. Please try again or return to the home page.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={reset} variant="outline" size="lg">
                Try again
              </Button>
              <Button asChild variant="default" size="lg">
                <Link href="/">Go home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}