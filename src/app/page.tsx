import { Header } from '@/components/layout/Header';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Section id="hero">
                    <Container>
                        <Badge>Accompagnement thérapeutique</Badge>

                        <Heading
                            className="mt-8"
                            title="Retrouver un espace pour vous"
                            description="Un accompagnement doux et humain pour les femmes en période de surcharge émotionnelle."
                        />

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button href="#contact">Prendre contact</Button>
                            <Button href="#a-propos" variant="secondary">
                                En savoir plus
                            </Button>
                        </div>
                    </Container>
                </Section>

                <Section id="accompagnement">
                    <Container>
                        <Heading
                            eyebrow="Accompagnement"
                            title="Un espace d’écoute, de compréhension et d’apaisement"
                            description="Une section de test pour valider la navigation par ancres avant d’assembler toute la landing."
                            titleClassName="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl"
                        />
                    </Container>
                </Section>

                <Section id="a-propos">
                    <Container>
                        <Heading
                            eyebrow="À propos"
                            title="Une approche douce, progressive et profondément humaine"
                            description="Une deuxième section de test pour vérifier le comportement du header et le confort de lecture."
                            titleClassName="max-w-[18ch] text-3xl sm:text-4xl lg:text-5xl"
                        />
                    </Container>
                </Section>

                <Section id="contact">
                    <Container>
                        <Heading
                            eyebrow="Contact"
                            title="Prendre un premier temps d’échange"
                            description="Dernière section de test pour valider le CTA principal."
                            titleClassName="max-w-[16ch] text-3xl sm:text-4xl lg:text-5xl"
                        />
                    </Container>
                </Section>
            </main>
        </>
    );
}
