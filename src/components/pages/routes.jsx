import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './Home';
import { Detalhes } from "./Detalhes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pokemon/:id" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
  );
};