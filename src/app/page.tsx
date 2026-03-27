import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';

export default function HomePage() {
    return (
        <main>
            <Section>
                <Container>
                    <Heading
                        eyebrow="Accompagnement thérapeutique"
                        title="Retrouver un espace pour vous"
                        description="Un accompagnement doux et humain pour les femmes en période de surcharge émotionnelle."
                    />

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button href="#contact">Prendre contact</Button>
                        <Button href="#about" variant="secondary">
                            En savoir plus
                        </Button>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
