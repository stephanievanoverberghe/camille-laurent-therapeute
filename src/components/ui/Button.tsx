import Link from 'next/link';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
    children: ReactNode;
    href: string;
    variant?: ButtonVariant;
    className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-soft)] hover:opacity-90',
    secondary: 'border border-[hsl(var(--border))] bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface))]',
};

export function Button({ children, href, variant = 'primary', className }: ButtonProps) {
    return (
        <Link
            href={href}
            className={cn(
                'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2',
                variantClasses[variant],
                className,
            )}
        >
            {children}
        </Link>
    );
}
