import SectionContainer from '../components/SectionContainer';
import { SECTION_REFS } from '../pageRefs';

function Contact() {
  const linkedinUrl = 'https://www.linkedin.com/in/jess-dam-507485165/';
  const githubUrl = 'https://github.com/jess-dam';

  return (
    <SectionContainer id={SECTION_REFS.CONTACT} bgColor="white" textColor="black">
      <div className="flex flex-col w-full place-content-evenly md:place-content-center">
        <h1 className="text-center md:text-left climate-crisis z-10 text-[15vw] pb-5 md:py-20 md:p-10">
          contact
        </h1>
        <div className="flex flex-col md:justify-start px-4 md:pl-10 z-0 gap-10">
          <div className='flex items-center flex-col md:flex-row gap-6'>
            <a href={linkedinUrl} title='Redirect to Linkedin profile' className="flex col-span-1 bg-primary justify-center w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full shadow-inner">
              <img src='/assets/images/linkedin.svg' alt='' width={30}/>
            </a>
            <h2 className='text-center md:text-left content-center'>Let's Connect!</h2>
          </div>
          <div className='flex items-center flex-col md:flex-row gap-6'>
            <a href={githubUrl} title='Redirect to Github profile' className="flex col-span-1 bg-primary justify-center w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full shadow-inner">
              <img src='/assets/images/github.svg' alt='' width={30}/>
            </a>
            <h2 className='text-center md:text-left content-center'>See what I've been working on</h2>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Contact;
