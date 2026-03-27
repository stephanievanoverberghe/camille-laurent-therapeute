import type { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type SectionProps = {
    children: ReactNode;
    className?: string;
    id?: string;
};

export function Section({ children, className, id }: SectionProps) {
    return (
        <section id={id} className={cn('py-18 sm:py-24 lg:py-32', className)}>
            {children}
        </section>
    );
}
