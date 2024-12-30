import styled from "styled-components";

const BtnVoltar = () => {
  return <Voltar>Voltar</Voltar>;
};

const Voltar = styled.button`
  display: flex;
  background-color: #ffcb05;
  color: #3466af;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  border-color: #ffcb05;
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  margin-top: -350px;
  margin-left: -30px;

  @media (max-width: 481px) {
    margin-top: -100px;
    margin-left: -40px;
  }
 
`;

export default BtnVoltar;
