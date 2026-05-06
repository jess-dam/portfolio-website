import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
  useTime,
} from 'framer-motion';
import { useRef } from 'react';
import { SECTION_REFS } from '../pageRefs';

const CYCLE_MS = 8000;
const SLOTS = 6;

const PATH_WIDTH = 600;
const PATH_HEIGHT = 200;

const POOL = [
  '/assets/images/cutouts/coot.png',
  '/assets/images/cutouts/butterfly.png',
  '/assets/images/cutouts/jellyfish.png',
];

const pathPoint = (t: number) => ({
  x: -PATH_WIDTH / 2 + t * PATH_WIDTH,
  y: Math.sin(t * Math.PI * 2) * PATH_HEIGHT,
});

interface TrailImageProps {
  src: string;
  offset: number;
  time: MotionValue<number>;
  x: number;
  y: number;
}

const TrailImage = ({ src, offset, time, x, y }: TrailImageProps) => {
  const xSpawn = `top-${x}`;
  const ySpawn = `left-${y}`;
  return (
    <motion.img
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 10,
        delay: 2.5,
        ease: 'easeIn',
        repeat: Infinity,
      }}
      src={src}
      width={220}
      style={{ x: x, y: y }}
      className={`absolute pointer-events-none ${xSpawn} ${ySpawn}`}
    />
  );
};

function Landing() {
  // Main heading fixed scroll variables
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  const distance = 300;
  const time = useTime();
  const imageY = useTransform(() => Math.sin(time.get() / 1000) * distance);
  const imageX = useTransform(() => Math.sin(time.get() / 1200) * distance);

  const image2Y = useTransform(() => Math.sin(time.get() / 1500) * distance);
  const image2X = useTransform(() => Math.sin(time.get() / 1300) * distance);

  return (
    <div
      id={SECTION_REFS.LANDING}
      className="relative grid place-content-center h-screen w-full overflow-clip text-primary"
    >
      {/* <motion.div
        className="absolute z-20 bottom-[25vh] md:bottom-[20vh] left-[15vw]"
        style={{ x: imageX, y: imageY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 10,
          delay: 2.5,
          ease: 'easeIn',
          repeat: Infinity,
        }}
      >
        <img src="/assets/images/cutouts/coot.png" width={300} />
      </motion.div>

      <motion.div
        className="absolute z-30 bottom-[25vh] md:bottom-[80vh] right-[15vw]"
        style={{ x: image2X, y: image2Y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{
          duration: 10,
          delay: 2.5,
          ease: 'backInOut',
          repeat: Infinity,
        }}
      /> */}
      <div
        aria-label="Collage imagery"
        className="absolute z-20 inset-0 flex items-center justify-center pointer-events-none"
      >
        {Array.from({ length: SLOTS }, (_, i) => (
          <TrailImage
            key={i}
            src={POOL[i % POOL.length]}
            offset={i / SLOTS}
            time={time}
            x={imageX.get()}
            y={imageY.get()}
          />
        ))}
      </div>

      <div
        ref={ref}
        className="overflow-hidden z-20 p-10 grid place-content-center min-w-[300px] md:min-w-[710px] h-fit"
      >
        <div className="relative grid place-content-center overflow-hidden w-[270px] md:w-[550px] lg:w-[800px] h-[150px] md:h-[250px]">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
            style={{ y: textY }}
            className="relative w-fit h-auto grid items-stretch"
          >
            <div className="relative -left-10 md:-left-40">
              <motion.h1 className="w-max h-auto relative z-10 text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[2.5rem] md:leading-[5rem]">
                <span className="block">Jess</span>
                <span className="block">Dam</span>
              </motion.h1>
              <h3
                aria-label="Software Engineer"
                className="z-30 text-lg md:text-2xl text-secondary font-homemade-apple pb-8 pl-4 mt-4"
              >
                Software Engineer
              </h3>
            </div>
            <img
              src="/assets/images/doodles/cat_on_laptop.svg"
              className="absolute z-20 w-[90px] top-[21px] left-[140px] md:left-[250px] md:top-[0px] md:w-[250px]"
              width={300}
              alt="cat mascot typing rapidly on a laptop"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
