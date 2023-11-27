import Image from 'next/image';

import aleman from '../../../public/DSC.webp';
import innergy from '../../../public/Innergy.webp';
import isola from '../../../public/isola.webp';
import saint from '../../../public/saintJohns.webp';
import tomas from '../../../public/santoTomas.webp';
import chequen from '../../../public/Chequen.webp';
import landes from '../../../public/Landes.webp';
import mundo from '../../../public/mundo.webp';

import ScrollReveal from '../ScrollReveal';
import useMediaQuery from '../../hooks/useMediaQuery';
import Carousel from './Carousel';
import { motion } from 'framer-motion';

const Clients = () => {
  const notMobile = useMediaQuery('md');

  return (
    <section className="relative flex flex-col space-y-12 pt-16 pb-32">
      <h2 className="text-center text-3xl sm:text-4xl font-medium text-orange-600 max-w-[40rem] mx-auto">
        ¡Impactando en la productividad de{' '}
        <span className="font-extrabold">+100 empresas</span>!
      </h2>
      <ScrollReveal>
        {notMobile ? (
          <>
            <div className="flex flex-row items-center justify-center h-full">
              <Image
                src={mundo}
                alt="MUNDO"
                className="w-48 sm:h-40 sm:w-80 object-contain"
              />
              <Image
                src={landes}
                alt="Landes"
                className="w-48 sm:h-40 sm:w-80 object-contain"
              />
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
              <Image
                src={saint}
                alt="Colegio Saint John's"
                className="h-40 w-80 object-contain"
              />
              <Image
                src={isola}
                alt="ISOLA"
                className="h-40 w-80 object-contain"
              />
            </div>
          </>
        ) : (
          <Carousel
            traits={[
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                key="1"
                className="relative flex flex-row"
              >
                <Image
                  src={mundo}
                  alt="MUNDO"
                  className="w-48 sm:h-40 sm:w-80 object-contain"
                  unoptimized
                />
                <Image
                  src={landes}
                  alt="Landes"
                  className="w-48 sm:h-40 sm:w-80 object-contain"
                  unoptimized
                />
              </motion.div>,
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                key="1"
                className="relative flex flex-row"
              >
                <Image
                  src={innergy}
                  alt="Innergy"
                  className="w-48 sm:h-40 sm:w-80 object-contain"
                  unoptimized
                />
                <Image
                  src={aleman}
                  alt="Colegio Aleman"
                  className="w-48 sm:h-40 sm:w-80 object-contain"
                  unoptimized
                />
              </motion.div>,
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                key="1"
                className="relative flex flex-row"
              >
                <Image
                  src={chequen}
                  alt="Empresas Chequén"
                  className="w-48 sm:h-40 sm:w-80 object-contain"
                  unoptimized
                />
                <Image
                  src={tomas}
                  alt="Universidad Santo Tomás"
                  className="w-48 sm:h-40 sm:w-80 object-contain"
                  unoptimized
                />
              </motion.div>,
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                key="1"
                className="relative flex flex-row items-center -space-x-8"
              >
                <Image
                  src={saint}
                  alt="Colegio Saint John's"
                  className="w-48 sm:h-40 sm:w-80 object-contain"
                  unoptimized
                />
                <Image
                  src={isola}
                  alt="ISOLA"
                  className="w-48 sm:h-40 sm:w-80 object-contain"
                  unoptimized
                />
              </motion.div>,
            ]}
          />
        )}
      </ScrollReveal>
    </section>
  );
};

export default Clients;
