import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer py-4 mt-8">
            <div className="container mx-auto px-36 flex justify-between items-center">
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