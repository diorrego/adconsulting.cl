import Image from 'next/image';

import aleman from '../../../public/DSC.webp';
import innergy from '../../../public/Innergy.webp';
import isola from '../../../public/isola.webp';
import saint from '../../../public/saintJohns.webp';
import tomas from '../../../public/santoTomas.webp';
import chequen from '../../../public/Chequen.webp';

import ScrollReveal from '../ScrollReveal';
import useMediaQuery from '../../hooks/useMediaQuery';

const Clients = () => {
  const notMobile = useMediaQuery('sm');

  return (
    <section className="relative flex flex-col space-y-12 pt-16 pb-32">
      <h2 className="text-center text-3xl sm:text-4xl font-medium text-orange-600 max-w-[40rem] mx-auto">
        ¡Impactando en la productividad de{' '}
        <span className="font-extrabold">+100 empresas</span>!
      </h2>
      <ScrollReveal>
        <div className="flex flex-row items-center justify-center h-full">
          <Image
            src={innergy}
            alt="Innergy"
            className="w-48 sm:h-40 sm:w-80 object-contain"
          />
          <Image
            src={aleman}
            alt="Colegio Aleman"
            className="w-48 sm:h-40 sm:w-80 object-contain"
          />

          {notMobile && (
            <Image
              src={isola}
              alt="andes"
              className="h-40 w-80 object-contain"
            />
          )}
        </div>
        <div className="flex flex-row items-center justify-center h-full">
          <Image
            src={chequen}
            alt="Empresas Chequén"
            className="w-48 sm:h-40 sm:w-80 object-contain"
          />
          <Image
            src={tomas}
            alt="Universidad Santo Tomás"
            className="w-48 sm:h-40 sm:w-80 object-contain"
          />
          {notMobile && (
            <Image
              src={saint}
              alt="Colegio Saint John's"
              className="h-40 w-80 object-contain"
            />
          )}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Clients;
