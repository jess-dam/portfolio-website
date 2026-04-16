import { useRef } from 'react';
import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import { easeIn, motion, useScroll } from 'framer-motion';

interface TimelineImage {
  url: string;
  alt?: string;
}

interface TimelineItem {
  imgs: TimelineImage[];
  timePeriod: string;
  roleTitle: string;
  orgName: string;
}


function Experience() {
  // animation
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
  });

  return (
    <ContentSectionContainer
      id={SECTION_REFS.EXPERIENCE}
      bgColor="white"
      textColor="black"
    >
      <div ref={timelineRef} className="flex flex-col w-full h-fit py-20">
        <h1 className="z-0 pb-10 md:pb-20 text-[2.2rem] break-words md:text-[5rem] font-climate-crisis justify-start text-center lg:text-left">
          Experience
        </h1>
      </div>
    </ContentSectionContainer>
  );
}

export default Experience;
