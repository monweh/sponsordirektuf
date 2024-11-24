import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="header-background footer py-4 mt-8 z-10 w-screen">
            <div className="container mx-auto md:px-36 flex flex-col md:flex-row text-center justify-between items-center">
                <p>&copy; 2024 SponsorDirekt UF</p>
                <div className="flex gap-4">
                    <Link href="/kontakt" passHref>
                        <p className="hover:underline">Kontakta oss</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}