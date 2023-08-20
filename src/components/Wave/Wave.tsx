import WaveUp from './WaveUp';
import WaveDown from './WaveDown';

interface WaveProps {
  direction?: string;
  className?: string;
}

const Wave = ({ direction = 'up', className }: WaveProps) => {
  return (
    <>
      {direction === 'up' ? (
        <WaveUp className={className} />
      ) : (
        <WaveDown className={className} />
      )}
    </>
  );
};

export default Wave;
