import { SECTION_REFS } from "../pageRefs";

function Nav () {
    return (
        <div className='fixed flex flex-col p-6 gap-2 bottom-0 left-0 text-white text-bold uppercase tracking-[5px] text-md'>
            <a href={'#' + SECTION_REFS.INFO}>Info</a>
            <a href={'#' + SECTION_REFS.EXPERIENCE}>Experience</a>
            <a href={'#' + SECTION_REFS.SKILLS}>Skils</a>
            <a href={'#' + SECTION_REFS.CONTACT}>Contact</a>
        </div>
    );
}

export default Nav;