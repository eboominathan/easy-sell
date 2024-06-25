import Link from 'next/link'
import React from 'react'

export default function Header({font}:{font?:string}) {
  return (
    <header className='py-2 bg-gray-952'>
        <div className='max-w-[100rem] px-12 mx-auto flex justify-between'>
        <Link href="">
            <h1 className={`uppercase text-yellow-500 text-center py-2 ${font}`}>Easy Sell</h1>
        </Link>
        <Link href="/product/upload">Upload</Link>
        </div>
    </header>
  )
}
