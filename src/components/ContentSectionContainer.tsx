import { AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  id?: string;
  bgColor?: string;
  textColor?: string;
  children: JSX.Element | JSX.Element[];
}

function ContentSectionContainer({ id, children }: Props) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });
  const sectionFadeInAnimation = useAnimation();

  useEffect(() => {
    if (isInView) sectionFadeInAnimation.start('show');
  }, [isInView]);

  return (
    <AnimatePresence>
      <section
        id={id}
        className={`grid grid-cols-12 justify-items-stretch m-4 md:m-8 pb-20 md:py-20 place-items-between min-h-screen overflow-hidden`}
      >
        {children}
      </section>
    </AnimatePresence>
  );
}

export default ContentSectionContainer;
