import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Servers from "./Components/Servers";
import AOS from "aos";
import RulesSection from "./Components/RulesSection";
import Footer from "./Components/Footer";
import Commands from "./Components/Commands";
import MobileMenu from "./Components/Navbar/MobileMenu";
import Backdrop from "./Components/Backdrop";
import useWindowSize from "./Components/Vendors/useWindowSize";
import TestDiv from "./Components/TestDiv";
import NewsSection from "./Components/News/NewsSection";
import { Route, Switch } from "react-router-dom";
import SignUp from './Components/News/SignUp'
import AddPost from './Posts/AddPost'
import axios from 'axios';
//set API baseurl
const { REACT_APP_URL } = process.env;
axios.defaults.baseURL = REACT_APP_URL;


function App() {
  const { width } = useWindowSize();
  AOS.init({
    once: true,
  });
  return (
    <>
    <Header />
  <Switch>
    <Route exact path="/">
      {width <= 960 && <Backdrop />}
      {width <= 960 && <MobileMenu />}
      <Hero />
      <NewsSection />
      {/*wrzucam tutaj forma  */}
      <Servers />
      <Commands />
      <RulesSection />
      <Footer />
    </Route>
    <Route exact path="/new-post">
      <AddPost/>
      <TestDiv/>           
    </Route>
    <Route exact path="/register" component={SignUp}>
    </Route>
    <Route exact path="/posts">
      <TestDiv />
    </Route>
  </Switch>
    </>
  );
}

export default App;
