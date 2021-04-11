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
import NewsSection from "./Components/News/NewsSection";
import { Redirect, Route, Switch } from "react-router-dom";
import AddPost from "./Posts/AddPost";
import axios from "axios";
import GlobalContext from "./contexts/Global";
import { useEffect, useState } from "react";
import DonateSection from "./Components/Donate/DonateSection";

//set API baseurl
const { REACT_APP_URL } = process.env;
axios.defaults.baseURL = REACT_APP_URL;

function App() {
  const { width } = useWindowSize();
  AOS.init({
    once: true,
    startEvent: 'DOMContentLoaded',
  });
  const [user, setUser] = useState();
  useEffect(() => {
    axios.get("/auth", { withCredentials: true }).then((response) => {
      setUser(response.data);
    });
  }, []);
  return (
    <GlobalContext.Provider value={{ user }}>
        <Header />
        {width <= 960 && <Backdrop />}
        {width <= 960 && <MobileMenu />}
        <Switch>
          <Route exact path="/">
            <Hero />
            <NewsSection />
            <Servers />
            <Commands />
            <RulesSection />
            <Footer />
          </Route>
          <Route exact path="/new-post">
            {user ? <AddPost /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/donate">
            {user ? <DonateSection /> : <Redirect to="/" />}
          </Route>
        </Switch>
    </GlobalContext.Provider>
  );
}

export default App;
