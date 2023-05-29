import LottieAnimation from '../../components/LottieAnimation';
import time from '../lotties/84267-time.json';
import network from '../lotties/network.json';
import work from '../lotties/99692-team-work.json';

const Benefits = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-40 py-40 bg-[#ED7423] text-white">
      <h2 className="text-center text-3xl font-bold py-8 -mb-20">Con el equipo de AD Consulting podrás:</h2>
      <div className="flex flex-row items-center justify-center space-x-16">
        <LottieAnimation animationData={time} className="h-[30rem]"/>
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold">Ahorrar tiempo y recursos</h2>
          <p className="w-[30rem]">En AD, nos encargamos de todo el proceso, desde la identificación de candidatos hasta la realización de entrevistas y evaluaciones, liberándote de tareas administrativas y permitiéndote enfocarte en tus actividades principales.</p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-16">
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold">Crear conexiones de impacto</h2>
          <p className="w-[30rem]">En AD, nos enorgullece contar con una amplia y diversa red de profesionales talentosos en todos los campos. Accedemos a una variedad de contactos y recursos, lo que nos permite identificar a los candidatos más prometedores para tu empresa. Además, nuestra red incluye expertos y facilitadores especializados en diversas áreas, brindándote perspectivas únicas y conocimientos especializados.</p>
        </div>
        <LottieAnimation animationData={network} className="h-[40rem]"/>
      </div>
      <div className="flex flex-row items-center justify-center space-x-16">
      <LottieAnimation animationData={work} className="h-[30rem]"/>
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold">Encontrar la solución que tú necesitas</h2>
          <p className="w-[30rem]">Somos tu socio estratégico en recursos humanos. Ofrecemos una amplia gama de servicios para abordar todas tus necesidades, brindándote soluciones adaptadas a tu empresa, ya que sabemos que cada empresas es única en su cultura de trabajo. Nuestro enfoque personalizado nos permite comprender tus desafíos y objetivos específicos, diseñando estrategias a medida que impulsan tu éxito empresarial.</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;