import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HomeBtn = () => {
  return (
    <>
       <Link
          href={"/"}
          target={"_self"}
          className="text-foreground  rounded-full flex items-center justify-center custom-bg top-4 left-4 fixed w-fit self-start"
          aria-label={"home"}
          name={"home"}
        >
          <span className="relative  w-14 h-14 p-4  hover:text-accent">
            <Home className='w-full h-auto' strokeWidth={1.5}/>
            <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

            
          </span>
        </Link>
    </>
  )
}

export default HomeBtn
