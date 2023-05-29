import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';

import Layout from '../components/Layout';

import ari from '../../public/ari.jpeg';
import ariHover from '../../public/ariHover.jpeg';

interface HomeProps {
  image: { url: string };
}

export default function Us({ image }: HomeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showAri, setShowAri] = useState(false);

  const ariClickHandler = () => {
    setShowAri(true);
  };

  const closeAri = () => {
    setShowAri(false);
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

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
        <div className="py-40 flex flex-col space-y-8">
          <h1 className="font-montserrat text-[2.5rem] leading-tight sm:text-7xl text-center">
            Nuestro equipo
          </h1>
          <h2 className="text-lg sm:text-2xl text-center w-[40rem] mx-auto">
            En AD contamos con un equipo compuesto de profesionales motivados y comprometidos con potenciar los talentos de tu empresa
          </h2>
          <section className="flex flex-wrap items-center justify-center gap-2 px-24 mx-auto">
            <div onClick={ariClickHandler} className="w-96 h-[28rem] transition-all cursor-pointer flex flex-col" onMouseEnter={handleHover}
              onMouseLeave={handleHover}>{isHovered ? <Image src={ariHover} alt="ariela" /> : <Image src={ari} alt="ariela" />}
              <h2 className="font-bold">Ariela Dymensztain</h2>
              <h3>Directora</h3>
            </div>
            <div className="w-96 h-[28rem] transition-all cursor-pointer flex flex-col">
              <Image src={ari} alt="ariela" />
              <h2 className="font-bold">Ariela Dymensztain</h2>
              <h3>Directora</h3>
            </div>
            <div className="w-96 h-[28rem] transition-all cursor-pointer flex flex-col">
              <Image src={ari} alt="ariela" />
              <h2 className="font-bold">Ariela Dymensztain</h2>
              <h3>Directora</h3>
            </div>
            <div className="w-96 h-[28rem] transition-all cursor-pointer flex flex-col">
              <Image src={ari} alt="ariela" />
              <h2 className="font-bold">Ariela Dymensztain</h2>
              <h3>Directora</h3>
            </div>
            <div className="w-96 h-[28rem] transition-all cursor-pointer flex flex-col">
              <Image src={ari} alt="ariela" />
              <h2 className="font-bold">Ariela Dymensztain</h2>
              <h3>Directora</h3>
            </div>
            <div className="w-96 h-[28rem] transition-all cursor-pointer flex flex-col">
              <Image src={ari} alt="ariela" />
              <h2 className="font-bold">Ariela Dymensztain</h2>
              <h3>Directora</h3>
            </div>
            <div className="w-96 h-[28rem] transition-all cursor-pointer flex flex-col">
              <Image src={ari} alt="ariela" />
              <h2 className="font-bold">Ariela Dymensztain</h2>
              <h3>Directora</h3>
            </div>
            <div className="w-96 h-[28rem] transition-all cursor-pointer flex flex-col">
              <Image src={ari} alt="ariela" />
              <h2 className="font-bold">Ariela Dymensztain</h2>
              <h3>Directora</h3>
            </div>
            <div className="w-96 h-[28rem] transition-all cursor-pointer flex flex-col">
              <Image src={ari} alt="ariela" />
              <h2 className="font-bold">Ariela Dymensztain</h2>
              <h3>Directora</h3>
            </div>
            <div className="w-96 h-[28rem] transition-all cursor-pointer flex flex-col">
              <Image src={ari} alt="ariela" />
              <h2 className="font-bold">Ariela Dymensztain</h2>
              <h3>Directora</h3>
            </div>
            <div className="w-96 h-[28rem] transition-all cursor-pointer flex flex-col">
              <Image src={ari} alt="ariela" />
              <h2 className="font-bold">Ariela Dymensztain</h2>
              <h3>Directora</h3>
            </div>
          </section>
        </div>
      </Layout>
      {showAri && <div className="fixed inset-0 w-screen h-screen z-50 bg-black/80 flex items-center justify-center" onClick={closeAri}>
        <div onClick={(e) => e.stopPropagation()} className="flex flex-row space-x-8 bg-white p-4 rounded-lg w-[50rem]">
          <Image src={ariHover} alt="ariela" className="h-96 object-cover w-96" />
          <div className="flex flex-col space-y-4"><h2 className="font-bold">Ariela Dymensztain</h2>
            <h3>Directora</h3>
            <p>{'"Agradecida de la vida, de las oportunidades que Chile me ha brindado, convencida de que el verdadero aprendizaje proviene de las experiencias"'}</p>
            <p>Psicológa, coach y empresaria</p>
            <p className="font-semibold">Liderazgo - Empatía - Inteligencia Social</p>
            <a
              href="https://www.linkedin.com/in/ariela-dymensztain-ad/"
              title="LinkedIn de Ariela"
              aria-label="LinkedIn de Ariela"
            ><AiFillLinkedin className="text-3xl cursor-pointer" />
            </a>
          </div>
        </div>
      </div>}
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
