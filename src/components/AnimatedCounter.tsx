import {
  KeyframeOptions,
  useIsomorphicLayoutEffect,
  animate,
  useInView,
} from 'framer-motion';
import { useRef } from 'react';

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

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;
    // remove animation if reduced motion is active
    // TODO move into hook to make available for other animations
    if (window.matchMedia('prefers-reduced-motion').matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 1.5,
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

  return <span className="font-mono" ref={ref} />;
}
