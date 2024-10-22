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
        className="pt-10 pl-5 md:pl-10 flex flex-col items-stretch justify-center min-w-[300px] md:min-w-[710px]"
      >
        <div className="relative flex flex-col items-center overflow-hidden w-[250px] md:w-[700px] pb-10">
          <h2 className='text-accent text-center pb-10 text-[0.9rem] md:text-[1.2rem]'>Hello! my name is</h2>
          <motion.h1
            className="flex flex-wrap z-10 relative text-[5rem] md:text-[12rem] text-center align-center leading-[3rem] md:leading-[6.5rem]"
            style={{ y: textY }}
          >Jess Dam
          </motion.h1>
          <img src='/assets/images/doodles/cat_on_laptop.svg' className='absolute z-20 w-[130px] bottom-[30px] md:w-[250px]' width={300}/>
        </div>
        <div className='flex flex-wrap text-center justify-center gap-4 md:p-8 md:px-10 md:justify-between w-[250px] md:w-[700px] uppercase'>
          <h4>Software Engineer</h4>
          <h4>UX + Web Designer</h4>
        </div>
      </motion.div>
    </SectionContainer>
  );
}

export default Landing;
