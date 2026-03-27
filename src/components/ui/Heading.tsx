import { cn } from '@/lib/utils/cn';

type HeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
};

export function Heading({ eyebrow, title, description, align = 'left', className, titleClassName, descriptionClassName }: HeadingProps) {
    const isCentered = align === 'center';

    return (
        <div className={cn(isCentered && 'text-center', className)}>
            {eyebrow ? <p className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">{eyebrow}</p> : null}

            <h2
                className={cn(
                    'max-w-[14ch] text-balance text-4xl leading-[1.05] tracking-[-0.03em] text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl',
                    isCentered && 'mx-auto',
                    titleClassName,
                )}
            >
                {title}
            </h2>

            {description ? (
                <p className={cn('mt-6 max-w-2xl text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg', isCentered && 'mx-auto', descriptionClassName)}>
                    {description}
                </p>
            ) : null}
        </div>
    );
}
