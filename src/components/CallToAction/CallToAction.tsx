import { FormEvent, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import CTAIllustration from './CTAIllustration';

import useMediaQuery from '../../hooks/useMediaQuery';
import ScrollReveal from '../ScrollReveal';
const CallToAction = () => {
  const notMobile = useMediaQuery('sm');
  const form = useRef<HTMLFormElement>(null);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSendedEmail, setIsSendedEmail] = useState(false);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    setSendingEmail(true);

    try {
      if (form.current)
        await emailjs.sendForm(
          'service_d8mg9mf',
          'template_mi1fwnp',
          form.current,
          'Wt4iOTEmEf_6G1MT7'
        );
      setIsSendedEmail(true);
      setSendingEmail(false);
    } catch {
      setIsError(true);
      setSendingEmail(false);
    }
  };

  return (
    <ScrollReveal className="relative px-4 sm:px-0 py-40 z-40 h-[120vh] sm:h-[100vh]">
      <form
        ref={form}
        className="absolute inset-0 flex flex-col items-center justify-center space-y-4 sm:space-y-8 p-6 text-white gradient-box max-w-[35rem] m-auto z-20 h-fit mx-2 sm:mx-auto"
        onSubmit={sendEmail}
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold">Hablemos</h2>
        <h3 className="pb-8 text-center text-xl">
          Déjanos tus datos y te contactaremos lo antes posible
        </h3>
        <label className="flex flex-col space-y-2 w-full">
          <p>Nombre</p>
          <input
            className="border border-neutral-400 rounded-md p-1 w-full h-14 bg-white text-neutral-800 outline-orange-200"
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
          />
        </label>
        <label className="flex flex-col space-y-2 w-full">
          <p>Empresa</p>
          <input
            className="border border-neutral-400 rounded-md p-1 w-full h-14 bg-white text-neutral-800 outline-orange-200"
            type="text"
            name="company"
            placeholder="Ingresa tu empresa"
          />
        </label>
        <label className="flex flex-col space-y-2 w-full">
          <p>Email</p>
          <input
            className="border border-neutral-400 rounded-md p-1 w-full h-14 bg-white text-neutral-800 outline-orange-200"
            type="email"
            name="email"
            placeholder="Ingresa tu email"
          />
        </label>
        <label className="flex flex-col space-y-2 w-full">
          <p>Celular</p>
          <input
            className="border border-neutral-400 rounded-md p-1 w-full h-14 bg-white text-neutral-800 outline-orange-200"
            type="text"
            name="celular"
            placeholder="Ingresa tu celular"
          />
        </label>
        {isError ? (
          <div className="text-xl font-semibold text-center">
            Error de conectividad 😕 Por favor recargar la página e intenta
            mandar los datos nuevamente.
          </div>
        ) : isSendedEmail ? (
          <div className="text-xl font-semibold text-center">
            ¡Gracias! Nuestro equipo te contactará en breve 📧
          </div>
        ) : (
          <button
            disabled={sendingEmail}
            type="submit"
            className={`${
              sendingEmail
                ? 'bg-neutral-500 text-white'
                : 'bg-white text-orange-600'
            } rounded-full p-4 drop-shadow-sm font-bold`}
          >
            {sendingEmail ? 'Enviando...' : '¡Conectemos!'}
          </button>
        )}
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
