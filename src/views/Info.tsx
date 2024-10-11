import SectionContainer from '../components/SectionContainer';

function Info() {
  return (
    <SectionContainer bgColor="black" textColor="white">
      <div className="grid grid-rows-auto">
        <div className="flex justify-center items-center flex-wrap md:flex-nowrap flex-col md:flex-row align-middle space-x-4 gap-8 py-10">
          <div className="bg-white rounded-full w-[125px] h-[250px] md:w-[250px] md:h-[500px] justify-center">
            {/* TODO add headshot here */}
          </div>
          <div className="col-span-2">
            <h2 className='tracking-wide py-5'>
              I’m a <span className='text-accent'>full-stack developer</span> with a focus on <span className='text-accent'>front-end and UX</span>.
            </h2>
            <div>
              <h2>Currently Building With</h2>
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
