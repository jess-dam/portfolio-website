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
      className="relative flex justify-center place-items-between h-screen w-full overflow-clip bg-black text-white"
    >
      <motion.div
        initial={{
          y: '100%',
          opacity: 0.5,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: 'easeInOut', delay: 2.5 }}
        className="z-0 absolute top-0 h-[100vh] w-full flex justify-center bg-primary"
      ></motion.div>

      <motion.div
        initial={{
          y: '-100%',
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        ref={ref}
        className="z-20 pt-10 pl-5 md:pl-10 flex flex-col items-stretch justify-center min-w-[300px] md:min-w-[710px]"
      >
        <div className="relative flex flex-col items-center overflow-hidden w-[250px] md:w-[700px] pb-10">
          <h2 className="text-accent text-center pb-10 text-[0.9rem] md:text-[1.2rem]">
            Hello! my name is
          </h2>
          <motion.h1
            initial={{
              y: '-100%',
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="flex flex-wrap z-10 relative text-[5rem] md:text-[12rem] text-center align-center leading-[3rem] md:leading-[6.5rem]"
            style={{ y: textY }}
          >
            Jess Dam
          </motion.h1>
          <motion.img
            initial={{
              y: '100%',
            }}
            animate={{ y: 0 }}
            transition={{ duration: 2, delay: 3, ease: 'easeInOut' }}
            src="/assets/images/doodles/cat_on_laptop.svg"
            className="absolute z-20 w-[130px] bottom-[30px] md:w-[250px]"
            width={300}
          />
        </div>
        <div className="flex flex-wrap text-center justify-center gap-4 md:p-8 md:px-10 md:justify-between w-[250px] md:w-[700px] uppercase">
          <h4 aria-label="Software Engineer" className="inline-block">
            Software Engineer
          </h4>
          <h4 aria-label="UX + Web Designer" className="inline-block">
            UX + Web Designer
          </h4>
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
