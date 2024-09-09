"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

const Introduction = () => {
    return (
        <div className='z-20 w-full bg-darkBg/60'>
            <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
                <Image src="/jorgevidovic.png" alt='Jorge Vidovic' height='1000' width='1000' priority />

                <div className='flex flex-col justify-center max-w-md'>
                    <h3 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>
                        <TypeAnimation
                            sequence=
                            {[
                                "Desarrollador de software", 1000
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                            className='font-bold'
                        />
                    </h3>
                    <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>
                        Desarrollo software a medida, abarcando todos las áreas del proyecto.
                    </p>

                    <div className='flex item-center justify-center gap-3 md:justify-start md:gap-10'>
                        <Link
                            href="/projects"
                            className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50' >
                            Proyectos
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction