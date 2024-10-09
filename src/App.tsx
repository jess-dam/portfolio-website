import './App.css'
import Contact from './components/Contact';
import Experience from './components/Experience';
import Info from './components/Info'
import Landing from './components/Landing';
import Skills from './components/Skills';


function App() {
  return (
    <div className='w-screen h-auto'>
      <Landing />
      <Info />
      <Experience />
      <Skills />
      <Contact />
    </ div>
  )
}

export default App

