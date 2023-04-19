import { proyectStructure } from "../proyectsCard/contentStructure.js"
import { cardRender } from "../renderIterator.js"

const nodeCtr = document.querySelector('.proyects-container')

const cardNode = (id) => {
      // create card container and add background image
      const container = document.createElement('div')
            container.classList.add('proyect-label')
            container.style.backgroundImage = `${proyectStructure[id].bkgImage}`
      // create the shadow efect container
      const shadowCtr = document.createElement('div')
            shadowCtr.classList.add('label')
      // create figure and the circle img proyect icon
      const figure = document.createElement('figure')
            figure.classList.add('icon-container')
      const img = document.createElement('img')
            img.classList.add('budget-icon')
            img.src = `${proyectStructure[id].iconImage}`
            img.setAttribute('alt', `${proyectStructure[id].alt}`)
      // create the text container, title and description
      const infoCtr = document.createElement('div')
            infoCtr.classList.add('info-container', `${proyectStructure[id].ownClass}`)
      const title = document.createElement('h2')
            title.classList.add('mb-2','font-black', 'text-xl', 'leading-6')
      const p = document.createElement('p')
      // create buttons container and it sons, repo btn, demo btn 
      const btnsCtr = document.createElement('div')
            btnsCtr.classList.add('buttons-container')
      const demoBtn = document.createElement('a')
            demoBtn.href = `${proyectStructure[id].buttons.demoURl}`
            demoBtn.classList.add('title-link')
            demoBtn.setAttribute('title', 'button to demo proyect')
            demoBtn.setAttribute('role', 'button')
      const repoBtn = document.createElement('a')
            repoBtn.href = `${proyectStructure[id].buttons.repoURl}`
            repoBtn.classList.add('title-link', 'secondary-btn')
            repoBtn.setAttribute('title', 'button to github repository')
            repoBtn.setAttribute('role', 'button')
      // create span to add the button name
      const txtContent = document.createElement('span')
      // Create svg element to add repo icon btn
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
            svg.setAttribute("class", "icon-code")
            svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
            svg.setAttribute("x", "0px")
            svg.setAttribute("y", "0px")
            svg.setAttribute("width", "48")
            svg.setAttribute("height", "48")
            svg.setAttribute("viewBox", "0 0 48 48")

      // Create path tag wich is the icon itself
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
            path.setAttribute('d', 'M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z M11.239,32.727c-0.154-0.079-0.237-0.225-0.185-0.328	c0.052-0.103,0.22-0.122,0.374-0.043c0.154,0.079,0.237,0.225,0.185,0.328S11.393,32.806,11.239,32.727z M12.451,33.482	c-0.081,0.088-0.255,0.06-0.389-0.062s-0.177-0.293-0.096-0.381c0.081-0.088,0.255-0.06,0.389,0.062S12.532,33.394,12.451,33.482z M13.205,34.732c-0.102,0.072-0.275,0.005-0.386-0.15s-0.118-0.34-0.016-0.412s0.275-0.005,0.386,0.15	C13.299,34.475,13.307,34.66,13.205,34.732z M14.288,35.673c-0.069,0.112-0.265,0.117-0.437,0.012s-0.256-0.281-0.187-0.393	c0.069-0.112,0.265-0.117,0.437-0.012S14.357,35.561,14.288,35.673z M15.312,36.594c-0.213-0.026-0.371-0.159-0.353-0.297	c0.017-0.138,0.204-0.228,0.416-0.202c0.213,0.026,0.371,0.159,0.353,0.297C15.711,36.529,15.525,36.62,15.312,36.594z M16.963,36.833c-0.227-0.013-0.404-0.143-0.395-0.289c0.009-0.146,0.2-0.255,0.427-0.242c0.227,0.013,0.404,0.143,0.395,0.289	C17.381,36.738,17.19,36.846,16.963,36.833z M18.521,36.677c-0.242,0-0.438-0.126-0.438-0.281s0.196-0.281,0.438-0.281	c0.242,0,0.438,0.126,0.438,0.281S18.762,36.677,18.521,36.677z')

      
      //adding sons to father elements
      container.append(shadowCtr)
      shadowCtr.append(figure)
      shadowCtr.append(infoCtr)
      figure.append(img)
      infoCtr.append(title)
      infoCtr.append(p)
      infoCtr.append(btnsCtr)
      btnsCtr.append(demoBtn)
      btnsCtr.append(repoBtn)
      repoBtn.append(txtContent)
      repoBtn.append(svg)
      svg.appendChild(path);

      // setting active class to the first card of proyects
      parseInt(id) === 0?
            (
            container.classList.add('active'),
            shadowCtr.classList.add('shadow-active', 'column'),
            figure.classList.add('icon-active') 
            ):
            null

      return container
}
// adding nodeElements to parentNode
const addCard = (id) => {
    const newCard = cardNode(id)
    nodeCtr.append(newCard)
    
    return nodeCtr
}   

export const cardsIterator =  cardRender(addCard)