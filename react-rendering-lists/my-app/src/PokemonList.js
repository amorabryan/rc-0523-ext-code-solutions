export default function PokemonList({ pokedex }) {
  const pokemonList = pokedex.map((pokemon) => {
    return <li key={pokemon.number}>{pokemon.name}</li>;
  });
  return <ul>{pokemonList}</ul>;
}
