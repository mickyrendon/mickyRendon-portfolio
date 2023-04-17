import { spanishTemplate, englishTemplate } from "./langTemplate.js"
import { langEv } from "./languageBtn.js"

export const langValidator = () => {
    langEv.options[langEv.selectedIndex].value === 'Es'?
        (spanishTemplate(),
        console.log('espa')) : 
    langEv.options[langEv.selectedIndex].value === 'En' ?
        (englishTemplate(),
        console.log('en')) : null
}

export const loadLangNavigator = () => {
    const navLang = navigator.language
    // TODO, revisar posible problema al cargar la pagina, si checkeo 'ingles' y cargo no vuelve a su valor original
    navLang.includes('es-') ?
    spanishTemplate():
    null
}