import { motion } from 'framer-motion';

export default function AnimatedStar() {
  return (
    <motion.svg
      animate={{
        rotate: 360,
        transition: {
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
        },
      }}
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 0L17.7813 10.2187L28 14L17.7813 17.7813L14 28L10.2187 17.7813L0 14L10.2187 10.2187L14 0Z"
        fill="#9B1D20"
      />
    </motion.svg>
  );
}
