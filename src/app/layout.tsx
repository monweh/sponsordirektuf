import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import Header from '@/app/ui/header/header';
import Footer from './ui/footer/footer';

const sora = Sora({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "SponsorDirekt UF",
  description: "Hitta eller bli sponsor, enkelt och smidigt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
