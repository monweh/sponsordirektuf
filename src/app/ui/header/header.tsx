'use client';

import Image from 'next/image';
import logo from '/public/images/logo.svg';
import homeIcon from '/public/images/home-icon.svg';
import Link from 'next/link';
import MobileNav from '@/app/ui/header/mobile-nav';

export default function Header() {

    return (
        <header className="header">
            <Link href='/'>
                <div>
                    <Image 
                    src={logo} 
                    width={225}
                    height={100}
                    alt="SponsorDirekt UF" 
                    className='translate-y-0.5'
                    />
                </div>
            </Link>
            {/* <button className='button md:hidden p-1' onClick={toggleMobileNav} aria-label='Aktivera mobilnavigeringsmenyn'> 
              <Image
                src={hamburger} 
                width={30}
                height={30}
                alt="Hamburger Icon"
              />
            </button>  */}

            <MobileNav />

          <nav className='hidden md:flex items-center justify-center'>
            <Link href="/" passHref>
              <button 
                className='hidden button md:flex gap-3 items-center justify-center'
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
                <button className='button hidden md:flex'>Om oss</button>
            </Link>
            <Link href="/kontakt" passHref>
                <button className='button hidden md:flex'>Kontakta oss</button>
            </Link>
            <div className='w-5'></div>
            <Link href='/ansokan/sok-sponsor' passHref>
                <button className='altButton hidden md:flex' type='button'>Sök sponsor</button>
            </Link>
            <Link href='/ansokan/bli-sponsor' passHref>
                <button className='altButton hidden md:flex'>Bli sponsor</button>
            </Link>
          </nav>
        </header>
    )
}