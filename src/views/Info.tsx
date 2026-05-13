import { AnimatedCounter } from '../components/atoms/AnimatedCounter';
import ContentSectionContainer from '../components/ContentSectionContainer';
import moment from 'moment';
import { AnimatePresence, motion } from 'framer-motion';
import { SECTION_REFS } from '../pageRefs';
import { useReducedMotionState } from '../context/ReducedMotionContext';

const FIRST_COMMIT_DATE = '23/10/2019';

const getYearsSinceFirstCommit = (): number => {
  let today = moment(moment.now());
  let firstCommit = moment(FIRST_COMMIT_DATE, 'DD/MM/YYYYY');

  let yearsElapsed = today.diff(firstCommit, 'years');
  return yearsElapsed;
};

/** Tailwind must see full class names in source; `md:${dynamic}` is not scanned. */
const COL_START_MD_CLASSES: Record<1 | 2 | 3 | 4, string> = {
  1: 'col-start-1 md:col-start-1',
  2: 'col-start-1 md:col-start-2',
  3: 'col-start-2 md:col-start-3',
  4: 'col-start-2 md:col-start-4',
};

interface ContentBoxProps {
  children: JSX.Element | JSX.Element[];
  bgColor: string;
  color: string;
  borderColor?: string;
  /** Grid column start at `md` (1-based). Mobile uses `col-start-2` for alignment with the 2-col layout. */
  colStartMd?: 1 | 2 | 3 | 4;
  colSpan?: string;
}

const ContentBox = ({
  children,
  bgColor,
  color,
  borderColor,
  colSpan,
  colStartMd,
}: ContentBoxProps) => {
  const colStartClass =
    colStartMd != null ? COL_START_MD_CLASSES[colStartMd] : '';

  const borderClass = borderColor != null ? `border ${borderColor}` : '';
  const { shouldReduceMotion } = useReducedMotionState();

  return (
    <div
      className={`overflow-hidden info-detail ${colSpan ?? ''} ${colStartClass}`.trim()}
    >
      {shouldReduceMotion ? (
        <div
          className={`${bgColor} ${color} ${borderClass} p-2 lg:p-4 h-full flex flex-col place-content-between`}
        >
          {children}
        </div>
      ) : (
        <motion.div
          variants={{
            initial: { opacity: 0, y: '-40%' },
            reveal: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: '-40%' },
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          viewport={{ amount: 'some' }}
          className={`${bgColor} ${color} ${borderClass} p-2 lg:p-4 h-full flex flex-col place-content-between`}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const StickerOverlay = () => {
  const { shouldReduceMotion } = useReducedMotionState();
  const spinAnimation = shouldReduceMotion
    ? undefined
    : {
        rotate: 360,
        transition: {
          duration: 2,
          ease: 'linear' as const,
          repeat: Infinity,
        },
      };
  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 2 }}
        className="absolute z-20 inset-0 flex justify-between pointer-events-none"
      >
        <img
          src="/assets/images/doodles/accessibility.svg"
          width={100}
          alt="illustration representing accessibility"
          className="relative bottom-[15%] hidden md:block"
        />
        <motion.img
          animate={spinAnimation}
          src="/assets/images/doodles/star_red.svg"
          width={30}
          alt="star illustration"
          className="relative bottom-[18%] md:bottom-[45%] left-20 md:-left-10"
        />
        <img
          src="/assets/images/doodles/sustainability.svg"
          width={100}
          alt="illustration representing sustainability"
          className="relative top-[2%] md:top-[5%] right-0"
        />
        <motion.img
          animate={spinAnimation}
          src="/assets/images/doodles/star_green.svg"
          width={30}
          alt="star illustration"
          className="relative top-[25%] md:top-[30%]"
        />
      </motion.div>
    </AnimatePresence>
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
        aria-label="A quick summary about me"
        className="relative overflow-hidden grid justify-self-center text-wrap info-detail max-w-[900px] col-span-12 lg:col-start-2 lg:col-span-10 grid-flow-row auto-rows-fr grid-cols-2 md:grid-cols-3 md:grid-rows-2 md:min-h-[500px] gap-4 content-stretch xs:pt-8 py-4"
      >
        <ContentBox
          bgColor="bg-background"
          color="text-primary"
          borderColor="border-primary"
        >
          <p className="info-detail">Hi! I'm a Full Stack Engineer</p>
        </ContentBox>

        <ContentBox
          bgColor="bg-primary"
          color="text-background"
          colStartMd={3}
          aria-label="Programming professionally for 6+ years"
        >
          <p className="info-detail">Programming professionally for</p>
          <p className="info-detail">
            <AnimatedCounter from={0} to={getYearsSinceFirstCommit()} /> Years
          </p>
        </ContentBox>

        <ContentBox
          bgColor="bg-secondary"
          color="text-background"
          colStartMd={2}
        >
          <h4>Skilled at building</h4>
          <ul className="list-none flex flex-col gap-1 info-detail">
            <li className="flex items-center gap-2">
              <BulletPointStar />
              APIs
            </li>
            <li className="flex items-center gap-2">
              <BulletPointStar />
              Web Interfaces
            </li>
            <li className="flex items-center gap-2">
              <BulletPointStar />
              Machine Learning Pipelines
            </li>
          </ul>
        </ContentBox>

        <ContentBox bgColor="bg-accent2" color="text-primary" colStartMd={1}>
          <h4>Working across</h4>
          <ul className="list-none flex flex-col gap-1 info-detail">
            <li className="flex items-center gap-2">
              <BulletPointStar />
              Climate
            </li>
            <li className="flex items-center gap-2">
              <BulletPointStar />
              Finance
            </li>
            <li className="flex items-center gap-2">
              <BulletPointStar />
              Social Impact
            </li>
          </ul>
        </ContentBox>

        <ContentBox bgColor="bg-accent" color="text-primary" colStartMd={3}>
          <h4>Based in</h4>
          <div className="flex flex-row flex-wrap">
            <img
              src="/assets/images/map_pin.svg"
              width={20}
              className="pr-2 md:w-30"
            ></img>
            <p className="info-detail">London, UK</p>
          </div>
        </ContentBox>
        <StickerOverlay />
      </motion.div>
    </ContentSectionContainer>
  );
}

const BulletPointStar = () => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 0L8.25559 4.74441L13 6.5L8.25559 8.25559L6.5 13L4.74441 8.25559L0 6.5L4.74441 4.74441L6.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Info;
