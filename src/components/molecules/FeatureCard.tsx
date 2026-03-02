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
            "flex flex-col items-start p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 group glass hover:shadow-2xl hover:shadow-brand-primary/10",
            className
        )}>
            <div className="p-4 bg-brand-light/80 rounded-2xl mb-6 text-brand-primary shadow-sm border border-brand-primary/5 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-primary tracking-tight">{title}</h3>
            <p className="text-brand-secondary leading-relaxed font-medium text-sm sm:text-base">{description}</p>
        </div>
    );
};
