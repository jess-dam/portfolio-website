import { motion, useScroll, useTime, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SECTION_REFS } from '../pageRefs';

const RandomCollageImagery = () => {
  return (
    <div className="absolute z-20 bottom-[25vh] md:bottom-[20vh] left-[15vw] w-[350px] h-[150px] md:h-[300px]">
      <img src="/assets/images/cutouts/coot.png" width={300} />
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

  const distance = 300;
  const time = useTime();
  const imageY = useTransform(() => Math.sin(time.get() / 1000) * distance);
  const imageX = useTransform(() => Math.sin(time.get() / 1200) * distance);

  const image2Y = useTransform(() => Math.sin(time.get() / 1500) * distance);
  const image2X = useTransform(() => Math.sin(time.get() / 1300) * distance);

  return (
    <div
      id={SECTION_REFS.LANDING}
      className="relative flex place-content-center h-screen w-full overflow-clip text-primary"
    >
      <motion.div
        className="absolute z-20 bottom-[25vh] md:bottom-[20vh] left-[15vw] w-[350px] h-[150px] md:h-[300px]"
        style={{ x: imageX, y: imageY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{
          duration: 10,
          delay: 2.5,
          ease: 'easeIn',
          repeat: Infinity,
        }}
      />

      <motion.div
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
      />

      <div
        ref={ref}
        className="overflow-hidden z-20 p-10 grid justify-center items-center min-w-[300px] md:min-w-[710px] h-auto"
      >
        <div className="relative row-start-1 flex flex-col overflow-hidden w-[270px] md:w-[550px] lg:w-[800px] h-[150px] md:h-[250px]">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
            style={{ y: textY }}
            className="h-auto grid items-stretch"
          >
            <div>
              <motion.h1 className="flex flex-wrap z-10 relative text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[2.5rem] md:leading-[5rem]">
                Jess Dam
              </motion.h1>
              <img
                src="/assets/images/doodles/cat_on_laptop.svg"
                className="absolute z-20 w-[90px] top-[22px] left-[185px] md:left-[300px] md:top-[10px] lg:top-[0px] lg:left-[400px] md:w-[250px]"
                width={300}
                alt=""
              />
            </div>
            <h3
              aria-label="Software Engineer"
              className="z-30 text-lg md:text-2xl text-secondary font-homemade-apple pb-8 pl-4"
            >
              Software Engineer
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
