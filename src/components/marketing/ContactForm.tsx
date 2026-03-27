import Link from 'next/link';

import { getLandingPageContent } from '@/application/landing/getLandingPageContent';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { cn } from '@/lib/utils/cn';

export function Contact() {
    const { contact } = getLandingPageContent();

    return (
        <Section id="contact" className={cn('relative overflow-hidden', 'pb-16 pt-14 sm:pb-20 sm:pt-18 lg:pb-24 lg:pt-20')}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-96 w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,156,138,0.10),transparent_68%)] blur-3xl" />
            </div>

            <Container>
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14 xl:gap-18">
                    <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                        <Heading
                            eyebrow={contact.eyebrow}
                            title={contact.title}
                            description={contact.description}
                            align="left"
                            titleClassName="max-w-[13ch] text-3xl sm:text-4xl lg:text-[3.1rem] leading-[1.08] tracking-[-0.045em] lg:max-w-[11ch]"
                            descriptionClassName="max-w-xl text-[1rem] leading-8 sm:text-[1.05rem] sm:leading-9"
                            className="lg:text-left"
                        />

                        <div className="mt-8 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--background))/0.78] px-5 py-5 shadow-(--shadow-card)">
                            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">Un premier échange</p>
                            <p className="mt-3 text-sm leading-7 text-[hsl(var(--foreground))] sm:text-[0.98rem]">
                                Il s’agit simplement d’un premier contact pour faire le point, en toute simplicité, et voir si cet accompagnement vous correspond.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative overflow-hidden rounded-4xl border border-[hsl(var(--border))] bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(246,241,235,0.88))] p-5 shadow-[0_24px_60px_rgba(71,57,47,0.10)] sm:rounded-[2.5rem] sm:p-6 lg:p-7">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)]"
                            />

                            <form className="space-y-5">
                                {contact.fields.map((field) => {
                                    const baseFieldClasses =
                                        'w-full rounded-[1.15rem] border border-[hsl(var(--border))] bg-[hsl(var(--background))/0.84] px-4 py-3 text-[hsl(var(--foreground))] shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] outline-none transition duration-200 placeholder:text-[hsl(var(--muted-foreground))]/75 focus:border-[hsl(var(--ring))] focus:ring-2 focus:ring-[hsl(var(--ring))]/20';

                                    return (
                                        <div key={field.id} className="space-y-2">
                                            <label htmlFor={field.id} className="block text-sm font-medium text-[hsl(var(--foreground))]">
                                                {field.label}
                                            </label>

                                            {field.type === 'textarea' ? (
                                                <textarea
                                                    id={field.id}
                                                    name={field.name}
                                                    rows={field.rows ?? 5}
                                                    required={field.required}
                                                    placeholder={field.placeholder}
                                                    className={cn(baseFieldClasses, 'min-h-36 resize-y')}
                                                />
                                            ) : (
                                                <input
                                                    id={field.id}
                                                    name={field.name}
                                                    type={field.type}
                                                    required={field.required}
                                                    placeholder={field.placeholder}
                                                    className={baseFieldClasses}
                                                />
                                            )}
                                        </div>
                                    );
                                })}

                                <div className="pt-2">
                                    <Button href="#contact" className="w-full sm:w-auto">
                                        {contact.submitLabel}
                                    </Button>
                                </div>

                                <p className="text-xs leading-6 text-[hsl(var(--muted-foreground))] sm:text-sm">
                                    {contact.reassurance}{' '}
                                    <Link href="/confidentialite" className="underline underline-offset-4 transition-colors duration-200 hover:text-[hsl(var(--foreground))]">
                                        Politique de confidentialité
                                    </Link>
                                    .
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
