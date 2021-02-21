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
    <main>
      {AOS.init()}
     <Header />
     <Hero />
     <Servers />
     <Commands/>
     <RulesSection/>
     <Footer/>
    </main>
  );
}

export default App;
