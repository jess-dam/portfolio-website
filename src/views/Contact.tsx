import SectionContainer from '../components/SectionContainer';

function Contact() {
  return (
    <SectionContainer bgColor="white" textColor="black">
      <div className="grid">
        <div className="flex items-center justify-center z-0">
          <div className="flex col-span-1 bg-primary items-center justify-center w-[250px] h-[105px] md:w-[400px] md:h-[200px] rounded-full shadow-inner"></div>
        </div>
        <h1 className="bottom-0 climate-crisis z-10 text-[4rem] md:text-[10rem]">
          contact
        </h1>
      </div>
    </SectionContainer>
  );
}

export default Contact;
