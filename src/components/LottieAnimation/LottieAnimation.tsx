import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LottieAnimationProps {
  animationData: any;
  renderer?: 'svg' | 'canvas' | 'html';
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  width?: number;
}

const LottieAnimation = ({
  animationData,
  renderer = 'svg',
  loop = true,
  autoplay = true,
  className,
  ...props
}: LottieAnimationProps) => {
  const animationContainer = useRef<any>(null);
  const animation = useRef<any>(LottieAnimation);

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: animationContainer.current, // DOM element
      animationData: animationData, //lotttie json
      renderer: renderer, //svg, canvas, html
      loop: loop, //boolean
      autoplay: autoplay, //boolean
    });
    return () => {
      animation.current?.destroy();
    };
  }, [animationData, renderer, loop, autoplay]);

  return (
    <div
      className={className}
      role="figure"
      ref={animationContainer}
      {...props}
    />
  );
};

export default LottieAnimation;
