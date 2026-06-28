
import './App.css'
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Propos from "./components/Propos.jsx";
import Temoignages from "./components/Temoignages.jsx";
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
        <NavBar/>
        <Hero/>
        <Features/>
        <Propos/>
        <Temoignages/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
