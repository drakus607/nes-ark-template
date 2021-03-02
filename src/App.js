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
import AddPost from "./Posts/AddPost";
import axios from "axios";
import GlobalContext from "./contexts/Global";
import { useEffect, useState } from "react";
//set API baseurl
const { REACT_APP_URL } = process.env;
axios.defaults.baseURL = REACT_APP_URL;

function App() {
  const { width } = useWindowSize();
  AOS.init({
    once: true,
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
      <Switch>
        <Route exact path="/">
          {width <= 960 && <Backdrop />}
          {width <= 960 && <MobileMenu />}
          <Hero />
          <NewsSection />
          {user && <h1>Miejsce na sekcję donate</h1>}
          <Servers />
          <Commands />
          <RulesSection />
          <Footer />
        </Route>
        <Route exact path="/new-post">
          <AddPost />
        </Route>
        <Route exact path="/posts">
          <TestDiv />
        </Route>
      </Switch>
    </GlobalContext.Provider>
  );
}

export default App;
