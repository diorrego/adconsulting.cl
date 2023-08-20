import Wave from '../Wave';
import ScrollReveal from '../ScrollReveal';
import Time from './Time';
import Personalized from './Personalized';
import Connect from './Connect';

const Benefits = () => {
  return (
    <div className="relative bg-gradient-to-tr from-[#E46E26] via-[#EB8547] to-[#FFAE48]">
      <Wave
        direction="down"
        className="absolute -top-1 left-0 scale-110 w-full"
      />
      <section className="flex flex-col items-center justify-center space-y-10 sm:space-y-20 py-40 text-white px-4 sm:px-0">
        <ScrollReveal className="flex flex-col-reverse sm:flex-row items-center justify-center sm:space-x-32">
          <Time className=" sm:scale-100 scale-75" />
          <div className="flex flex-col space-y-4 glass text-neutral-800 p-12 drop-shadow-md sm:w-[40rem] w-80">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ahorra tiempo y recursos
            </h2>
            <p className="sm:text-xl">
              En AD, nos encargamos de todo el proceso de selección, desde la
              identificación de candidatos y candidatas hasta la realización de
              entrevistas y evaluaciones, liberándote de tareas administrativas
              para que te enfoques en hacer crecer tu negocio.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="flex flex-col sm:flex-row items-center justify-center sm:space-x-32">
          <div className="flex flex-col space-y-4 glass text-neutral-800 p-12 drop-shadow-md sm:w-[40rem] w-80">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Crea conexiones de impacto
            </h2>
            <p className="sm:text-xl">
              Nos enorgullece contar con una amplia y diversa red de
              profesionales talentosos y talentosas. Esto nos permite
              identificar a los candidatos y candidatas más prometedores para tu
              empresa.
            </p>
          </div>
          <Connect className=" sm:scale-100 scale-75" />
        </ScrollReveal>
        <ScrollReveal className="flex flex-col-reverse sm:flex-row items-center justify-center sm:space-x-32">
          <Personalized className=" sm:scale-100 scale-75" />
          <div className="flex flex-col space-y-4 glass text-neutral-800 p-12 drop-shadow-md sm:w-[40rem] w-80">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Soluciones a tu medida
            </h2>
            <p className="sm:text-xl">
              Somos tu socio estratégico en gestión de talento. Ofrecemos
              servicios adaptados a tus necesidades empresariales, comprendiendo
              desafíos y diseñando estrategias a medida para impulsar tu éxito.
            </p>
          </div>
        </ScrollReveal>
      </section>
      <Wave className="absolute -bottom-1 left-0 w-full" />
    </div>
  );
};

export default Benefits;
