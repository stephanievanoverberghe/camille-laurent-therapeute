import type { ReactNode } from 'react';

import { Container } from '@/components/ui/Container';

type LegalPageProps = {
    title: string;
    lastUpdated?: string;
    children: ReactNode;
};

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
    return (
        <main className="py-16 sm:py-20 lg:py-24">
            <Container className="max-w-3xl">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">Informations légales</p>

                    <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-[hsl(var(--foreground))] sm:text-5xl">{title}</h1>

                    {lastUpdated ? <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Dernière mise à jour : {lastUpdated}</p> : null}
                </div>

                <div className="prose prose-neutral max-w-none">{children}</div>
            </Container>
        </main>
    );
}
