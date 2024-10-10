import SectionContainer from "../components/SectionContainer";

function Skills() {
    return (
        <SectionContainer bgColor='black' textColor='black'>
            <div className='flex justify-center items-center bg-black p-2'>
                <div className='grid grid-cols-5 grid-rows-5 p-5 gap-5 max-w-[95vw] h-auto'>
                    <div className='col-span-2 row-span-6 bg-accent rounded-xl border-black'> 
                        <h2 className='p-10 pb-20'>Strengths</h2>
                    </div>
                    <div className='col-span-3 row-span-3 bg-white rounded-xl border-black'> 
                        <h2 className='p-10 pb-20'>Interested In</h2>
                    </div>
                    <div className='grid col-span-3 row-span-3 bg-white rounded-xl border-black'> 
                        <h2 className='bottom-0 right-0 text-right p-10 pb-20'>Hobbies</h2>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Skills;