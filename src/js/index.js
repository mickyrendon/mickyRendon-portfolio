import { themeValidator} from "./dark_mode/toggleTheme.js"
import { cardsIterator } from "./proyects/cardsStructure.js"
import { btnAddClass } from "./proyects/primaryBtnClass.js"
import { langValidator, loadLangNavigator } from "./language/languageValidator.js"

// <script type="module" src="./js/submitBtn.js"></script>

themeValidator()
btnAddClass()
cardsIterator
langValidator()
loadLangNavigator()

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
        const { click } = await import('./proyects/clickCards.js')
        return click(e)
    })
})