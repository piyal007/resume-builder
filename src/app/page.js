// import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='grid justify-items-center'>
      <button className='btn bg-blue-400 rounded py-2 px-4 mt-24'>
        <Link className='text-white text-xl' href="/dashboard">Resume Builder</Link>
      </button>
    </div>
  )
}
