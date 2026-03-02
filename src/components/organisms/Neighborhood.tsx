import React from 'react';
import Image from 'next/image';
import { PoiCard } from '../molecules/PoiCard';
import { Train, GraduationCap, ShoppingCart, Cross, Trees, MapPin } from 'lucide-react';

export const Neighborhood = () => {
    const points = [
        {
            icon: <Train size={24} />,
            category: "Transporte (Metro)",
            items: [
                { name: "Departamental", distance: "13 mins - 1.0 km" },
                { name: "Lo Vial", distance: "16 mins - 1.2 km" },
                { name: "Ciudad del Niño", distance: "16 mins - 1.2 km" }
            ]
        },
        {
            icon: <GraduationCap size={24} />,
            category: "Educación",
            items: [
                { name: "Liceo Luis Galecio Corvera", distance: "1 min - 100m" },
                { name: "Colegio Santa Margarita", distance: "2 mins - 130m" },
                { name: "Universidad de Valparaíso", distance: "21 mins - 1.6 km" }
            ]
        },
        {
            icon: <ShoppingCart size={24} />,
            category: "Supermercados & Mall",
            items: [
                { name: "Unimarc", distance: "7 mins - 540m" },
                { name: "Alvi", distance: "12 mins - 900m" },
                { name: "Espacio Urbano G. Avenida", distance: "18 mins - 1.4 km" }
            ]
        },
        {
            icon: <Cross size={24} />,
            category: "Salud",
            items: [
                { name: "Farmacias La Rebaja", distance: "10 mins - 780m" },
                { name: "Centro Médico RedSalud", distance: "14 mins - 1.1 km" },
                { name: "Integramédica San Miguel", distance: "24 mins - 1.8 km" }
            ]
        },
        {
            icon: <Trees size={24} />,
            category: "Áreas Verdes",
            items: [
                { name: "Plaza Oscar Bonilla", distance: "1 min - 80m" },
                { name: "Plazoleta Cairo", distance: "4 mins - 290m" },
                { name: "Plaza Recreo", distance: "5 mins - 350m" }
            ]
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-white relative">
            {/* Soft decorative background shape */}
            <div className="absolute top-0 left-0 -ml-32 mt-32 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
                <div className="text-left md:text-center mb-16 md:mb-20 max-w-3xl md:mx-auto">
                    <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block animate-reveal">Ubicación</span>
                    <h2 className="text-[2.2rem] leading-tight md:text-5xl font-bold text-brand-primary mb-6 animate-reveal" style={{ animationDelay: '0.1s' }}>
                        Todo a tu alcance en <span className="gradient-text">San Miguel</span>
                    </h2>
                    <p className="text-lg md:text-xl text-brand-secondary/90 animate-reveal" style={{ animationDelay: '0.2s' }}>
                        Excelente conectividad, comercio y educación a minutos de tu nueva casa.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-20">
                    {points.map((poi, idx) => (
                        <PoiCard
                            key={idx}
                            icon={poi.icon}
                            category={poi.category}
                            items={poi.items}
                        />
                    ))}
                </div>

                {/* Map and Street View Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch h-[450px]">
                    {/* Google Maps Iframe */}
                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200 w-full h-full min-h-[300px] bg-gray-100 flex flex-col">
                        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2 border border-gray-100 text-sm font-semibold text-brand-primary">
                            <MapPin size={16} className="text-brand-accent" />
                            Vista en Mapa
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.837330768612!2d-70.65582238479576!3d-33.498428980758414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57e5b5c9b9b%3A0x6bbaabaaabbb0!2sLlico%20650%2C%20San%20Miguel%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1714501234567!5m2!1ses-419!2scl"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>

                    {/* Hero Image Facade Capture */}
                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200 w-full h-full min-h-[300px] bg-gray-100 group">
                        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2 border border-gray-100 text-sm font-semibold text-brand-primary transition-transform group-hover:-translate-y-1">
                            <svg className="w-4 h-4 text-brand-accent" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            Fachada de la Propiedad
                        </div>
                        <Image
                            src="/images/hero.webp"
                            alt="Vista frontal de la propiedad en Llico 650, San Miguel"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
