const suffling = document.querySelector(".shuffle-pokemon")
const fetchPokemon = async () => {
  try{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`);
    let result = await response.json();
    displayAllPokemonInfo(result.results)
  } catch(err){
    console.error(err);
  }
}
displayAllPokemonInfo = (result) => {
  result.reverse().forEach( async (pokemon, index) => {
    let url = pokemon.url
    try {
      let response = await fetch(url)
      pokemondetail = await response.json();
      displayPokemon(pokemondetail)
      console.log(pokemondetail)
    } catch (error) {
      console.error(error);
    }
  });
}
const displayPokemon = (pokemon) => {
  const pokemons = document.querySelector(".pokemons");
  const category = document.querySelector(".pokemon__types");
  pokemon.types.forEach((type, index) => {
    let color;
    pokemons.insertAdjacentHTML(`afterbegin`,
    `
    <div class="pokemon__card">
    <div class="container__info">
      <p class="stat">ability : <span>${pokemon.abilities[0].ability.name}</span></p>
      <p class="stat">weight : <span>${pokemon.weight}</span></p>
      <p class="stat">height : <span>${pokemon.height}</span></p>
      <p class="stat">base experience: <span> ${pokemon.base_experience}</span></p>
      <p class="stat">hp: <span>${pokemon.stats[0].base_stat}</span></p>
    </div>
    <img src="${pokemon.sprites.front_default}" alt="pokemon" class="pokemon__img"/>
    <p class="pokemon__index">${pokemon.id}</p>
    <p class="pokemon__name">${pokemon.name}</p>
    <div class="pokemon__types"></div>
    </div>
    `
    )

    switch (type.type.name) {
      case "grass":
        color = "linear-gradient(90deg, rgba(1,255,99,1) 0%, rgba(48,215,109,0.4) 100%);"
        break;
      case "fire":
        color = "linear-gradient(90deg, rgba(255,1,1,1) 0%, rgba(215,177,48,0.4) 100%);"
        break;
      case "water":
        color = "linear-gradient(90deg, rgba(180,252,232,1) 0%, rgba(48,251,1,0.4) 100%);"
        break;
      case "bug":
        color = "linear-gradient(90deg, rgba(1,74,255,1) 0%, rgba(48,149,215,0.4) 100%);"
        break;
      case "normal":
        color = "linear-gradient(90deg, rgba(1,74,255,1) 0%, rgba(48,149,215,0.4) 100%);"
        break;
      case "poison":
        color = "linear-gradient(90deg, rgba(145,246,0,1) 0%, rgba(198,183,86,0.4) 100%);"
        break;
      case "electric":
        color = "linear-gradient(90deg, rgba(252,208,0,1) 0%, rgba(229,242,1,0.4) 100%);"
        break;
      case "rock":
        color = "linear-gradient(90deg, rgba(80,80,80,1) 0%, rgba(0,0,0,0.4) 100%);"
        break;
      case "ground":
        color = "linear-gradient(90deg, rgba(80,80,80,1) 0%, rgba(73,64,64,0.4) 100%);"
        break;
      case "fighting":
        color = "linear-gradient(90deg, rgba(185,185,185,1) 0%, rgba(222,222,222,0.4) 100%);"
        break;
      case "fairy":
        color = "linear-gradient(90deg, rgba(236,236,236,1) 0%, rgba(222,222,222,0.4) 100%);"
        break;
      case "psychic":
        color = "linear-gradient(90deg, rgba(255,210,1,1) 0%, rgba(146,166,78,0.4) 100%);"
        break;
      case "ice":
        color = "linear-gradient(90deg, rgba(250,249,245,1) 0%, rgba(245,249,232,0.4) 100%);"
        break;
      case "flying":
        color = "linear-gradient(90deg, rgba(252,208,180,1) 0%, rgba(249,124,46,0.4) 100%);"
        break;
      case "dragon":
        color = "linear-gradient(90deg, rgba(252,180,252,1) 0%, rgba(251,1,149,0.4) 100%);"
        break;
      case "steel":
        color = "linear-gradient(90deg, rgba(211,52,215,1) 0%, rgba(1,115,251,0.4) 100%);"
        break;
      default:
        break;
    }
      category.insertAdjacentHTML("afterbegin",
    `
    <p class="pokemon__type" style="background:${color};">${type.type.name}</p>
    `
    )
  });
}

const shuffleCard = (event) => {
  event.preventDefault()
  const cards = [...document.querySelectorAll(".pokemon__card")]
    cards.forEach(card => {
    position = Math.floor(Math.random() * (151 - 1 + 1)) + 1
    card.style.order= position
  });
}

suffling.addEventListener("click", shuffleCard)
window.addEventListener("load", fetchPokemon)
