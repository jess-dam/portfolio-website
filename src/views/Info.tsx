import SectionContainer from '../components/SectionContainer';
import { SECTION_REFS } from '../pageRefs';


const BuildTools = () => {
  return (
    <>
      <h2 className='tracking-wide py-5 text-center md:text-left'>
      Hi 👋, I’m a <span className='text-accent'>full-stack developer</span> with a focus on <span className='text-accent'>front-end and UX</span>.
      </h2>
      <div className='py-10 flex flex-col'>
        <h2 className='text-center md:text-left'>Currently Building Stuff With</h2>
        <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 max-w-[500px] gap-8 pt-10 md:pl-8 justify-items-center'>
          <img src='/assets/images/typescript.svg' alt='TypeScript' height={60} width={60}/>
          <img src='/assets/images/react.svg' alt='React.js' height={60} width={60}/>
          <img src='/assets/images/next-js.svg' alt='Next.js' height={60} width={60}/>
          <img src='/assets/images/figma.svg' alt='Figma' height={40} width={40}/>
        </div>
      </div>
    </>
  );
}

const Hobbies = () => {
  return (
    <div className='py-10'>
      <h2 className='text-center md:text-left'>Hobbies</h2>
      <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-8 pt-4 max-w-[500px]'>
        <div className='flex flex-col items-center gap-4'>
          <img src='/assets/images/doodles/art.svg' alt='' width={80}/>
          <label className='uppercase text-sm tracking-widest text-center'>Art</label>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <img src='/assets/images/doodles/tkd.svg' alt='' width={80}/>
          <label className='uppercase text-sm tracking-widest text-center'>Taekwondo</label>
        </div>
        <div className='flex flex-col items-center'>
          <img src='/assets/images/doodles/boardgames.svg' alt='' width={60} className='pb-8' />
          <label className='uppercase text-sm tracking-widest text-center'>Board Games</label>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <img src='/assets/images/doodles/diy.svg' alt='' width={50} className='pb-8'/>
          <label className='uppercase text-sm tracking-widest text-center'>DIY</label>
        </div>
      </div>
    </div>
  );
}



function Info() {
  return (
    <SectionContainer id={SECTION_REFS.INFO} bgColor="black" textColor="white">
      <div className="grid grid-rows-auto md:px-8">
        <div className="flex justify-center items-center flex-wrap md:flex-nowrap flex-col md:flex-row align-middle space-x-4 gap-10 py-10">
          <div className='flex flex-col items-center gap-8'>
            <div>
              <img src='/assets/images/headshot.jpg' alt='A picture of me' className='object-cover rounded-full shadow-inner w-[125px] h-[250px] md:w-[250px] md:h-[500px] justify-center'/>
            </div>
            <div className='flex flex-nowrap items-center'>
              <img src='/assets/images/location.svg' alt='' height={20} width={20}/>
              <label className='px-8 font-bold tracking-widest uppercase' aria-label="The city I'm based in">London, UK</label>
            </div>
          </div>

          <div className="col-span-2 flex flex-col justify-center">
            <BuildTools />
            <Hobbies />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Info;
