import { ThemeProvider } from "./contexts/theme-context";
import { AppRoutes } from "./components/pages/routes";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme-context";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider>
      <ThemeConsumerApp />
    </ThemeProvider>
  );
}

const ThemeConsumerApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyle theme={theme} />
      <AppRoutes />
    </>
  );
};

export default App;