const CallToAction = () => {
  return (
    <main className="flex flex-col items-center justify-center space-y-8 py-24 text-white bg-[#ED7423]">
      <h2 className="text-center text-3xl font-bold">¿Quieres conocer más sobre nuestros servicios?</h2>
      <h3 className="pb-8">Déjanos tus datos y te contactaremos</h3>
      <label className="flex flex-row space-x-2 items-center justify-center"><p className="w-24">Nombre</p>
        <input className="border border-neutral-400 rounded-md p-1 w-96 h-14 bg-orange-100" placeholder="Ingresa tu nombre"/>
      </label>
      <label className="flex flex-row space-x-2 items-center justify-center"><p className="w-24">Empresa</p>
        <input className="border border-neutral-400 rounded-md p-1 w-96 h-14 bg-orange-100" placeholder="Ingresa tu empresa"/>
      </label>
      <label className="flex flex-row space-x-2 items-center justify-center"><p className="w-24">Email</p>
        <input className="border border-neutral-400 rounded-md p-1 w-96 h-14 bg-orange-100" placeholder="Ingresa tu email"/>
      </label>
      <h2 className="font-montserrat text-[2.5rem] leading-tight sm:text-4xl text-center w-[35rem] pt-20">El éxito en una empresa, radica en seleccionar la persona adecuada para cada desafío.

</h2>
    </main>
  );
};

export default CallToAction;