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
        <div className="flex flex-wrap items-center overflow-hidden max-w-[80vw] md:max-w-[60vw]">
          <motion.h1
            className="flex flex-wrap font-climate-crisis relative text-[2rem] md:text-[4rem] text-center"
            style={{ y: textY }}
          >
            hello, I’m <span className="text-accent">&nbsp;Jess Dam&nbsp;</span>
            , a{' '}
            <span className="text-accent">
              &nbsp;full-stack developer&nbsp;
            </span>{' '}
            with a focus on front-end and UX
          </motion.h1>
        </div>
      </motion.div>
    </SectionContainer>
  );
}

export default Landing;
