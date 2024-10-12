import './App.css';
import Contact from './views/Contact';
import Experience from './views/Experience';
import Footer from './components/Footer';
import Info from './views/Info';
import Landing from './views/Landing';
import Skills from './views/Skills';
import Nav from './components/Nav';

function App() {
  return (
    <div className="h-auto w-screen">
      <Nav />
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
