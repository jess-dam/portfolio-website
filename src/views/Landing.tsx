import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionContainer from '../components/SectionContainer';

function Landing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const backdropY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const isInView = useInView(ref, {
    amount: 'all',
  });

  return (
    <SectionContainer bgColor="primary" textColor="white">
      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-wrap items-center justify-center overflow-hidden w-[250px] md:w-[450px]">
          <h2 className='text-accent'>Hello my name is</h2>
          <motion.h1
            className="flex flex-wrap font-climate-crisis relative text-[4rem] md:text-[9rem] text-center align-center leading-[3rem] md:leading-[6.5rem]"
            style={{ y: textY }}
          >Jess Dam
          </motion.h1>
        </div>
      </motion.div>
    </SectionContainer>
  );
}

export default Landing;
