import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionContainer from '../components/SectionContainer';
import { SECTION_REFS } from '../pageRefs';

function Landing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <SectionContainer id={SECTION_REFS.LANDING} bgColor="primary" textColor="white">
      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col mb-20 items-center justify-center overflow-hidden w-[250px] md:w-[450px]">
          <img src='/assets/images/doodles/cat_on_laptop.svg' className='' width={300}/>
          <h2 className='text-accent text-center'>Hello! my name is</h2>
          <motion.h1
            className="flex flex-wrap z-10 font-climate-crisis relative text-[4rem] md:text-[9rem] text-center align-center leading-[3rem] md:leading-[6.5rem]"
            style={{ y: textY }}
          >Jess Dam
          </motion.h1>
        </div>
      </motion.div>
    </SectionContainer>
  );
}

export default Landing;
