import { motion } from 'framer-motion';
import Image from 'next/image';

import ScrollReveal from '../ScrollReveal';
import Carousel from './Carousel';

import cpc from '../../../public/cpc.webp';
import tomas from '../../../public/santoTomas.webp';
import dsc from '../../../public/DSC.webp';
import landes from '../../../public/Landes.webp';
import mundo from '../../../public/mundo.webp';
import colegio from '../../../public/colegioAleman.webp';

const Testimonials = () => {
  return (
    <ScrollReveal className="flex flex-col xl:flex-row items-baseline justify-center space-y-8 xl:space-y-0 xl:space-x-12 px-8 2xl:px-72 py-20 mx-auto max-w-[40rem] xl:max-w-none">
      <h2 className="text-2xl xl:text-4xl sm:basis-2/5 text-center xl:text-left w-full">
        Mira el <span className="font-semibold">impacto que generamos</span> en
        nuestros clientes
      </h2>
      <Carousel
        traits={[
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key="4"
            className="relative flex flex-col space-y-2 h-96 xl:h-64"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              Maria de los Angeles Navarro Miranda | Jefa de Atracción del
              Talento y Bienestar de MUNDO Telecomunicaciones
            </h3>
            <h4 className="text-xs sm:text-lg">
              “Conozco AD Consulting desde el año 2011, ya que formé parte del
              equipo, por lo que fui testigo desde adentro del profesionalismo,
              compromiso hacia los clientes y cumplimiento de plazos. Cuando
              llegué a MUNDO donde trabajo hace casi 10 años, fue un orgullo
              para mi poder recomendar a AD. Los resultados han sido muy
              positivos, su compromiso con el cliente, la comunicación constante
              y excelente disponibilidad son parte de sus sellos como empresa”
            </h4>
            <Image
              src={mundo}
              alt="MUNDO"
              className="absolute bottom-0 -right-6 w-32 self-end"
            />
          </motion.div>,
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key="5"
            className="relative flex flex-col space-y-2 h-96 xl:h-64"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              Carla Sánchez | Gerenta Asuntos Corporativos y Personas Landes
            </h3>
            <h4 className="text-xs sm:text-lg">
              “AD Consulting ha liderado varios procesos de búsqueda en Landes y
              hemos tenido muy buena experiencia. Siempre están disponibles
              entregando un servicio muy personalizado, ajustan las búsquedas
              cuando es necesario y hacen un buen seguimiento a las nuevas
              incorporaciones. Además, cumplen con los plazos acordados, los
              procesos son transparentes y tienen un equipo de trabajo muy
              cercano y profesional”
            </h4>
            <Image
              src={landes}
              alt="Landes"
              className="absolute bottom-0 -right-6 w-32 self-end"
            />
          </motion.div>,
          <motion.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key="1"
            className="relative flex flex-col space-y-2 h-96 xl:h-64"
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
            className="relative flex flex-col space-y-2 h-96 xl:h-64"
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
            className="relative flex flex-col space-y-2 h-96 xl:h-64"
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
              src={colegio}
              alt="Colegio Alemán Concepción"
              className="absolute bottom-0 -right-4 w-16 self-end"
            />
          </motion.div>,
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key="3"
            className="relative flex flex-col space-y-2 h-96 xl:h-64"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              José Antonio Ciriza | Gerente General de Club Deportivo Alemán
            </h3>
            <h4 className="text-xs sm:text-lg">
              “Valoramos el apoyo entregado por AD Consulting , con dedicación y
              compromiso han liderado los procesos de búsqueda de profesionales
              que le hemos encargado, gran satisfacción por los servicios
              entregados, cumpliendo con nuestros requerimientos en tiempo y
              calidad”
            </h4>
            <Image
              src={dsc}
              alt="Deportivo Alemán Concepción"
              className="absolute bottom-0 -right-16 w-40 self-end"
            />
          </motion.div>,
        ]}
      />
    </ScrollReveal>
  );
};

export default Testimonials;
