import React from 'react';
import { cn } from '../atoms/Button';

interface PoiCardProps {
    icon: React.ReactNode;
    category: string;
    items: { name: string; distance: string }[];
    className?: string;
}

export const PoiCard = ({ icon, category, items, className }: PoiCardProps) => {
    return (
        <div className={cn("p-6 glass-dark rounded-2xl transition-transform hover:-translate-y-1", className)}>
            <div className="flex items-center gap-6 mb-6">
                <div className="p-2.5 bg-brand-gold/10 rounded-xl text-brand-gold">
                    {icon}
                </div>
                <h3 className="font-medium text-lg text-white tracking-wide">{category}</h3>
            </div>
            <div className="space-y-4">
                {items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center group">
                        <span className="text-brand-secondary group-hover:text-white transition-colors font-light tracking-wide">{item.name}</span>
                        <span className="text-sm font-medium text-brand-gold/80 bg-brand-gold/5 px-2.5 py-1 rounded-lg">
                            {/* Assuming 'time' property is intended, but using 'distance' as per provided interface */}
                            {item.distance}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
