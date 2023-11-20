import { motion } from 'framer-motion';

import LottieAnimation from '../LottieAnimation';
import Wave from '../Wave';

import useMediaQuery from '../../hooks/useMediaQuery';

import heroOrange from '../lotties/heroOrange.json';

const Hero = () => {
  const notMobile = useMediaQuery('lg');

  return (
    <main className="relative flex sm:flex-row px-4 sm:px-32 xl:px-60 bg-gradient-to-tr from-[#E46E26] via-[#EB8547] to-[#FFAE48] sm:h-[75vh]">
      <div className="flex flex-col space-y-4 items-start sm:max-w-[45rem] text-white py-40 sm:py-0 sm:pt-36">
        <h1 className="font-montserrat leading-tight text-4xl xl:text-6xl">
          Seleccionamos y potenciamos el talento de tu empresa
        </h1>
        <h2 className="xl:text-xl">
          Más de <span className="font-bold">11 años de experiencia</span> en
          procesos de Head Hunting, Reclutamiento, Selección de Talentos,
          Outplacement, Capacitación y Coaching Ejecutivo
        </h2>
      </div>
      {notMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-start pt-12"
        >
          <LottieAnimation className="scale-110" animationData={heroOrange} />
        </motion.div>
      )}
      <Wave className="absolute -bottom-1 w-full left-0 scale-110" />
    </main>
  );
};

export default Hero;
