import AnimatedStar from '../components/atoms/AnimatedStar';
import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface SkillSetProps {
  skillSetOrder: string;
  title: string;
  skills: string[];
  isActiveByDefault?: boolean;
}

const SkillSet = ({
  skillSetOrder,
  title,
  skills,
  isActiveByDefault = false,
}: SkillSetProps) => {
  const [isActive, setIsActive] = useState(isActiveByDefault);
  return (
    <div
      className="border border-t-2 border-b-0 border-r-0 border-l-0 border-secondary p-2 py-4 md:py-8"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="flex flex-row no-wrap">
        <h1 className="text-secondary text-2xl md:text-4xl">
          {skillSetOrder}
          <span className="z-20 relative font-cedarville-cursive text-primary left-[-5px]">
            {title}
          </span>
        </h1>
        {isActive && (
          <span
            className="text-secondary px-2 grid items-center"
            aria-label="Star icon active tab indicator"
          >
            <AnimatedStar />
          </span>
        )}
      </div>
      <div className="overflow-hidden">
        {isActive && (
          <AnimatePresence>
            <motion.ul
              variants={{
                hidden: {
                  opacity: 0,
                  scaleY: 0,
                  y: '-100%',
                  transition: { duration: 0.2, ease: 'easeOut' },
                },
                visible: {
                  opacity: 1,
                  scaleY: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: [0, 0.71, 0.2, 1.01] },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-row flex-wrap p-6 uppercase"
            >
              {skills.map((skill, index) => (
                <>
                  <li className="p-2">{skill}</li>
                  {index < skills.length - 1 && <span className="p-2">•</span>}
                </>
              ))}
            </motion.ul>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

function EngineeringSkills() {
  return (
    <ContentSectionContainer
      id={SECTION_REFS.SKILLS}
      bgColor="white"
      textColor="black"
    >
      <div className="col-span-12 md:col-start-2 md:col-span-9">
        <h1 className="pb-8">Skills</h1>
        <SkillSet
          skillSetOrder="01"
          title="Languages"
          skills={['TypeScript', 'Python', 'Java', 'SQL', 'Javascript', 'C#']}
          isActiveByDefault={true}
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

export default EngineeringSkills;
