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
        <div className={cn(
            "relative p-6 rounded-2xl transition-all duration-500 overflow-hidden group cursor-default",
            "bg-gradient-to-br from-white/[0.07] to-black/60 backdrop-blur-2xl border border-white/10",
            "hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-[0_15px_30px_-10px_rgba(212,175,55,0.15)]",
            className
        )}>
            {/* Subtle top luxury glare effect */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex items-center gap-5 mb-6">
                <div className="p-3 bg-gradient-to-br from-brand-gold/10 to-transparent border border-brand-gold/20 rounded-xl text-brand-gold group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>
                <h3 className="font-medium text-lg text-white tracking-wide">{category}</h3>
            </div>

            <div className="space-y-4">
                {items.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 group/item hover:bg-white/[0.03] p-3 -mx-3 rounded-xl transition-colors">
                        <span className="text-brand-secondary group-hover/item:text-white transition-colors font-light tracking-wide leading-snug">{item.name}</span>
                        <span className="shrink-0 text-xs sm:text-sm font-medium text-brand-gold/90 bg-brand-gold/5 border border-brand-gold/10 px-3 py-1.5 rounded-lg whitespace-nowrap">
                            {item.distance}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
