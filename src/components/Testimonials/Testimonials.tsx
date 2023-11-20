import { motion } from 'framer-motion';
import Image from 'next/image';

import ScrollReveal from '../ScrollReveal';
import Carousel from './Carousel';

import cpc from '../../../public/cpc.webp';
import tomas from '../../../public/santoTomas.webp';
import dsc from '../../../public/DSC.webp';

const Testimonials = () => {
  return (
    <ScrollReveal className="flex flex-col sm:flex-row items-baseline justify-center space-y-8 sm:space-y-0 sm:space-x-12 px-8 sm:px-72 py-20">
      <h2 className="text-2xl xl:text-4xl sm:basis-2/5 text-center sm:text-left">
        Mira el <span className="font-semibold">impacto que generamos</span> en
        nuestros clientes con AD
      </h2>
      <Carousel
        traits={[
          <motion.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key="1"
            className="relative flex flex-col space-y-2 h-80 sm:h-64"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              Ronald Ruf Wilkomirsky | Gerente General CPC Bio Bio
            </h3>
            <h4 className="text-xs sm:text-lg">
              “AD Consulting lideró la búsqueda de un nuevo gerente general para
              CPC Bio Bio y en ese marco fui invitado a participar en el
              proceso. Luego de varias entrevistas en un ambiente muy grato y
              profesional, fui seleccionado en la terna final que se entregó al
              directorio del gremio. Han pasado más de 9 años desde que ingresé
              a esta organización y puedo dar testimonio de in proceso serio,
              transparente, responsable y formal”
            </h4>
            <Image
              src={cpc}
              alt="CPC"
              className="absolute -bottom-4 -right-4 w-20 self-end"
            />
          </motion.div>,
          <motion.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key="2"
            className="relative flex flex-col space-y-2 h-80 sm:h-64"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              Roger Sepúlveda Carrasco | Rector Universidad Santo Tomás
            </h3>
            <h4 className="text-xs sm:text-lg">
              “Trabajamos desde hace varios años con AD Consulting en la
              búsqueda de los ejecutivos de las primeras líneas directivas de
              nuestra institución en Concepción. Podemos destacar un servicio
              personalizado, cercano e involucrado con las necesidades del
              cliente, además tenemos garantía de acompañamiento y seguimiento
              permanente respecto del desempeño de los ejecutivos”
            </h4>
            <Image
              src={tomas}
              alt="Universidad Santo Tomás"
              className="absolute bottom-0 -right-16 w-40 self-end"
            />
          </motion.div>,
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key="3"
            className="relative flex flex-col space-y-2 h-80 sm:h-64"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              Werner Hohf | Gerente Corp. Colegio Alemán de Concepción
            </h3>
            <h4 className="text-xs sm:text-lg">
              “Trabajamos con AD Consulting desde hace 5 años para procesos de
              selección, procesos de análisis y descripción de cargos con
              excelentes resultados. Destacan su oportuna respuesta y sobre todo
              su asertividad respecto de las personas seleccionadas en base a
              perfiles desarrollados en conjunto”
            </h4>
            <Image
              src={dsc}
              alt="Colegio Alemán Concepción"
              className="absolute bottom-0 -right-16 w-40 self-end"
            />
          </motion.div>,
        ]}
      />
    </ScrollReveal>
  );
};

export default Testimonials;
