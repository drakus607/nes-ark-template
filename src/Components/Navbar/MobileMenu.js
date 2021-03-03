import React from "react";
import styled from "styled-components";
import { CloseMobileHandler } from "./Burger";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import GlobalContext from "../../contexts/Global";
import { Link as RLink, Switch, Route } from "react-router-dom";

const StyledMobileMenu = styled.div`
&.mobile {
    display: flex;
    flex-direction: column;
    width: 100%;
}

&.hidden {
    display: none;
}

&.visible {
    position: fixed;
    background: white;
    z-index: 999;
    animation: SlideIn 0.5s forwards;
}
& ul{
    display: flex;
    flex-direction: column;
    list-style-type: none;    
    text-align: center;
    margin-top: 0.5rem;
    padding: 0;
}
& li {
    display: block;
    margin: 1rem;
}
& li a {
    color: #444444;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
}
& #close_mobile svg{
    width: 3rem;
    height: 3rem;
    position: absolute;
    right: 2%;
    top: 3%;
    cursor: pointer;
}
@keyframes SlideIn {
    0% {
      opacity: 0;
      top: -100%;
    }
    100% {
      opacity: 1;
      top: 0%;
    }
`;

const MobileMenu = () => {
  const globalContext = React.useContext(GlobalContext);
  return (
    <StyledMobileMenu id="mobile_menu" className="mobile hidden">
      <ul className="mobile_navlinks">
        <li>
          <Link
            onClick={CloseMobileHandler}
            to="home"
            smooth={true}
            duration={500}
          >
            <RLink to="/">Home</RLink>
          </Link>
        </li>
        <Switch>
          <Route exact path="/">
            <li>
              <Link
                onClick={CloseMobileHandler}
                to="servers"
                smooth={true}
                duration={500}
                offset={-25}
              >
                Serwery
              </Link>
            </li>
            <li>
              <Link
                onClick={CloseMobileHandler}
                to="commands"
                smooth={true}
                duration={500}
                offset={-25}
              >
                Komendy
              </Link>
            </li>
            <li>
              <Link
                onClick={CloseMobileHandler}
                to="rules"
                smooth={true}
                duration={500}
                offset={-25}
              >
                Zasady
              </Link>
            </li>
            {globalContext.user && (
              <li>
                <RLink to="/donate">Donate</RLink>
              </li>
            )}
          </Route>
        </Switch>
        {!globalContext.user && (
          <a href="https://api.nes-ark.pl/auth/steam/">
            <img
              src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/sits_small.png"
              alt="sign-in with steam"
            />
          </a>
        )}
      </ul>
      <div id="close_mobile" onClick={CloseMobileHandler}>
        <IoClose />
      </div>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
