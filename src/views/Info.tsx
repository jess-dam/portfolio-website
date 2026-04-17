import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';

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

        <div className="bg-accent text-primary p-2 lg:p-4 col-start-1 md:col-start-3 flex flex-col content-between">
          <h4>Based in</h4>
          <h4>London</h4>
        </div>

        <div className="bg-primary text-background p-2 lg:p-4 col-start-2 flex flex-col content-between">
          <h4>Programming professionally for</h4>
          <h4>5+ years</h4>
        </div>

        <div className="bg-secondary text-background p-2 lg:p-4 col-span-2">
          <h4>
            Skilled in building <br /> APIs <br /> Web Interfaces <br /> Machine
            Learning Pipelines
          </h4>
        </div>

        <div className="bg-accent2 text-secondary p-2 lg:p-4 col-start-2 md:col-start-4">
          <h4>
            Working across <br /> Climate <br /> Finance <br /> Social Impact
          </h4>
        </div>
      </div>
    </ContentSectionContainer>
  );
}

export default Info;
