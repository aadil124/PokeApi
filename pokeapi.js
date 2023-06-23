document.body.innerHTML = `

<div class="Container bg-warning p-2">
<div class="heading ">
<h1 class="text-center text-dark p-4">Pokemon List</h1>
</div>
<div class="row mainContent">
</div>
</div>
`;
const pokemon_number = 10;
const fetchPokemons = async () => {
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
fetchPokemons();

const createCardData = (pokemonData) => {
  console.log(pokemonData);
  const pokemonName = pokemonData.name;
  const ability = pokemonData.abilities[0].ability.name;
  const weight = pokemonData.weight;
  const pokeImg = pokemonData.sprites.back_shiny;
  const moves = pokemonData.moves[0].move.name;
  const mainContent = document.querySelector(".mainContent");
  mainContent.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg-4 mb-3 mb-sm-3">
    <div class="card mb-3 bg-danger text-white h-100">
    <div class="card-header">
    <img src="${pokeImg}" alt="${pokemonName}">
   
     <h4 class="card-title item1">Name: ${pokemonName}</h4>
    </div>
    <div class="card-body">
        <h5 class="card-title item2">Weight: ${weight}</h5>
        <h5 class="card-title item3">Ability: ${ability}</h5>
        <h5 class="card-title item4">Moves: ${moves}</h5>
    </div>
    </div>
    </div>
    `;
};

// const getBreweriesData = async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data[0].name);
//   const mainContent = document.querySelector(".mainContent");
//   let output = "";
//   data.map((item) => {
//     output += `
//      <div class="col-sm-12 col-md-6 col-lg-4 mb-3 mb-sm-3 ">
//      <div class="card mb-3 bg-warning text-black h-100">
//     <div class="card-body">
//         <h5 class="card-title item1">Name: ${item.name}</h5>
//         <h5 class="card-title item2">Type: ${item.brewery_type}</h5>
//         <h5 class="card-title item3">City: ${item.city}</h5>
//         <h5 class="card-title item4">State: ${item.state}</h5>
//         <h5 class="card-title item4">Country: ${item.country}</h5>
//         <h5 class="card-title item4">Phone: ${item.phone}</h5>
//         <a href="${item.website_url}" class="btn btn-outline-danger">Website</a>
//       </div>
//     </div>
//      </div>
//     `;
//     mainContent.innerHTML = output;
//     console.log(item.name);
//   });
// };
// getBreweriesData();
