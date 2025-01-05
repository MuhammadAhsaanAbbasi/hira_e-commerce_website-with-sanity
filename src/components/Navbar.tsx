"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const links=[
  {name:"Home",href:"/"},
  {name:"Men",href:"/Men"},
  {name:"Women",href:"/Women"}, 
  {name:"Teens",href:"/Teens"}, 
]

const Navbar = () => {

  const pathName = usePathname();
  return (
    <header className="mb-8 border-b ">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">

        <Link href={"/"}>
        <h1 className='text-2xl md:text-4xl font-bold'> Next 
          <span className="text-primary">E-Shop</span>
        </h1>
        </Link>

        {/*Navbar starts here*/}

        <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
          {links.map((link, index)=>(
          <div key={index}>
            {pathName === link.href ? (
              <Link href={link.href} className='text-lg font-semibold text-primary'>
                {link.name}</Link>
            ):(
              <Link href={link.href} className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'>
                {link.name}</Link>
            )}
            
          </div>
          ))}

        </nav>
        {/*Navbar ends here*/}


        {/*Button starts here*/}

        <div className='flex divide-x border-r sm:border-l'>
          <Button variant={"outline"} className='flex flex-col gap-y-1.5 w-12 h-12 sm:w-20 sm:h-20 md:w-24 rounded-none'>
            <ShoppingBag/>
            <span className='hidden text-xs font-semibold sm:block text-gray-500'>
              cart
            </span>
          </Button>

        </div>
      </div>
    </header>
  );
}

export default Navbar
