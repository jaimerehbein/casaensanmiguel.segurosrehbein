"use client";

import React from 'react';
import { Maximize, BedDouble, Bath, Car, History } from 'lucide-react';
import { FeatureCard } from '../molecules/FeatureCard';

export const FeaturesGrid = () => {
    const features = [
        {
            icon: <Maximize size={32} />,
            title: "200m² Totales",
            description: "98m² útiles y un gran espacio de terreno que brinda amplitud y posibilidades de remodelación."
        },
        {
            icon: <BedDouble size={32} />,
            title: "3 Dormitorios",
            description: "Espaciosos y bien iluminados, incluyendo un dormitorio independiente en el patio trasero."
        },
        {
            icon: <Bath size={32} />,
            title: "2 Baños",
            description: "Un baño principal interior más un segundo baño asociado al dormitorio exterior."
        },
        {
            icon: <Car size={32} />,
            title: "3 Estacionamientos",
            description: "Privilegio escaso en la zona: capacidad real y cómoda para estacionar hasta tres vehículos."
        },
        {
            icon: <History size={32} />,
            title: "Estilo Clásico",
            description: "Propiedad de 56 años de antigüedad con construcción sólida en un barrio ya consolidado."
        },
        {
            icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
            title: "Espacios Separados",
            description: "Distribución tradicional con living y comedor independientes y amplia cocina con comedor de diario."
        }
    ];

    return (
        <section id="details" className="py-20 md:py-32 bg-brand-primary relative overflow-hidden">
            {/* Decorative cinematic lighting */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
                <div className="text-left md:text-center mb-16 md:mb-24 max-w-3xl md:mx-auto">
                    <span className="text-brand-gold font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Residencia de Autor</span>
                    <h2 className="font-serif text-[2.5rem] leading-tight md:text-6xl font-normal text-white mb-6 tracking-tight">
                        Diseño pensado para <br className="hidden md:block" /><span className="font-serif italic text-brand-gold">la excelencia</span>
                    </h2>
                    <p className="text-lg md:text-xl text-brand-secondary text-balance leading-relaxed font-light tracking-wide">
                        Una distribución inmejorable, con un metraje difícil de encontrar actualmente en la elite inmobiliaria de la zona.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, idx) => (
                        <FeatureCard
                            key={idx}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
