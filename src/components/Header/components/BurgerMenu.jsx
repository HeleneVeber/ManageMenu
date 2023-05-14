import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

//TODO: Refactoring and style

export default function BurgerMenu() {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <>
      <MenuButton onClick={handleNavBar}>
        <img src="../../../../src/assets/menu.png" alt="Menu" />
      </MenuButton>
      <nav style={{ display: showNavBar ? "inline" : "none" }}>
        <PageLink to="/">App</PageLink>
        <PageLink to="/recipes">Vos recettes</PageLink>
      </nav>
    </>
  );
}

const PageLink = styled(Link)`
  font-family: "IBM Plex Sans Thai Looped";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  display: flex;
  align-items: center;
  color: #403f3e;
`;

const MenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  color: #fff;
  border: none;
  cursor: pointer;
`;
