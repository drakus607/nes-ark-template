import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Servers from './Components/Servers';
import AOS from 'aos';
import RulesSection from './Components/RulesSection';
import Footer from './Components/Footer';
import Commands from './Components/Commands';

function App() {
  return (
    <>
      {AOS.init({
        once: true
      })}
     <Header />
     <Hero />
     <Servers />
     <Commands/>
     <RulesSection/>
     <Footer/>
     </>
  );
}

export default App;
