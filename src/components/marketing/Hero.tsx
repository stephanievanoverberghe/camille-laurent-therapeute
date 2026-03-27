import Image from 'next/image';

import { getLandingPageContent } from '@/application/landing/getLandingPageContent';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { cn } from '@/lib/utils/cn';

export function Hero() {
    const { hero } = getLandingPageContent();

    return (
        <Section id="hero" className={cn('relative overflow-hidden', 'pb-14 pt-4', 'sm:pb-20 sm:pt-6', 'lg:pb-24 lg:pt-8')}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div
                    className={cn(
                        'absolute left-1/2 top-0 -translate-x-1/2 rounded-full blur-3xl',
                        'h-88 w-88',
                        'bg-[radial-gradient(circle,rgba(196,156,138,0.10),transparent_68%)]',
                        'sm:h-96 sm:w-96',
                    )}
                />
                <div
                    className={cn(
                        'absolute rounded-full blur-3xl',
                        'right-24 top-40 h-56 w-56',
                        'bg-[radial-gradient(circle,rgba(168,184,161,0.08),transparent_70%)]',
                        'sm:right-24 sm:top-40 sm:h-64 sm:w-64',
                    )}
                />
            </div>

            <Container>
                <div className={cn('grid gap-10', 'lg:grid-cols-[minmax(0,0.94fr)_minmax(340px,0.86fr)] lg:items-center lg:gap-14', 'xl:gap-20')}>
                    <div className={cn('mx-auto flex max-w-xl flex-col items-center text-center', 'lg:mx-0 lg:items-start lg:text-left')}>
                        <Badge>{hero.eyebrow}</Badge>

                        <h1
                            className={cn(
                                'mt-6 max-w-[11ch] text-balance font-medium text-[hsl(var(--foreground))]',
                                'text-[clamp(2.2rem,7vw,4.4rem)] leading-[1.01] tracking-[-0.055em]',
                            )}
                        >
                            {hero.title}
                        </h1>

                        <p className={cn('mt-5 max-w-xl text-[1rem] text-[hsl(var(--muted-foreground))]', 'leading-8', 'sm:text-[1.05rem] sm:leading-9')}>{hero.description}</p>

                        <div className={cn('mt-8 flex w-full flex-col gap-3', 'sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center', 'lg:justify-start')}>
                            <Button href={hero.primaryCta.href} className="w-full sm:w-auto">
                                {hero.primaryCta.label}
                            </Button>

                            {hero.secondaryCta ? (
                                <Button href={hero.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
                                    {hero.secondaryCta.label}
                                </Button>
                            ) : null}
                        </div>

                        <dl className={cn('mt-8 grid w-full gap-5 border-t border-[hsl(var(--border))]/80 pt-6', 'sm:grid-cols-3 sm:gap-6')}>
                            {hero.trustItems.map((item) => (
                                <div key={item.id} className={cn('min-w-0 text-center', 'sm:text-left', 'lg:text-left')}>
                                    <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">{item.label}</dt>
                                    <dd className="mt-2 text-sm leading-6 text-[hsl(var(--foreground))]">{item.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="relative mx-auto w-full max-w-140">
                        <div
                            aria-hidden="true"
                            className={cn('absolute inset-0 -z-10 rounded-[2.5rem] blur-2xl', 'bg-[radial-gradient(circle_at_top,rgba(216,164,143,0.12),transparent_55%)]')}
                        />

                        <figure className="relative">
                            <div
                                className={cn(
                                    'relative overflow-hidden border border-[hsl(var(--border))]',
                                    'rounded-4xl p-3',
                                    'bg-[linear-gradient(180deg,rgba(255,255,255,0.52),rgba(246,241,235,0.82))]',
                                    'shadow-[0_24px_60px_rgba(71,57,47,0.10)]',
                                    'sm:rounded-[2.5rem] sm:p-4',
                                )}
                            >
                                <div className={cn('relative aspect-4/5 overflow-hidden', 'rounded-[1.6rem]', 'sm:rounded-4xl')}>
                                    <Image src={hero.image.src} alt={hero.image.alt} fill priority className="object-cover" />
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.10))]" />
                                </div>

                                <div
                                    className={cn(
                                        'pointer-events-none absolute inset-x-6 top-6 hidden h-px',
                                        'bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.75),transparent)]',
                                        'sm:block',
                                    )}
                                />
                            </div>

                            <figcaption className={cn('absolute inset-x-4 bottom-4', 'sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-68')}>
                                <div
                                    className={cn(
                                        'rounded-[1.25rem] border border-white/30 px-4 py-4 shadow-[0_12px_30px_rgba(71,57,47,0.10)] backdrop-blur-md',
                                        'bg-[hsl(var(--background))/0.84]',
                                        'text-center sm:text-left',
                                    )}
                                >
                                    <p className="text-[0.68rem] uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">Accompagnement</p>
                                    <p className="mt-2 text-sm leading-7 text-[hsl(var(--foreground))]">Un espace d’écoute, de clarté et d’apaisement, à votre rythme.</p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
