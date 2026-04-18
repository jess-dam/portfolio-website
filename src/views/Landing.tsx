import { motion, useScroll, useTime, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SECTION_REFS } from '../pageRefs';

function Landing() {
  // Main heading fixed scroll variables
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '250%']);

  const distance = 300;
  const time = useTime();
  const blurY = useTransform(() => Math.sin(time.get() / 1000) * distance);
  const blurX = useTransform(() => Math.sin(time.get() / 1200) * distance);

  const blur2Y = useTransform(() => Math.sin(time.get() / 1500) * distance);
  const blur2X = useTransform(() => Math.sin(time.get() / 1300) * distance);

  return (
    <div
      id={SECTION_REFS.LANDING}
      className="relative flex place-content-center h-screen w-full overflow-clip text-primary"
    >
      {/* <div className="z-10 absolute top-0 h-[100vh] w-full flex justify-center bg-background"></div> */}

      <motion.div
        className="absolute z-20 bottom-[25vh] md:bottom-[20vh] left-[15vw] bg-accent rounded-full w-[350px] h-[150px] md:h-[300px] blur-3xl"
        style={{ x: blurX, y: blurY }}
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 1.5, 1, 1, 2, 1],
          opacity: [0, 0.5, 0.5, 1, 0.5, 1, 0],
        }}
        transition={{
          duration: 10,
          delay: 2.5,
          ease: 'easeIn',
          repeat: Infinity,
        }}
      >
        <img src="public/assets/images/cutouts/coot.png" width={300} />
      </motion.div>

      <motion.div
        className="absolute z-30 bottom-[25vh] md:bottom-[80vh] right-[15vw]blur-3xl"
        style={{ x: blur2X, y: blur2Y }}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 10,
          delay: 2.5,
          ease: 'backInOut',
          repeat: Infinity,
        }}
      >
        <img src="/assets/images/cutouts/coot.png" width={300} />
      </motion.div>

      <div
        ref={ref}
        className="overflow-hidden z-20 p-10 grid justify-start items-end grid-cols-2 grid-rows-2 min-w-[300px] md:min-w-[710px] h-auto"
      >
        <div className="relative col-start-1 row-start-2 flex flex-col overflow-hidden w-[270px] md:w-[550px] lg:w-[800px] h-[150px] md:h-[250px]">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
            style={{ y: textY }}
            className="h-full grid items-stretch"
          >
            <div>
              <motion.h1 className="flex flex-wrap z-10 relative text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[3rem] md:leading-[6.5rem]">
                Jess Dam
              </motion.h1>
              <img
                src="/assets/images/doodles/cat_on_laptop.svg"
                className="absolute z-20 w-[90px] top-[35px] left-[185px] md:left-[300px] md:top-[40px] lg:top-[35px] lg:left-[400px] md:w-[250px]"
                width={300}
                alt=""
              />
            </div>
            <div className="flex flex-wrap justify-start items-end gap-4">
              <h3
                aria-label="Software Engineer"
                className="z-30 text-lg md:text-2xl text-secondary font-homemade-apple pb-8 pl-4"
              >
                Software Engineer
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
