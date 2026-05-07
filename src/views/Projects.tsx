import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import { motion } from 'framer-motion';

/** Tailwind must see full class names in source; `md:${dynamic}` is not scanned. */
const COL_START_MD_CLASSES: Record<3 | 4, string> = {
  3: 'col-start-2 md:col-start-3',
  4: 'col-start-2 md:col-start-4',
};

interface ContentBoxProps {
  children: JSX.Element | JSX.Element[];
  bgColor: string;
  color: string;
  /** Grid column start at `md` (1-based). Mobile uses `col-start-2` for alignment with the 2-col layout. */
  colStartMd?: 3 | 4;
  colSpan?: string;
}

const ContentBox = ({
  children,
  bgColor,
  color,
  colSpan,
  colStartMd,
}: ContentBoxProps) => {
  const colStartClass =
    colStartMd != null ? COL_START_MD_CLASSES[colStartMd] : '';
  return (
    <div className={`overflow-hidden ${colSpan ?? ''} ${colStartClass}`.trim()}>
      <motion.div
        variants={{
          initial: { opacity: 0, y: '-40%' },
          reveal: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: '-40%' },
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
        viewport={{ amount: 'all' }}
        className={`${bgColor} ${color} p-2 lg:p-4 h-full flex flex-col place-content-between`}
      >
        {children}
      </motion.div>
    </div>
  );
};

function Projects() {
  return (
    <ContentSectionContainer
      id={SECTION_REFS.PROJECTS}
      bgColor="white"
      textColor="black"
    >
      <motion.div
        initial="initial"
        whileInView="reveal"
        exit="exit"
        transition={{ staggerChildren: 0.08 }}
        className="overflow-hidden self-center text-wrap max-w-[1200px] col-span-12 lg:col-start-2 lg:col-span-10 grid grid-flow-row auto-rows-fr grid-cols-2 md:grid-cols-4 md:grid-rows-2 md:min-h-[500px] gap-4 content-stretch xs:pt-8 py-4"
      >
        <ContentBox bgColor="bg-primary" color="text-background">
          <h4>Engineering</h4>
        </ContentBox>

        <ContentBox bgColor="bg-accent" color="text-primary" colStartMd={3}>
          <h4>DIY</h4>
        </ContentBox>

        <ContentBox bgColor="bg-primary" color="text-background">
          <h4>Photography</h4>
        </ContentBox>

        <ContentBox
          bgColor="bg-secondary"
          color="text-background"
          colSpan="col-span-2"
        >
          <h4>Art</h4>
        </ContentBox>

        <ContentBox bgColor="bg-accent2" color="text-primary" colStartMd={4}>
          <h4>Art</h4>
        </ContentBox>
      </motion.div>
    </ContentSectionContainer>
  );
}

export default Projects;
