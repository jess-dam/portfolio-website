function Info() {
    return (
        <div className='h-screen w-full flex flex-col items-center justify-center bg-white text-black p-8'>
            <div className='grid grid-cols-3 space-x-4 justify-items-center'>
                <div className='bg-black rounded-full w-[250px] h-[500px]'>
                    <img></img>
                </div>
                <div className='col-span-2'>
                    <h2 className='pb-20 text-secondary'>Info</h2>
                    <p className='pb-5 font-bold uppercase text-2xl pr-4'><span className='text-secondary'>I’m a full stack developer with skills in UX.</span>Whether it’s designing inclusive user interfaces or enhancing back-end functionality, I love the challenge of creating solutions that are both elegant and impactful.</p>
                </div>
            </div>

            <div className='grid grid-cols-3'>

            </div>
        </div>
    )
}

export default Info;