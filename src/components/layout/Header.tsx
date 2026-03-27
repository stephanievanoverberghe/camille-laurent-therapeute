'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { TextLink } from '@/components/ui/TextLink';
import { cn } from '@/lib/utils/cn';

const navigation = [
    { label: 'Accompagnement', href: '#accompagnement' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Contact', href: '#contact' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function closeMenu() {
        setIsOpen(false);
    }

    function toggleMenu() {
        setIsOpen((prev) => !prev);
    }

    return (
        <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))]/70 bg-[hsl(var(--background))]/80 backdrop-blur-xl">
            <Container>
                <div className="flex min-h-20 items-center justify-between gap-6">
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

                    <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
                        {navigation.map((item) => (
                            <TextLink key={item.href} href={item.href}>
                                {item.label}
                            </TextLink>
                        ))}
                    </nav>

                    <div className="hidden md:flex">
                        <Button href="#contact" className="px-5">
                            Prendre contact
                        </Button>
                    </div>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                        className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--foreground))] transition duration-300 hover:bg-[hsl(var(--surface-strong))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 md:hidden"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <div id="mobile-menu" className={cn('overflow-hidden transition-all duration-300 md:hidden', isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0')}>
                    <div className="mt-2 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4 shadow-(--shadow-card)">
                        <nav className="flex flex-col gap-2" aria-label="Navigation mobile">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="rounded-xl px-3 py-3 text-sm text-[hsl(var(--foreground))] transition-colors duration-300 hover:bg-[hsl(var(--background))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-4">
                            <Button href="#contact" className="w-full" onClick={closeMenu}>
                                Prendre contact
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}
