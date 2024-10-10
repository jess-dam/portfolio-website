import SectionContainer from "../components/SectionContainer";

function Info() {
    return (
        <SectionContainer bgColor='white' textColor='black'>
            <div className='grid grid-rows-auto'>
            <div className='top-0 border border-black w-screen h-[50px]'></div>

            <div className='flex justify-center items-center flex-wrap md:flex-nowrap flex-col md:flex-row align-middle space-x-4 gap-8 py-10'>
                <div className='bg-black rounded-full w-[125px] h-[250px] md:w-[250px] md:h-[500px] justify-center'>
                    {/* TODO add headshot here */}
                </div>
                <div className='col-span-2'>
                    {/* <h2 className='pb-10 text-secondary text-center md:text-left'>Info</h2> */}
                    <p className='pb-5 px-4 font-bold uppercase text-2xl pr-4 max-w-[600px]'><span className='text-secondary'>I’m a full stack developer with skills in UX.</span> Whether it’s designing inclusive user interfaces or enhancing back-end functionality, I love the challenge of creating solutions that are both elegant and impactful.</p>
                </div>
            </div>

        </div>
        </SectionContainer>
        
    )
}

export default Info;