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
import useWindowSize from './Components/Vendors/useWindowSize'

function App() {
  const {width} = useWindowSize();
  AOS.init({
    once: true
  });
  return (
    <>
     <Header />
     {width <= 960 && <Backdrop/>}
     {width <= 960 && <MobileMenu/>}
     <Hero />
     <Servers />
     <Commands/>
     <RulesSection/>
     <Footer/>
     </>
  );
}

export default App;
