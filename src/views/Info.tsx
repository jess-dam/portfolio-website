import SectionContainer from '../components/SectionContainer';

function Info() {
  return (
    <SectionContainer bgColor="black" textColor="white">
      <div className="grid grid-rows-auto">
        <div className="flex justify-center items-center flex-wrap md:flex-nowrap flex-col md:flex-row align-middle space-x-4 gap-8 py-10">
          <div className='flex flex-col items-center gap-8'>
            {/* TODO add headshot here */}
            <div className='bg-white rounded-full w-[125px] h-[250px] md:w-[250px] md:h-[500px] justify-center' />
            <div className='flex flex-nowrap items-center'>
              <img src='assets/icons/location.svg' alt='thing' height={20} width={20}/>
              <label className='px-8 font-bold tracking-widest uppercase' aria-label="The city I'm based in">London, UK</label>
            </div>
          </div>

          <div className="col-span-2 flex flex-col justify-center">
            <h2 className='tracking-wide py-5'>
            Hi 👋, I’m a <span className='text-accent'>full-stack developer</span> with a focus on <span className='text-accent'>front-end and UX</span>.
            </h2>
            <div className='py-8'>
              <h2 className='py-4'>Currently Building Stuff With</h2>
              <div className='flex gap-8'>
                <img src='assets/tools/typescript.svg' alt='TypeScript' height={40} width={40}/>
                <img src='assets/tools/react.svg' alt='React.js' height={40} width={40}/>
                <img src='assets/tools/next-js.svg' alt='Next.js' height={40} width={40}/>
                <img src='assets/tools/figma.svg' alt='Figma' height={30} width={30}/>
              </div>
            </div>
            <div>
              <h2>Hobbies</h2>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Info;
