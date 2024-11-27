import ContentSectionContainer from '../components/ContentSectionContainer';
import { ImageWithLabelContainer } from '../components/ImageWIthLabelContainer';

function Interests() {
  return (
    <ContentSectionContainer>
      <div className="flex flex-col gap-10">
        <h3 className="flex justify-center p-10">Interests</h3>
        <ul className="grid grid-cols-2 grid-rows-2 w-[85vw] h-[50vh] md:grid-cols-4 md:grid-rows-1 gap-6 md:gap-20 pt-4 font-semibold uppercase tracking-widest">
          <li>
            <ImageWithLabelContainer>
              <img
                src="/assets/images/doodles/ux.svg"
                alt="illustration representing UX"
                width={70}
                className="max-w-fit"
              />
              <caption>UX</caption>
            </ImageWithLabelContainer>
          </li>
          <li>
            <ImageWithLabelContainer>
              <img
                src="/assets/images/doodles/accessibility.svg"
                alt="illustration representing accessibility"
                width={80}
                className="max-w-fit"
              />
              <caption>Accessibility</caption>
            </ImageWithLabelContainer>
          </li>
          <li>
            <ImageWithLabelContainer>
              <img
                src="/assets/images/doodles/apidesign.svg"
                alt="illustration representing API design"
                width={70}
                className="max-w-fit"
              />
              <caption>API Design</caption>
            </ImageWithLabelContainer>
          </li>
          <li>
            <ImageWithLabelContainer>
              <img
                src="/assets/images/doodles/sustainability.svg"
                alt="illustration representing sustainabiity"
                width={70}
                className="max-w-fit"
              />
              <caption>Sustainability</caption>
            </ImageWithLabelContainer>
          </li>
        </ul>
      </div>
    </ContentSectionContainer>
  );
}

export default Interests;
