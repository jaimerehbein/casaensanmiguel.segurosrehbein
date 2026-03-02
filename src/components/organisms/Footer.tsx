import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[#0f1522] text-gray-300 py-20 relative overflow-hidden">
            {/* Subtle decorative glow */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
                    <div className="lg:col-span-2">
                        <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Seguros Rehbein</h3>
                        <p className="max-w-md mb-8 leading-relaxed text-gray-400">
                            Agencia inmobiliaria y asesoría en seguros comprometida con ayudarte a encontrar la oportunidad perfecta para tu familia o inversión, con más de 20 años de experiencia que nos respaldan.
                        </p>
                    </div>

                    <div className="lg:col-span-2 md:justify-self-end">
                        <h4 className="text-xl font-semibold text-white mb-6">Información de Contacto</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <MapPin size={22} className="text-brand-accent shrink-0 mt-1" />
                                <span className="leading-relaxed">Av. Manquehue Sur 520, Of. 205<br />Las Condes, Santiago</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={22} className="text-brand-accent shrink-0" />
                                <a href="tel:+56942797068" className="hover:text-brand-accent transition-colors">+56 9 4279 7068</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={22} className="text-brand-accent shrink-0" />
                                <a href="mailto:frederick@segurosrehbein.cl" className="hover:text-brand-accent transition-colors break-all">frederick@segurosrehbein.cl</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-gray-800/50 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} Seguros Rehbein. Todos los derechos reservados.</p>
                    <p className="text-gray-500">Sitio web oficial: <a href="https://segurosrehbein.cl" target="_blank" rel="noreferrer" className="text-white hover:text-brand-accent transition-colors font-medium">segurosrehbein.cl</a></p>
                </div>
            </div>
        </footer>
    );
};
