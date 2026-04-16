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
      className="relative flex place-content-center h-screen w-full overflow-clip text-primary bg-primary"
    >
      <motion.img
        src="/assets/images/doodles/cat_on_laptop_white.svg"
        className="absolute z-0 w-[90px] md:w-[200px] top-[45vh] md:top-[40vh]"
        width={300}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: ['100%', '80%', '100%', '100%', '50%', 0] }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      />

      <motion.div
        initial={{
          borderRadius: '60%',
          opacity: 0,
          y: '100%',
        }}
        animate={{
          opacity: [0.5, 1],
          borderRadius: 0,
          y: 0,
        }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 1.8 }}
        className="z-10 absolute top-0 h-[100vh] w-full flex justify-center bg-background"
      ></motion.div>

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
      />

      <motion.div
        className="absolute z-20 bottom-[25vh] md:bottom-[80vh] right-[15vw] bg-accent bg-gradient-to-t from-pri rounded-full w-[350px] h-[150px] blur-3xl"
        style={{ x: blur2X, y: blur2Y }}
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 1.5, 1, 1, 1.5, 1],
          opacity: [0, 0.5, 0.8, 0.5, 1, 1, 0],
        }}
        transition={{
          duration: 10,
          delay: 2.5,
          ease: 'backInOut',
          repeat: Infinity,
        }}
      />

      <motion.div
        initial={{
          y: '100%',
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 2, ease: 'easeInOut' }}
        ref={ref}
        className="z-20 p-10 grid justify-start items-end grid-cols-2 grid-rows-2 min-w-[300px] md:min-w-[710px] h-auto"
      >
        <div className="relative col-start-1 row-start-2 flex flex-col overflow-hidden w-[270px] md:w-[800px] h-auto">
          <motion.div
            initial={{
              y: '100%',
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 2.3, ease: 'easeInOut' }}
            style={{ y: textY }}
            className=""
          >
            <div>
              <h1 className="flex flex-wrap z-10 relative text-[4rem] md:text-[10rem] lg:text-[12rem] leading-[3rem] md:leading-[6.5rem]">
                Jess Dam
              </h1>
              <img
                src="/assets/images/doodles/cat_on_laptop.svg"
                className="absolute z-20 w-[90px] top-[35px] left-[185px] md:top-[40px] md:left-[460px] lg:top-[55px] lg:left-[560px] md:w-[250px]"
                width={300}
                alt=""
              />
            </div>
            <div className="flex flex-wrap text-right justify-start items-end gap-4 uppercase">
              <h3 aria-label="Software Engineer" className="text-xs md:text-lg">
                Software Engineer
              </h3>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Landing;
