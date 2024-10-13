import SectionContainer from '../components/SectionContainer';
import { SECTION_REFS } from '../pageRefs';


const BuildTools = () => {
  return (
    <>
      <h2 className='tracking-wide py-5'>
      Hi 👋, I’m a <span className='text-accent'>full-stack developer</span> with a focus on <span className='text-accent'>front-end and UX</span>.
      </h2>
      <div className='py-10 flex flex-col'>
        <h2>Currently Building Stuff With</h2>
        <div className='flex flex-wrap gap-12 pt-10'>
          <img src='assets/images/typescript.svg' alt='TypeScript' height={60} width={60}/>
          <img src='assets/images/react.svg' alt='React.js' height={60} width={60}/>
          <img src='assets/images/next-js.svg' alt='Next.js' height={60} width={60}/>
          <img src='assets/images/figma.svg' alt='Figma' height={40} width={40}/>
        </div>
      </div>
    </>
  );
}

const Hobbies = () => {
  return (
    <div className='py-10'>
      <h2>Hobbies</h2>
      <div className='flex flex-wrap gap-10 pt-4'>
        <div className='flex flex-col justify-center content-between gap-4'>
          <img src='assets/images/doodles/tkd.svg' width={120}/>
          <label className='uppercase text-sm tracking-widest text-center'>Taekwondo</label>
        </div>
        <div className='flex flex-col justify-center content-between gap-4'>
          <img src='assets/images/doodles/art.svg' width={120}/>
          <label className='uppercase text-sm tracking-widest text-center'>Art</label>
        </div>
        <div className='flex flex-col justify-center content-between gap-4'>
          <img src='assets/images/doodles/boardgames.svg' width={100} className='pb-4' />
          <label className='uppercase text-sm tracking-widest text-center'>Board Games</label>
        </div>
        <div className='flex flex-col justify-center content-between gap-4'>
          <img src='public/assets/images/doodles/diy.svg' width={80} className='pb-8'/>
          <label className='uppercase text-sm tracking-widest text-center'>DIY</label>
        </div>
      </div>
    </div>
  );
}



function Info() {
  return (
    <SectionContainer id={SECTION_REFS.INFO} bgColor="black" textColor="white">
      <div className="grid grid-rows-auto">
        <div className="flex justify-center items-center flex-wrap md:flex-nowrap flex-col md:flex-row align-middle space-x-4 gap-10 py-10">
          <div className='flex flex-col items-center gap-8'>
            <div>
              <img src='public/assets/images/headshot.jpg' className='object-cover rounded-full shadow-inner w-[125px] h-[250px] md:w-[250px] md:h-[500px] justify-center'/>
            </div>
            <div className='flex flex-nowrap items-center'>
              <img src='assets/images/location.svg' alt='thing' height={20} width={20}/>
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
