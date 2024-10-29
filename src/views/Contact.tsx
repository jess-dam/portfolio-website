import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import { motion } from 'framer-motion';

function Contact() {
  const linkedinUrl = 'https://www.linkedin.com/in/jess-dam-507485165/';
  const githubUrl = 'https://github.com/jess-dam';

  return (
    <ContentSectionContainer
      id={SECTION_REFS.CONTACT}
      bgColor="white"
      textColor="black"
    >
      <div className="relative flex flex-col w-full place-content-evenly md:place-content-center max-w-[1500px] md:min-w-[60vw] md:py-20 md:p-10">
        <div className="overflow-y-hidden">
          <motion.h1
            initial={{ opacity: 0, y: '-70%' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
            exit={{ opacity: 0 }}
            className="text-center md:text-left text-[3rem] md:text-[9rem] z-10 md:pb-20 "
          >
            Contact
          </motion.h1>
        </div>

        <div className="flex flex-col gap-20 px-8">
          <a
            href={githubUrl}
            className="flex w-fit gap-8 bg-primary justify-start content-center p-8 rounded-full hover:bg-black h-fit"
          >
            <img
              src="/assets/images/github.svg"
              alt="Redirects to Github profile"
              width={30}
            />
            <label className="uppercase tracking-widest text-xs md:text-sm">
              See what I've been working on
            </label>
          </a>

          <a
            href={linkedinUrl}
            className="flex w-fit gap-8 bg-primary justify-start content-center p-8 rounded-full hover:bg-black"
          >
            <img
              src="/assets/images/linkedin.svg"
              alt="Redirects to Linkedin profile"
              width={30}
            />
            <label className="uppercase tracking-widest text-xs md:text-sm">
              Let's Connect!
            </label>
          </a>
        </div>
      </div>
    </ContentSectionContainer>
  );
}

export default Contact;
