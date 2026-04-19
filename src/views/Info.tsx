import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import moment from 'moment';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { motion } from 'framer-motion';
const FIRST_COMMIT_DATE = '23/10/2019';

const getYearsSinceFirstCommit = (): number => {
  let today = moment(moment.now());
  let firstCommit = moment(FIRST_COMMIT_DATE, 'DD/MM/YYYYY');

  let yearsElapsed = today.diff(firstCommit, 'years');
  return yearsElapsed;
};

/** Tailwind must see full class names in source; `md:${dynamic}` is not scanned. */
const COL_START_MD_CLASSES: Record<3 | 4, string> = {
  3: 'col-start-2 md:col-start-3',
  4: 'col-start-2 md:col-start-4',
};

interface InfoBoxProps {
  children: JSX.Element | JSX.Element[];
  bgColor: string;
  color: string;
  /** Grid column start at `md` (1-based). Mobile uses `col-start-2` for alignment with the 2-col layout. */
  colStartMd?: 3 | 4;
  colSpan?: string;
}

const InfoBox = ({
  children,
  bgColor,
  color,
  colSpan,
  colStartMd,
}: InfoBoxProps) => {
  const colStartClass =
    colStartMd != null ? COL_START_MD_CLASSES[colStartMd] : '';
  return (
    <div
      className={`overflow-hidden ${colSpan ?? ''} ${colStartClass}`.trim()}
    >
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

function Info() {
  return (
    <ContentSectionContainer
      id={SECTION_REFS.INFO}
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
        <InfoBox bgColor="bg-primary" color="text-background">
          <h4>
            Hi! <br /> I'm a Full Stack Engineer
          </h4>
        </InfoBox>

        <InfoBox bgColor="bg-accent" color="text-primary" colStartMd={3}>
          <h4>Based in</h4>
          <div className="flex flex-row flex-wrap">
            <img
              src="/assets/images/map_pin.svg"
              width={20}
              className="pr-2 md:w-30"
            ></img>
            <h4>London, UK</h4>
          </div>
        </InfoBox>

        <InfoBox bgColor="bg-primary" color="text-background">
          <h4>Programming professionally for</h4>
          <h4>
            <AnimatedCounter from={0} to={getYearsSinceFirstCommit()} /> Years
          </h4>
        </InfoBox>

        <InfoBox
          bgColor="bg-secondary"
          color="text-background"
          colSpan="col-span-2"
        >
          <h4>Skilled at building</h4>
          <ul className="info-detail">
            <li>APIs</li>
            <li>Web Interfaces</li>
            <li>Machine Learning Pipelines</li>
          </ul>
        </InfoBox>

        <InfoBox bgColor="bg-accent2" color="text-primary" colStartMd={4}>
          <h4>Working across</h4>
          <ul className="info-detail">
            <li>Climate</li>
            <li>Finance</li>
            <li>Social Impact</li>
          </ul>
        </InfoBox>
      </motion.div>
    </ContentSectionContainer>
  );
}

export default Info;
