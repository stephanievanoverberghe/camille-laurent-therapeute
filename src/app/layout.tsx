import type { Metadata } from 'next';
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
        <html lang="fr">
            <body>{children}</body>
        </html>
    );
}
