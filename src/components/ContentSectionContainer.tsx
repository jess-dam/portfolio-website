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

function ContentSectionContainer({
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
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.8 }}
      >
        <div
          className={`pb-10 flex justify-center place-items-between min-h-screen w-full px-4 overflow-hidden bg-${bgColor} text-${textColor} ${roundedBorder ? 'rounded-t-xl z-10' : ''}`}
        >
          {children}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default ContentSectionContainer;
