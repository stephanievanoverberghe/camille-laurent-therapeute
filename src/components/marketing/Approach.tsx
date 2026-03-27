import { getLandingPageContent } from '@/application/landing/getLandingPageContent';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { cn } from '@/lib/utils/cn';

export function Approach() {
    const { approach } = getLandingPageContent();

    return (
        <Section id="accompagnement" className={cn('relative', 'py-16 sm:py-20 lg:py-24')}>
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
                    {/* LEFT */}
                    <div className="max-w-lg">
                        <Heading
                            eyebrow="L’accompagnement"
                            title="Un accompagnement pensé pour votre rythme"
                            description={approach.paragraphs[0]}
                            titleClassName="max-w-[14ch] text-3xl sm:text-4xl lg:text-[3.2rem] leading-[1.08] tracking-[-0.045em]"
                            descriptionClassName="max-w-md text-[1rem] leading-8 sm:text-[1.05rem] sm:leading-9"
                        />

                        <div className="mt-6 space-y-5">
                            {approach.paragraphs.slice(1).map((p, i) => (
                                <p key={i} className="text-[1rem] leading-8 text-[hsl(var(--muted-foreground))] sm:text-[1.05rem] sm:leading-9">
                                    {p}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="rounded-[1.6rem] border border-[hsl(var(--border))] bg-[hsl(var(--background))/0.8] p-6 shadow-(--shadow-card)">
                            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">Écoute</p>
                            <p className="mt-3 text-sm leading-7 text-[hsl(var(--foreground))]">Un espace pour déposer ce que vous vivez sans jugement.</p>
                        </div>

                        <div className="rounded-[1.6rem] border border-[hsl(var(--border))] bg-[hsl(var(--background))/0.8] p-6 shadow-(--shadow-card)">
                            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">Adaptation</p>
                            <p className="mt-3 text-sm leading-7 text-[hsl(var(--foreground))]">Chaque séance s’adapte à votre rythme et à votre situation.</p>
                        </div>

                        <div className="rounded-[1.6rem] border border-[hsl(var(--border))] bg-[hsl(var(--background))/0.8] p-6 shadow-(--shadow-card)">
                            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">Ressenti</p>
                            <p className="mt-3 text-sm leading-7 text-[hsl(var(--foreground))]">Comprendre vos émotions pour avancer plus sereinement.</p>
                        </div>

                        <div className="rounded-[1.6rem] border border-[hsl(var(--border))] bg-[hsl(var(--background))/0.8] p-6 shadow-(--shadow-card)">
                            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">Progression</p>
                            <p className="mt-3 text-sm leading-7 text-[hsl(var(--foreground))]">Un cheminement progressif, pas à pas.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
