import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollReveal = ({ className, isVideo = false, ...props }: any) => {
  const { delay = 0.15, children } = props;
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return isVideo ? (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, delay }}
      className={className}
      ref={ref}
      {...props}
    >
      {inView && children}
    </motion.div>
  ) : (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, delay }}
      className={className}
      ref={ref}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
