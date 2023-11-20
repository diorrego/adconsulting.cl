import { useState, RefObject } from 'react';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';

import AD from '../icons/AD';

import MenuMobile from './MenuMobile';

import useMediaQuery from '../../hooks/useMediaQuery';

interface NavBarProps {
  CTARef: RefObject<HTMLDivElement>;
}

const NavBar = ({ CTARef }: NavBarProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const notMobile = useMediaQuery('sm');
  const CTA = CTARef.current;

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const MenuMobileButtonClickHandler = () => {
    setShowMobileMenu(true);
  };

  const goToCTA = () => {
    if (CTA)
      if (!notMobile) {
        window.scrollTo({
          top: CTA.offsetTop,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: CTA.offsetTop + 20,
          behavior: 'smooth',
        });
      }
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 flex flex-row justify-between items-center w-full duration-500 z-50 h-18 px-4 sm:px-32 xl:px-60 text-lg shadow shadow-orange-600/40 bg-[#ED7423] text-white`}
      >
        <div className="flex flex-row space-x-6 items-center">
          <Link href="/">
            <div
              className={`hover:scale-[1.01] transition-all p-1 h-20 w-20 rounded-full flex items-center justify-center`}
            >
              <AD className="scale-[1.40]" />
            </div>
          </Link>
          {notMobile && (
            <>
              <Link href="/nosotros">
                <p className="pl-4 cursor-pointer hover:scale-[1.01] transition-all font-semibold">
                  Nosotros
                </p>
              </Link>
              <Link href="/servicios">
                <p className="cursor-pointer hover:scale-[1.01] transition-all font-semibold">
                  Servicios
                </p>
              </Link>
            </>
          )}
        </div>
        {notMobile ? (
          <button
            className={`rounded-full h-fit py-3 px-4 hover:scale-[1.01] transition-all bg-white text-orange-600 font-bold`}
            onClick={goToCTA}
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
              className={`text-5xl hover:scale-[1.01] transition-all text-white`}
            />
          </button>
        )}
      </nav>
      {showMobileMenu && (
        <MenuMobile closeMobileMenu={closeMobileMenu} goToCTA={goToCTA} />
      )}
    </>
  );
};

export default NavBar;
