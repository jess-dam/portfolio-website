import './App.css';
import Contact from './views/Contact';
import EngineeringSkills from './views/EngineeringSkills';
import Footer from './components/Footer';
import Info from './views/Info';
import Landing from './views/Landing';
import Nav from './components/Nav';
import { MotionConfig } from 'framer-motion';
import { useEffect, useState } from 'react';

function App() {
  const [reducedMotion, setReducedMotion] = useState<
    'always' | 'never' | 'user'
  >('user');
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Check for initial state from the user
    setReducedMotion(mediaQuery.matches ? 'always' : 'user');
    // Check for OS changes from the user
    mediaQuery.addEventListener('change', (e) =>
      setReducedMotion(e.matches ? 'always' : 'user'),
    );
  }, []);

  useEffect(() => {
    console.log(reducedMotion);
  }, [reducedMotion]);

  return (
    <MotionConfig reducedMotion={reducedMotion}>
      <div className="h-auto w-screen">
        <Nav
          reducedMotion={reducedMotion}
          setReducedMotion={setReducedMotion}
        />
        <main id="main">
          <Landing />
          <Info />
          <EngineeringSkills />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
