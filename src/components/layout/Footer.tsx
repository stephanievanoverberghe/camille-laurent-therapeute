import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { TextLink } from '@/components/ui/TextLink';

const navigation = [
    { label: 'Accompagnement', href: '#accompagnement' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Contact', href: '#contact' },
];

const legalLinks = [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Confidentialité', href: '/confidentialite' },
];

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-[hsl(var(--border))]/80 bg-[hsl(var(--surface))]/55">
            <Container className="py-14 sm:py-16 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.9fr] lg:gap-12">
                    <div className="max-w-md">
                        <Link
                            href="/"
                            className="group inline-flex min-w-0 flex-col justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2"
                            aria-label="Retour à l’accueil"
                        >
                            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))] transition-colors duration-300 group-hover:text-[hsl(var(--foreground))]">
                                Camille Laurent
                            </span>

                            <span className="mt-1 text-sm text-[hsl(var(--foreground))]">Accompagnement thérapeutique</span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-[hsl(var(--muted-foreground))] sm:text-[0.95rem]">
                            Un espace doux et rassurant pour prendre un temps d’échange, retrouver de la clarté et avancer à votre rythme.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                        <div>
                            <p className="text-sm font-medium text-[hsl(var(--foreground))]">Navigation</p>

                            <nav aria-label="Navigation du pied de page" className="mt-4">
                                <ul className="space-y-3">
                                    {navigation.map((item) => (
                                        <li key={item.href}>
                                            <TextLink href={item.href}>{item.label}</TextLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-[hsl(var(--foreground))]">Informations</p>

                            <nav aria-label="Informations légales" className="mt-4">
                                <ul className="space-y-3">
                                    {legalLinks.map((item) => (
                                        <li key={item.href}>
                                            <TextLink href={item.href}>{item.label}</TextLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 p-5 shadow-(--shadow-card) sm:p-6">
                        <p className="text-sm font-medium text-[hsl(var(--foreground))]">Prendre contact</p>

                        <p className="mt-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                            Vous ressentez le besoin d’en parler ? Un premier échange peut déjà permettre d’y voir plus clair.
                        </p>

                        <div className="mt-5">
                            <Button href="#contact" className="w-full sm:w-auto">
                                Prendre contact
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-[hsl(var(--border))]/70 pt-5">
                    <p className="text-xs leading-6 text-[hsl(var(--muted-foreground))] sm:text-sm">© {year} Camille Laurent — Tous droits réservés.</p>
                </div>
            </Container>
        </footer>
    );
}
