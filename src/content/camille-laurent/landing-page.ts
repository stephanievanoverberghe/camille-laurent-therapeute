import type { LandingPageContent } from '@/domain/landing/types';

export const landingPageContent: LandingPageContent = {
    hero: {
        eyebrow: 'Accompagnement thérapeutique',
        title: 'Retrouver un espace pour vous au milieu de la surcharge émotionnelle',
        description:
            'Un accompagnement doux et humain pour les femmes qui se sentent fatiguées, submergées ou en perte de repères. Un espace pour comprendre ce que vous traversez, apaiser ce que vous ressentez et retrouver un équilibre plus juste.',
        primaryCta: {
            label: 'Prendre contact',
            href: '#contact',
        },
        secondaryCta: {
            label: 'En savoir plus',
            href: '#accompagnement',
        },
        trustItems: [
            {
                id: 'approach',
                label: 'Approche',
                value: 'Douce et profondément humaine',
            },
            {
                id: 'format',
                label: 'Format',
                value: 'Accompagnement individuel en visio',
            },
            {
                id: 'goal',
                label: 'Objectif',
                value: 'Retrouver plus de clarté et d’apaisement',
            },
        ],
        image: {
            src: '/images/hero.png',
            alt: 'Portrait doux et rassurant de Camille Laurent dans une lumière naturelle',
        },
    },

    problem: {
        paragraphs: [
            'Vous avez l’impression de porter beaucoup, sans vraiment réussir à relâcher.',
            'Les émotions prennent de la place, les pensées tournent, et il devient difficile de savoir ce dont vous avez réellement besoin.',
            'Vous avancez, mais avec une sensation de fatigue, de flou ou de déséquilibre.',
            'Et malgré vos efforts, quelque chose reste instable à l’intérieur.',
        ],
    },

    transition: {
        paragraphs: [
            'Ce que vous ressentez a du sens.',
            'Et vous n’avez pas à traverser cela seule.',
            'Prendre un temps pour vous, pour comprendre ce qui se passe en vous et déposer ce que vous ressentez, peut déjà tout changer.',
        ],
    },

    approach: {
        title: 'Un accompagnement pensé pour votre rythme',
        paragraphs: [
            'Je vous propose un accompagnement individuel, construit autour de votre rythme et de votre situation.',
            'Un espace d’écoute, de compréhension et d’apaisement, où vous pouvez déposer ce que vous vivez sans jugement.',
            'Chaque séance s’adapte à vous, avec une approche qui mêle ressenti, émotion et outils concrets pour avancer pas à pas.',
        ],
    },

    benefits: {
        title: 'Au fil de l’accompagnement, vous pouvez',
        items: [
            'Mieux comprendre ce que vous ressentez',
            'Apaiser les tensions intérieures',
            'Retrouver plus de clarté dans vos pensées',
            'Vous sentir plus alignée avec vous-même',
            'Avancer avec plus de sérénité',
        ],
    },

    about: {
        title: 'Je m’appelle Camille',
        paragraphs: [
            'J’accompagne des femmes qui traversent des périodes de fatigue émotionnelle, de transition ou de perte de repères.',
            'Mon approche est douce, progressive et profondément humaine.',
            'L’objectif n’est pas de vous transformer, mais de vous aider à retrouver un équilibre plus juste, plus apaisé et plus aligné avec qui vous êtes.',
        ],
    },

    process: {
        title: 'Comment se passe l’accompagnement ?',
        steps: [
            {
                id: 'first-contact',
                title: 'Un premier échange',
                description: 'Un temps pour comprendre votre situation et vos besoins.',
            },
            {
                id: 'tailored-approach',
                title: 'Une approche adaptée',
                description: 'Un accompagnement personnalisé, à votre rythme.',
            },
            {
                id: 'progressive-path',
                title: 'Un cheminement progressif',
                description: 'Des séances pour avancer pas à pas vers plus de clarté et d’apaisement.',
            },
        ],
    },

    finalCta: {
        title: 'Vous ressentez le besoin d’en parler ?',
        description: 'Je vous propose un premier échange pour faire le point sur votre situation et voir si cet accompagnement vous correspond.',
        cta: {
            label: 'Me contacter',
            href: '#contact',
        },
    },
    contact: {
        eyebrow: 'Contact',
        title: 'Prendre un premier temps d’échange',
        description: 'Vous pouvez simplement décrire ce que vous traversez ou ce dont vous auriez besoin. Je vous répondrai avec douceur et clarté.',
        submitLabel: 'Envoyer ma demande',
        reassurance:
            'Les informations transmises via ce formulaire sont utilisées uniquement pour répondre à votre demande. Vous pouvez exercer vos droits en écrivant à [adresse e-mail].',
        fields: [
            {
                id: 'first-name',
                label: 'Prénom',
                name: 'firstName',
                type: 'text',
                placeholder: 'Votre prénom',
                required: true,
            },
            {
                id: 'email',
                label: 'E-mail',
                name: 'email',
                type: 'email',
                placeholder: 'votre@email.com',
                required: true,
            },
            {
                id: 'message',
                label: 'Message',
                name: 'message',
                type: 'textarea',
                placeholder: 'Décrivez simplement ce que vous traversez ou votre besoin…',
                required: true,
                rows: 6,
            },
        ],
    },
};
