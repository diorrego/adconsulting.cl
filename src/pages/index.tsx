import { useRef } from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Benefits from '../components/Benefits';
import CallToAction from '../components/CallToAction';

interface HomeProps {
  image: { url: string };
}

export default function Home({ image }: HomeProps) {
  const CTARef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>AD Consulting | Seleccionamos y Potenciamos el Talento</title>
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
      <Layout CTARef={CTARef}>
        <Hero />
        <Clients />
        <Benefits />
        <div ref={CTARef}>
          <CallToAction />
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
