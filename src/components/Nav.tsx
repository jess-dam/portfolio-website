import { useState } from 'react';
import { SECTION_REFS } from '../pageRefs';
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';

function Nav() {
  const [isUsingMobileDropdown, setIsUsingMobileDropdown] =
    useState<boolean>(true);

  const [isNavHidden, setIsNavHidden] = useState<boolean>(false);

  const linkedinUrl = 'https://www.linkedin.com/in/jess-dam-507485165/';
  const githubUrl = 'https://github.com/jess-dam';

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Compare the previous y coordinates to the current ones to check if
    // the user is scrolling up the page
    const previous = scrollY.getPrevious();
    if (previous && previous < latest) {
      setIsNavHidden(true);
    } else {
      setIsNavHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      initial="hidden"
      animate={isNavHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.5, easeInOut }}
      className="fixed w-full z-30 flex items-center mix-blend-color-screen"
    >
      {/* Mobile Nav */}
      <div className="md:hidden flex flex-col w-full px-4 pt-4">
        <div className="w-full flex content-center justify-between gap-8">
          <a href={'#' + SECTION_REFS.LANDING} className="text-primary">
            <h1 className="w-[50px] text-[1rem] text-center align-center p-4">
              Jess Dam
            </h1>
          </a>
          <div className="flex content-center justify-end p-2 px-4">
            <button
              aria-label="Click for drop down menu"
              className=""
              onClick={() => setIsUsingMobileDropdown(!isUsingMobileDropdown)}
            >
              <HamburgerSVG />
            </button>
          </div>
        </div>
        <div
          className={`${isUsingMobileDropdown ? 'hidden' : 'flex'} flex-col place-self-end w-[50vw] text-right mt-4 gap-4 text-bold uppercase tracking-widest text-sm bg-black p-4 rounded-xl`}
        >
          <a href={'#' + SECTION_REFS.INFO}>Info</a>
          <a href={'#' + SECTION_REFS.EXPERIENCE}>Experience</a>
          <a href={'#' + SECTION_REFS.SKILLS}>Skills</a>
          <a href={'#' + SECTION_REFS.CONTACT}>Contact</a>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex w-full justify-between">
        <div className="flex items-center p-8 h-[70px] gap-8">
          <a href={'#' + SECTION_REFS.LANDING}>
            <h1 className="w-[50px] text-[1rem] text-center text-primary align-center">
              Jess Dam
            </h1>
          </a>
          <div className="flex h-[70px] px-16 gap-14 items-center text-bold text-black uppercase tracking-widest text-md">
            <a href={'#' + SECTION_REFS.INFO}>Info</a>
            <a href={'#' + SECTION_REFS.EXPERIENCE}>Experience</a>
            <a href={'#' + SECTION_REFS.SKILLS}>Skills</a>
            <a href={'#' + SECTION_REFS.CONTACT}>Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-8 px-8">
          <a href={linkedinUrl} className="flex col-span-1 justify-center">
            <img
              src="/assets/images/linkedin.svg"
              alt="Redirects to Linkedin profile"
              width={20}
            />
          </a>

          <a href={githubUrl} className="flex col-span-1 justify-center">
            <img
              src="/assets/images/github.svg"
              alt="Redirects to Github profile"
              width={20}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Nav;

const HamburgerSVG = () => {
  return (
    <svg
      className="mix-blend-color-screen"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.875 15.5H27.125M3.875 7.75H27.125M3.875 23.25H27.125"
        stroke="#1E1E1E"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
