import { useState } from 'react';
import { SECTION_REFS } from '../pageRefs';
import {
  AnimatePresence,
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useReducedMotionState } from '../context/ReducedMotionContext';

const ReducedMotionButton = () => {
  const { reducedMotion, setReducedMotion } = useReducedMotionState();
  return (
    <button
      className="text-primary bg-transparent border-none hover:text-secondary hover:bg-transparent hover:border-none"
      onClick={() => {
        const next = reducedMotion === 'always' ? 'user' : 'always';
        setReducedMotion(next);
      }}
      aria-label="Toggle reduced motion"
    >
      {reducedMotion === 'always' ? 'Motion On' : 'Motion Off'}
    </button>
  );
};

function Nav() {
  const [isUsingMobileDropdown, setIsUsingMobileDropdown] =
    useState<boolean>(false);

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
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      initial="hidden"
      animate={isNavHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.5, easeInOut }}
      className="fixed w-full z-30 flex items-center"
    >
      {/* Mobile Nav */}
      <div className="md:hidden flex flex-col w-full px-4 pt-4">
        <a href="#main" className="skip-to-main-content-link">
          Skip to main content
        </a>
        <div className="w-full flex content-center justify-between gap-8">
          <a href={'#' + SECTION_REFS.LANDING}>
            <img
              src="/assets/images/doodles/cat_on_laptop.svg"
              className="w-[50px] top-[35px] left-[185px] md:top-[40px] md:left-[460px] lg:top-[55px] lg:left-[560px]"
              width={5}
              alt=""
            />
          </a>
          <div className="flex content-center justify-end">
            <a
              aria-label="Click for drop down menu"
              className="group text-primary bg-transparent border-none"
              onClick={() => setIsUsingMobileDropdown(!isUsingMobileDropdown)}
            >
              <HamburgerIcon />
            </a>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {isUsingMobileDropdown && (
            <div className="overflow-hidden">
              <motion.ul
                className={`flex-col bg-background text-primary rounded-md h-auto place-self-end w-fit text-right mt-4 gap-4 text-bold uppercase tracking-widest text-sm p-4 px-10 `}
                initial={{ opacity: 0, y: '-100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-100%' }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <li className="py-2">
                  <a href={'#' + SECTION_REFS.INFO}>Info</a>
                </li>
                <li className="py-2">
                  <a href={'#' + SECTION_REFS.SKILLS}>Skills</a>
                </li>
                <li className="py-2">
                  <a href={'#' + SECTION_REFS.CONTACT}>Contact</a>
                </li>
              </motion.ul>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex w-full justify-between">
        <a href="#main" className="skip-to-main-content-link">
          Skip to main content
        </a>
        <div className="flex items-center p-8 h-[70px] gap-8">
          <a href={'#' + SECTION_REFS.LANDING}>
            <img
              src="/assets/images/doodles/cat_on_laptop.svg"
              className="w-[50px] top-[35px] left-[185px] md:top-[40px] md:left-[460px] lg:top-[55px] lg:left-[560px]"
              width={5}
              alt=""
            />
          </a>

          <ul className="flex h-[70px] px-16 gap-14 items-center text-bold text-primary uppercase tracking-widest text-md">
            <li>
              <a href={'#' + SECTION_REFS.INFO}>Info</a>
            </li>
            <li>
              <a href={'#' + SECTION_REFS.SKILLS}>Skills</a>
            </li>
            <li>
              <a href={'#' + SECTION_REFS.CONTACT}>Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-8 px-8">
          <ReducedMotionButton />
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
    </motion.nav>
  );
}

export default Nav;

const HamburgerIcon = () => {
  return (
    <svg
      width="41"
      height="38"
      viewBox="0 0 41 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.1668 9.5H17.0835M34.1668 19H6.8335M34.1668 28.5H23.9168"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
