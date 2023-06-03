"use client";

import Link from 'next/link';
import React, { useEffect } from 'react'

const Error = ({ error, reset }: { error: Error, reset: () => void }) => {

    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div className="min-h-[calc(100vh-153px)] flex items-center justify-center bg-gray-100">
            <div className="max-w-lg p-8 mx-5 md:mx-0 bg-white shadow-lg rounded-lg inline-flex flex-col gap-4 text-center">
                <h1 className="text-3xl font-bold text-red-500">Oops! Something went wrong.</h1>
                <p className="text-gray-700">We apologize for the inconvenience.</p>
                <Link href="/" className='border text-slate-900 rounded-lg px-3 py-2'>Please try again</Link>
            </div>
        </div>
    )
}

export default Error