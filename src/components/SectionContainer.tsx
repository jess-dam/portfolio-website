import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  id?: string;
  bgColor?: string;
  textColor?: string;
  children: JSX.Element | JSX.Element[];
}

function SectionContainer({ children, bgColor, textColor, id }: Props) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });
  const sectionFadeInAnimation = useAnimation();

  useEffect(() => {
    if (isInView)
      sectionFadeInAnimation.start('show');
  }, [isInView]);


  return (
    <motion.section
      id={id} className={`flex justify-center place-items-between min-h-screen w-full px-4 overflow-hidden bg-${bgColor} text-${textColor}`}
      ref={containerRef}
      animate={sectionFadeInAnimation}
      variants={{ hidden: {opacity: 0}, show: { opacity:1} }}
      initial='hidden'
      transition={{ duration: 1, ease: 'easeIn' }}
    >
      {children}
    </motion.section>
  );
}

export default SectionContainer;
