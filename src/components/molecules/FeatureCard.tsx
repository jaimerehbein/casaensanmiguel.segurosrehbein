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
            "flex flex-col items-start p-8 rounded-3xl transition-all duration-300",
            "glass-dark hover:border-brand-gold/30 group",
            className
        )}>
            <div className="p-4 rounded-2xl bg-white/5 text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-medium text-white mb-3 tracking-wide">{title}</h3>
            <p className="text-brand-secondary/90 leading-relaxed font-light">{description}</p>
        </div>
    );
};
