import { motion, AnimatePresence } from 'framer-motion';

const letterVariants = {
  hidden: {
    opacity: 0,
    y: '100%',
    transition: { duration: 0.2, ease: 'easeIn' },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0, 0.71, 0.2, 1.01] },
  },
};

interface AnimatedLetterRevealProps {
  children: string;
  delay?: number;
}

export function AnimatedLetterReveal({
  children,
  delay,
}: AnimatedLetterRevealProps) {
  return (
    <AnimatePresence>
      <motion.span
        variants={{
          hidden: {
            transition: {
              delay: delay ?? 0,
              staggerChildren: 0.02,
              staggerDirection: -1,
            },
          },
          visible: {
            transition: {
              delay: delay ?? 0,
              staggerChildren: 0.02,
              delayChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        exit="hidden"
        className="overflow-y-hidden md:whitespace-nowrap flex items-end"
        style={{ display: 'inline-block' }}
      >
        {children.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{ display: 'inline-block' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
}
