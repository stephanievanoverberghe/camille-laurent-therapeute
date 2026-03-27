import type { Metadata } from 'next';
import { bodyFont } from './fonts';
import './globals.css';

export const metadata: Metadata = {
    title: 'Camille Laurent',
    description: 'Landing page thérapeute',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={`${bodyFont.variable}`}>
            <body>{children}</body>
        </html>
    );
}
