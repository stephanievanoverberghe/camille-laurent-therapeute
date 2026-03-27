export type Cta = {
    label: string;
    href: string;
};

export type HeroTrustItem = {
    id: string;
    label: string;
    value: string;
};

export type HeroImage = {
    src: string;
    alt: string;
};

export type HeroContent = {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: Cta;
    secondaryCta?: Cta;
    trustItems: HeroTrustItem[];
    image: HeroImage;
};

export type TextSectionContent = {
    title?: string;
    paragraphs: string[];
};

export type BenefitsContent = {
    title: string;
    items: string[];
};

export type AboutContent = {
    title: string;
    paragraphs: string[];
};

export type ProcessStep = {
    id: string;
    title: string;
    description: string;
};

export type ProcessContent = {
    title: string;
    steps: ProcessStep[];
};

export type FinalCtaContent = {
    title: string;
    description: string;
    cta: Cta;
};

export type ContactField = {
    id: string;
    label: string;
    name: string;
    type: 'text' | 'email' | 'textarea';
    placeholder: string;
    required?: boolean;
    rows?: number;
};

export type ContactContent = {
    eyebrow: string;
    title: string;
    description: string;
    submitLabel: string;
    reassurance: string;
    fields: ContactField[];
};

export type LandingPageContent = {
    hero: HeroContent;
    problem: TextSectionContent;
    transition: TextSectionContent;
    approach: TextSectionContent;
    benefits: BenefitsContent;
    about: AboutContent;
    process: ProcessContent;
    finalCta: FinalCtaContent;
    contact: ContactContent;
};
