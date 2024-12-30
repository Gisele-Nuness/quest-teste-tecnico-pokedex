import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, themes } from "../../contexts/theme-context";
import moonIcon from "../../assets/moon.png";
import sunIcon from "../../assets/sun.png";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <Button onClick={toggleTheme}>
      <Img src={theme === themes.light ? moonIcon : sunIcon} alt="Theme Icon" />
    </Button>
  );
};

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;