"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // Pulse animation
        const ctx = gsap.context(() => {
            gsap.to(btnRef.current, {
                scale: 1.05,
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        });

        return () => ctx.revert();
    }, []);

    const handleClick = () => {
        window.open(`https://wa.me/56942797068?text=Hola,%20me%20interesa%20la%20casa%20en%20Llico%20650,%20San%20Miguel.`, '_blank');
    };

    return (
        <button
            ref={btnRef}
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-colors"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={32} />
            {/* Notification dot */}
            <span className="absolute top-0 right-0 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
        </button>
    );
};
