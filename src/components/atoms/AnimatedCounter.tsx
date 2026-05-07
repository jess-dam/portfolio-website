import {
  KeyframeOptions,
  useIsomorphicLayoutEffect,
  animate,
  useInView,
} from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotionState } from '../../context/ReducedMotionContext';

type AnimatedCounterProps = {
  from: number;
  to: number;
  animateOptions?: KeyframeOptions;
};

export function AnimatedCounter({
  from,
  to,
  animateOptions,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);
  const { shouldReduceMotion } = useReducedMotionState();

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;
    // remove animation if reduced motion is active
    // TODO move into hook to make available for other animations
    if (shouldReduceMotion) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 1.8,
      delay: 0.7,
      ease: 'easeOut',
      ...animateOptions,
      onUpdate(latest) {
        element.textContent = latest.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <span className="font-poppins" ref={ref} />;
}
