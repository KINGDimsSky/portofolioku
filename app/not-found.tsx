"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-canvas text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="flex flex-col items-center gap-6 max-w-[480px]">
        {/* Technical Eyebrow */}
        <span className="font-mono text-xs tracking-widest text-brand font-medium uppercase">
          [ERROR // 404_PAGE_NOT_FOUND]
        </span>

        {/* Editorial Title */}
        <h1 className="font-sans text-4xl sm:text-5xl font-normal tracking-[-0.03em] leading-tight">
          Requested resource is offline.
        </h1>

        {/* Explanation */}
        <p className="font-sans text-base text-ash leading-relaxed">
          The requested system node could not be resolved. Verify the query parameters 
          and routing address or return to index.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="h-11 px-8 rounded-full bg-white text-ink font-sans text-sm font-semibold hover:bg-brand hover:text-ink transition-colors flex items-center justify-center mt-4"
        >
          Return to Index
        </Link>
      </div>
    </main>
  )
}
