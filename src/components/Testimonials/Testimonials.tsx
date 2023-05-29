import Image from 'next/image';
import testimonio from '../../../public/testimonio.png';

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 py-24">
      <h2 className="text-center text-3xl font-bold">Testimonios</h2>
      <h3 className="pb-8">Nuestros clientes confían en nuestros servicios</h3>
      <Image src={testimonio} alt="testimonio"/>
    </section>
  );
};

export default Testimonials;