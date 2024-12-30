import styled from "styled-components";
import { useState } from "react";

export const Filter = ({ onFilter }) => {
  const [selectedType, setSelectedType] = useState("");

  const handleFilterChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    onFilter(type);
  };

  return (
    <Container>
      <Select onChange={handleFilterChange} value={selectedType}>
        <option value="">Todos os Tipos</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="flying">Flying</option>
        <option value="bug">Bug</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="steel">Steel</option>
        <option value="ghost">Ghost</option>
        <option value="fighting">Fighting</option>
      </Select>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 2px;
  }
`;
