import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Servers from './Components/Servers';
import AOS from 'aos';
import RulesSection from './Components/RulesSection';
import Footer from './Components/Footer';
import Commands from './Components/Commands';
import MobileMenu from './Components/Navbar/MobileMenu';
import Backdrop from './Components/Backdrop';

function App() {
  return (
    <>
      {AOS.init({
        once: true
      })}
     <Header />
     <Backdrop/>
     <MobileMenu/>
     <Hero />
     <Servers />
     <Commands/>
     <RulesSection/>
     <Footer/>
     </>
  );
}

export default App;
