import { getLandingPageContent } from '@/application/landing/getLandingPageContent';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { cn } from '@/lib/utils/cn';

export function Benefits() {
    const { benefits } = getLandingPageContent();

    return (
        <Section id="benefices" className={cn('relative overflow-hidden', 'py-16 sm:py-20 lg:py-24')}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(246,241,235,0.6))]" />
                <div className="absolute left-1/2 top-1/2 h-80 w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,156,138,0.08),transparent_70%)] blur-3xl" />
            </div>

            <Container>
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <Heading
                            eyebrow="Les bénéfices"
                            title={benefits.title}
                            description="Au fil de l’accompagnement, un nouvel espace peut progressivement s’ouvrir : plus de calme, plus de clarté, plus de stabilité intérieure."
                            align="center"
                            titleClassName="mx-auto max-w-[14ch] text-3xl sm:text-4xl lg:text-[3.1rem] leading-[1.08] tracking-[-0.045em]"
                            descriptionClassName="mx-auto max-w-2xl text-[1rem] leading-8 sm:text-[1.05rem] sm:leading-9"
                        />
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {benefits.items.map((item, index) => (
                            <article
                                key={`${item}-${index}`}
                                className={cn(
                                    'group relative overflow-hidden rounded-[1.75rem] border border-[hsl(var(--border))]',
                                    'bg-[hsl(var(--background))/0.82] p-6 shadow-(--shadow-card)',
                                    'transition-transform duration-300 ease-out',
                                    'hover:-translate-y-0.5',
                                )}
                            >
                                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)]" />

                                <div className="flex items-start gap-4">
                                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />

                                    <p className="text-[1rem] leading-8 text-[hsl(var(--foreground))] sm:text-[1.02rem]">{item}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
