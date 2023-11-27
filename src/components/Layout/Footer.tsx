import Link from 'next/link';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import AD from '../icons/AD';
import Wave from '../Wave';

const Footer = () => {
  return (
    <footer className="relative flex flex-col space-y-12 sm:space-y-24 bg-gradient-to-tr from-[#E46E26] via-[#EB8547] to-[#FFAE48] w-full px-4 sm:px-32 xl:px-60 sm:pt-12 pb-4">
      <Wave
        direction="down"
        className="absolute top-0 left-0 w-full scale-110"
      />
      <h2 className="text-4xl text-center text-white mx-auto max-w-[60rem]">
        El <span className="font-bold">éxito</span> en una empresa radica en{' '}
        <span className="font-bold">seleccionar y potenciar</span> a las
        personas adecuadas para cada desafío
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-12 sm:space-y-0">
        <div className="flex flex-wrap gap-6 items-center justify-center h-fit">
          <Link href="/">
            <AD className="scale-[1.40] hover:scale-[1.01] transition-all" />
          </Link>
          <>
            <Link href="/nosotros">
              <p className="pl-4 cursor-pointer hover:scale-[1.01] transition-all text-white font-semibold">
                Nosotros
              </p>
            </Link>
            <Link href="/servicios">
              <p className="cursor-pointer hover:scale-[1.01] transition-all text-white font-semibold">
                Servicios
              </p>
            </Link>
            <a
              href="https://aulavirtual.adcapacitaciones.cl/login/index.php"
              className="cursor-pointer hover:scale-[1.01] transition-all text-white font-semibold"
            >
              Aula Virtual
            </a>
            <a
              href="https://adconsulting.trabajando.cl/"
              className="cursor-pointer hover:scale-[1.01] transition-all text-white font-semibold"
            >
              Ofertas de Trabajo
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
            href="https://www.linkedin.com/in/ariela-dymensztain-ad/"
            title="LinkedIn de AD Consulting"
            aria-label="LinkedIn de AD Consulting"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 inset-x-0 w-fit bottom-2 mx-auto text-white text-xs px-4 sm:px-0">
        <div className="text-sm text-center">
          AD Consulting | San Martín 553 of. 1004, Edificio Millenium II
          Concepción, Chile
        </div>
      </div>
    </footer>
  );
};

export default Footer;
