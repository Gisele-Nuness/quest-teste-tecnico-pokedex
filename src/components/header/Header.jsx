import styled from "styled-components";
import { ThemeTogglerButton } from "../botoes/theme-toggler-button";
import { Filter } from "./Filter";
import IconHeader from "../../assets/pokedex-logo.png";

const Header = ({ onFilter }) => {
  return (
    <Container>
      <Filter onFilter={onFilter} />
      <ImgLogo src={IconHeader} alt="Pokedex Logo" />
      <ThemeTogglerButton />
    </Container>
  );
};

const ImgLogo = styled.img`
  width: 300px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 900px;
  width: 100%;
  height: 100px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    gap: 500px;
  }

  @media (max-width: 768px) {
    gap: 200px;
  }
`;

export default Header;
