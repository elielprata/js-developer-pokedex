class pokemonHeader extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }

  build() {
    const componentRoot = document.createElement('div')
    componentRoot.setAttribute('class', 'header')
    componentRoot.classList.add(this.getAttribute('type1'))

    const divButtons = document.createElement('div')
    divButtons.setAttribute('class', 'div-buttons')

    const linkReturn = document.createElement('a')
    linkReturn.href = '../../index.html'

    const arrowLeft = document.createElement('img')
    arrowLeft.setAttribute('class', 'icons')
    arrowLeft.src = '/assets/images/left-arrow.png'

    linkReturn.appendChild(arrowLeft)

    const heart = document.createElement('img')
    heart.setAttribute('class', 'icons')
    heart.src = '/assets/images/heart.png'

    divButtons.appendChild(linkReturn)
    divButtons.appendChild(heart)

    const divInfo = document.createElement('div')
    divInfo.setAttribute('class', 'div-info')

    const name = document.createElement('h1')
    name.innerHTML = this.getAttribute('name')

    const divDetail = document.createElement('div')
    divDetail.setAttribute('class', 'detail')

    const listTypes = document.createElement('ul')
    listTypes.setAttribute('class', 'types')

    const itemType1 = document.createElement('li')
    itemType1.setAttribute('class', 'type')
    itemType1.classList.add(this.getAttribute('type1'))
    itemType1.innerHTML = this.getAttribute('type1')

    const itemType2 = document.createElement('li')
    itemType2.setAttribute('class', 'type')
    itemType2.classList.add(this.getAttribute('type2'))
    itemType2.innerHTML = this.getAttribute('type2')

    const pokemonImg = document.createElement('img')
    pokemonImg.src = this.getAttribute('image')
    pokemonImg.setAttribute('class', 'pokemon-img')

    listTypes.appendChild(itemType1)
    this.getAttribute('type2') ? listTypes.appendChild(itemType2) : ''

    divDetail.appendChild(listTypes)

    divInfo.appendChild(name)
    divInfo.appendChild(divDetail)
    divInfo.appendChild(pokemonImg)

    componentRoot.appendChild(divButtons)
    componentRoot.appendChild(divInfo)

    return componentRoot
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = `
      h1 {
        margin: .75rem 0 .25rem;
        text-transform: capitalize;
      }

      .header {
        max-width: 400px;
        margin: auto;
        padding: 1.25rem;
        color: white;
      }

      .div-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .icons {
        width: 1.5rem;
        height: 1.5rem;
      }

      .div-info {

      }

      .detail {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .detail .types {
        padding: 0 .625rem;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: .5rem
        
      }

      .detail .types .type {
        color: #fff;
        padding: .25rem .5rem;
        margin: .25rem 0;
        border-radius: 1rem;
        filter: brightness(1.1);
        text-align: center;
        font-size: 1rem;
        text-transform: capitalize;
        font-weight: bold;
      }

      .pokemon-img {
        max-height: 15rem;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        bottom: -2.5rem;
      }

      .normal {
          background-color: #a6a877;
      }
      
      .grass {
          background-color: #77c850;
      }
      
      .fire {
          background-color: #ee7f30;
      }
      
      .water {
          background-color: #678fee;
      }
      
      .electric {
          background-color: #f7cf2e;
      }
      
      .ice {
          background-color: #98d5d7;
      }
      
      .ground {
          background-color: #dfbf69;
      }
      
      .flying {
          background-color: #a98ff0;
      }
      
      .poison {
          background-color: #a040a0;
      }
      
      .fighting {
          background-color: #bf3029;
      }
      
      .psychic {
          background-color: #f65687;
      }
      
      .dark {
          background-color: #725847;
      }
      
      .rock {
          background-color: #b8a137;
      }
      
      .bug {
          background-color: #a8b720;
      }
      
      .ghost {
          background-color: #6e5896;
      }
      
      .steel {
          background-color: #b9b7cf;
      }
      
      .dragon {
          background-color: #6f38f6;
      }
      
      .fairy {
          background-color: #f9aec7;
      }
  
    `

    return style
  }
}

customElements.define('pokemon-header', pokemonHeader)
