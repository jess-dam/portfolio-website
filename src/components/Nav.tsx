import { useState } from "react";
import { SECTION_REFS } from "../pageRefs";

function Nav () {
    const [isMobileDropdownHidden, setIsMobileDropdownHidden] = useState<boolean>(true);

    return (
        <div className='fixed z-30 flex items-center px-4 top-4 md:top-10 md:left-10 text-white'>
            {/* Movile Nav */}
            <div className='md:hidden flex flex-col content-center justify-end'>
                <div className='flex content-center justify-between bg-black bg-opacity-30 h-[60px] w-[90vw] p-4 px-6 rounded-full'>
                    <a href={'#' + SECTION_REFS.LANDING}>
                        <h1 className='w-[50px] text-[1rem] text-center align-center'>Jess Dam</h1>
                    </a>
                    <button onClick={() => setIsMobileDropdownHidden(!isMobileDropdownHidden)}><img src='/assets/images/hamburger_menu.svg' alt='' width={25}/></button>
                </div>
                <div className={`${isMobileDropdownHidden ? 'hidden' : ''} flex flex-col justify-end text-right text-md mt-4 gap-4 text-bold uppercase tracking-widest text-sm bg-black bg-opacity-30 p-4 rounded-lg`}>
                    <a href={'#' + SECTION_REFS.INFO}>Info</a>
                    <a href={'#' + SECTION_REFS.EXPERIENCE}>Experience</a>
                    <a href={'#' + SECTION_REFS.SKILLS}>Skills</a>
                    <a href={'#' + SECTION_REFS.CONTACT}>Contact</a>
                </div>
            </div>

            {/* Desktop Nav */}
            <div className='hidden md:flex gap-6'>
                <div className='flex items-center p-4 px-8 h-[70px] bg-black bg-opacity-30 rounded-full'>
                    <a href={'#' + SECTION_REFS.LANDING}>
                        <h1 className='w-[50px] text-[1rem] text-center align-center'>Jess Dam</h1>
                    </a>
                </div>
                <div className='flex h-[70px] p-6 gap-10 text-bold uppercase tracking-widest text-md  bg-black bg-opacity-30 rounded-full'>
                    <a href={'#' + SECTION_REFS.INFO}>Info</a>
                    <a href={'#' + SECTION_REFS.EXPERIENCE}>Experience</a>
                    <a href={'#' + SECTION_REFS.SKILLS}>Skills</a>
                    <a href={'#' + SECTION_REFS.CONTACT}>Contact</a>
                </div>
            </div>
            
        </div>
    );
}

export default Nav;