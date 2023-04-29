import Image from 'next/image';

import useMediaQuery from '../../hooks/useMediaQuery';

const Hero = () => {
  const notMobile = useMediaQuery('lg');

  return (
    <main className="flex sm:flex-row justify-between pt-40 items-center px-4 sm:px-32 xl:px-60 pb-40">
      <div className="flex flex-col space-y-4 sm:max-w-[55rem]">
        <h1 className="font-montserrat text-[2.5rem] leading-tight sm:text-7xl">
          Seleccionamos y potenciamos el talento de tu empresa
        </h1>
        <h2 className="text-lg sm:text-2xl">
          Más de 11 años de experiencia en procesos de Head Hunting,
          Reclutamiento y Selección de Talentos, Outplacement, Capacitación y
          Coaching Ejecutivo
        </h2>
      </div>
      {notMobile && (
        <Image
          src="/girl.png"
          alt="Ilustración 3D de una mujer sentada con un computador"
          width="400"
          height="600"
        />
      )}
    </main>
  );
};

export default Hero;
