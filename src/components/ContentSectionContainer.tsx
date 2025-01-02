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
        className={`pb-20 md:py-20 flex justify-center place-items-between min-h-screen w-full px-4 overflow-hidden`}
      >
        <div
          className={`pb-10 flex justify-center content-center min-h-screen w-full lg:max-w-[1000px] px-4 overflow-hidden`}
        >
          {children}
        </div>
      </section>
    </AnimatePresence>
  );
}

export default ContentSectionContainer;
