const pokemonSelect = document.getElementById('pokemon-select');
const getPokemon = document.getElementById('get-pokemon');
getPokemon.addEventListener('click', () => {
  const nombrePokemon = pokemonSelect.value;
  const urlApi = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
  fetch(urlApi)
  .then((response) => {
    if(!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json();
  })
  .then((data) => {
    let infoContainer = document.querySelector('.info-container');
    if (!infoContainer) {
      infoContainer = document.createElement('div');
      infoContainer.classList.add('info-container');
      document.querySelector('.pokemon-form').insertAdjacentElement('afterend', infoContainer);
    }
    infoContainer.innerHTML = '';
    infoContainer.innerHTML = `
      <h2> ${data.name}</h2>
      <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}" id="pokemon">
      <h4>Tipo: ${data.types.map(type => type.type.name).join(", ")}</h4>
      <h4>Altura: ${data.height}</h4>
      <h4>Peso: ${data.weight}</h4>
      `;
  })
  .catch(error => console.error(error));
});
