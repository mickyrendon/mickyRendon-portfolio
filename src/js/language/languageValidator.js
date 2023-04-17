import { spanish, english } from "./content.js"


// gallery 
// title
const galleryH1 = document.querySelector('.gallery-title')
// cards
// const sushi = document.querySelector('.sushi-ctr')
const pswrd = document.querySelector('.pswrd-ctr')
const lTls = document.querySelector('.l-tls')
const bsf = document.querySelector('.bsf')
const bgt = document.querySelector('.bgt')
const pList = document.querySelector('.p-lst')
const gfs = document.querySelector('.gfs')
const insta = document.querySelector('.insta')
const twtr = document.querySelector('.twtr')
const pbdpCtnr = document.querySelector('.pbdp-ctnr')
/* ///////////////////////////////// */
// technologies card
const techH4 = document.querySelector('.tech-h4')
const cLearn = document.querySelector('.c-learn')
/* ///////////// */
// academic card
const resumeText = document.querySelector('.resume-text')
// academic card
const academicTitle = document.querySelector('.acad-h4')
// currently parent node
const currentlySection = document.querySelector('.currently')
// acamica parent node
const acamicaSection = document.querySelector('.acamica')
// edu it parent node
const eduItSection = document.querySelector('.edu-it')
// autodidact parent node
const autodidactSection = document.querySelector('.autodidact')

/* ///////////// */

// form
const formH1 = document.querySelector('.form-title')
const iName = document.getElementById('name')
const iEmail = document.getElementById('email')
const iText = document.getElementById('textarea')
const sendBtn = document.querySelector('.submit')

export const langValidator = () => {
    const navLang = navigator.language
    navLang.includes('es-')?
    (
        resumeText.textContent = spanish[0].resume,
        
        galleryH1.textContent = spanish[0].proyects.title,
        // card 1
        pswrd.children[0].innerHTML = spanish[0].proyects.pswd.title,
        pswrd.children[1].innerHTML = spanish[0].proyects.pswd.description,
        pswrd.children[2].children[0].innerHTML =  spanish[0].proyects.pswd.buttons.demo,
        pswrd.children[2].children[1].children[0].innerHTML = spanish[0].proyects.pswd.buttons.repo,
        // card 2
        // lTls.children[0].innerHTML = spanish[0].proyects.losTilos.title,
        // lTls.children[1].innerHTML = spanish[0].proyects.losTilos.description,
        // lTls.children[2].children[0].innerHTML = spanish[0].proyects.losTilos.buttons.demo,
        // lTls.children[2].children[1].children[0].innerHTML = spanish[0].proyects.losTilos.buttons.repo,
        // card 2
        // bgt.children[0].innerHTML = spanish[0].proyects.budget.title,
        // bgt.children[1].innerHTML = spanish[0].proyects.budget.description,
        // bgt.children[2].children[0].innerHTML = spanish[0].proyects.budget.buttons.demo,
        // bgt.children[2].children[1].children[0].innerHTML = spanish[0].proyects.budget.buttons.repo,
// const pbdpCtnr = document.querySelector('.pbdp-ctnr')
// const lTls = document.querySelector('.l-tls')
// const bsf = document.querySelector('.bsf')
// const bgt = document.querySelector('.bgt')
// const pList = document.querySelector('.p-lst')
// const gfs = document.querySelector('.gfs')
// const insta = document.querySelector('.insta')
// const twtr = document.querySelector('.twtr')

        techH4.textContent = spanish[0].tech.title,
        cLearn.textContent = spanish[0].tech.cLearning,
        
        academicTitle.textContent = spanish[0].academic.title,
        currentlySection.children[0].textContent = spanish[0].academic.currently.title,
        currentlySection.children[1].textContent = spanish[0].academic.currently.ob,
        currentlySection.children[2].textContent = spanish[0].academic.currently.platziFSWD,
        currentlySection.children[3].textContent = spanish[0].academic.currently.platziUI,
        
        acamicaSection.children[0].textContent = spanish[0].academic.acamica.title,
        acamicaSection.children[1].textContent = spanish[0].academic.acamica.fswd,
        
        eduItSection.children[0].textContent = spanish[0].academic.educacionIT.title,
        eduItSection.children[1].textContent = spanish[0].academic.educacionIT.html,
        eduItSection.children[2].textContent = spanish[0].academic.educacionIT.js,
        eduItSection.children[3].textContent = spanish[0].academic.educacionIT.sql,
        eduItSection.children[4].textContent = spanish[0].academic.educacionIT.git,

        autodidactSection.children[0].textContent = spanish[0].academic.autodidacta.title,
        autodidactSection.children[1].textContent = spanish[0].academic.autodidacta.eng,
        autodidactSection.children[2].textContent = spanish[0].academic.autodidacta.ps,
        autodidactSection.children[3].textContent = spanish[0].academic.autodidacta.ai
    ) :
    (resumeText.textContent = english[0].resume) 




}
