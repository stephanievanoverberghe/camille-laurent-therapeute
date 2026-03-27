import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/marketing/Hero';
import { PainPoints } from '@/components/marketing/PainPoints';
import { Transition } from '@/components/marketing/Transition';
import { Approach } from '@/components/marketing/Approach';
import { Benefits } from '@/components/marketing/Benefits';
import { AboutTherapist } from '@/components/marketing/AboutTherapist';
import { Process } from '@/components/marketing/Process';
import { FinalCta } from '@/components/marketing/FinalCta';
import { Contact } from '@/components/marketing/ContactForm';

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <PainPoints />
                <Transition />
                <Approach />
                <Benefits />
                <AboutTherapist />
                <Process />
                <FinalCta />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
