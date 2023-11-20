import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';

import hunting from '../../public/hunting.webp';
import selection from '../../public/seleccion.webp';
import coaching from '../../public/coach.webp';
import outplacement from '../../public/Outplacement.webp';
import classes from '../../public/capacitaciones.webp';

import icontec from '../../public/icontec.webp';
import sence from '../../public/sence.webp';
import unWomen from '../../public/unWomen.webp';

import Wave from '../components/Wave';
import ScrollReveal from '../components/ScrollReveal';

interface HomeProps {
  image: { url: string };
}

export default function Us({ image }: HomeProps) {
  return (
    <>
      <Head>
        <title>AD Consulting | Servicios</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="head hunting, selección y reclutamiento, coaching ejecutivo, capacitación, outplacement"
        />
        <meta
          name="description"
          content="Más de 11 años de experiencia en procesos de Head Hunting, Reclutamiento y Selección de Talentos, Outplacement, Capacitación y Coaching Ejecutivo"
        />
        <meta property="og:title" content="AD Consulting | Servicios" />
        <meta property="og:url" content="https://adconsulting.cl/servicios" />
        <meta property="og:image" content={image?.url} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Más de 11 años de experiencia en procesos de Head Hunting, Reclutamiento y Selección de Talentos, Outplacement, Capacitación y Coaching Ejecutivo"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AD Consulting | Servicios" />
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
        <link
          rel="canonical"
          href="https://adconsulting.cl/servicios"
          key="canonical"
        />
      </Head>
      <Layout>
        <div className="relative pt-28 sm:pt-32 flex flex-col space-y-8 sm:space-y-16 items-center">
          <div className="flex flex-col space-y-4">
            <h1 className="font-montserrat leading-tight text-center text-3xl sm:text-4xl">
              Nuestros Servicios
            </h1>
            <h2 className="text-center mx-auto max-w-[35rem] sm:text-xl">
              En AD contamos con distintos servicios para ajustarnos a las
              necesidades de todos nuestro clientes
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-20 grid-cols-1 text-neutral-800 px-4 sm:px-32 xl:px-60">
            <div className="glass border border-orange-400/40 p-4 sm:p-8 text-center flex flex-col items-center justify-center max-w-[30rem] drop-shadow-md space-y-4 h-fit sm:h-[35rem]">
              <Image
                className="h-72 object-contain"
                src={hunting}
                alt="Head Hunting"
              />
              <h2 className="text-xl sm:text-3xl font-semibold">
                Head Hunting
              </h2>
              <h3 className="sm:text-lg">
                El Head Hunting es ideal para puestos directivos y ejecutivos
                altamente especializados, donde la competencia por el talento es
                feroz
              </h3>
            </div>
            <div className="glass border border-orange-400/40 p-4 sm:p-8 text-center flex flex-col items-center justify-center max-w-[30rem] drop-shadow-md space-y-4 h-fit sm:h-[35rem]">
              <Image
                className="h-72 object-contain"
                src={selection}
                alt="Reclutamiento y Selección"
              />
              <h2 className="text-xl sm:text-3xl font-semibold">
                Reclutamiento y Selección
              </h2>
              <h3 className="sm:text-lg">
                El proceso de reclutamiento y selección puede ser agotador, pero
                nosotros lo convertimos en una experiencia emocionante y sin
                complicaciones
              </h3>
            </div>
            <div className="glass border border-orange-400/40 p-4 sm:p-8 text-center flex flex-col items-center justify-center max-w-[30rem] drop-shadow-md space-y-4 h-fit sm:h-[35rem]">
              <Image
                className="h-72 object-contain"
                src={coaching}
                alt="Coaching Ejecutivo"
              />
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Coaching Ejecutivo
              </h2>
              <h3 className="sm:text-lg">
                Potenciamos a las personas, para maximizar su desempeño.
                Ayudamos a desarrollar o potenciar competencias especificas en
                las personas
              </h3>
            </div>
            <div className="glass border border-orange-400/40 p-4 sm:p-8 text-center flex flex-col items-center justify-center max-w-[30rem] drop-shadow-md space-y-4 h-fit sm:h-[35rem]">
              <Image
                className="h-72 object-contain"
                src={outplacement}
                alt="Outplacement"
              />
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Outplacement
              </h2>
              <h3 className="sm:text-lg">
                Acompañamos a la persona en el proceso de reinserción, cambio de
                trabajo, emprendimiento o desarrollo de actividad independiente
              </h3>
            </div>
            <div className="glass border border-orange-400/40 sm:col-span-2 relative w-full flex flex-col-reverse sm:flex-row pt-14 justify-center items-start sm:space-x-4 p-4 sm:p-8">
              <div className="flex flex-col space-y-4 max-w-[40rem] sm:pt-12">
                <h3 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left">
                  Capacitaciones
                </h3>
                <h2 className="sm:text-lg text-center sm:text-left">
                  Acercamos la formación y capacitación a las personas y
                  organizaciones, a través de programas de educación continua
                  e-learning, b-learning y presencial
                </h2>
                <h2 className="sm:text-lg text-center sm:text-left">
                  Somos un Organismo Técnico de Capacitación (OTEC) reconocido
                  en Chile por el Servicio Nacional de Capacitación y Empleo
                  (SENCE) y certificado bajo las norma de calidad NCh 2728 para
                  OTEC
                </h2>
              </div>
              <Image src={classes} alt="Capacitaciones" />
            </div>
          </div>
        </div>
        <ScrollReveal className="w-full flex flex-col py-32 space-y-2 sm:space-y-8">
          <h2 className="font-montserrat leading-tight text-center text-3xl sm:text-4xl">
            En AD estamos certificados por
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center h-full mx-auto">
            <Image
              src={sence}
              alt="sence"
              className="w-32 sm:h-40 sm:w-80 object-contain"
            />
            <Image
              src={icontec}
              alt="otec"
              className="w-32 sm:h-40 sm:w-80 object-contain"
            />
            <Image
              src={unWomen}
              alt="un women"
              className="w-32 sm:h-40 sm:w-80 object-contain"
            />
          </div>
        </ScrollReveal>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      image: {
        url: 'https://ik.imagekit.io/dior7woku/ad-consulting/previewPhoto.webp?updatedAt=1692544312682',
      },
    },
  };
};
