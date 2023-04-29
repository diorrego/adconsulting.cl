import Link from 'next/link';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import AD from '../icons/AD';

const Footer = () => {
  return (
    <footer className="relative flex flex-col sm:flex-row items-center justify-between sm:item-start space-y-16 sm:space-y-0 bg-[#ED7423] w-full px-4 sm:px-32 xl:px-60 pt-16 pb-24 sm:pb-32">
      <div className="flex flex-row space-x-6 items-center h-fit">
        <Link href="/">
          <AD className="scale-[1.40] hover:scale-[1.01] transition-all" />
        </Link>
        <>
          <a className="pl-4 cursor-pointer hover:scale-[1.01] transition-all text-white">
            Nosotros
          </a>
          <a className="cursor-pointer hover:scale-[1.01] transition-all text-white">
            Servicios
          </a>
        </>
      </div>
      <div className="text-white text-5xl flex flex-row space-x-4 h-fit">
        <a
          href="https://www.instagram.com/adconsultingchile/"
          title="Instagram de AD Consulting"
          aria-label="Instagram de AD Consulting"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/ad-consulting-chile/"
          title="LinkedIn de AD Consulting"
          aria-label="LinkedIn de AD Consulting"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div className="absolute inset-x-0 w-fit bottom-2 mx-auto text-white text-xs">
        Desarrollado por{' '}
        <a href="https://github.com/diorrego" className="underline">
          Diego Orrego
        </a>{' '}
        <span className="text-lg">🤖</span>
      </div>
    </footer>
  );
};

export default Footer;
