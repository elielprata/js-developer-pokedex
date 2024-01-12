const content = document.getElementById('content')
const info = document.getElementById('info')
let pokemonSelected = {}

const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

pokeApi.getPokemon(parseInt(id)).then((pokemon) => {
  console.log(pokemon)

  const abilities = pokemon.abilities.map((item) => item.ability.name)

  info.innerHTML = `
    <div class="infoItem">
      <span class="infoDescription">Species</span>
      <span class="infoValue">${pokemon.species.name}</span>
    </div>

    <div class="infoItem">
      <span class="infoDescription">Height</span>
      <span class="infoValue">${pokemon.height * 10} cm</span>
    </div>

    <div class="infoItem">
      <span class="infoDescription">Weigh</span>
      <span class="infoValue">${pokemon.weight * 0.1} kg</span>
    </div>

    <div class="infoItem">
      <span class="infoDescription">Abilities</span>
      <span class="infoValue">${abilities.join(', ')}</span>
    </div>
  `

  const pokeHeader = `
    <pokemon-header 
      name="${pokemon.name}" 
      type1="${pokemon.types[0].type.name}" 
      ${pokemon.types[1] ? `type2="${pokemon.types[1].type.name}"` : ''}
      image="${pokemon.sprites.other.dream_world.front_default}"
    ></pokemon-header>${content.innerHTML}`

  content.innerHTML = pokeHeader

  content.classList.add(pokemon.types[0].type.name)

  pokemonSelected = pokemon
})
