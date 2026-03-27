import { LegalPage } from '@/components/ui/LegalPage';

export default function MentionsLegalesPage() {
    return (
        <LegalPage title="Mentions légales" lastUpdated="[à compléter]">
            <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Éditeur du site</h2>

                <p>Le présent site est édité par :</p>

                <p>
                    <strong>[Nom et prénom / nom de l’entreprise]</strong>
                    <br />
                    Statut : <strong>[micro-entreprise / EI / société]</strong>
                    <br />
                    SIRET : <strong>[à compléter]</strong>
                    <br />
                    Adresse : <strong>[adresse professionnelle]</strong>
                    <br />
                    E-mail : <strong>[adresse e-mail]</strong>
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Directrice de la publication</h2>

                <p>
                    <strong>[Nom et prénom]</strong>
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Hébergement</h2>

                <p>
                    Le site est hébergé par <strong>Vercel Inc.</strong>
                    <br />
                    Adresse : <strong>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</strong>
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Propriété intellectuelle</h2>

                <p>
                    L’ensemble des contenus présents sur ce site, sauf mention contraire, incluant notamment les textes, images, éléments graphiques, logo et structure, est protégé
                    par le droit de la propriété intellectuelle.
                </p>

                <p>Toute reproduction, représentation, diffusion ou exploitation, totale ou partielle, sans autorisation préalable écrite, est interdite.</p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Responsabilité</h2>

                <p>
                    L’éditrice du site s’efforce de fournir des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions,
                    inexactitudes ou carences dans la mise à jour.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Contact</h2>

                <p>
                    Pour toute question concernant le site, vous pouvez écrire à :
                    <br />
                    <strong>[adresse e-mail de contact]</strong>
                </p>
            </section>
        </LegalPage>
    );
}
