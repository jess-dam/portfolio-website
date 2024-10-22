import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from 'framer-motion';
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
    <AnimatePresence>
      <motion.section
        id={id}
        className={`pb-10 flex justify-center place-items-between min-h-screen w-full px-4 overflow-hidden bg-${bgColor} text-${textColor} ${roundedBorder ? 'rounded-t-xl z-10' : ''}`}
        key={id}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        variants={{
          initialState: { opacity: 0 },
          animateState: { opacity: 1 },
          exitState: {},
        }}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
}

export default SectionContainer;
