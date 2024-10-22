import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  id?: string;
  bgColor?: string;
  textColor?: string;
  roundedBorder?: boolean;
  children: JSX.Element | JSX.Element[];
}

function SectionContainer({
  id,
  children,
  bgColor,
  textColor,
  roundedBorder,
}: Props) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });
  const sectionFadeInAnimation = useAnimation();

  useEffect(() => {
    if (isInView) sectionFadeInAnimation.start('show');
  }, [isInView]);

  return (
    <motion.section
      id={id}
      className={`pb-10 flex justify-center place-items-between min-h-screen w-full px-4 overflow-hidden bg-${bgColor} text-${textColor} ${roundedBorder ? 'rounded-t-xl z-10' : ''}`}
      // ref={containerRef}
      // animate={sectionFadeInAnimation}
      // variants={{ hidden: {opacity: 0}, show: { opacity:1} }}
      // initial='hidden'
      // transition={{ duration: 1, ease: 'easeIn' }}
    >
      {children}
    </motion.section>
  );
}

export default SectionContainer;
