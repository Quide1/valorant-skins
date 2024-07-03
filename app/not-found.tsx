import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <main className='flex items-center justify-center bg-blue-900 min-h-[95vh]'>
    <div className="flex flex-col items-center justify-center gap-4 p-6">
        <h1 className="uppercase text-xl font-bold text-justify">Oops! Page Not Found</h1>
        <picture>
            <img
                className="max-w-full sm:max-w-screen-sm md:max-w-md lg:max-w-lg xl:max-w-2xl w-full h-auto"
                src="/yoruLose.png"
                alt="Yoru lose"
            />
        </picture>
        <Link href="/" className="text-red-600 uppercase  font-bold text-2xl border-b border-red-600"
        >Back to home</Link>
    </div>
</main>
  )
}

export default NotFound
