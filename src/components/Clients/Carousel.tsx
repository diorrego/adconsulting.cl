import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

export interface CarouselProps {
  traits: JSX.Element[]; // required prop with an array of JSX elements
  unitTime?: number; // time between carousel items, defaults to 5000 ms
}

const Carousel = ({ traits, unitTime = 3000 }: CarouselProps) => {
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
    <div className="overflow-hidden">
      <AnimatePresence>
        <Trait />
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
