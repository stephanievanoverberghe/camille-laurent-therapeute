import { getLandingPageContent } from '@/application/landing/getLandingPageContent';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { cn } from '@/lib/utils/cn';

export function Transition() {
    const { transition } = getLandingPageContent();

    return (
        <Section id="transition" className={cn('relative overflow-hidden', 'py-14 sm:py-18 lg:py-22')}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-4 inset-y-0 rounded-4xl bg-[linear-gradient(180deg,rgba(255,255,255,0.48),rgba(246,241,235,0.86))] sm:inset-x-6 lg:inset-x-10" />
                <div className="absolute left-1/2 top-1/2 h-72 w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,156,138,0.10),transparent_68%)] blur-3xl" />
            </div>

            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">Un premier apaisement</p>

                    <div className="mt-6 space-y-5 sm:space-y-6">
                        {transition.paragraphs.map((paragraph, index) => (
                            <p
                                key={`${paragraph}-${index}`}
                                className={cn(
                                    'mx-auto text-balance',
                                    index === 0 && 'max-w-[18ch] text-3xl font-medium leading-[1.08] tracking-[-0.04em] text-[hsl(var(--foreground))] sm:text-4xl lg:text-[2.8rem]',
                                    index === 1 && 'max-w-[22ch] text-xl leading-8 text-[hsl(var(--foreground))] sm:text-2xl sm:leading-9',
                                    index > 1 && 'max-w-2xl text-[1rem] leading-8 text-[hsl(var(--muted-foreground))] sm:text-[1.05rem] sm:leading-9',
                                )}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
