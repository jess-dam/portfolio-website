import SectionContainer from '../components/SectionContainer';

function Info() {
  return (
    <SectionContainer bgColor="white" textColor="black">
      <div className="grid grid-rows-auto">
        <div className="flex justify-center items-center flex-wrap md:flex-nowrap flex-col md:flex-row align-middle space-x-4 gap-8 py-10">
          <div className="bg-black rounded-full w-[125px] h-[250px] md:w-[250px] md:h-[500px] justify-center">
            {/* TODO add headshot here */}
          </div>
          <div className="col-span-2">
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
