'use client';

import Image from 'next/image';
import logo from '/public/images/logo.svg';
import homeIcon from '/public/images/home-icon.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    return (
        <header className="header">
            <Link href='/'>
                <div>
                    <Image 
                    src={logo} 
                    width={250}
                    height={100}
                    alt="SponsorDirekt UF" 
                    className='translate-y-0.5'
                    />
                </div>
            </Link>
          <nav>
            <Link href="/" passHref>
              <button 
                className='button flex gap-3 items-center justify-center'
              >
                <Image 
                  src={homeIcon} 
                  width={20}
                  height={20}
                  alt="Home Icon" 
                />
                Hem
              </button>
            </Link>
            <Link href="/om-oss" passHref>
                <button className='button'>Om oss</button>
            </Link>
            <Link href="/kontakt" passHref>
                <button className='button'>Kontakta oss</button>
            </Link>
            <div className='w-5'></div>
            {/* <Link href='/ansokan/sok-sponsor' passHref> */}
                <button className='altButton' type='button' onClick={() => {
                    router.prefetch('/ansokan/sok-sponsor');
                    router.push('/ansokan/sok-sponsor');
                    }
                }>
                    Sök sponsor</button>
            {/* </Link> */}
            <Link href='/ansokan/bli-sponsor' passHref>
                <button className='altButton'>Bli sponsor</button>
            </Link>
          </nav>
        </header>
    )
}