import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';

import hunting from '../../public/hunting.webp';
import selection from '../../public/seleccion.webp';
import coaching from '../../public/coach.webp';
import outplacement from '../../public/Outplacement.webp';
import classes from '../../public/capacitaciones.webp';

import Wave from '../components/Wave';
import ScrollReveal from '../components/ScrollReveal';

interface HomeProps {
  image: { url: string };
}

export default function Us({ image }: HomeProps) {
  return (
    <>
      <Head>
        <title>
          AD Consulting | Seleccionamos y Potenciamos el Talento de tu Empresa
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="head hunting, selección y reclutamiento, coaching ejecutivo, capacitación, outplacement"
        />
        <meta
          name="description"
          content="Más de 11 años de experiencia en procesos de Head Hunting, Reclutamiento y Selección de Talentos, Outplacement, Capacitación y Coaching Ejecutivo"
        />
        <meta
          property="og:title"
          content="AD Consulting | Seleccionamos y Potenciamos el Talento de tu Empresa"
        />
        <meta property="og:url" content="https://adconsulting.cl" />
        <meta property="og:image" content={image?.url} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Más de 11 años de experiencia en procesos de Head Hunting, Reclutamiento y Selección de Talentos, Outplacement, Capacitación y Coaching Ejecutivo"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AD Consulting | Seleccionamos y Potenciamos el Talento de tu Empresa"
        />
        <meta
          name="twitter:description"
          content="Más de 11 años de experiencia en procesos de Head Hunting, Reclutamiento y Selección de Talentos, Outplacement, Capacitación y Coaching Ejecutivo"
        />
        <meta name="twitter:creator" content="@diorrego" />
        <meta name="twitter:image" content={image?.url} />
        <meta name="author" content="Diego Orrego" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://adconsulting.cl" key="canonical" />
      </Head>
      <Layout>
        <div className="relative pt-28 sm:pt-40 pb-40 flex flex-col space-y-8 sm:space-y-16 items-center bg-gradient-to-tr from-[#E46E26] via-[#EB8547] to-[#FFAE48] text-white">
          <div className="flex flex-col space-y-4">
            <h1 className="font-montserrat leading-tight text-center text-4xl sm:text-6xl">
              Nuestros Servicios
            </h1>
            <h2 className="text-center mx-auto max-w-[35rem] sm:text-xl">
              En AD contamos con distintos servicios para ajustarnos a las
              necesidades de todos nuestro clientes.{' '}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-20 grid-cols-1 text-neutral-800 px-4 sm:px-32 xl:px-60">
            <div className="glass p-4 sm:p-8 text-center flex flex-col items-center justify-center max-w-[30rem] drop-shadow-md space-y-4">
              <Image src={hunting} alt="Head Hunting" />
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Head Hunting
              </h2>
              <h3 className="sm:text-xl">
                El Head Hunting es ideal para puestos directivos y ejecutivos
                altamente especializados, donde la competencia por el talento es
                feroz.
              </h3>
            </div>
            <div className="glass p-4 sm:p-8 text-center flex flex-col items-center justify-center max-w-[30rem] drop-shadow-md space-y-4">
              <Image src={selection} alt="Reclutamiento y Selección" />
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Reclutamiento y Selección
              </h2>
              <h3 className="sm:text-xl">
                El proceso de reclutamiento y selección puede ser agotador, pero
                nosotros lo convertimos en una experiencia emocionante y sin
                complicaciones.
              </h3>
            </div>
            <div className="glass p-4 sm:p-8 text-center flex flex-col items-center justify-center max-w-[30rem] drop-shadow-md space-y-4">
              <Image src={coaching} alt="Coaching Ejecutivo" />
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Coaching Ejecutivo
              </h2>
              <h3 className="sm:text-xl">
                Potenciamos a las personas, para maximizar su desempeño.
                Ayudamos a desarrollar o potenciar competencias especificas en
                las personas.
              </h3>
            </div>
            <div className="glass p-4 sm:p-8 text-center flex flex-col items-center justify-center max-w-[30rem] drop-shadow-md space-y-4">
              <Image src={outplacement} alt="Outplacement" />
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Outplacement
              </h2>
              <h3 className="sm:text-xl">
                Acompañamos a la persona en el proceso de reinserción, cambio de
                trabajo, emprendimiento o desarrollo de actividad independiente.
              </h3>
            </div>
          </div>
          <Wave className="absolute -bottom-1 w-full left-0" />
        </div>
        <ScrollReveal className="relative w-full px-4 sm:px-32 xl:px-60 flex flex-col sm:flex-row pt-14 justify-center items-start sm:space-x-4">
          <div className="flex flex-col space-y-4 max-w-[40rem] sm:pt-12">
            <h3 className="text-3xl sm:text-4xl font-semibold">
              Capacitaciones
            </h3>
            <h2 className="sm:text-xl">
              Acercamos la formación y capacitación a las personas y
              organizaciones, a través de programas de educación continua
              e-learning, b-learning y presencial.
            </h2>
            <h2 className="sm:text-xl">
              Somos un Organismo Técnico de Capacitación (OTEC) reconocido en
              Chile por el Servicio Nacional de Capacitación y Empleo (SENCE) y
              certificado bajo las norma de calidad NCh 2728 para OTEC.
            </h2>
          </div>
          <Image src={classes} alt="Capacitaciones" />
        </ScrollReveal>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      image: {
        url: 'https://media.licdn.com/dms/image/D4E22AQEod7ujhseQxQ/feedshare-shrink_1280/0/1682716239512?e=1686182400&v=beta&t=_9R5TNkYKmKupxyq5TBeF5T2FkABu_pLVB40bX2WzBQ',
      },
    },
  };
};
