import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/i18n/i18n-context';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'OkoPay - Global Payments Made Simple',
  description: 'Fast, secure cross-border transactions. Send money globally in seconds with low fees, real-time tracking, and support for 150+ countries.',
  keywords: 'cross-border payments, international money transfer, remittance, global payments, fintech',
  openGraph: {
    title: 'OkoPay - Global Payments Made Simple',
    description: 'Fast, secure cross-border transactions with low fees',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
