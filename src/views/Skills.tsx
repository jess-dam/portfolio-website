import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Skills() {
  const frontEndSkills = [
    'TypeScript',
    'React.js',
    'Next.js',
    'Figma',
    'Tailwind',
    'Framer Motion',
  ];
  const backEndSkills = [
    'Java',
    'Python',
    'PostgreSQL',
    'TeamCity',
    'Docker',
    'AWS EC2',
    'Kubernetes',
  ];
  const growingSkills = [
    'Figma',
    'Communicating Design Ideas',
    'Designing for Accessibility',
  ];
  const nonTechSkills = [
    'User Research',
    'Project Management',
    'Creative Designs',
  ];

  return (
    <ContentSectionContainer
      id={SECTION_REFS.SKILLS}
      bgColor="black"
      textColor="white"
    >
      <div className="flex flex-col py-80 md:min-w-[70vw]">
        <h2 className="md:text-3xl md:px-40">Skills in</h2>
        <CarouselProvider
          className="w-full h-[400px] grid grid-cols-6 items-start"
          naturalSlideWidth={60}
          naturalSlideHeight={65}
          totalSlides={4}
        >
          <ButtonBack className="mt-10" aria-label="back button">
            <img src="assets/images/icons/backarrow.svg" />
          </ButtonBack>

          <Slider className="col-span-4 grid md:items-center h-[700px] md:h-[650px]">
            <Slide index={0}>
              <SkillStack title="Front End" skills={frontEndSkills} />
            </Slide>
            <Slide index={1}>
              <SkillStack title="Back End" skills={backEndSkills} />
            </Slide>
            <Slide index={2}>
              <SkillStack title="Non-Tech" skills={nonTechSkills} />
            </Slide>
            <Slide index={3}>
              <SkillStack title="Progress" skills={growingSkills} />
            </Slide>
          </Slider>
          <ButtonNext className="mt-10" aria-label="Next button">
            <img src="assets/images/icons/nextarrow.svg" />
          </ButtonNext>
        </CarouselProvider>
      </div>
    </ContentSectionContainer>
  );
}

interface SkillStackProps {
  title: string;
  skills: string[];
}

const SkillStack = (props: SkillStackProps) => {
  const { title, skills } = props;
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <h1 className="text-secondary break-words text-wrap text-[1.7rem] md:text-[5rem]">
        {title}
      </h1>
      <div className="gap-6 md:gap-10 grid grid-rows-auto mt-10 items-center">
        {skills.map((skill) => {
          return (
            <div className="relative flex justify-center items-center">
              <label className="z-10 uppercase tracking-widest text-center md:text-2xl text-bold max-w-[300px]">
                {skill}
              </label>
              <svg
                className="absolute top-2 md:top-5 z-0 w-[150px] md:w-[360px]"
                width="360"
                height="43"
                viewBox="0 0 361 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M360.431 21.3189C360.431 21.8809 360.193 22.4815 359.637 23.128C359.078 23.7783 358.22 24.4468 357.049 25.123C354.705 26.4755 351.213 27.799 346.663 29.0696C337.571 31.6084 324.388 33.9013 308.066 35.8291C275.43 39.6837 230.329 42.0693 180.5 42.0693C130.671 42.0693 85.5697 39.6837 52.9339 35.8291C36.6122 33.9013 23.4293 31.6084 14.3375 29.0696C9.78719 27.799 6.29452 26.4755 3.95131 25.123C2.77967 24.4468 1.9221 23.7783 1.36297 23.128C0.807109 22.4815 0.568504 21.8809 0.568504 21.3189C0.568504 20.7569 0.807109 20.1563 1.36297 19.5098C1.9221 18.8595 2.77967 18.191 3.95131 17.5148C6.29452 16.1623 9.78719 14.8388 14.3375 13.5682C23.4293 11.0293 36.6122 8.7365 52.9339 6.80874C85.5697 2.95412 130.671 0.568504 180.5 0.568504C230.329 0.568504 275.43 2.95412 308.066 6.80874C324.388 8.7365 337.571 11.0293 346.663 13.5682C351.213 14.8388 354.705 16.1623 357.049 17.5148C358.22 18.191 359.078 18.8595 359.637 19.5098C360.193 20.1563 360.431 20.7569 360.431 21.3189Z"
                  fill="black"
                  stroke="#FFA462"
                  stroke-width="1.13701"
                />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
