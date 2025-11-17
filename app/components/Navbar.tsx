"use client"
import Link from 'next/link'
import React from 'react'
import MotionTransition from './TransitionComponent'
import { itemsNavbar } from '@/data'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const router = usePathname()

    return (
        <MotionTransition position='right' className='fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10'>
            <nav aria-label="Navegación principal">
                <div className='flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm'>
                    {
                        itemsNavbar.map((item => (
                            <div key={item.id} 
                            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary focus-within:ring-2 focus-within:ring-secondary ${router === item.link && 'bg-secondary'}`}>
                                <Link 
                                    href={item.link}
                                    aria-label={item.title}
                                    aria-current={router === item.link ? 'page' : undefined}
                                >
                                    {item.icon}
                                </Link>
                            </div>
                        )))
                    }
                </div>
            </nav>
        </MotionTransition>
    )
}

export default Navbar