import { useState } from 'react';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';

interface WorkerProps {
  src: any;
  name: string;
  charge: string;
  description: string;
  titles: string;
  strengths: string;
  linkedIn: string;
}

const Worker = ({
  src,
  name,
  charge,
  description,
  titles,
  strengths,
  linkedIn,
}: WorkerProps) => {
  const [showWorker, setShowWorker] = useState(false);

  const workerClickHandler = () => {
    setShowWorker(true);
  };

  const closeWorker = () => {
    setShowWorker(false);
  };

  return (
    <>
      <div
        onClick={workerClickHandler}
        className="cursor-pointer text-center flex flex-col items-center justify-center space-y-1.5"
      >
        <Image src={src} alt={name} className="rounded-full h-72 w-72" />
        <h2 className="font-bold text-2xl">{name}</h2>
        <h3 className="sm:text-xl">{charge}</h3>
      </div>
      {showWorker && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={closeWorker}
          className="fixed inset-0 w-screen h-screen bg-black/70 flex items-center justify-center z-[60] cursor-pointer px-6 sm:px-0"
        >
          <div
            className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-center sm:space-x-6 sm:w-1/2 sm:h-1/2 bg-white rounded-lg p-5 sm:p-8 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={name}
              className="rounded-full h-full w-full basis-1/2"
            />
            <div className="flex flex-col items-start space-y-4">
              <div className="flex flex-row justify-between items-center w-full">
                <h2 className="text-3xl sm:text-4xl font-semibold">{name}</h2>
                <a
                  href={linkedIn}
                  title={`LinkedIn de ${name}`}
                  aria-label={`LinkedIn de ${name}`}
                >
                  <AiFillLinkedin className="text-4xl text-orange-600" />
                </a>
              </div>
              <p>{description}</p>
              <p className="font-semibold sm:text-xl">{titles}</p>
              <p className="font-semibold sm:text-xl">{strengths}</p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Worker;
