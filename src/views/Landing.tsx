import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SECTION_REFS } from '../pageRefs';

function Landing() {
  // Main heading fixed scroll variables
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <div
      id={SECTION_REFS.LANDING}
      className="relative flex justify-start h-screen w-full overflow-clip bg-black text-black"
    >
      <motion.div
        initial={{
          y: '100%',
          opacity: 0.5,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: 'easeInOut', delay: 2.5 }}
        className="z-0 absolute top-0 h-[100vh] w-full flex justify-center bg-white"
      ></motion.div>

      <motion.div
        initial={{
          y: '-100%',
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
        ref={ref}
        className="z-20 pl-[50px] md:pl-[20vw] max-pl-[400px] flex flex-col items-start justify-center min-w-[300px] md:min-w-[710px]"
      >
        <div className="relative flex flex-col overflow-hidden w-[270px] md:w-[800px] pb-2 md:pb-10">
          <h2 className="text-primary pb-4 md:pb-10 text-[0.9rem] md:text-[1.2rem]">
            Hello! my name is
          </h2>
          <motion.h1
            initial={{
              y: '-100%',
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="flex flex-wrap z-10 relative text-[4rem] md:text-[12rem] leading-[3rem] md:leading-[6.5rem]"
            style={{ y: textY }}
          >
            Jess Dam
          </motion.h1>
          <motion.img
            initial={{
              y: '100%',
            }}
            whileInView={{ y: 0 }}
            transition={{ duration: 2, delay: 2, ease: 'easeInOut' }}
            src="/assets/images/doodles/cat_on_laptop.svg"
            className="absolute z-20 w-[80px] top-[72px] left-[185px] md:top-[102px] md:left-[560px] md:w-[250px]"
            width={300}
            alt=""
          />
        </div>
        <div className="flex flex-wrap text-right justify-end items-end gap-4 md:justify-end w-[210px] md:w-[615px] uppercase">
          <h3 aria-label="Software Engineer" className="text-xs md:text-lg">
            Software Engineer
          </h3>
        </div>
      </motion.div>

      {/* <area
          alt=""
          className="z-0 absolute bottom-0 bg-secondary opacity-70 blur-3xl w-[80%] h-[400px] rounded-full"
        /> */}
    </div>
  );
}

export default Landing;
