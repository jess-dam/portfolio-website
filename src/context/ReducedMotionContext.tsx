import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { MotionConfig } from 'framer-motion';

export type ReducedMotionPreference = 'always' | 'never' | 'user';

interface ReducedMotionContextValue {
  reducedMotion: ReducedMotionPreference;
  setReducedMotion: (value: ReducedMotionPreference) => void;
  /** True when the app should suppress animations (state === 'always'). */
  shouldReduceMotion: boolean;
}

const ReducedMotionContext = createContext<ReducedMotionContextValue | null>(
  null,
);

export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] =
    useState<ReducedMotionPreference>('user');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches ? 'always' : 'user');
    const handler = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches ? 'always' : 'user');
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const shouldReduceMotion = reducedMotion === 'always';

  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7545/ingest/6735d593-907b-48c7-ba73-a082e8c1fb86',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'f1bdbb'},body:JSON.stringify({sessionId:'f1bdbb',hypothesisId:'post-fix',location:'ReducedMotionContext.tsx:state-effect',message:'reducedMotion provider state',data:{reducedMotion,shouldReduceMotion},timestamp:Date.now()})}).catch(()=>{});
  }, [reducedMotion, shouldReduceMotion]);
  // #endregion

  return (
    <ReducedMotionContext.Provider
      value={{ reducedMotion, setReducedMotion, shouldReduceMotion }}
    >
      <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>
    </ReducedMotionContext.Provider>
  );
}

export function useReducedMotionState(): ReducedMotionContextValue {
  const ctx = useContext(ReducedMotionContext);
  if (!ctx) {
    throw new Error(
      'useReducedMotionState must be used within ReducedMotionProvider',
    );
  }
  return ctx;
}
