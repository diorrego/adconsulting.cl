import Head from 'next/head';

import ari from '../../public/ariHover.jpeg';

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
    strengths: 'Liderazgo - Empatía - Inteligencia Social',
    linkedIn: 'https://www.linkedin.com/in/ariela-dymensztain-ad/',
  },
];

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
        <div className="pt-28 pb-40 sm:pt-40 flex flex-col space-y-8 sm:space-y-16">
          <div className="flex flex-col space-y-4">
            <h1 className="font-montserrat leading-tight text-center text-4xl sm:text-6xl">
              Nuestro equipo
            </h1>
            <h2 className="sm:text-xl text-center sm:w-[40rem] mx-auto">
              En AD contamos con un equipo compuesto de profesionales motivados
              y comprometidos con potenciar los talentos de tu empresa
            </h2>
          </div>
          <section className="flex flex-wrap items-center justify-center gap-2 mx-auto px-4 sm:px-32 xl:px-60">
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
        url: 'https://media.licdn.com/dms/image/D4E22AQEod7ujhseQxQ/feedshare-shrink_1280/0/1682716239512?e=1686182400&v=beta&t=_9R5TNkYKmKupxyq5TBeF5T2FkABu_pLVB40bX2WzBQ',
      },
    },
  };
};
