document.body.innerHTML = `
<div class="Container bg-warning p-2">
<div class="heading">
<h1 class="text-center text-dark p-4">Pokemon List</h1>
</div>
<div class="row mainContent">
</div>
</div>
`;

const pokemon_number = 50;
const fetchPokemon = async () => {
  for (let i = 1; i <= pokemon_number; i++) {
    getPokemonData(i);
  }
};

const getPokemonData = async (id) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let response = await fetch(url);
    let pokemonData = await response.json();
    createCardData(pokemonData);
  } catch (err) {
    console.log(err);
  }
};
fetchPokemon();

const createCardData = (pokemonData) => {
  const pokemonName = pokemonData.name;
  const ability = pokemonData.abilities[0].ability.name;
  const weight = pokemonData.weight;
  const pokeImg = pokemonData.sprites.back_shiny;
  const moves = pokemonData.moves[0].move.name;
  const mainContent = document.querySelector(".mainContent");
  mainContent.innerHTML += `
    <div class="col-sm-12 col-md-4 col-lg-3 mb-3 mb-sm-3">
    <div class="card mb-3 text-white h-100">
    <div class="card-header bg-dark">
    <img src="${pokeImg}" alt="${pokemonName}">
     <h4 class="card-title item1">Name: ${pokemonName}</h4>
    </div>
    <div class="card-body bg-info text-dark">
        <h5 class="card-title item2">Weight: ${weight}</h5>
        <h5 class="card-title item3">Ability: ${ability}</h5>
        <h5 class="card-title item4">Moves: ${moves}</h5>
    </div>
    </div>
    </div>
    `;
};
