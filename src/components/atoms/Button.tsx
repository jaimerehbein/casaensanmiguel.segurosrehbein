import React, { ButtonHTMLAttributes } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes safely
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    isMagnetic?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isMagnetic = true, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

        const variants = {
            primary: "bg-brand-primary text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-brand-primary/20 border border-transparent focus:ring-brand-primary",
            secondary: "bg-gray-100/80 backdrop-blur-sm text-brand-primary hover:bg-gray-200 border border-gray-200/50 hover:shadow-md focus:ring-gray-200",
            whatsapp: "bg-brand-accent text-white hover:bg-[#1DA851] hover:shadow-xl hover:shadow-[#25D366]/40 border border-[#1DA851]/20 focus:ring-[#25D366]",
            outline: "glass text-brand-primary hover:bg-white/90 glass-hover focus:ring-brand-primary"
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base font-semibold tracking-wide",
            lg: "px-8 py-4 text-lg font-bold tracking-wide"
        };

        return (
            <button
                ref={ref}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    isMagnetic && "magnetic-hover",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
