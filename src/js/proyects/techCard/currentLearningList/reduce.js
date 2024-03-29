import { contentCard } from "./contentStructure.js"

// lista los elementos del array con el 'title' de cada uno
export const indexed = contentCard.reduce((acum, elem, index)  => ({
    ...acum,
    // [elem.title]: elem,
    [index]: elem
}), {})

// obtiene las keys id, del arreglo indexed
export const keys = Object.keys(indexed)