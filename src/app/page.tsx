import { getLandingPageContent } from '@/application/landing/getLandingPageContent';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';

export default function HomePage() {
    const content = getLandingPageContent();

    return (
        <main>
            <Section>
                <Container>
                    <Heading eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} />

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button href={content.hero.primaryCta.href}>{content.hero.primaryCta.label}</Button>

                        {content.hero.secondaryCta ? (
                            <Button href={content.hero.secondaryCta.href} variant="secondary">
                                {content.hero.secondaryCta.label}
                            </Button>
                        ) : null}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
