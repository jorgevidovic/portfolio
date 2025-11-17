import Container from '@/app/components/Container'
import CounterService from '@/app/components/CounterService'
import TimeLine from '@/app/components/TimeLine'
import TransitionPage from '@/app/components/TransitionPage'
import React from 'react'

const AboutPage = () => {
    return (
        <>
            <TransitionPage />
            <Container>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center md:text-left md:mt-10 font-bold md:px-20 mb-8'>
                    Experiencia
                </h1>
                <CounterService />
                <TimeLine/>
            </Container>
        </>
    )
}

export default AboutPage