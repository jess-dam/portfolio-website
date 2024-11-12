import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import { AnimatePresence, motion } from 'framer-motion';

const BuildTools = () => {
  return (
    <div className="py-10 flex flex-col items-center md:items-stretch">
      <h2 className="text-center md:text-left">
        Currently Building Stuff With
      </h2>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 2,
            staggerChildren: 0.6,
            ease: 'circIn',
          }}
          className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 max-w-[500px] gap-16 md:gap-8 pt-10 justify-items-center"
        >
          <img
            src="/assets/images/typescript.svg"
            alt="TypeScript"
            height={60}
            width={60}
          />
          <img
            src="/assets/images/react.svg"
            alt="React.js"
            height={60}
            width={60}
          />
          <img
            src="/assets/images/next-js.svg"
            alt="Next.js"
            height={60}
            width={60}
          />
          <img
            src="/assets/images/figma.svg"
            alt="Figma"
            height={40}
            width={40}
          />
        </motion.div>
      </AnimatePresence>
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
        className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-8 pt-4 max-w-[500px]"
      >
        <div className="flex flex-col items-center gap-4">
          <img src="/assets/images/doodles/art.svg" alt="" width={80} />
          <label className="uppercase text-sm tracking-widest text-center">
            Art
          </label>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img src="/assets/images/doodles/tkd.svg" alt="" width={80} />
          <label className="uppercase text-sm tracking-widest text-center">
            Taekwondo
          </label>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/assets/images/doodles/boardgames.svg"
            alt=""
            width={60}
            className="pb-8"
          />
          <label className="uppercase text-sm tracking-widest text-center">
            Board Games
          </label>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src="/assets/images/doodles/diy.svg"
            alt=""
            width={50}
            className="pb-6"
          />
          <label className="uppercase text-sm tracking-widest text-center">
            DIY
          </label>
        </div>
      </motion.div>
    </div>
  );
};

function Info() {
  // const [headlineRef, headlineAnimate] = useAnimate();
  // const headlineInView = useInView(headlineRef);

  // useEffect(() => {

  // }, [headlineInView]);

  return (
    <ContentSectionContainer
      id={SECTION_REFS.INFO}
      bgColor="black"
      textColor="white"
    >
      <div className="grid grid-rows-auto md:px-8">
        <div className="flex justify-center items-center flex-wrap md:flex-nowrap flex-col md:flex-row align-middle space-x-4 gap-10 py-10">
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

          <div className="col-span-2 flex flex-col justify-center">
            <motion.p className="tracking-wide py-5 text-center md:text-left uppercase">
              Hi 👋, I’m a{' '}
              <span className="font-bold">full-stack developer</span> with a
              focus on <span className="font-bold">front-end and UX</span>.
            </motion.p>
            <BuildTools />
            <Hobbies />
          </div>
        </div>
      </div>
    </ContentSectionContainer>
  );
}

export default Info;
