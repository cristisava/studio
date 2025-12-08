"use client";

import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export function LayoutShell({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={cn('min-h-screen bg-background font-body antialiased flex flex-col')}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
        </div>
    )
}
