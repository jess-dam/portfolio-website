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
import { motion } from 'framer-motion';

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
  const nonTechSkills = ['User Research', 'Project Management'];

  return (
    <ContentSectionContainer
      id={SECTION_REFS.SKILLS}
      bgColor="white"
      textColor="black"
    >
      <div className="flex flex-col md:w-[70vw] md:max-w-[1000px]">
        <h2 className="md:text-3xl md:px-10">Skills in</h2>
        <CarouselProvider
          className="w-full h-[400px] grid grid-cols-6 items-start"
          naturalSlideWidth={60}
          naturalSlideHeight={65}
          totalSlides={4}
        >
          <ButtonBack
            className="mt-10 col-start-1 col-end-1"
            aria-label="Previous skill stack"
          >
            <img src="assets/images/icons/backarrow.svg" />
          </ButtonBack>
          <ButtonNext
            className="mt-10 col-start-6 col-end-6"
            aria-label="Next skill stack"
          >
            <img src="assets/images/icons/nextarrow.svg" />
          </ButtonNext>

          <Slider className="row-start-1 col-start-2 col-end-6 grid content-start md:items-center mt-[30px] md:mt-0 h-[500px] md:h-[850px]">
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
    <div className="flex flex-col justify-center content-start w-full h-fit">
      <h1 className="text-wrap break-words text-center text-[1.8rem] pt-4 md:mt-10 md:pt-0 md:text-[3.4rem] lg:text-[4rem]">
        {title}
      </h1>
      <ul className="gap-8 md:gap-10 grid grid-rows-auto mt-4 md:mt-14 items-center m-10">
        {skills.map((skill, index) => {
          return (
            <motion.li
              aria-aria-describedby="skill-label"
              className="relative flex justify-center items-center"
              initial={{ y: '-100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: index * 0.08,
              }}
              exit={{ y: '-100%', opacity: 0 }}
            >
              <label
                id="skill-label"
                className="z-10 uppercase tracking-widest text-[0.8rem] md:text-[1rem] font-semibold text-center md:text-2xl text-bold max-w-[300px]"
              >
                {skill}
              </label>
              <svg
                aria-hidden="true"
                className="absolute top-2 md:top-4 z-0 w-[150px] md:w-[360px]"
                width="361"
                height="44"
                viewBox="0 0 361 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M360.431 22.0289C360.431 22.5908 360.193 23.1915 359.637 23.8379C359.078 24.4882 358.22 25.1567 357.049 25.833C354.705 27.1855 351.213 28.5089 346.663 29.7796C337.571 32.3184 324.388 34.6113 308.066 36.539C275.43 40.3936 230.329 42.7793 180.5 42.7793C130.671 42.7793 85.5697 40.3936 52.9339 36.539C36.6122 34.6113 23.4293 32.3184 14.3375 29.7796C9.78719 28.5089 6.29452 27.1855 3.95131 25.833C2.77967 25.1567 1.9221 24.4882 1.36297 23.8379C0.807109 23.1915 0.568504 22.5908 0.568504 22.0289C0.568504 21.4669 0.807109 20.8662 1.36297 20.2198C1.9221 19.5695 2.77967 18.901 3.95131 18.2247C6.29452 16.8723 9.78719 15.5488 14.3375 14.2781C23.4293 11.7393 36.6122 9.44646 52.9339 7.5187C85.5697 3.66408 130.671 1.27846 180.5 1.27846C230.329 1.27846 275.43 3.66408 308.066 7.5187C324.388 9.44646 337.571 11.7393 346.663 14.2781C351.213 15.5488 354.705 16.8723 357.049 18.2247C358.22 18.901 359.078 19.5695 359.637 20.2198C360.193 20.8662 360.431 21.4669 360.431 22.0289Z"
                  fill="#FFA462"
                  stroke="#FFA462"
                  stroke-width="1.13701"
                />
              </svg>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
