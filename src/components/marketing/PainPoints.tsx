import { getLandingPageContent } from '@/application/landing/getLandingPageContent';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { cn } from '@/lib/utils/cn';

export function PainPoints() {
    const { problem } = getLandingPageContent();

    return (
        <Section id="probleme" className={cn('relative', 'pb-16 pt-10', 'sm:pb-20 sm:pt-12', 'lg:pb-24 lg:pt-14')}>
            <Container>
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:gap-18">
                        <div className="max-w-md">
                            <Heading
                                eyebrow="Ce que vous traversez"
                                title="Quand tout devient trop lourd à porter"
                                description="Mettre des mots sur ce que vous ressentez est parfois la première étape pour commencer à respirer autrement."
                                titleClassName="max-w-[12ch] text-3xl sm:text-4xl lg:text-[3.15rem] leading-[1.06] tracking-[-0.045em]"
                                descriptionClassName="max-w-md text-[1rem] leading-8 sm:text-[1.02rem]"
                            />
                        </div>

                        <div className="relative">
                            <div
                                aria-hidden="true"
                                className="absolute left-0 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,hsl(var(--border)),transparent)] lg:block"
                            />

                            <div className="space-y-6 lg:pl-10 xl:pl-12">
                                {problem.paragraphs.map((paragraph, index) => (
                                    <p
                                        key={`${paragraph}-${index}`}
                                        className={cn(
                                            'text-[1.05rem] leading-8 text-[hsl(var(--foreground))]',
                                            'sm:text-[1.12rem] sm:leading-9',
                                            index === 0 && 'text-[hsl(var(--foreground))]',
                                            index > 0 && 'text-[hsl(var(--muted-foreground))]',
                                        )}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
