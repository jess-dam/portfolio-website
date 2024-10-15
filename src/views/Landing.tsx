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
        className="relative pt-10 pl-5 md:pl-10 flex flex-col items-stretch justify-center min-w-[300px] md:min-w-[710px]"
      >
        <div className="flex flex-col mb-20 items-start justify-center overflow-hidden w-[250px] md:w-[450px]">
          <h2 className='text-accent text-left'>Hello! my name is</h2>
            <motion.h1
              className="flex flex-wrap z-10 font-climate-crisis relative text-[4rem] md:text-[9rem] text-left align-center leading-[3rem] md:leading-[6.5rem]"
              style={{ y: textY }}
            >Jess Dam
            </motion.h1>
          </div>
            <img src='/assets/images/doodles/cat_on_laptop.svg' className='z-20 absolute mb-7 md:mb-12 ml-10 right-0 w-[100px] md:w-[300px]' width={300}/>
      </motion.div>
    </SectionContainer>
  );
}

export default Landing;
