import type { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type BadgeProps = {
    children: ReactNode;
    className?: string;
};

export function Badge({ children, className }: BadgeProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]',
                className,
            )}
        >
            {children}
        </span>
    );
}
