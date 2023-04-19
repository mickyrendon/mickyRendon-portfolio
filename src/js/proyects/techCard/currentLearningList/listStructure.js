import { contentCard } from "./contentStructure.js"
import { cardRender } from "./renderIterator.js"

const ul = document.querySelector('.learning')
const techNode = (id) => {
    const li = document.createElement('li')
    const img = document.createElement('img')
          img.src = contentCard[id].url
          img.classList.add('mr-2')
    const span = document.createElement('span')
          span.textContent = contentCard[id].name
    
    li.append(img)
    li.append(span)

    return li
}

const addCard = (id) => {
      const newCard = techNode(id)
      ul.append(newCard)
      return ul
}
export const currentLearningIterator =  cardRender(addCard)