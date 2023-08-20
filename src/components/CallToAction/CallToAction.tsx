import CTAIllustration from './CTAIllustration';

import useMediaQuery from '../../hooks/useMediaQuery';
import ScrollReveal from '../ScrollReveal';

const CallToAction = () => {
  const notMobile = useMediaQuery('sm');

  return (
    <ScrollReveal className="relative px-4 sm:px-0 py-32 z-40 h-screen">
      <form className="absolute inset-0 flex flex-col items-center justify-center space-y-4 sm:space-y-8 p-6 text-white gradient-box max-w-[35rem] m-auto z-20 h-fit mx-2 sm:mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">Hablemos</h2>
        <h3 className="pb-8 text-center text-xl">
          Déjanos tus datos y te contactaremos lo antes posible
        </h3>
        <label className="flex flex-col space-y-2 w-full">
          <p>Nombre</p>
          <input
            className="border border-neutral-400 rounded-md p-1 w-full h-14 bg-white"
            placeholder="Ingresa tu nombre"
          />
        </label>
        <label className="flex flex-col space-y-2 w-full">
          <p>Empresa</p>
          <input
            className="border border-neutral-400 rounded-md p-1 w-full h-14 bg-white"
            placeholder="Ingresa tu empresa"
          />
        </label>
        <label className="flex flex-col space-y-2 w-full">
          <p>Email</p>
          <input
            className="border border-neutral-400 rounded-md p-1 w-full h-14 bg-white"
            placeholder="Ingresa tu email"
          />
        </label>
        <button className="bg-white rounded-full p-4 text-orange-600 drop-shadow-sm font-bold">
          ¡Conectemos!
        </button>
      </form>
      {notMobile && (
        <div className="absolute inset-0 z-0">
          <CTAIllustration className="mx-auto z-0" />
        </div>
      )}
    </ScrollReveal>
  );
};

export default CallToAction;
