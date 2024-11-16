import Link from 'next/link';

export default function RedirectButton({ text, href }: { text: string, href: string }) {
    return (
        <Link href={href} passHref>
            <button className='mt-4 py-3 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-700'>{text}</button>
        </Link>
    );
}