import Image from 'next/image';

import { getLandingPageContent } from '@/application/landing/getLandingPageContent';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { cn } from '@/lib/utils/cn';

export function AboutTherapist() {
    const { about } = getLandingPageContent();

    return (
        <Section id="a-propos" className={cn('relative overflow-hidden', 'py-16 sm:py-20 lg:py-24')}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-24 top-1/2 h-72 w-[18rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,156,138,0.10),transparent_70%)] blur-3xl" />
            </div>

            <Container>
                <div className="grid gap-10 lg:grid-cols-[minmax(320px,0.78fr)_minmax(0,1fr)] lg:items-center lg:gap-14 xl:gap-18">
                    <div className="relative mx-auto w-full max-w-120 lg:mx-0">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 rounded-[2.25rem] bg-[radial-gradient(circle_at_top,rgba(216,164,143,0.14),transparent_55%)] blur-2xl"
                        />

                        <div className="relative overflow-hidden rounded-4xl border border-[hsl(var(--border))] bg-[linear-gradient(180deg,rgba(255,255,255,0.48),rgba(246,241,235,0.84))] p-3 shadow-[0_22px_55px_rgba(71,57,47,0.10)] sm:rounded-[2.4rem] sm:p-4">
                            <div className="relative aspect-4/5 overflow-hidden rounded-[1.6rem] sm:rounded-4xl">
                                <Image src="/images/camille-about.jpg" alt="Portrait naturel et rassurant de Camille Laurent" fill className="object-cover" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.08))]" />
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-xl lg:mx-0">
                        <Heading
                            eyebrow="À propos"
                            title={about.title}
                            description={about.paragraphs[0]}
                            align="left"
                            titleClassName="max-w-[12ch] text-3xl sm:text-4xl lg:text-[3.1rem] leading-[1.08] tracking-[-0.045em]"
                            descriptionClassName="max-w-xl text-[1rem] leading-8 sm:text-[1.05rem] sm:leading-9"
                        />

                        <div className="mt-6 space-y-5">
                            {about.paragraphs.slice(1).map((paragraph, index) => (
                                <p key={`${paragraph}-${index}`} className="text-[1rem] leading-8 text-[hsl(var(--muted-foreground))] sm:text-[1.05rem] sm:leading-9">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-8 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--background))/0.78] px-5 py-5 shadow-(--shadow-card)">
                            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">Une approche</p>
                            <p className="mt-3 text-sm leading-7 text-[hsl(var(--foreground))] sm:text-[0.98rem]">
                                Douce, progressive et profondément humaine, pensée pour vous permettre d’avancer sans vous brusquer.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
