import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import moment from 'moment';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FIRST_COMMIT_DATE = '23/10/2019';

const getYearsSinceFirstCommit = (): number => {
  let today = moment(moment.now());
  let firstCommit = moment(FIRST_COMMIT_DATE, 'DD/MM/YYYYY');

  let yearsElapsed = today.diff(firstCommit, 'years');
  return yearsElapsed;
};

interface InfoBoxProps {
  children: JSX.Element | JSX.Element[];
  bgColor: string;
  color: string;
  colStart?: number;
  colSpan?: number;
}

const InfoBox = ({
  children,
  bgColor,
  color,
  colSpan,
  colStart,
}: InfoBoxProps) => (
  <div
    className={`overflow-hidden ${colSpan && `col-span-${colSpan}`} ${colStart && `col-start-2 md:col-start-${colStart}`}`}
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
      className={`bg-${bgColor} text-${color} p-2 lg:p-4 h-full flex flex-col place-content-between`}
    >
      {children}
    </motion.div>
  </div>
);

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
        <InfoBox bgColor="primary" color="background">
          <h4>
            Hi! <br /> I'm a Full Stack Engineer
          </h4>
        </InfoBox>

        {/* <div className="bg-accent text-primary p-2 lg:p-4 col-start-1 md:col-start-3 flex flex-col place-content-between"> */}
        <InfoBox bgColor="accent" color="primary" colStart={3}>
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

        <InfoBox bgColor="primary" color="background">
          <h4>Programming professionally for</h4>
          <h4>
            <AnimatedCounter from={0} to={getYearsSinceFirstCommit()} /> Years
          </h4>
        </InfoBox>

        <InfoBox bgColor="secondary" color="background" colSpan={2}>
          <h4>Skilled at building</h4>
          <ul className="info-detail">
            <li>APIs</li>
            <li>Web Interfaces</li>
            <li>Machine Learning Pipelines</li>
          </ul>
        </InfoBox>

        <InfoBox bgColor="accent2" color="primary" colStart={4}>
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
