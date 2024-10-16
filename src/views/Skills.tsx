import SectionContainer from '../components/SectionContainer';
import { SECTION_REFS } from '../pageRefs';

const SkillsCollection = ({ skills }: { skills: string[] }) => {
  return (
    <div className='flex flex-wrap gap-2 p-4 px-4 md:px-10'>
      { skills.map(skill => 
        <label className='bg-primary text-white shadow-md place-content-center uppercase font-semibold text-sm md:text-md tracking-[4px] p-2 px-4 rounded-full'>
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
    <SectionContainer id={SECTION_REFS.SKILLS} bgColor="black" textColor="black">
      <div className="flex justify-center items-center bg-black p-2 pb-10 max-w-[1500px] md:min-w-[60vw]">
        <div className="grid grid-cols-6 grid-rows-5 py-5 md:px-5 gap-5 max-w-[95vw] h-auto">
          <div className="grid col-span-6 md:col-span-3 pb-10 row-span-6 bg-accent rounded-xl border-black">
            <h2 className="p-4 md:p-6">Strengths</h2>
            <SkillsCollection skills={strengths} />
            
            {/* Divider */}
            <hr className='flex justify-self-center mt-10 border-t border-gray-500 w-[80%]' />

            <h2 className='p-4 md:p-6'>Soft Skills</h2>
            <SkillsCollection skills={softSkills} />

          </div>
          <div className="col-span-6 md:col-span-3 row-span-3 bg-white rounded-xl border-black">
            <h2 className="p-4 md:p-6">Interested In</h2>
            <div className='flex flex-wrap content-start gap-8 p-4 md:p-8'>
              <div className='flex flex-col justify-center content-between gap-4'>
                <img src='/assets/images/doodles/ux.svg' alt='' width={100}/>
                <label className='uppercase text-sm tracking-widest text-center'>UX</label>
              </div>
              <div className='flex flex-col justify-center content-between gap-4'>
                <img src='/assets/images/doodles/apidesign.svg' alt='' width={100}/>
                <label className='uppercase text-sm tracking-widest text-center'>API Design</label>
              </div>
              <div className='flex flex-col justify-center content-between gap-4'>
                <img src='/assets/images/doodles/accessibility.svg' alt='' width={100} />
                <label className='uppercase text-sm tracking-widest text-center'>Accessibility</label>
              </div>
              <div className='flex flex-col justify-center content-between gap-4'>
                <img src='/assets/images/doodles/sustainability.svg' alt='' width={100} />
                <label className='uppercase text-sm tracking-widest text-center'>Sustainability</label>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 row-span-3 bg-white rounded-xl border-black">
            <h2 className="bottom-0 right-0 p-4 md:p-6">Currently Growing In</h2>
            <SkillsCollection skills={growingSkills} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Skills;
