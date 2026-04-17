import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import moment from 'moment';
import { AnimatedCounter } from '../components/AnimatedCounter';

const FIRST_COMMIT_DATE = '23/10/2019';

const getYearsSinceFirstCommit = (): number => {
  let today = moment(moment.now());
  let firstCommit = moment(FIRST_COMMIT_DATE, 'DD/MM/YYYYY');

  let yearsElapsed = today.diff(firstCommit, 'years');
  return yearsElapsed;
};

function Info() {
  return (
    <ContentSectionContainer
      id={SECTION_REFS.INFO}
      bgColor="white"
      textColor="black"
    >
      <div className="self-center text-wrap max-w-[1200px] col-span-12 lg:col-start-2 lg:col-span-10 grid grid-flow-row auto-rows-fr grid-cols-2 md:grid-cols-4 md:grid-rows-2 md:min-h-[500px] gap-4 content-stretch xs:pt-8 py-4">
        <div className="bg-primary text-background p-2 lg:p-4">
          <h4>
            Hi! <br /> I'm a Full Stack Engineer
          </h4>
        </div>

        <div className="bg-accent text-primary p-2 lg:p-4 col-start-1 md:col-start-3 flex flex-col place-content-between">
          <h4>Based in</h4>
          <div className="flex flex-row flex-wrap">
            <img
              src="/assets/images/map_pin.svg"
              width={20}
              className="pr-2 md:w-30"
            ></img>
            <h4>London, UK</h4>
          </div>
        </div>

        <div className="bg-primary text-background p-2 lg:p-4 flex flex-col place-content-between">
          <h4>Programming professionally for</h4>
          <h4>
            <AnimatedCounter from={0} to={getYearsSinceFirstCommit()} /> Years
          </h4>
        </div>

        <div className="bg-secondary text-background p-2 lg:p-4 col-span-2 flex flex-col place-content-between">
          <h4>Skilled at building</h4>
          <ul className="info-detail">
            <li>APIs</li>
            <li>Web Interfaces</li>
            <li>Machine Learning Pipelines</li>
          </ul>
        </div>

        <div className="bg-accent2 text-primary p-2 lg:p-4 col-start-2 md:col-start-4 flex flex-col place-content-between">
          <h4>Working across</h4>
          <ul className="info-detail">
            <li>Climate</li>
            <li>Finance</li>
            <li>Social Impact</li>
          </ul>
        </div>
      </div>
    </ContentSectionContainer>
  );
}

export default Info;
