import type { Metadata } from 'next';
import './globals.css';
import { LayoutShell } from '@/components/layout/layout-shell';

export const metadata: Metadata = {
  title: 'ATFR - Asociația Tinerilor Fotbaliști din România',
  description: 'Investim în talent, modelăm caractere, construim viitorul fotbalului românesc.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
