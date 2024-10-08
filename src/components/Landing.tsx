import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

function Landing() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });
    const backdropY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
    const isInView = useInView(ref, {
        amount: 'all'
    });
    
    return (
        <motion.div ref={ref} className='h-screen w-full overflow-hidden relative flex flex-col items-center justify-center bg-white text-black'>
            <div className='flex flex-wrap items-center overflow-hidden w-[500px]'>
                <h3 className='text-primary p-5 text-sm'>Hello, my name is</h3>
                <motion.h1 className='flex flex-wrap font-climate-crisis relative text-[10rem] text-center' style={{ y:textY }}>Jess Dam</motion.h1>
            </div>
        </motion.div>
    )
}

export default Landing;