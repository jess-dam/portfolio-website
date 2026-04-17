import { useRef } from 'react';
import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import { easeIn, motion, useScroll } from 'framer-motion';

interface SkillSetProps {
  skillSetOrder: string;
  title: string;
  skills: string[];
}

const SkillSet = ({ skillSetOrder, title, skills }: SkillSetProps) => {
  return (
    <div className="border border-t-2 border-b-0 border-r-0 border-l-0 border-secondary p-2 py-4">
      <h1 className="text-secondary text-2xl md:text-4xl">
        {skillSetOrder}
        <span className="font-homemade-apple text-primary">{title}</span>
      </h1>
      <ul className="flex flex-row flex-wrap p-6 uppercase">
        {skills.map((skill, index) => (
          <>
            <li className="p-2">{skill}</li>
            {index < skills.length - 1 && <span className="p-2">•</span>}
          </>
        ))}
      </ul>
    </div>
  );
};

function Experience() {
  // animation
  const skillsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skillsRef,
  });

  return (
    <ContentSectionContainer
      id={SECTION_REFS.EXPERIENCE}
      bgColor="white"
      textColor="black"
    >
      <div
        ref={skillsRef}
        className="col-span-12 md:col-start-1 md:col-span-10"
      >
        <h1 className="pb-8">Skills</h1>
        <SkillSet
          skillSetOrder="01"
          title="Languages"
          skills={['TypeScript', 'Python', 'Java', 'SQL', 'Javascript', 'C#']}
        />
        <SkillSet
          skillSetOrder="02"
          title="Frameworks"
          skills={[
            'React',
            'FastAPI',
            'NextJS',
            'NestJS',
            'NodeJS',
            'Spring Boot',
          ]}
        />
        <SkillSet
          skillSetOrder="03"
          title="Data & ML"
          skills={[
            'XGBoost',
            'PyTorch',
            'Naive Bayes',
            'pandas',
            'GDAL',
            'rasterio',
            'geopandas',
          ]}
        />
        <SkillSet
          skillSetOrder="04"
          title="Infrastructure"
          skills={[
            'AWS',
            'PostgreSQL',
            'Docker',
            'Terraform',
            'Kubernetes',
            'Git',
          ]}
        />
        <SkillSet
          skillSetOrder="05"
          title="AI Tooling"
          skills={['Claude Code', 'Codex']}
        />
      </div>
    </ContentSectionContainer>
  );
}

export default Experience;
