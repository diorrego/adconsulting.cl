import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=56984722932&text=Hola%20Ariela!&type=phone_number&app_absent=0"
      className="fixed bottom-4 right-4 bg-green-600 rounded-full shadow-md shadow-black/40 z-50 p-4"
    >
      <FaWhatsapp className="text-4xl text-white" />
    </a>
  );
};

export default WhatsappButton;
