import { motion } from 'framer-motion';

interface AnimatedElementRevealProps {
  children: React.ReactElement | React.ReactElement[];
}

export function AnimatedElementReveal({
  children,
}: AnimatedElementRevealProps) {
  return (
    <motion.span
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
        staggerChildren: 0.6,
      }}
    >
      {children}
    </motion.span>
  );
}
