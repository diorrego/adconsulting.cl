import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

export interface CarouselProps {
  traits: JSX.Element[]; // required prop with an array of JSX elements
  unitTime?: number; // time between carousel items, defaults to 5000 ms
}

const Carousel = ({ traits, unitTime = 8000 }: CarouselProps) => {
  const [traitIndex, setTraitIndex] = useState(0);
  const timeoutRef = useRef<any>(null);

  // current JSX element
  const Trait = () => {
    return traits[traitIndex];
  };

  // function to reset the timer
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const elementButtonClickHandler = (index: number) => {
    setTraitIndex(index);
  };

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      setTraitIndex((prevTraitIndex) =>
        prevTraitIndex === traits.length - 1 ? 0 : prevTraitIndex + 1
      );
    }, unitTime);

    return () => {
      resetTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [traits, traitIndex]);

  return (
    <div className="flex flex-col space-y-2 items-center justify-center sm:basis-3/5 w-full">
      <div className="glass border border-orange-400/40 px-4 pt-4 sm:pt-8 sm:px-8 w-full">
        <AnimatePresence>
          <Trait />
        </AnimatePresence>
      </div>
      <div className="flex flex-row space-x-2">
        {traits.map((trait, index) => (
          <button
            key={index}
            onClick={() => elementButtonClickHandler(index)}
            id={`paso${index}`}
            aria-label={`Paso ${index}`}
            className={`rounded-full h-8 w-8 drop-shadow-sm transition-all ${
              traitIndex === index ? 'bg-orange-400' : 'bg-neutral-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
