import { useState } from 'react';
import { SECTION_REFS } from '../pageRefs';
import { easeInOut, motion, useMotionValueEvent, useScroll } from 'framer-motion';

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
  })

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={isNavHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, easeInOut }}
      className="fixed w-full z-30 flex items-center text-white"
    >
      {/* Mobile Nav */}
      <div className="md:hidden flex flex-col w-full px-4 pt-4">
        <div className="w-full flex content-center justify-between gap-8">
          <a href={'#' + SECTION_REFS.LANDING} className="text-secondary">
            <h1 className="w-[50px] text-[1rem] text-center align-center p-4">
              Jess Dam
            </h1>
          </a>
          <div className="flex content-center justify-end bg-black rounded-b-[30px] rounded-l-[30px] p-2 px-6">
            <button
              aria-label="Click for drop down menu"
              className="bg-black"
              onClick={() => setIsUsingMobileDropdown(!isUsingMobileDropdown)}
            >
              <img src="/assets/images/hamburger_menu.svg" alt="" width={25} />
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
            <h1 className="w-[50px] text-[1rem] text-center text-secondary align-center">
              Jess Dam
            </h1>
          </a>
          <div className="flex h-[70px] px-16 gap-14 items-center text-bold uppercase tracking-widest text-md bg-black rounded-b-[50px]">
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
