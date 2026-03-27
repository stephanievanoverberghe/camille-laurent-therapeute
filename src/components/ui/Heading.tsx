import { cn } from '@/lib/utils/cn';

type HeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
    className?: string;
};

export function Heading({ eyebrow, title, description, align = 'left', className }: HeadingProps) {
    const isCentered = align === 'center';

    return (
        <div className={cn(isCentered && 'text-center', className)}>
            {eyebrow ? <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">{eyebrow}</p> : null}

            <h2 className="text-4xl leading-tight tracking-tight text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl">{title}</h2>

            {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg">{description}</p> : null}
        </div>
    );
}
