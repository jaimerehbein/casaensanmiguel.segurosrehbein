import React from 'react';
import { cn } from '../atoms/Button';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

export const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
    return (
        <div className={cn(
            "relative flex flex-col items-start p-8 rounded-3xl transition-all duration-500 overflow-hidden cursor-default",
            "bg-gradient-to-br from-white/[0.07] to-black/60 backdrop-blur-2xl border border-white/10 group",
            "hover:-translate-y-2 hover:border-brand-gold/40 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)]",
            className
        )}>
            {/* Subtle top luxury glare effect */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-brand-gold/10 to-transparent border border-brand-gold/20 text-brand-gold mb-6 group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-500">
                {/* Glow behind icon */}
                <div className="absolute inset-0 bg-brand-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">{icon}</div>
            </div>

            <h3 className="text-xl font-medium text-white mb-3 tracking-wide">{title}</h3>
            <p className="text-brand-secondary/90 leading-relaxed font-light">{description}</p>
        </div>
    );
};
