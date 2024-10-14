import { SECTION_REFS } from "../pageRefs";

function Nav () {
    return (
        <div className='fixed z-30 flex items-center p-2 px-10 gap-8 top-10 left-10 text-white'>
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
    );
}

export default Nav;