import { themeValidator} from "./dark_mode/toggleTheme.js"
import { cardsIterator } from "./proyects/proyectsCard/cardsStructure.js"
import { btnAddClass } from "./proyects/proyectsCard/primaryBtnClass.js"
import { langValidator, loadLangNavigator } from "./language/languageValidator.js"
import { downloadCV } from "./downloadCV/download.js"
import { techCardsIterator } from "./proyects/techCard/cardStructure.js"
import { currentLearningIterator } from "./proyects/techCard/currentLearningList/listStructure.js"

// <script type="module" src="./js/submitBtn.js"></script>

themeValidator()
btnAddClass()
cardsIterator
techCardsIterator
currentLearningIterator
langValidator()
loadLangNavigator()
downloadCV()

globalThis.addEventListener('load', async () => {
    const { deleteLoader } = await import('../js/preload/onload.js')
    return deleteLoader()
})
globalThis.addEventListener("scroll", async () => { 
    const { handleScrollAnimation } = await import('../js/animation/scrollAnimation.js')
    return handleScrollAnimation()
})
// language btn
const langEv =  document.querySelector('.language')
langEv.addEventListener('change', async () => {
    const { langScript } = await import('../js/language/languageBtn.js')
    return langScript()
})
//theme mode
const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener('click', async () => {
    const { toggleTheme } = await import('../js/dark_mode/toggleTheme.js')
    return toggleTheme()
})
// proyects
const label = document.querySelectorAll('.label')
label.forEach((e) => {
    e.addEventListener('click', async (e) => {
        const { click } = await import('./proyects/proyectsCard/clickCards.js')
        return click(e)
    })
})