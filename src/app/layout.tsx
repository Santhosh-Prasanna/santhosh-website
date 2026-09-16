import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://santhoshprasanna.com'),
  title: 'Santhosh Prasanna (Sandy) — Freelance Business & Data Analyst | AI Enthusiast',
  description:
    'Official portfolio of Santhosh Prasanna (Sandy) — Freelance Business & Data Analyst and AI Enthusiast. Delivering high-impact business analytics, executive dashboards, predictive modeling, and intelligent workflow automation.',
  keywords: [
    'Santhosh Prasanna',
    'Sandy Analyst',
    'Freelance Business Analyst',
    'Freelance Data Analyst',
    'AI Enthusiast',
    'Power BI Dashboards',
    'Predictive Modeling',
    'Business Process Automation',
  ],
  authors: [{ name: 'Santhosh Prasanna (Sandy)' }],
  openGraph: {
    title: 'Santhosh Prasanna — Freelance Business & Data Analyst',
    description:
      'Official portfolio of Santhosh Prasanna. Bridging data strategy, business analytics, and AI automation for enterprise scalability.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/profile/My_Photo.jpeg',
        width: 1031,
        height: 1375,
        alt: 'Santhosh Prasanna — Freelance Business & Data Analyst',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#060911',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
