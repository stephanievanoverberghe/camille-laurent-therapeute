import { LegalPage } from '@/components/ui/LegalPage';

export default function ConfidentialitePage() {
    return (
        <LegalPage title="Politique de confidentialité" lastUpdated="[à compléter]">
            <section className="space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Responsable du traitement</h2>

                <p>Les données personnelles collectées sur ce site sont traitées par :</p>

                <p>
                    <strong>[Nom et prénom / nom de l’entreprise]</strong>
                    <br />
                    E-mail : <strong>[adresse e-mail]</strong>
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Données collectées</h2>

                <p>Lorsque vous utilisez le formulaire de contact, les données suivantes peuvent être collectées :</p>

                <ul className="list-disc pl-6">
                    <li>nom et prénom ;</li>
                    <li>adresse e-mail ;</li>
                    <li>contenu du message ;</li>
                    <li>données techniques strictement nécessaires à la sécurité du formulaire.</li>
                </ul>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Finalités du traitement</h2>

                <p>Ces données sont collectées afin de :</p>

                <ul className="list-disc pl-6">
                    <li>répondre aux demandes envoyées via le formulaire ;</li>
                    <li>échanger au sujet d’un accompagnement ;</li>
                    <li>assurer la sécurité du site et prévenir les messages indésirables.</li>
                </ul>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Base légale</h2>

                <p>
                    Le traitement repose sur l’<strong>intérêt légitime</strong> à répondre aux demandes reçues via le formulaire de contact.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Destinataires des données</h2>

                <p>
                    Les données sont destinées uniquement à <strong>[Nom / entreprise]</strong>
                    et, le cas échéant, aux prestataires techniques strictement nécessaires au fonctionnement du site et au traitement des messages.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Durée de conservation</h2>

                <p>
                    Les données issues du formulaire de contact sont conservées pendant une durée maximale de <strong>[ex. 12 mois]</strong> à compter du dernier échange, sauf
                    obligation légale contraire.
                </p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Vos droits</h2>

                <p>
                    Conformément à la réglementation applicable, vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition, de limitation du traitement et,
                    lorsque cela s’applique, d’un droit à la portabilité de vos données.
                </p>

                <p>
                    Vous pouvez exercer vos droits en écrivant à :
                    <br />
                    <strong>[adresse e-mail de contact RGPD]</strong>
                </p>

                <p>Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.</p>
            </section>

            <section className="mt-10 space-y-4">
                <h2 className="text-2xl font-medium tracking-[-0.03em]">Cookies</h2>

                <p>Ce site n’utilise pas de cookies de mesure d’audience ou publicitaires sans votre consentement.</p>

                <p>Si des outils d’analyse ou des services tiers sont ajoutés ultérieurement, cette politique sera mise à jour en conséquence.</p>
            </section>
        </LegalPage>
    );
}
