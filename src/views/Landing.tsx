import { motion, useScroll, useTransform, useTime } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { SECTION_REFS } from '../pageRefs';
import { useReducedMotionState } from '../context/ReducedMotionContext';

const IMAGE_POOL = [
  '/assets/images/cutouts/coot.png',
  '/assets/images/doodles/sustainability.svg',
  '/assets/images/cutouts/butterfly.png',
  '/assets/images/doodles/accessibility.svg',
  '/assets/images/doodles/ux.svg',
  '/assets/images/doodles/art.svg',
];

interface ActiveImage {
  id: string;
  src: string;
  x: number;
  y: number;
}
const TrailingImageCycle = () => {
  const [activeImages, setActiveImages] = useState<ActiveImage[]>([]);

  const ref = useRef<HTMLDivElement>(null);
  const distance = 500;
  const time = useTime();
  const imageY = useTransform(() => Math.sin(time.get() / 1000) * distance);
  const imageX = useTransform(() => Math.sin(time.get() / 800) * distance);

  // Every 5 seconds, add the image elements to the DOM at the current imageX and imageY, staggering them by 1 second, then remove them after 3 seconds.
  useEffect(() => {
    const spawnBatch = () => {
      IMAGE_POOL.forEach((src, index) => {
        setTimeout(() => {
          const id = `${Date.now()}-${index}`; // use timestamp to ensure unique id
          setActiveImages((prev) => [
            ...prev,
            { id, src, x: imageX.get(), y: imageY.get() },
          ]);
          setTimeout(() => {
            setActiveImages((prev) => prev.filter((img) => img.id !== id));
          }, 3000); // remove 3s after appearing
        }, index * 300); // stagger by 0.3s per image
      });
    };
    const interval = setInterval(spawnBatch, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      aria-label="Collage imagery"
      className="absolute z-20 inset-0 flex items-center justify-center pointer-events-none"
    >
      {activeImages.map(({ id, src, x, y }) => (
        <motion.img
          key={id}
          src={src}
          width={120}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute pointer-events-none color-primary md:w-[200px]"
          style={{ x, y, width: '150px' }}
        />
      ))}
    </div>
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
  const { shouldReduceMotion } = useReducedMotionState();

  return (
    <div
      ref={ref}
      id={SECTION_REFS.LANDING}
      className="relative grid place-content-center h-screen w-full overflow-clip text-primary"
    >
      {!shouldReduceMotion && <TrailingImageCycle />}

      <div className="overflow-hidden z-10 p-10 grid place-content-center min-w-[300px] md:min-w-[710px] h-fit">
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
                className="relative z-20 text-lg md:text-2xl text-secondary font-cedarville-cursive pb-8 pl-4 mt-4"
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
