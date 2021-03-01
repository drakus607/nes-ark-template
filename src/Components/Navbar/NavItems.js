import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import GlobalContext from "../../contexts/Global";

const StyledNavItems = styled.div`
  #links {
    margin-right: 1rem;
    display: none;
    padding: 0;
  }

  @media (min-width: 960px) {
    display: flex;
    flex-direction: row;
    margin-right: 0.5rem;
    margin-top: 0.8rem;
    & #links {
      display: flex;
      justify-content: space-between;
    }
    & li {
      list-style-type: none;
      margin-left: 1.12rem;
      text-decoration: none;
      color: #222222;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0 0.2rem;
      font-family: "Open Sans", sans-serif;
    }
    & li a {
      text-decoration: none;
      color: #222222;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
      padding: 0 0.19rem;
      font-family: "Poppins", sans-serif;
    }
  }
`;

const NavItems = () => {
  const globalContext = React.useContext(GlobalContext);
  return (
    <StyledNavItems>
      <ul id="links">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="servers" smooth={true} duration={500} offset={-25}>
            Serwery
          </Link>
        </li>
        <li>
          <Link to="commands" smooth={true} duration={500} offset={-25}>
            Komendy
          </Link>
        </li>
        <li>
          <Link to="rules" smooth={true} duration={500} offset={-25}>
            Zasady
          </Link>
        </li>
        <li>
          <Link to="donate" smooth={true} duration={500} offset={-25}>
            Donate
          </Link>
        </li>
        {globalContext.user && (
          <li>
            <a href="https://api.nes-ark.pl/auth/steam/">
              <img
                src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/sits_small.png"
                alt="sign-in with steam"
              />
            </a>
          </li>
        )}
      </ul>
    </StyledNavItems>
  );
};

export default NavItems;
