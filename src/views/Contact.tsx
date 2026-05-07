import { motion } from 'framer-motion';
import ContentSectionContainer from '../components/ContentSectionContainer';
import { SECTION_REFS } from '../pageRefs';
import { useReducedMotionState } from '../context/ReducedMotionContext';

const TopRightArrow = () => {
  return (
    <svg
      className="hover:text-accent fill-current"
      width={50}
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 34L34 14M34 14H14M34 14V34"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const GithubIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="self-center"
    >
      <g clip-path="url(#clip0_2027_16975)">
        <path
          d="M7.12516 15.0417C3.16683 16.2292 3.16683 13.0626 1.5835 12.6667M12.6668 17.4167V14.353C12.6965 13.9755 12.6455 13.596 12.5172 13.2397C12.3889 12.8835 12.1862 12.5586 11.9227 12.2867C14.4085 12.0096 17.021 11.0676 17.021 6.74505C17.0208 5.63975 16.5956 4.57683 15.8335 3.7763C16.1944 2.80929 16.1689 1.74041 15.7622 0.791719C15.7622 0.791719 14.8281 0.514636 12.6668 1.96339C10.8523 1.47162 8.93966 1.47162 7.12516 1.96339C4.96391 0.514636 4.02975 0.791719 4.02975 0.791719C3.62313 1.74041 3.59761 2.80929 3.9585 3.7763C3.19068 4.58277 2.76508 5.65529 2.771 6.7688C2.771 11.0596 5.3835 12.0017 7.86933 12.3105C7.60887 12.5796 7.408 12.9006 7.27978 13.2525C7.15157 13.6044 7.09889 13.9794 7.12516 14.353V17.4167"
          stroke="currentColor"
          stroke-width="1.98823"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2027_16975">
          <rect width="19" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const LinkedInIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="self-center"
    >
      <path
        d="M15.9059 7.95298C17.4878 7.95298 19.005 8.5814 20.1236 9.7C21.2422 10.8186 21.8706 12.3357 21.8706 13.9177V20.8765H17.8941V13.9177C17.8941 13.3904 17.6847 12.8846 17.3118 12.5118C16.9389 12.1389 16.4332 11.9294 15.9059 11.9294C15.3786 11.9294 14.8729 12.1389 14.5 12.5118C14.1271 12.8846 13.9177 13.3904 13.9177 13.9177V20.8765H9.94121V13.9177C9.94121 12.3357 10.5696 10.8186 11.6882 9.7C12.8068 8.5814 14.324 7.95298 15.9059 7.95298Z"
        stroke="currentColor"
        stroke-width="1.52516"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.96474 8.94709H1.98828V20.8765H5.96474V8.94709Z"
        stroke="currentColor"
        stroke-width="1.52516"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.97651 5.96474C5.07458 5.96474 5.96474 5.07458 5.96474 3.97651C5.96474 2.87844 5.07458 1.98828 3.97651 1.98828C2.87844 1.98828 1.98828 2.87844 1.98828 3.97651C1.98828 5.07458 2.87844 5.96474 3.97651 5.96474Z"
        stroke="currentColor"
        stroke-width="1.52516"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

function Contact() {
  const linkedinUrl = 'https://www.linkedin.com/in/jess-dam-507485165/';
  const githubUrl = 'https://github.com/jess-dam';

  return (
    <ContentSectionContainer
      id={SECTION_REFS.CONTACT}
      bgColor="white"
      textColor="black"
    >
      <div className="col-span-12 md:col-start-2 md:col-span-9 relative flex flex-col w-full place-content-evenly md:place-content-center">
        <div className="">
          <h1 className="text-left text-[3rem] md:text-[4rem] lg:text-[6rem] z-10 md:pb-20 ">
            Contact
          </h1>
          <img
            src="/assets/images/doodles/cat_on_laptop_red.svg"
            width={100}
            alt="cat mascot typing rapidly on a laptop"
            className="absolute top-16 right-0 z-20 w-[80px] md:left-[520px] md:top-20 md:w-[150px] rotate-[0.342rad]"
          />
        </div>

        <div className="flex flex-col gap-10">
          <ContactButton
            label="See what I've been working on"
            redirectLink={githubUrl}
          >
            <GithubIcon />
          </ContactButton>

          <ContactButton label="Let's Connect!" redirectLink={linkedinUrl}>
            <LinkedInIcon />
          </ContactButton>
        </div>
      </div>
    </ContentSectionContainer>
  );
}

interface ContactButtonProps {
  redirectLink: string;
  label: string;
  children: React.ReactElement;
}

const ContactButton = ({
  redirectLink,
  label,
  children,
}: ContactButtonProps) => {
  const { shouldReduceMotion } = useReducedMotionState();
  return (
    <motion.a
      href={redirectLink}
      className="flex w-fit gap-8 border justify-start content-center p-8 rounded-full h-fit"
      // colours input manually to handle color transition
      style={{
        backgroundColor: '#C1E3FE',
        color: '#274029',
        borderColor: '#274029',
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              backgroundColor: '#274029',
              color: '#C1E3FE',
              borderColor: '#274029',
            }
      }
      transition={{ duration: 0.2, ease: 'circIn' }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
    >
      <label className="flex items-center uppercase tracking-widest text-xs md:text-sm cursor-pointer">
        {label}
      </label>
      {children}
      <TopRightArrow />
    </motion.a>
  );
};

export default Contact;
