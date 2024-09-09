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
                <h1 className='text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 font-bold md:px-20'>
                    Experiencia
                </h1>
                <CounterService />
                <TimeLine/>
            </Container>
        </>
    )
}

export default AboutPage