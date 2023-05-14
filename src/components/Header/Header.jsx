import styled from "styled-components";
import BurgerMenu from "./components/BurgerMenu";

const HeaderStyle = styled.header`
  position: absolute;
  width: 100%;
  height: 164px;
  left: 0px;
  top: 0px;
  background: #d9d6d2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const LogoImg = styled.img`
  position: absolute;
  width: 120px;
  height: 80px;
  right: 10px;
  top: 10px;
`;

const TitleH1 = styled.h1`
  position: absolute;
  width: 197px;
  height: 30px;
  left: calc(50% - 197px / 2 - 0.5px);
  top: 81px;
  font-family: "Cabin Sketch";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #403f3e;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <BurgerMenu />
      <LogoImg src="../../src/assets/RecipeBook-pana.svg" alt="logo du site" />
      <TitleH1>Manage Menu</TitleH1>
    </HeaderStyle>
  );
}
