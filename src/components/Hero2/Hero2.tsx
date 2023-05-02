import Image from 'next/image';

import useMediaQuery from '../../hooks/useMediaQuery';

const Hero2 = () => {
  const notMobile = useMediaQuery('lg');

  return (
    <main className="relative flex sm:flex-row justify-between pt-52 items-center px-4 sm:px-32 xl:px-60 pb-96 text-white overflow-hidden">
      <div className="flex flex-col space-y-4 sm:max-w-[45rem] z-40">
        <h1 className="font-montserrat text-[2.5rem] leading-tight sm:text-7xl drop-shadow-md">
          Potenciamos y seleccionamos a los mejores profesionales para tu
          empresa
        </h1>
        <h2 className="text-lg sm:text-2xl drop-shadow-md">
          Más de 11 años de experiencia en procesos de Head Hunting,
          Reclutamiento y Selección de Talentos, Outplacement, Capacitación y
          Coaching Ejecutivo
        </h2>
      </div>
      <div className="absolute inset-0 z-0 sm:scale-110  sm:pt-0 pt-40">
        <Image
          src="/Inicio2.jpg"
          alt="Ilustración 3D de una mujer sentada con un computador"
          width="2000"
          height="100"
          className="scale-x-[-1]"
          priority
        />
      </div>
    </main>
  );
};

export default Hero2;
