import { motion } from 'framer-motion';

import LottieAnimation from '../LottieAnimation';
import Wave from '../Wave';

import useMediaQuery from '../../hooks/useMediaQuery';

import heroOrange from '../lotties/heroOrange.json';

const Hero = () => {
  const notMobile = useMediaQuery('sm');

  return (
    <main className="relative flex sm:flex-row justify-between py-40 sm:py-32 items-end px-4 sm:px-32 xl:px-60 bg-gradient-to-tr from-[#E46E26] via-[#EB8547] to-[#FFAE48] sm:h-[75vh]">
      <div className="flex flex-col space-y-4 sm:max-w-[45rem] text-white sm:pb-20">
        <h1 className="font-montserrat leading-tight text-4xl sm:text-6xl">
          Seleccionamos y potenciamos el talento de tu empresa
        </h1>
        <h2 className="sm:text-xl">
          Más de <span className="font-bold">11 años de experiencia</span> en
          procesos de Head Hunting, Reclutamiento, Selección de Talentos,
          Outplacement, Capacitación y Coaching Ejecutivo
        </h2>
      </div>
      {notMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <LottieAnimation animationData={heroOrange} />
        </motion.div>
      )}
      <Wave className="absolute -bottom-1 w-full left-0" />
    </main>
  );
};

export default Hero;
