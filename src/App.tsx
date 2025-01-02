import './App.css';
import Contact from './views/Contact';
import Experience from './views/Experience';
import Footer from './components/Footer';
import Info from './views/Info';
import Landing from './views/Landing';
import Skills from './views/Skills';
import Nav from './components/Nav';
import Interests from './views/Interests';

function App() {
  return (
    <div className="h-auto w-screen">
      <Nav />
      <main id="main">
        <Landing />
        <Info />
        <Experience />
        <Skills />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
