import Head from 'next/head';

import ari from '../../public/ari.webp';
import mane from '../../public/mane.webp';
import joce from '../../public/joce.webp';
import stephy from '../../public/stephy.webp';
import piero from '../../public/PieroLavezo.webp';
import claudia from '../../public/ClaudiaLama.webp';
import daniela from '../../public/DanielaRojas.webp';
import evelyn from '../../public/EvelynJofre.webp';
import danilo from '../../public/DaniloEspinoza.webp';
import pia from '../../public/PiaQuevedo.webp';
import carolina from '../../public/CarolinaOrtiz.webp';
import eugenia from '../../public/EugeniaGutierrez.webp';

import Layout from '../components/Layout';

import Worker from '../components/Worker';
import Wave from '../components/Wave';

const workers = [
  {
    src: ari,
    name: 'Ariela Dymensztain',
    charge: 'Directora',
    description:
      '"Agradecida de la vida, de las oportunidades que Chile me ha brindado, convencida de que el verdadero aprendizaje proviene de las experiencias"',
    titles: 'Psicóloga, coach y empresaria',
    strengths:
      'Cercanía y Afectividad - Inteligencia Social - Lealtad y Compromiso con el Entorno',
    linkedIn: 'https://www.linkedin.com/in/ariela-dymensztain-ad/',
  },
  {
    src: piero,
    name: 'Gian Piero Lavezzo',
    charge: 'Socio Gerente',
    description:
      '"Tengo la convicción que no hay metas que no se puedan cumplir, que el líder es el puente entre la visión y hacer las cosas realidad. El liderazgo es u ejercicio de estrategia, humildad, pero sobre todo valentía"',
    titles: 'Psicólogo Organizacional',
    strengths:
      'Promuevo la equidad y diversidad - Te acompaño en conseguir tus metas - Estrategia e implementación',
    linkedIn: 'https://www.linkedin.com/in/gianpierolavezzo/',
  },
  {
    src: stephy,
    name: 'Stephany Vásquez',
    charge: 'Directora Académica OTEC',
    description:
      '"Comprender el proceso de aprendizaje como un continuo devenir nos otorga nuevas capacidades y experiencias que emergen de vivencias individuales y colectivas"',
    titles: 'Docente, Educadora ambiental y Musicoterapeuta',
    strengths:
      'Perspectiva y Sabiduría - Capacidad Analítica y Apertura de Mente - Gratitud',
    linkedIn:
      'https://www.linkedin.com/in/stephany-v%C3%A1squez-ortiz-853919a3/',
  },
  {
    src: claudia,
    name: 'Claudia Lama',
    charge: 'Gerente de Proyecto y Relatora',
    description:
      '"Trabajar con personas al interior de las organizaciones, me ha regalado la posibilidad de ofrecer una mirada más apreciativa y respetuosa a los equipos de trabajo, de manera de fomentar ambientes de cuidados, nutritivos y de colaboración"',
    titles: 'Psicóloga Organizacional',
    strengths:
      'Cercanía y Afectividad -  Curiosidad y Ganas de Experimentar - Entusiasmo y Energía',
    linkedIn: 'https://www.linkedin.com/in/claudia-lama-maldonado-68a666b5/',
  },
  {
    src: joce,
    name: 'Jocelyn Bon',
    charge: 'Jefa de Selección',
    description:
      '"Esfuérzate a diario con muchas ganas, porque el esfuerzo es lo que te acercará cada día más a tus metas”',
    titles: 'Psicóloga',
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
    titles: 'Psicóloga',
    strengths:
      'Igualdad y Justicia - Cercanía y Afectividad - Entusiasmo y Energía',
    linkedIn:
      'https://www.linkedin.com/in/magdalena-faundes-de-la-barra-41957521a/',
  },
  {
    src: daniela,
    name: 'Daniela Rojas',
    charge: 'Consultora Senior Bilingue',
    description:
      '"El mosaico del talento humano se revela en su máximo esplendor cuando los corazones y las mentes convergen como un poderoso grupo de trabajo, recordándonos que es a través de la colaboración que podemos tejer los hilos del cambio y aportar el mundo que compartimos"',
    titles: 'Psicóloga Laboral Bilingüe',
    strengths:
      'Optimismo y Realismo - Entusiasmo y Energía - Curiosidad y Ganas de Experimentar',
    linkedIn: 'https://www.linkedin.com/in/danielarojagu/',
  },
  {
    src: evelyn,
    name: 'Evelyn Jofré',
    charge: 'Consultora Senior',
    description:
      '"En nuestro equipo, cada uno de nosotros aporta lo mejor que tiene y yo me siento honrada de fomentar un entorno que prioriza el bienestar y la salud mental. Considero que la clave del éxito reside en el equilibrio entre trabajo y bienestar"',
    titles: 'Psicóloga',
    strengths:
      'Igualdad y Justicia - Cercanía y Afectividad - Entusiasmo y Energía',
    linkedIn: 'https://www.linkedin.com/in/evelyn-jofr%C3%A9-rivera-834b8b81/',
  },
  {
    src: danilo,
    name: 'Danilo Vásquez',
    charge: 'Consultor Senior',
    description: '"El bienestar no se busca, se construye"',
    titles: 'Psicólogo Organizacional',
    strengths:
      'Amor por el Conocimiento y el Aprendizaje - Orientación a la Calidad - Perseverancia',
    linkedIn:
      'https://www.linkedin.com/in/danilo-andr%C3%A9s-v%C3%A1squez-espinoza-3b5499207/',
  },
  {
    src: pia,
    name: 'Pía Quevedo Godoy',
    charge: 'Consultora Senior',
    description:
      '"Al ser parte de AD he reforzado conceptos claves para mi vida profesional, el equipo de trabajo es comprometido, nos mueve el profesionalismo, compañerismo y la calidad humana de cada uno de los integrantes, en la que cada uno aporta a entregar el cien por ciento a nuestros procesos"',
    titles: 'Psicóloga Organizacional',
    strengths:
      'Relaciones interpersonales, trabajo en equipo - Flexibilidad adaptación - Responsabilidad',
    linkedIn:
      'https://www.linkedin.com/in/pia-alexandra-quevedo-godoy-0736a129/',
  },
  {
    src: carolina,
    name: 'Carolina Ortiz',
    charge: 'Relatora',
    description:
      '"Contribuir de manera positiva en el desarrollo de las personas, creando espacios de apertura y armonía para su desarrollo profesional - personal"',
    titles:
      'Psicóloga Organizacional, Diplomada en Gestión de Recursos Humanos',
    strengths: 'Trabajo en equipo - Planificación y Organización - Creatividad',
    linkedIn: 'https://www.linkedin.com/in/carolinaortizmartinez/',
  },
  {
    src: eugenia,
    name: 'Eugenia Gutierrez',
    charge: 'Research',
    description: '“Cuando trabajo me gusta dar todo de mí”',
    titles: 'Abogada',
    strengths: 'Organizada - Sociable - Resolutiva',
    linkedIn: 'https://www.linkedin.com/in/eugenia-gutierrez-20249270/',
  },
];

export default function Us() {
  return (
    <>
      <Head>
        <title>AD Consulting | Nosotros</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="head hunting, selección y reclutamiento, coaching ejecutivo, capacitación, outplacement, recursos humanos, gestión de personas, formación, entrenamiento"
        />
        <meta
          name="description"
          content="Nuestro equipo cuenta con más de 11 años de experiencia en procesos de Head Hunting, Reclutamiento y Selección de Talentos, Outplacement, Capacitación y Coaching Ejecutivo"
        />
        <meta property="og:title" content="AD Consulting | Nosotros" />
        <meta property="og:url" content="https://adconsulting.cl/nosotros" />
        <meta property="og:image" content="/previewPhoto.webp" />
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
        <meta name="twitter:image" content="/previewPhoto.webp" />
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
        <div className="flex flex-col space-y-8 sm:space-y-16 sm:pb-40">
          <div className="relative flex flex-col space-y-8 bg-gradient-to-tr from-[#E46E26] via-[#EB8547] to-[#FFAE48] sm:h-[65vh] xl:h-[70vh] text-white pt-32 pb-12 px-2">
            <h1 className="font-montserrat leading-tight text-center text-3xl xl:text-5xl max-w-[40rem] mx-auto ">
              En AD queremos ser tu mejor aliado para enfrentar los desafíos a
              la hora de elegir y potenciar tu talento
            </h1>
            <h3 className="text-center sm:w-[35rem] mx-auto px-2 xl:text-xl">
              Sabemos que cada cliente es único por eso elevamos tu equipo al
              máximo potencial a través de soluciones a tu medida en gestión de
              talento
            </h3>
            <Wave className="absolute -bottom-1 w-full left-0 scale-110" />
          </div>
          <div className="flex flex-col space-y-4 pt-12 sm:pt-0">
            <h2 className="font-montserrat leading-tight text-center text-3xl xl:text-5xl">
              Nuestro equipo
            </h2>
            <h3 className="text-center sm:w-[35rem] mx-auto xl:text-xl">
              En AD contamos con un equipo de profesionales motivado/as y
              comprometido/as con potenciar los talentos de tu empresa
            </h3>
          </div>
          <section className="flex flex-wrap items-start justify-center gap-4 sm:gap-8 mx-auto px-4 sm:px-18">
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
