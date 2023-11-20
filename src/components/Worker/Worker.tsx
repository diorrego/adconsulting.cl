import { useState } from 'react';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineX } from 'react-icons/hi';

interface WorkerProps {
  src?: any;
  name: string;
  charge: string;
  description: string;
  titles: string;
  strengths: string;
  linkedIn?: string;
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
        className="cursor-pointer text-center flex flex-col items-center justify-center space-y-1.5 hover:scale-[1.01] transition-all"
      >
        {src ? (
          <Image src={src} alt={name} className="rounded-full w-52" />
        ) : (
          <div className="rounded-full w-52 h-52 bg-[#ed7422] flex items-center justify-center text-6xl font-semibold text-white">
            {name[0]}
          </div>
        )}
        <h2 className="font-bold text-2xl sm:w-72 w-52">{name}</h2>
        <h3 className="sm:text-xl sm:w-72 w-52">{charge}</h3>
      </div>
      {showWorker && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeWorker}
            className="fixed inset-0 w-screen h-screen bg-black/70 flex items-center justify-center z-[60] cursor-pointer sm:pt-16 sm:pb-32 sm:px-0 overflow-hidden overscroll-none"
          >
            <div
              className="relative flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-center sm:space-x-16 w-full h-full sm:w-3/4 sm:h-full bg-white sm:rounded-lg p-5 sm:p-8 cursor-default overflow-y-auto sm:overflow-hidden sm:overscroll-none"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="fixed sm:absolute top-2 right-2 font-bold text-2xl text-neutral-600"
                onClick={closeWorker}
              >
                <HiOutlineX className="text-3xl" />
              </button>
              {src ? (
                <Image
                  src={src}
                  alt={name}
                  className="rounded-full w-32 sm:basis-1/2"
                />
              ) : (
                <div className="rounded-full w-32 h-32 sm:h-full sm:w-full sm:basis-1/2 bg-[#ed7422] flex items-center justify-center text-6xl font-semibold text-white">
                  {name[0]}
                </div>
              )}

              <div className="flex flex-col items-start space-y-4 sm:w-[35rem]">
                <div className="flex flex-row justify-between items-center w-full">
                  <h2 className="text-2xl sm:text-4xl font-semibold">{name}</h2>
                  {linkedIn && (
                    <a
                      href={linkedIn}
                      title={`LinkedIn de ${name}`}
                      aria-label={`LinkedIn de ${name}`}
                    >
                      <AiFillLinkedin className="text-4xl text-orange-600" />
                    </a>
                  )}
                </div>
                <p className="font-semibold sm:text-xl">{charge}</p>
                <p>{description}</p>
                <p className="font-semibold sm:text-xl">{titles}</p>
                <p className="font-semibold sm:text-xl">{strengths}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Worker;
