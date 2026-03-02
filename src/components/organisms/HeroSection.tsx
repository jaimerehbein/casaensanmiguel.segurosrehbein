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
                {/* Premium Overlay Gradient - Cinematic Dark Mode */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-black/20 md:bg-gradient-to-t md:from-brand-primary md:via-brand-primary/60 md:to-black/30"></div>
            </div>

            <div ref={textRef} className="relative z-10 w-full px-5 sm:px-8 text-left md:text-center md:container md:mx-auto max-w-5xl text-white">
                <div className="hero-element inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-brand-gold/90 border border-brand-gold/20 mb-8 text-xs sm:text-sm tracking-[0.2em] font-medium uppercase animate-float">
                    <MapPin size={16} className="text-brand-gold" />
                    <span>Llico 650, San Miguel</span>
                </div>

                <h1 className="hero-element font-serif text-[3rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold mb-8 tracking-tight text-white drop-shadow-2xl">
                    Oportunidad en <br className="hidden md:block" /><span className="gradient-gold font-light italic">San Miguel Clásico</span>
                </h1>

                <p className="hero-element text-lg sm:text-xl md:text-2xl text-brand-secondary mb-12 max-w-2xl md:mx-auto leading-relaxed text-balance font-light tracking-wide">
                    Amplia propiedad con gran terreno y capacidad para 3 vehículos. Diseño tradicional con living y comedor separados, cocina con comedor de diario y un anexo independiente en un sector tranquilo y consolidado.
                </p>

                <div className="hero-element flex flex-col sm:flex-row gap-5 justify-start md:justify-center items-stretch sm:items-center">
                    <Button
                        size="lg"
                        variant="whatsapp"
                        onClick={handleCTA}
                        className="w-full sm:w-auto font-medium tracking-wide gap-3 group shadow-2xl shadow-brand-accent/20 rounded-none rounded-tr-2xl rounded-bl-2xl"
                    >
                        Atención Inmediata
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto text-white/80 hover:text-brand-gold hover:border-brand-gold/50 rounded-none rounded-tl-2xl rounded-br-2xl"
                        onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Descubrir Propiedad
                    </Button>
                </div>
            </div>
        </section>
    );
};
