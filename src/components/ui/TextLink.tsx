import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type TextLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function TextLink({ href, children, className, onClick }: TextLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                'inline-flex w-fit items-center text-sm tracking-[0.01em] text-[hsl(var(--muted-foreground))]/90 transition-[color,opacity] duration-200 ease-out hover:text-[hsl(var(--foreground))] hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2',
                className,
            )}
        >
            {children}
        </Link>
    );
}
