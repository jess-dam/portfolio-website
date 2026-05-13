import './App.css';
import Contact from './views/Contact';
import EngineeringSkills from './views/EngineeringSkills';
import Footer from './components/Footer';
import Info from './views/Info';
import Landing from './views/Landing';
import Nav from './components/Nav';
import Cursor from './components/atoms/Cursor';
import { ReducedMotionProvider } from './context/ReducedMotionContext';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(
    null,
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX - 10, y: e.clientY - 10 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ReducedMotionProvider>
      <div className="h-auto w-screen relative">
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50"
          style={{
            x: cursorPos?.x ?? -100, // start offscreen until first move
            y: cursorPos?.y ?? -100,
          }}
        >
          <Cursor />
        </motion.div>
        <Nav />
        <main id="main">
          <Landing />
          <Info />
          <EngineeringSkills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReducedMotionProvider>
  );
}

export default App;
