import type { Metadata } from 'next';
import { Archivo, DM_Sans, DM_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import './globals.css';

const archivo = Archivo({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-archivo',
});

const dmSans = DM_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dmsans',
});

const dmMono = DM_Mono({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dmmono',
});

export const metadata: Metadata = {
  title: {
    default: 'Ignacio Barboza — Senior UX & Product Designer',
    template: '%s — Ignacio Barboza',
  },
  description:
    'Senior UX and product design professional with 8+ years across banking, automotive, enterprise platforms, and global web ecosystems.',
  openGraph: {
    type: 'website',
    siteName: 'Ignacio Barboza',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body
        style={{
          fontFamily: 'var(--font-dmsans), sans-serif',
          backgroundColor: 'var(--white)',
          color: 'var(--teal)',
        }}
      >
        <a
          href="#main-content"
          style={{
            position: 'absolute',
            left: '-9999px',
            top: 'auto',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
          }}
          className="skip-link focus:left-4 focus:top-4 focus:w-auto focus:h-auto focus:overflow-visible focus:z-50 focus:bg-white focus:p-2"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
