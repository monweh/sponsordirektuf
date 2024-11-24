import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import homeIcon from '/public/images/home-icon.svg';
import hamburger from '/public/images/hamburger.svg';
import x from '/public/images/x.svg';

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        const elements = document.getElementsByClassName('header-background');
        for (let i = 0; i < elements.length; i++) {
            if (isOpen) {
                    elements[i].classList.add('header-background-blur');
                } else {
                    elements[i].classList.remove('header-background-blur');
                }
        }
    }, [isOpen]);

    return (
        <div>
            <div>
                <button className={`icon-button md:hidden p-1 ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
                    <Image
                        src={isOpen ? x : hamburger} 
                        width={30}
                        height={30}
                        alt={isOpen ? "X Icon" : "Hamburger Icon"}
                    />
                </button>
            </div>
            <div>
                <div className={`mobile-navbar ${isOpen ? 'slide-down' : 'slide-up'}`}>
                    <div>
                    <nav className='flex flex-col gap-10 justify-center content-between items-center w-full'>
                        <Link href="/" passHref>
                        <button className='button flex items-center gap-3 text-2xl' onClick={handleClose}>
                            <Image 
                            src={homeIcon} 
                            width={25}
                            height={25}
                            alt="Home Icon" 
                            />
                            Hem
                        </button>
                        </Link>
                        <Link href="/om-oss" passHref>
                            <button className='button flex text-2xl' onClick={handleClose}>Om oss</button>
                        </Link>
                        <Link href="/kontakt" passHref>
                            <button className='button flex text-2xl' onClick={handleClose}>Kontakta oss</button>
                        </Link>
                        <div className='h-0'></div>
                        <Link href='/ansokan/sok-sponsor' passHref>
                            <button className='altButton !bg-sponsor-blue flex text-2xl py-4 px-8' onClick={handleClose}>Sök sponsor</button>
                        </Link>
                        <Link href='/ansokan/bli-sponsor' passHref>
                            <button className='altButton !bg-sponsor-blue flex text-2xl py-4 px-8' onClick={handleClose}>Bli sponsor</button>
                        </Link>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}