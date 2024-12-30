import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import BtnVoltar from "../botoes/BtnVoltar";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";

const fetchPokemonDetails = async (id) => {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await response.json();
};

export const DetalhesPokemon = () => {
  const { theme } = useContext(ThemeContext);
  const [detalhe, setDetalhe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonDetails(id);

        const abilities = await Promise.all(
          data.abilities.map(async (ability) => {
            const abilityResponse = await fetch(ability.ability.url);
            const abilityData = await abilityResponse.json();
            return {
              name: ability.ability.name,
              description: abilityData.effect_entries.find(
                (entry) => entry.language.name === "en"
              )?.effect,
            };
          })
        );

        const pokemonData = {
          name: data.name,
          image: data.sprites.other.dream_world.front_default,
          moves: data.moves.map((move) => move.move.name),
          abilities: abilities,
          types: data.types.map((type) => type.type.name),
        };

        setDetalhe(pokemonData);
      } catch (error) {
        console.error("Erro ao buscar detalhes do Pokémon:", error);
        setDetalhe(null);
      }
    };

    fetchData();
  }, [id]);

  if (!detalhe) {
    return <Main>"Nenhum pokemón encontrado"</Main>;
  }

  return (
    <Main>
      <Container>
        <Pokemon cardTheme={theme.cardBackground}>
          <Link to={"/"}>
            <BtnVoltar />
          </Link>
          <Nome>{detalhe.name}</Nome>
          <Img src={detalhe.image} alt={detalhe.name} />
          <TiposContainer>
            {detalhe.types.map((tipo) => (
              <Tipo key={tipo} type={tipo}>
                {tipo}
              </Tipo>
            ))}
          </TiposContainer>
        </Pokemon>
        <Detalhe>
          <p>
            <b>Movimentos</b>
          </p>
          <p>{detalhe.moves.join(", ")}</p>
          <p>
            <b>Habilidades</b>
          </p>
          <ul>
            {detalhe.abilities.map((ability, idx) => (
              <li key={idx}>
                <b>{ability.name} -</b> {ability.description}
              </li>
            ))}
          </ul>
        </Detalhe>
      </Container>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: auto;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
  }
`;

const Nome = styled.p`
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const Img = styled.img`
  width: 300px;
  margin: 20px;

  @media (max-width: 768px) {
    width: 170px;
  }
`;

const Pokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ cardTheme }) => cardTheme};
  border-radius: 10px;
  width: 100%;
  min-height: 100vh;
  height: auto;

  @media (max-width: 480px) {
    min-height: 60vh;
  }
`;

const Detalhe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  gap: 10px;
  width: 100%;
  height: auto;
  padding: 20px;

  @media (max-width: 480px) {
    min-height: 50vh;
  }
`;

const TiposContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tipo = styled.span`
  background-color: ${(props) => {
    const typeColors = {
      poison: "#df67ddfb",
      grass: "#7ac74c",
      fire: "#ee8130",
      water: "#6390f0",
      bug: "#a6b91a",
      electric: "#e6c972",
      fairy: "#F3ABC3",
      normal: "#F2D6B3",
      fighting: "#c22e28",
      flying: "#a98ff3",
      ground: "#e2bf65",
      rock: "#b6a136",
      ghost: "#735797",
      steel: "#b7b7ce",
      psychic: "#f95587",
      ice: "#96d9d6",
      dragon: "#6f35fc",
      dark: "#705746",
      unknown: "#68a090",
      none: "#f5f5f5",

      default: "#ccc",
    };
    return typeColors[props.type] || typeColors.default;
  }};
  padding: 8px;
  border-radius: 10px;
`;
