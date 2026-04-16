import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import { motion } from 'framer-motion';

function Info() {
  return (
    <ContentSectionContainer
      id={SECTION_REFS.INFO}
      bgColor="white"
      textColor="black"
    >
      <div>
        <motion.h1 className="text-[4rem] text-center p-10 md:p-0 md:text-[8rem] md:text-left leading-none h-fit self-end">
          Info
        </motion.h1>
      </div>
    </ContentSectionContainer>
  );
}

export default Info;
