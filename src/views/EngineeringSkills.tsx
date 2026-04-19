import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValue,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface SkillSetProps {
  skillSetOrder: string;
  title: string;
  skills: string[];
  isExpanded: boolean;
}

const SkillSet = ({
  skillSetOrder,
  title,
  skills,
  isExpanded,
}: SkillSetProps) => {
  return (
    <div className="border border-t-2 border-b-0 border-r-0 border-l-0 border-secondary p-2 py-4">
      <h1 className="text-secondary text-2xl md:text-4xl">
        {skillSetOrder}
        <span className="font-homemade-apple text-primary">{title}</span>
      </h1>
      <div className="overflow-hidden">
        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex flex-row flex-wrap p-6 uppercase"
            >
              {skills.map((skill, index) => (
                <>
                  <li className="p-2">{skill}</li>
                  {index < skills.length - 1 && <span className="p-2">•</span>}
                </>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

function EngineeringSkills() {
  // animation
  const skillsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skillsRef,
  });
  const motion = useMotionValue(scrollYProgress);

  const [activeSkillSet, setActiveSkillSet] = useState(0);

  useEffect(() => {
    console.log('scroll', scrollYProgress);
    console.log('motion', motion);
    let progress = (scrollYProgress.get() / 
    // setActiveSkillSet();
  }, [scrollYProgress, useMotionValue]);

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
          isExpanded={true}
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
          isExpanded={false}
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
          isExpanded={false}
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
          isExpanded={false}
        />
        <SkillSet
          skillSetOrder="05"
          title="AI Tooling"
          skills={['Claude Code', 'Codex']}
          isExpanded={false}
        />
      </div>
    </ContentSectionContainer>
  );
}

export default EngineeringSkills;
