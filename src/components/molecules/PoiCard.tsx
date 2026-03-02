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
        <div className={cn("p-6 glass rounded-2xl transition-transform hover:-translate-y-1", className)}>
            <div className="flex items-center gap-3 mb-5">
                <div className="text-brand-primary bg-brand-primary/5 p-3 rounded-xl">
                    {icon}
                </div>
                <h4 className="font-semibold text-lg text-brand-primary">{category}</h4>
            </div>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex justify-between items-center text-sm">
                        <span className="text-brand-secondary font-medium">{item.name}</span>
                        <span className="text-gray-400 bg-gray-50 px-2 py-1 rounded-md">{item.distance}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
