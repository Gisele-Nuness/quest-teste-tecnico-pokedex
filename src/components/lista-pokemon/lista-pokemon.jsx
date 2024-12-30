import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BtnCarregarMais from "../botoes/BtnCarregarMais";
import Header from "../header/Header";
import { ThemeContext } from "../../contexts/theme-context";

const ListaPokemon = () => {
  const { theme } = useContext(ThemeContext);
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  const getPokemons = async (offset, limit) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar Pokémon");
      }
      const lista = await response.json();
      return lista.results;
    } catch (error) {
      console.error("Erro ao buscar lista de Pokémon:", error);
      return [];
    }
  };

  const getPokemonsDados = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao buscar detalhes do Pokémon");
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar dados do Pokémon:", error);
      return null;
    }
  };

  const carregarPokemons = async () => {
    setLoading(true);
    try {
      const offset = pokemon.length;
      const responsePokemons = await getPokemons(offset, 10);
      const pokemonData = await Promise.all(
        responsePokemons.map(async (result) => {
          const data = await getPokemonsDados(result.url);
          if (!data) return null;

          return {
            id: data.id,
            name: data.name,
            image: data.sprites.other.dream_world.front_default || "",
            type: data.types.map((type) => type.type.name),
          };
        })
      );

      setPokemon((prevPokemon) => [
        ...prevPokemon,
        ...pokemonData.filter((p) => p),
      ]);
      setFilteredPokemon((prevPokemon) => [
        ...prevPokemon,
        ...pokemonData.filter((p) => p),
      ]);
    } catch (error) {
      console.error("Erro ao carregar os Pokémons:", error);
    } finally {
      setLoading(false);
    }
  };

  
  const handleFilter = (type) => {
    if (!type) {
      setFilteredPokemon(pokemon); // Sem filtro
    } else {
      const filtered = pokemon.filter((p) => p.type.includes(type));
      setFilteredPokemon(filtered);
    }
  };


  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      carregarPokemons();
    }
  }, []);

  if (loading && !pokemon.length) {
    return <Main>Carregando Pokémon...</Main>;
  }

  if (!pokemon.length) {
    return <Main>Nenhum Pokémon encontrado.</Main>;
  }

  return (
    <Main>
      <Header onFilter={handleFilter} />
      <Container>
      {filteredPokemon.map((p) => (
          <Card key={p.id} cardTheme={theme.cardBackground}>
            <Nome>{p.name}</Nome>
            <Link to={`/pokemon/${p.id}`}>
              <Img src={p.image} alt={p.name} />
            </Link>
            <TiposContainer>
              {p.type.map((tipo) => (
                <Tipo key={tipo} type={tipo}>
                  {tipo}
                </Tipo>
              ))}
            </TiposContainer>
          </Card>
        ))}
      </Container>
      <BtnCarregarMais onClick={carregarPokemons} />
    </Main>
  );
};

export default ListaPokemon;

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  width: 100%;
  justify-content: center;
`;

const Nome = styled.p`
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const Img = styled.img`
  width: 140px;
  margin: 20px;

  @media (max-width: 768px) {
    width: 110px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 380px;
  background-color: ${({ cardTheme }) => cardTheme};
  border-radius: 15px;
  transition: background-color 0.3s;
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
