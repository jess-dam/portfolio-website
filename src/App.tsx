import './App.css';
import Contact from './views/Contact';
import Experience from './views/Experience';
import Footer from './components/Footer';
import Info from './views/Info';
import Landing from './views/Landing';
import Nav from './components/Nav';

function App() {
  return (
    <div className="h-auto w-screen">
      <Nav />
      <main id="main">
        <Landing />
        <Info />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
