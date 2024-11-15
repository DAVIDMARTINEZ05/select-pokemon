const pokemons = document.getElementById("pokemon-select")
const btnPkm = document.getElementById("get-pokemon")

btnPkm.addEventListener("click",()=>{
    const pokemonNombre = pokemons.value
    const api = `https://pokeapi.co/api/v2/pokemon/${pokemonNombre}`
    

    fetch(api)
    .then((response)=>{
        if(!response.ok){
           console.log('La solicitud no fue exitosa');
        }
        return response.json()
    })
   .then((data)=>{
    const  informacionPokemon= document.createElement("div")
    informacionPokemon.classList.add("infoPokemon")
     document.querySelector(".pokemon-form").insertAdjacentElement("afterend",informacionPokemon)
     informacionPokemon.innerHTML=`
      <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}" id="pokemon">
      <h2>Nombre: ${data.name}</h2>
      <h4>Tipo: ${data.types.map(type => type.type.name).join(", ")}</h4>
      <h4>Altura: ${data.height}</h4>
      <h4>Peso: ${data.weight}</h4>
      `;
  }) .catch((error) => {
    area.innerText = 'error 404';
  });


   
})