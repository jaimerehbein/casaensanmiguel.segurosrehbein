"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { cn } from '../atoms/Button';

// Selected key images summarizing the property (front, rooms, patio, bathroom)
// We optimize loading by showing a masonry of 6 images, but allowing to view all 23 in lightbox
const topImages = [
    "/images/1.webp", // Exterior/Front
    "/images/10.webp", // Living
    "/images/11.webp", // Kitchen
    "/images/13.webp", // Bedroom
    "/images/21.webp", // Bathroom
    "/images/7.webp",  // Patio/Exterior back
];

// All images for lightbox
const allImages = Array.from({ length: 23 }, (_, i) => `/images/${i + 1}.webp`);

export const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    return (
        <section className="py-20 md:py-32 bg-brand-primary text-white relative">
            <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-20 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-4 block">Imágenes exclusivas</span>
                        <h2 className="text-[2.2rem] leading-tight md:text-5xl font-bold mb-4 tracking-tight">Galería de la Propiedad</h2>
                        <p className="text-lg md:text-xl text-gray-300">
                            Recorre cada rincón de esta oportunidad inmobiliaria.
                        </p>
                    </div>
                    <button
                        onClick={() => openLightbox(0)}
                        className="hidden md:flex items-center gap-2 text-white/80 hover:text-brand-gold transition-colors pb-2 font-medium"
                    >
                        <ImageIcon size={20} />
                        Ver todas las {allImages.length} fotos
                    </button>
                </div>

                {/* Masonry Grid representing Top Images */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[160px] sm:auto-rows-[250px]">
                    {topImages.map((src, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "relative rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer group shadow-2xl",
                                idx === 0 ? "col-span-2 row-span-2" : ""
                            )}
                            onClick={() => {
                                // Find index of top image in allImages array
                                const realIndex = allImages.findIndex(img => img === src);
                                openLightbox(realIndex > -1 ? realIndex : 0);
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Casa San Miguel Vista ${idx + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => openLightbox(0)}
                    className="mt-8 w-full md:hidden flex justify-center items-center gap-2 py-4 bg-brand-light rounded-xl text-brand-primary font-medium border border-gray-200"
                >
                    <ImageIcon size={20} />
                    Ver todas las fotos
                </button>

            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={closeLightbox}>
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        onClick={closeLightbox}
                    >
                        <X size={32} />
                    </button>

                    <button className="absolute left-4 md:left-12 text-white/50 hover:text-white" onClick={prevImage}>
                        <ChevronLeft size={48} />
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
                        <Image
                            src={allImages[currentIndex]}
                            alt={`Imagen Completa ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>

                    <button className="absolute right-4 md:right-12 text-white/50 hover:text-white" onClick={nextImage}>
                        <ChevronRight size={48} />
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium">
                        {currentIndex + 1} / {allImages.length}
                    </div>
                </div>
            )}
        </section>
    );
};
