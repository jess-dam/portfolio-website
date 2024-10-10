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
        <div className="flex flex-wrap items-center overflow-hidden w-[250px] md:w-[500px]">
          <h3 className="text-accent p-5 text-xs md:text-sm">
            Hello, my name is
          </h3>
          <motion.h1
            className="flex flex-wrap font-climate-crisis relative text-[5rem] md:text-[10rem] text-center"
            style={{ y: textY }}
          >
            Jess Dam
          </motion.h1>
        </div>
      </motion.div>
    </SectionContainer>
  );
}

export default Landing;
