const content = document.getElementById('content')
const info = document.getElementById('info')
let pokemonSelected = {}

const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

function showCategory(categoryName) {
  document.getElementById('divStats')
}

pokeApi.getPokemon(parseInt(id)).then((pokemon) => {
  console.log(pokemon)

  const abilities = pokemon.abilities.map((item) => item.ability.name)

  const stats = pokemon.stats
    .map((item) => {
      const name =
        item.stat.name.search('special-') !== -1
          ? item.stat.name.replace('special-', 'sp. ').substring(0, 7) + '.'
          : item.stat.name

      return `
      <div class="infoItem">
        <span class="infoDescription">${name}</span>
        <span class="infoValue">${item.base_stat}</span>
        <progress class="${
          item.base_stat > 50 ? 'statProgress greaterThan50' : 'statProgress'
        }" value="${item.base_stat}" max="100"></progress>
      </div>`
    })
    .join('')

  info.innerHTML = `
    <div id="divAbout">
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
    </div>

    <div id="divStats" style="display: none;">
      ${stats}
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

function showCategory(categoryName) {
  if (categoryName === 'about') {
    document.getElementById('divAbout').style.display = 'block'
    document.getElementById('divStats').style.display = 'none'

    document.getElementById('btnAbout').classList.add('selected')
    document.getElementById('btnStats').classList.remove('selected')
  } else if (categoryName === 'stats') {
    document.getElementById('divAbout').style.display = 'none'
    document.getElementById('divStats').style.display = 'block'

    document.getElementById('btnAbout').classList.remove('selected')
    document.getElementById('btnStats').classList.add('selected')
  }
}
