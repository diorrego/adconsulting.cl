import Head from 'next/head';

import ari from '../../public/ari.webp';
import mane from '../../public/mane.webp';
import joce from '../../public/joce.webp';
import stephy from '../../public/stephy.webp';

import Layout from '../components/Layout';

import Worker from '../components/Worker';

interface HomeProps {
  image: { url: string };
}

const workers = [
  {
    src: ari,
    name: 'Ariela Dymensztain',
    charge: 'Directora',
    description:
      '"Agradecida de la vida, de las oportunidades que Chile me ha brindado, convencida de que el verdadero aprendizaje proviene de las experiencias"',
    titles: 'Psicológa, coach y empresaria',
    strengths:
      'Cercanía y Afectividad - Inteligencia Social - Lealtad y Compromiso con el Entorno',
    linkedIn: 'https://www.linkedin.com/in/ariela-dymensztain-ad/',
  },
  {
    src: joce,
    name: 'Jocelyn Bon',
    charge: 'Jefa de Selección',
    description:
      '"Esfuérzate a diario con muchas ganas, porque el esfuerzo es lo que te acercará cada día más a tus metas”',
    titles: 'Psicológa',
    strengths:
      'Capacidad Analítica y Apertura de Mente - Prudencia - Curiosidad y Ganas de Experimentar',
    linkedIn: 'https://www.linkedin.com/in/jocelyn-bon-brevis-b9527527/',
  },
  {
    src: mane,
    name: 'Magdalena Faundes',
    charge: 'Coordinadora de Selección - Encargada de Bienestar',
    description:
      '"En nuestro equipo, cada uno de nosotros aporta lo mejor que tiene y yo me siento honrada de fomentar un entorno que prioriza el bienestar y la salud mental. Considero que la clave del éxito reside en el equilibrio entre trabajo y bienestar."',
    titles: 'Psicológa',
    strengths:
      'Igualdad y Justicia - Cercanía y Afectividad - Entusiasmo y Energía',
    linkedIn:
      'https://www.linkedin.com/in/magdalena-faundes-de-la-barra-41957521a/',
  },
  {
    src: stephy,
    name: 'Stephany Vásquez',
    charge: 'Directora académica OTEC',
    description:
      '"Comprender el proceso de aprendizaje como un continuo devenir nos otorga nuevas capacidades y experiencias que emergen de vivencias individuales y colectivas"',
    titles: 'Docente, Educadora ambiental y Musicoterapeuta',
    strengths:
      'Perspectiva y Sabiduría - Capacidad Analítica y Apertura de Mente - Gratitud',
    linkedIn:
      'https://www.linkedin.com/in/stephany-v%C3%A1squez-ortiz-853919a3/',
  },
];

export default function Us({ image }: HomeProps) {
  return (
    <>
      <Head>
        <title>AD Consulting | Nosotros</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="head hunting, selección y reclutamiento, coaching ejecutivo, capacitación, outplacement"
        />
        <meta
          name="description"
          content="Nuestro equipo cuenta con más de 11 años de experiencia en procesos de Head Hunting, Reclutamiento y Selección de Talentos, Outplacement, Capacitación y Coaching Ejecutivo"
        />
        <meta property="og:title" content="AD Consulting | Nosotros" />
        <meta property="og:url" content="https://adconsulting.cl/nosotros" />
        <meta property="og:image" content={image?.url} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Nuestro equipo cuenta con más de 11 años de experiencia en procesos de Head Hunting, Reclutamiento y Selección de Talentos, Outplacement, Capacitación y Coaching Ejecutivo"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AD Consulting | Nosotros" />
        <meta
          name="twitter:description"
          content="Nuestro equipo cuenta con más de 11 años de experiencia en procesos de Head Hunting, Reclutamiento y Selección de Talentos, Outplacement, Capacitación y Coaching Ejecutivo"
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
          href="https://adconsulting.cl/nosotros"
          key="canonical"
        />
      </Head>
      <Layout>
        <div className="pt-28 pb-40 sm:pt-40 flex flex-col space-y-8 sm:space-y-16">
          <div className="flex flex-col space-y-4">
            <h1 className="font-montserrat leading-tight text-center text-4xl sm:text-6xl">
              Nuestro equipo
            </h1>
            <h2 className="sm:text-xl text-center sm:w-[40rem] mx-auto">
              En AD contamos con un equipo compuesto de profesionales
              motivado/as y comprometido/as con potenciar los talentos de tu
              empresa
            </h2>
          </div>
          <section className="flex flex-wrap items-start justify-center gap-4 sm:gap-16 mx-auto px-4 sm:px-32 xl:px-60">
            {workers.map((w, index) => (
              <div key={index}>
                <Worker
                  src={w.src}
                  name={w.name}
                  charge={w.charge}
                  description={w.description}
                  titles={w.titles}
                  strengths={w.strengths}
                  linkedIn={w.linkedIn}
                />
              </div>
            ))}
          </section>
        </div>
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
