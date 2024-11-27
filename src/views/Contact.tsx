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
            className="text-center md:text-left text-[3rem] md:text-[6rem] lg:text-[9rem] z-10 md:pb-20 "
          >
            Contact
          </motion.h1>
        </div>

        <div className="flex flex-col gap-10 px-8">
          <ContactButton
            label="See what I've been working on"
            redirectLink={githubUrl}
            icon={{
              src: '/assets/images/github-black.svg',
              altTag: 'Redirects to GitHub profile',
            }}
          />

          <ContactButton
            label="Let's Connect!"
            redirectLink={linkedinUrl}
            icon={{
              src: '/assets/images/linkedin-black.svg',
              altTag: 'Redirects to LinkedIn profile',
            }}
          />
        </div>
      </div>
    </ContentSectionContainer>
  );
}

interface ContactButtonProps {
  redirectLink: string;
  label: string;
  icon?: { src: string; altTag: string };
}

const ContactButton = ({ redirectLink, label, icon }: ContactButtonProps) => {
  return (
    <a
      href={redirectLink}
      className="flex w-fit gap-8 border border-black text-black bg-secondary justify-start content-center p-8 rounded-full hover:bg-black h-fit"
    >
      <img src={icon?.src} alt={icon?.altTag} width={30} />
      <label className="flex items-center uppercase tracking-widest text-xs md:text-sm">
        {label}
      </label>
      <TopRightArrow />
    </a>
  );
};

const TopRightArrow = () => {
  return (
    <svg
      className="hover:text-secondary fill-current"
      width={50}
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 34L34 14M34 14H14M34 14V34"
        stroke="#000000"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Contact;
