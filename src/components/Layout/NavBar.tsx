import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';

import AD from '../icons/AD';

import MenuMobile from './MenuMobile';

import useMediaQuery from '../../hooks/useMediaQuery';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const notMobile = useMediaQuery('sm');

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const MenuMobileButtonClickHandler = () => {
    setShowMobileMenu(true);
  };

  useEffect(() => {
    const updateNavBar = () => {
      if (window.scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', updateNavBar);

    return () => {
      window.removeEventListener('scroll', updateNavBar);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 flex flex-row justify-between items-center w-full duration-500 z-50 h-24 px-4 sm:px-32 xl:px-60 text-lg ${
          scrolled
            ? 'shadow-sm shadow-[#ED7423]/70  bg-white text-neutral-900'
            : 'shadow-sm shadow-neutral-400 bg-[#ED7423] text-white'
        }`}
      >
        <div className="flex flex-row space-x-6 items-center">
          <Link href="/">
            <div
              className={`hover:scale-[1.01] transition-all p-1 h-20 w-20 rounded-full flex items-center justify-center ${
                scrolled && 'bg-[#ED7423]'
              }`}
            >
              <AD className="scale-[1.40]" />
            </div>
          </Link>
          {notMobile && (
            <>
              <Link href="/us">
                <p className="pl-4 cursor-pointer hover:scale-[1.01] transition-all">
                  Nosotros
                </p>
              </Link>
              <Link href="/services">
                <p className="cursor-pointer hover:scale-[1.01] transition-all">
                  Servicios
                </p>
              </Link>
            </>
          )}
        </div>
        {notMobile ? (
          <button
            className={`rounded-full h-fit py-3 px-4 hover:scale-[1.01] transition-all ${
              scrolled ? 'bg-[#ED7423] text-white' : 'bg-white text-neutral-900'
            }`}
          >
            Hablemos
          </button>
        ) : (
          <button
            title="Menú de la página web"
            aria-label="Menú de la página web"
            onClick={MenuMobileButtonClickHandler}
          >
            <HiMenu
              className={`text-5xl hover:scale-[1.01] transition-all ${
                scrolled ? 'text-neutral-700' : ' text-white'
              }`}
            />
          </button>
        )}
      </nav>
      {showMobileMenu && <MenuMobile closeMobileMenu={closeMobileMenu} />}
    </>
  );
};

export default NavBar;
