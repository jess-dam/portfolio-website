import './App.css';
import Contact from './views/Contact';
import Experience from './views/Experience';
import Footer from './components/Footer';
import Info from './views/Info';
import Landing from './views/Landing';
import Skills from './views/Skills';

function App() {
  return (
    <div className="h-auto w-screen">
      <Landing />
      <Info />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
