import LottieAnimation from '../../components/LottieAnimation';

import useMediaQuery from '../../hooks/useMediaQuery';

import hero from '../lotties/5IwYExIEiK.json';

const Hero3 = () => {
  const notMobile = useMediaQuery('lg');

  return (
    <main className="flex sm:flex-row justify-between pt-40 items-center px-4 sm:px-32 xl:px-60 pb-40">
      <div className="flex flex-col space-y-4 sm:max-w-[50rem]">
        <h1 className="font-montserrat text-[2.5rem] leading-tight sm:text-7xl">
          Encontramos y potenciamos el talento de tu empresa
        </h1>
        <h2 className="text-lg sm:text-2xl">
          11 años de experiencia en procesos de Head Hunting, Reclutamiento,
          Selección de Talentos, Outplacement, Capacitación y Coaching Ejecutivo
        </h2>
      </div>
      {notMobile && <LottieAnimation animationData={hero} />}
    </main>
  );
};

export default Hero3;
