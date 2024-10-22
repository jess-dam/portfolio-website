import SectionContainer from '../components/SectionContainer';
import { SECTION_REFS } from '../pageRefs';

const SkillsCollection = ({ skills }: { skills: string[] }) => {
  return (
    <div className='flex flex-wrap gap-2'>
      { skills.map(skill => 
        <label className='h-fit bg-primary text-white shadow-md place-content-center uppercase font-semibold text-sm md:text-md tracking-[4px] p-2 px-4 rounded-full'>
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
      <div className="flex items-center bg-black p-2 py-40 max-w-[1500px] md:min-w-[60vw] ">
        <div className="grid auto-rows-min md:grid-cols-6 md:grid-rows-4 gap-2 h-fit">
          <div className="grid row-start-1 col-span-6 md:row-span-3 md:col-span-3 xl:col-span-4  bg-accent rounded-xl border-black p-6 gap-4">
            <h2>Strengths</h2>
            <SkillsCollection skills={strengths} />
            
            {/* Divider */}
            <hr className='flex justify-self-center mt-10 border-t border-gray-500 w-[80%]' />

            <h2>Soft Skills</h2>
            <SkillsCollection skills={softSkills} />

          </div>
          <div className="row-start-3 col-span-6 md:col-span-3 xl:col-span-2 md:row-span-3 bg-white rounded-xl border-black text-primary p-6">
            <h2 className='text-black'>Interested In</h2>
            <div className='grid grid-cols-2 grid-rows-2 h-full place-items-center py-8 gap-8 p-4 md:p-8'>
              <div className='flex flex-col items-center gap-4 text-xs md:text-sm'>
                <img src='/assets/images/doodles/ux.svg' alt='' width={100}/>
                <label className='uppercase text-sm tracking-widest text-center'>UX</label>
              </div>
              <div className='flex flex-col items-center gap-4'>
                <img src='/assets/images/doodles/apidesign.svg' alt='' width={100}/>
                <label className='uppercase text-sm tracking-widest text-center'>API Design</label>
              </div>
              <div className='flex flex-col items-center gap-4'>
                <img src='/assets/images/doodles/accessibility.svg' alt='' width={100} />
                <label className='uppercase text-sm tracking-widest text-center'>Accessibility</label>
              </div>
              <div className='flex flex-col items-center gap-4'>
                <img src='/assets/images/doodles/sustainability.svg' alt='' width={100} />
                <label className='uppercase text-sm tracking-widest text-center'>Sustainability</label>
              </div>
            </div>
          </div>
          <div className="h-fit row-start-2 col-span-6 md:row-span-1 bg-white rounded-xl border-black p-6 gap-4">
            <h2 className='mb-8'>Currently Growing In</h2>
            <SkillsCollection skills={growingSkills} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Skills;
