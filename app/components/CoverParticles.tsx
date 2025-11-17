"use client"

import React from 'react'
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const CoverParticles = () => {
    const [init, setInit] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile devices
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);

        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Reduce particles on mobile for better performance
    const particleCount = isMobile ? 30 : 80;
    const particleSpeed = isMobile ? 0.5 : 1;

    return (
        init &&
        <div className="w-[0px]">
            <Particles
                id="tsparticles"
                options={{
                    fpsLimit: isMobile ? 30 : 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: !isMobile,
                                mode: "push",
                            },
                            onHover: {
                                enable: !isMobile,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: particleSpeed,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: particleCount,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}

export default CoverParticles