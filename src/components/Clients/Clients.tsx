import Image from 'next/image';
import mundo from '../../../public/logoMundo.webp';
import aleman from '../../../public/LogoDSC.jpg';
import andes from '../../../public/logoAndesSalud.png';
import crecic from '../../../public/logoCrecic.jpg';
import ust from '../../../public/logoUST.jpeg';
import cpc from '../../../public/logoCPC.png';
import caleman from '../../../public/logoCAdescarga.jpeg';
import saint from '../../../public/logoSJ.png';

const Clients = () => {
  return (
    <section className="flex flex-col space-y-16 py-16">
      <h2 className="text-center text-3xl font-bold py-8">Nuestros clientes</h2>
      <div className="flex flex-row items-center justify-center space-x-16 h-full">
        <Image src={andes} alt="andes" className="w-56 h-20 object-cover" />
        <Image src={aleman} alt="aleman" className="w-20 h-20 object-cover" />
        <Image src={mundo} alt="mundo" className="w-56 h-20 object-cover" />
        <Image src={crecic} alt="mundo" className="w-20 h-20 object-cover" />
      </div>
      <div className="flex flex-row items-center justify-center space-x-16 h-full">
        <Image src={ust} alt="andes" className="w-56 h-20 object-cover" />
        <Image src={caleman} alt="aleman" className="w-20 h-20 object-cover" />
        <Image src={cpc} alt="mundo" className="w-36 h-20 object-cover flex" />
        <Image src={saint} alt="aleman" className="w-20 h-20 object-cover" />
      </div>
      <h3 className="text-center text-2xl ">¡Y más de 100 empresas confían en nosotros!</h3>
    </section>
  );
};

export default Clients;
