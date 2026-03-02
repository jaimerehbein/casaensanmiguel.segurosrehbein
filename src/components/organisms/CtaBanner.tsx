"use client";

import React from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../atoms/Button';

export const CtaBanner = () => {
    const handleCTA = () => {
        window.open(`https://wa.me/56942797068?text=Hola,%20me%20interesa%20iniciar%20el%20proceso%20de%20compra%20de%20la%20casa%20en%20Llico%20650.`, '_blank');
    };

    return (
        <section className="relative py-24 md:py-32 bg-brand-primary overflow-hidden">
            {/* Cinematic ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-5 sm:px-8 max-w-5xl relative z-10">
                <div className="glass-dark border border-brand-gold/20 rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-center shadow-[0_0_80px_rgba(212,175,55,0.1)] relative overflow-hidden group">

                    {/* Hover light effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold mb-8 text-xs sm:text-sm tracking-[0.2em] font-medium uppercase border border-brand-gold/20">
                        <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                        Oportunidad Vigente
                    </span>

                    <h2 className="font-serif text-[2.5rem] leading-tight md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        Asegure <span className="gradient-gold font-light italic">su Inversión</span> hoy
                    </h2>

                    <p className="text-lg md:text-xl text-brand-secondary/90 max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
                        Contáctenos directamente. Nuestro equipo de asesores inmobiliarios está listo para gestionar su visita y asesorarle en cada paso del cierre.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-stretch sm:items-center">
                        <Button
                            size="lg"
                            variant="whatsapp"
                            onClick={handleCTA}
                            className="w-full sm:w-auto font-medium tracking-wide gap-3 shadow-2xl shadow-brand-accent/20 rounded-xl"
                        >
                            <MessageCircle size={20} />
                            Contactar Asesor por WhatsApp
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto text-white/80 hover:text-brand-gold hover:border-brand-gold/50 rounded-xl gap-3"
                            onClick={() => window.location.href = 'mailto:frederick@segurosrehbein.cl'}
                        >
                            <Phone size={20} />
                            Solicitar Llamada
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
