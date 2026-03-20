"use client";

import Container from '@/app/components/Container'
import CounterService from '@/app/components/CounterService'
import TimeLine from '@/app/components/TimeLine'
import TransitionPage from '@/app/components/TransitionPage'
import { useLang } from '@/app/lib/LangContext'
import React from 'react'

const AboutPage = () => {
    const { tr } = useLang();

    return (
        <>
            <TransitionPage />
            <Container>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center md:text-left md:mt-10 font-extrabold mb-6'>
                    {tr("about_title")}
                </h1>
                <CounterService />
                <TimeLine />
            </Container>
        </>
    )
}

export default AboutPage
