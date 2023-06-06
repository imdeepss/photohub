import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="px-8 md:px-20 pb-0 flex justify-center items-center border-t-2 bg-white dark:bg-black dark:text-grey text-black">
      <p className="text-sm hover:underline cursor-pointer p-4">
        <Link href="https://imdeepss.vercel.app">Designed & Built by imdeepss</Link>
      </p>
    </footer>
  )
}

export default Footer