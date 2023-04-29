import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';

interface MenuMobileProps {
  closeMobileMenu: Function;
}

const MenuMobile = ({ closeMobileMenu }: MenuMobileProps) => {
  const menuMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contained = menuMobileRef.current;

    const closeDropDown = (e: Event) => {
      if (contained && !contained.contains(e.target as HTMLElement)) {
        closeMobileMenu();
      }
    };

    if (contained) {
      document.addEventListener('mousedown', closeDropDown);
    }

    return () => {
      document.removeEventListener('mousedown', closeDropDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuMobileRef]);

  return (
    <m.div
      ref={menuMobileRef}
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      transition={{
        type: 'ease-out',
      }}
      className="fixed h-full w-60 right-0 bg-white z-50 shadow-lg shadow-black rounded-l-lg"
    >
      <button
        onClick={() => closeMobileMenu()}
        className="absolute top-2 left-4 text-lg hover:scale-[1.05] font-semibold transition-all"
      >
        x
      </button>
      <ul className="flex flex-col space-y-6 pl-10 pt-10 h-full">
        <li>
          <Link href="/">
            <div className="text-lg font-semibold leading-normal hover:scale-[1.01] transition-all pl-3">
              Nosotros
            </div>
          </Link>
        </li>
        <li>
          <button className="text-lg font-semibold leading-normal hover:scale-[1.01] transition-all pb-2 pl-3">
            Servicios
          </button>
        </li>
        <li>
          <button className="rounded-full h-fit py-3 px-4 hover:scale-[1.01] transition-all bg-[#ED7423] text-white">
            Hablemos
          </button>
        </li>
      </ul>
    </m.div>
  );
};

export default MenuMobile;
