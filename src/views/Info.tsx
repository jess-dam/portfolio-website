import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import { motion } from 'framer-motion';

interface ImageWithLabelContainerProps {
  children: JSX.Element | JSX.Element[];
}

const ImageWithLabelContainer = ({
  children,
}: ImageWithLabelContainerProps) => {
  return (
    <div className="grid auto-row content-between justify-items-center gap-2">
      {children}
    </div>
  );
};

const BuildTools = () => {
  return (
    <div className="py-10 flex flex-col items-center md:items-stretch">
      <h2 className="text-center md:text-left py-2">
        Currently Building Stuff With
      </h2>
      <motion.div
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 2,
          staggerChildren: 0.6,
          ease: 'circIn',
        }}
        className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-8 pt-4 max-w-[500px]"
      >
        <ImageWithLabelContainer>
          <img
            src="/assets/images/typescript.svg"
            alt="Typescript logo"
            width={60}
          />
          <label className="uppercase text-sm tracking-widest text-center">
            TypeScript
          </label>
        </ImageWithLabelContainer>
        <ImageWithLabelContainer>
          <img src="/assets/images/react.svg" alt="React logo" width={60} />
          <label className="uppercase text-sm tracking-widest text-center">
            React
          </label>
        </ImageWithLabelContainer>
        <ImageWithLabelContainer>
          <img src="/assets/images/next-js.svg" alt="Next.js logo" width={55} />
          <label className="uppercase text-sm tracking-widest text-center">
            Next
          </label>
        </ImageWithLabelContainer>
        <ImageWithLabelContainer>
          <img src="/assets/images/figma.svg" alt="Figma logo" width={40} />
          <label className="uppercase text-sm tracking-widest text-center">
            Figma
          </label>
        </ImageWithLabelContainer>
      </motion.div>
    </div>
  );
};

const Hobbies = () => {
  return (
    <div className="flex flex-col py-10 items-center md:items-stretch">
      <h2 className="text-center md:text-left">Hobbies</h2>
      <motion.div
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 2,
          staggerChildren: 0.6,
          ease: 'circIn',
        }}
        className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 pt-4 max-w-[500px]"
      >
        <ImageWithLabelContainer>
          <img src="/assets/images/doodles/art.svg" alt="" width={80} />
          <label className="uppercase text-sm tracking-widest text-center">
            Art
          </label>
        </ImageWithLabelContainer>
        <ImageWithLabelContainer>
          <img src="/assets/images/doodles/tkd.svg" alt="" width={80} />
          <label className="uppercase text-sm tracking-widest text-center">
            Taekwondo
          </label>
        </ImageWithLabelContainer>
        <ImageWithLabelContainer>
          <img
            src="/assets/images/doodles/boardgames.svg"
            alt=""
            width={60}
            className=""
          />
          <label className="uppercase text-sm tracking-widest text-center">
            Board Games
          </label>
        </ImageWithLabelContainer>
        <ImageWithLabelContainer>
          <img
            src="/assets/images/doodles/diy.svg"
            alt=""
            width={70}
            className="pb-6"
          />
          <label className="uppercase text-sm tracking-widest text-center">
            DIY
          </label>
        </ImageWithLabelContainer>
      </motion.div>
    </div>
  );
};

function Info() {
  return (
    <ContentSectionContainer
      id={SECTION_REFS.INFO}
      bgColor="white"
      textColor="black"
    >
      <div className="grid grid-rows-min pt-20 md:px-8 gap-12">
        <motion.h1
          className="text-[4rem] text-center p-10 md:p-0 md:text-[8rem] md:text-left leading-none h-fit self-end"
        >
          Hello!
        </motion.h1>
        <div className="flex justify-center items-center flex-wrap md:flex-nowrap flex-col md:flex-row align-middle space-x-4 gap-10 pb-10 h-fit">
          <div className="flex flex-col items-center gap-8">
            <div>
              <img
                src="/assets/images/headshot.jpg"
                alt="A picture of me"
                className="object-cover rounded-full shadow-inner w-[125px] h-[250px] md:w-[250px] md:h-[500px] justify-center"
              />
            </div>
            <div className="flex flex-nowrap items-center">
              <img
                src="/assets/images/location.svg"
                alt=""
                height={20}
                width={20}
              />
              <label
                className="px-8 font-bold tracking-widest uppercase"
                aria-label="The city I'm based in"
              >
                London, UK
              </label>
            </div>
          </div>

          <div className="col-span-2 flex flex-col justify-center content-start">
            <p className="tracking-wide pb-4 text-center md:text-left uppercase">
              I’m a{' '}
              <motion.span
                className="font-bold bg-secondary rounded-lg"
                initial={{ background: 0 }}
                whileInView={{ backgroundSize: '100%' }}
                transition={{ duration: 1, ease: 'easeIn', delay: 1 }}
              >
                full-stack software developer
              </motion.span>{' '}
              with a focus on{' '}
              <span className="font-bold bg-secondary rounded-lg">
                front-end and UX
              </span>
              .
            </p>
            <BuildTools />
            <Hobbies />
          </div>
        </div>
      </div>
    </ContentSectionContainer>
  );
}

export default Info;
