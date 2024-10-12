import SectionContainer from '../components/SectionContainer';

const SkillsCollection = ({ skills }: { skills: string[] }) => {
  return (
    <div className='flex flex-wrap gap-2 p-4 px-4 md:px-10'>
      { skills.map(skill => 
        <label className='bg-primary text-white uppercase font-semibold text-sm md:text-md tracking-[4px] p-2 px-4 rounded-full'>
          {skill}
        </label>
      )}
    </div>
  );
}

function Skills() {
  const strengths = ['TypeScript', 'React.js', 'Next.js', 'Tailwind', 'Java', 'Postgresql', 'Python', 'Storybook'];
  const softSkills = ['User Research', 'Pair Programming', 'Design', 'Curiousity', 'Proactivity'];
  const growingSkills = ['Figma', 'Communicating Design Ideas', 'Designing for Accessibility'];

  return (
    <SectionContainer bgColor="black" textColor="black">
      <div className="flex justify-center items-center bg-black p-2">
        <div className="grid grid-cols-6 grid-rows-5 py-5 md:px-5 gap-5 max-w-[95vw] h-auto">
          <div className="grid col-span-6 md:col-span-3 pb-10 row-span-6 bg-accent rounded-xl border-black">
            <h2 className="p-4 md:p-8">Strengths</h2>
            <SkillsCollection skills={strengths} />
            
            {/* Divider */}
            <hr className='flex justify-self-center mt-10 border-t border-gray-500 w-[80%]' />

            <h2 className='p-4 md:p-8'>Soft Skills</h2>
            <SkillsCollection skills={softSkills} />

          </div>
          <div className="col-span-6 md:col-span-3 row-span-3 bg-white rounded-xl border-black">
            <h2 className="p-4 md:p-8">Interested In</h2>
          </div>
          <div className="col-span-6 md:col-span-3 row-span-3 bg-white rounded-xl border-black">
            <h2 className="bottom-0 right-0 text-right p-4 md:p-8">Currently Growing</h2>
            <SkillsCollection skills={growingSkills} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Skills;
