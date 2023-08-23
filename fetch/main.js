async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/4');
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPokemon();
