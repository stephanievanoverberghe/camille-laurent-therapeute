export type Cta = {
    label: string;
    href: string;
};

export type HeroContent = {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: Cta;
    secondaryCta?: Cta;
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

export type LandingPageContent = {
    hero: HeroContent;
    problem: TextSectionContent;
    transition: TextSectionContent;
    approach: TextSectionContent;
    benefits: BenefitsContent;
    about: AboutContent;
    process: ProcessContent;
    finalCta: FinalCtaContent;
};
