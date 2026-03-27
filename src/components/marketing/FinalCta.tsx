import { getLandingPageContent } from '@/application/landing/getLandingPageContent';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { cn } from '@/lib/utils/cn';

export function FinalCta() {
    const { finalCta } = getLandingPageContent();

    return (
        <Section className={cn('relative overflow-hidden', 'pb-16 pt-14 sm:pb-20 sm:pt-18 lg:pb-24 lg:pt-20')}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-88 w-88 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,156,138,0.12),transparent_68%)] blur-3xl" />
            </div>

            <Container>
                <div className="mx-auto max-w-4xl">
                    <div className="relative overflow-hidden rounded-4xl border border-[hsl(var(--border))] bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(246,241,235,0.88))] px-6 py-10 text-center shadow-[0_24px_60px_rgba(71,57,47,0.10)] sm:px-8 sm:py-12 lg:rounded-[2.5rem] lg:px-12 lg:py-16">
                        <div aria-hidden="true" className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)]" />

                        <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">Prendre un premier temps d’échange</p>

                        <h2 className="mx-auto mt-6 max-w-[14ch] text-balance text-3xl font-medium leading-[1.08] tracking-[-0.045em] text-[hsl(var(--foreground))] sm:text-4xl lg:text-[3.15rem]">
                            {finalCta.title}
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-[1rem] leading-8 text-[hsl(var(--muted-foreground))] sm:text-[1.05rem] sm:leading-9">{finalCta.description}</p>

                        <div className="mt-8 flex justify-center">
                            <Button href={finalCta.cta.href} className="w-full sm:w-auto">
                                {finalCta.cta.label}
                            </Button>
                        </div>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                            Un premier échange permet simplement de faire le point, en toute simplicité, pour voir si cet accompagnement vous correspond.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
