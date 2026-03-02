"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '../atoms/Button';
import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';

export const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create a premium fade-up animation for the content
            gsap.fromTo(".hero-element",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
            );

            // Slight zoom effect on the background image
            gsap.fromTo(".bg-image",
                { scale: 1.05 },
                { scale: 1, duration: 2, ease: "power2.out" }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleCTA = () => {
        window.open(`https://wa.me/56942797068?text=Hola,%20me%20interesa%20la%20casa%20en%20Llico%20650,%20San%20Miguel.`, '_blank');
    };

    return (
        <section ref={containerRef} className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-end pb-24 md:pb-0 md:justify-center items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/images/hero.webp"
                    alt="Casa en venta San Miguel Exterior"
                    fill
                    priority
                    quality={100}
                    className="object-cover object-center md:object-[center_30%] bg-image"
                />
                {/* Premium Overlay Gradient - Smoother fade to black at bottom for mobile readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent md:bg-gradient-to-t md:from-brand-primary/90 md:via-brand-primary/50 md:to-transparent"></div>
            </div>

            <div ref={textRef} className="relative z-10 w-full px-5 sm:px-8 text-left md:text-center md:container md:mx-auto max-w-5xl text-white">
                <div className="hero-element inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 border border-white/20 mb-6 text-sm tracking-wider font-medium animate-float">
                    <MapPin size={16} className="text-brand-accent" />
                    <span>Llico 650, San Miguel</span>
                </div>

                <h1 className="hero-element text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
                    Oportunidad Única en <br className="hidden md:block" />Sector Tradicional
                </h1>

                <p className="hero-element text-lg sm:text-xl md:text-2xl text-gray-200/90 mb-10 max-w-2xl md:mx-auto leading-relaxed text-balance font-light">
                    Casa de 200m² con gran terreno, 3 dormitorios y estacionamiento para 3 vehículos. Ideal para familias o proyectos.
                </p>

                <div className="hero-element flex flex-col sm:flex-row gap-4 justify-start md:justify-center items-stretch sm:items-center">
                    <Button
                        size="lg"
                        variant="whatsapp"
                        onClick={handleCTA}
                        className="w-full sm:w-auto font-bold gap-3 group shadow-2xl shadow-brand-accent/20"
                    >
                        Agendar Visita por WhatsApp
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto text-white hover:text-brand-primary"
                        onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Ver Detalles de la Propiedad
                    </Button>
                </div>
            </div>
        </section>
    );
};
