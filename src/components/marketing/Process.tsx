import { getLandingPageContent } from '@/application/landing/getLandingPageContent';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { cn } from '@/lib/utils/cn';

export function Process() {
    const { process } = getLandingPageContent();

    return (
        <Section id="process" className={cn('relative overflow-hidden', 'py-16 sm:py-20 lg:py-24')}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(246,241,235,0.52))]" />
            </div>

            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-20">
                    <div className="max-w-lg">
                        <Heading
                            eyebrow="Comment ça se passe"
                            title={process.title}
                            description="Un cadre simple, progressif et rassurant pour vous permettre d’avancer avec plus de clarté, sans pression."
                            titleClassName="max-w-[13ch] text-3xl sm:text-4xl lg:text-[3.1rem] leading-[1.08] tracking-[-0.045em]"
                            descriptionClassName="max-w-md text-[1rem] leading-8 sm:text-[1.05rem] sm:leading-9"
                        />
                    </div>

                    <div className="relative">
                        <div
                            aria-hidden="true"
                            className="absolute left-5 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,hsl(var(--border)),transparent)] sm:block"
                        />

                        <div className="space-y-5">
                            {process.steps.map((step, index) => (
                                <article
                                    key={step.id}
                                    className={cn(
                                        'relative rounded-[1.75rem] border border-[hsl(var(--border))]',
                                        'bg-[hsl(var(--background))/0.82] p-5 shadow-(--shadow-card)',
                                        'sm:pl-16 sm:pr-6 sm:py-6',
                                    )}
                                >
                                    <div
                                        className={cn(
                                            'mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full',
                                            'border border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-sm font-medium text-[hsl(var(--foreground))]',
                                            'sm:absolute sm:left-0 sm:top-6 sm:mb-0',
                                        )}
                                    >
                                        {index + 1}
                                    </div>

                                    <h3 className="text-[1.05rem] font-medium leading-7 text-[hsl(var(--foreground))] sm:text-[1.12rem]">{step.title}</h3>

                                    <p className="mt-3 text-[1rem] leading-8 text-[hsl(var(--muted-foreground))]">{step.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
