const fetchPokemon = async () => {
  try{
    let fetchPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`);
    const response = await fetchPoke.json();
    displayAllPokemonInfo(response.results.reverse())
    console.log(response.results.reverse())
  } catch(err){
    console.error(err);
  }
}

const displayAllPokemonInfo = async (allPokemon) => {
  const pokemon = await Promise.all(allPokemon.map(async pokemon => {
    const resp = await fetch(pokemon.url);
    const dataPoke = await resp.json()
    return dataPoke;
  }));
  displayPokemon(pokemon)
}