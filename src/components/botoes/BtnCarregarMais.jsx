import styled from "styled-components";

const BtnCarregarMais = ({onClick}) => {
    return (
        <CarregarMais onClick={onClick}>Carregar Mais</CarregarMais>
    )
}

const CarregarMais = styled.button`
    background-color: #FFCB05;
    color: #3466AF;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 10px;
    border-radius: 5px;
    border-color: #FFCB05;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;    
`

export default BtnCarregarMais;