"use client"
import Link from 'next/link'
import React from 'react'
import MotionTransition from './TransitionComponent'
import { itemsNavbar } from '@/data'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const router = usePathname()

    return (
        <MotionTransition position='right' className='fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-8'>
            <nav aria-label="Navegación principal">
                <div className='flex items-center justify-center gap-1 px-3 py-1.5 rounded-full bg-surface/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'>
                    {
                        itemsNavbar.map((item => (
                            <div key={item.id}
                            className={`px-3 py-2 rounded-full cursor-pointer transition-all duration-200 hover:bg-secondary/20 focus-within:ring-2 focus-within:ring-secondary ${router === item.link ? 'bg-secondary shadow-[0_0_12px_rgba(245,116,28,0.4)]' : ''}`}>
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
