import { spanish, english } from "./content.js"
    
// cv btn
const cv = document.querySelector('.download')
// resume
const resumeText = document.querySelector('.resume-text')
// gallery 
// title
const galleryH1 = document.querySelector('.gallery-title')
// cards
// const sushi = document.querySelector('.sushi-ctr')
const pswrd = document.querySelector('.pswrd-ctr')
const lTls = document.querySelector('.l-tls')
const bgt = document.querySelector('.bgt')
const insta = document.querySelector('.insta')
const twtr = document.querySelector('.twtr')
const pbdpCtnr = document.querySelector('.pbdp-ctnr')
// others cards
// const bsf = document.querySelector('.bsf')
// const pList = document.querySelector('.p-lst')
// const gfs = document.querySelector('.gfs')

// technologies card
const techH4 = document.querySelector('.tech-h4')
const cLearn = document.querySelector('.c-learn')

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

// form
const formH1 = document.querySelector('.form-title')
const iName = document.getElementById('name')
const iEmail = document.getElementById('email')
const iText = document.getElementById('textarea')
const sendBtn = document.querySelector('.submit')

export const spanishTemplate = () => {
    // download
    cv.textContent = spanish[0].cv
    // resume
    resumeText.textContent = spanish[0].resume,
        
    // proyects
    galleryH1.textContent = spanish[0].proyects.title,
    // card 1
    pswrd.children[0].innerHTML = spanish[0].proyects.pswd.title,
    pswrd.children[1].innerHTML = spanish[0].proyects.pswd.description,
    pswrd.children[2].children[0].innerHTML =  spanish[0].proyects.pswd.buttons.demo,
    pswrd.children[2].children[1].children[0].innerHTML = spanish[0].proyects.pswd.buttons.repo,
    // card 2
    lTls.children[0].innerHTML = spanish[0].proyects.losTilos.title,
    lTls.children[1].innerHTML = spanish[0].proyects.losTilos.description,
    lTls.children[2].children[0].innerHTML = spanish[0].proyects.losTilos.buttons.demo,
    lTls.children[2].children[1].children[0].innerHTML = spanish[0].proyects.losTilos.buttons.repo,
    // card 3
    bgt.children[0].innerHTML = spanish[0].proyects.budget.title,
    bgt.children[1].innerHTML = spanish[0].proyects.budget.description,
    bgt.children[2].children[0].innerHTML = spanish[0].proyects.budget.buttons.demo,
    bgt.children[2].children[1].children[0].innerHTML = spanish[0].proyects.budget.buttons.repo,
    // card 4
    insta.children[0].innerHTML = spanish[0].proyects.instagram.title,
    insta.children[1].innerHTML = spanish[0].proyects.instagram.description,
    insta.children[2].children[0].innerHTML = spanish[0].proyects.instagram.buttons.demo,
    insta.children[2].children[1].children[0].innerHTML = spanish[0].proyects.instagram.buttons.repo,
    // card 5
    twtr.children[0].innerHTML = spanish[0].proyects.twitter.title,
    twtr.children[1].innerHTML = spanish[0].proyects.twitter.description,
    twtr.children[2].children[0].innerHTML = spanish[0].proyects.twitter.buttons.demo,
    twtr.children[2].children[1].children[0].innerHTML = spanish[0].proyects.twitter.buttons.repo,
    // card 6
    pbdpCtnr.children[0].innerHTML = spanish[0].proyects.pbd.title,
    pbdpCtnr.children[1].innerHTML = spanish[0].proyects.pbd.description,
    pbdpCtnr.children[2].children[0].innerHTML = spanish[0].proyects.pbd.buttons.demo,
    pbdpCtnr.children[2].children[1].children[0].innerHTML = spanish[0].proyects.pbd.buttons.repo,

    // technologies card
    techH4.textContent = spanish[0].tech.title,

    // academic card
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
    autodidactSection.children[3].textContent = spanish[0].academic.autodidacta.ai,

    // form
    formH1.innerHTML   = spanish[0].form.title,
    iName.placeholder  = spanish[0].form.name,
    iEmail.placeholder = spanish[0].form.email,
    iText.placeholder  = spanish[0].form.textArea,
    sendBtn.value      = spanish[0].form.btn.submit
}

export const englishTemplate = () => {
    cv.textContent = english[0].cv
    // resume
    resumeText.textContent = english[0].resume,
        
    // proyects
    galleryH1.textContent = english[0].proyects.title,
    // card 1
    pswrd.children[0].innerHTML = english[0].proyects.pswd.title,
    pswrd.children[1].innerHTML = english[0].proyects.pswd.description,
    pswrd.children[2].children[0].innerHTML =  english[0].proyects.pswd.buttons.demo,
    pswrd.children[2].children[1].children[0].innerHTML = english[0].proyects.pswd.buttons.repo,
    // card 2
    lTls.children[0].innerHTML = english[0].proyects.losTilos.title,
    lTls.children[1].innerHTML = english[0].proyects.losTilos.description,
    lTls.children[2].children[0].innerHTML = english[0].proyects.losTilos.buttons.demo,
    lTls.children[2].children[1].children[0].innerHTML = english[0].proyects.losTilos.buttons.repo,
    // card 3
    bgt.children[0].innerHTML = english[0].proyects.budget.title,
    bgt.children[1].innerHTML = english[0].proyects.budget.description,
    bgt.children[2].children[0].innerHTML = english[0].proyects.budget.buttons.demo,
    bgt.children[2].children[1].children[0].innerHTML = english[0].proyects.budget.buttons.repo,
    // card 4
    insta.children[0].innerHTML = english[0].proyects.instagram.title,
    insta.children[1].innerHTML = english[0].proyects.instagram.description,
    insta.children[2].children[0].innerHTML = english[0].proyects.instagram.buttons.demo,
    insta.children[2].children[1].children[0].innerHTML = english[0].proyects.instagram.buttons.repo,
    // card 5
    twtr.children[0].innerHTML = english[0].proyects.twitter.title,
    twtr.children[1].innerHTML = english[0].proyects.twitter.description,
    twtr.children[2].children[0].innerHTML = english[0].proyects.twitter.buttons.demo,
    twtr.children[2].children[1].children[0].innerHTML = english[0].proyects.twitter.buttons.repo,
    // card 6
    pbdpCtnr.children[0].innerHTML = english[0].proyects.pbd.title,
    pbdpCtnr.children[1].innerHTML = english[0].proyects.pbd.description,
    pbdpCtnr.children[2].children[0].innerHTML = english[0].proyects.pbd.buttons.demo,
    pbdpCtnr.children[2].children[1].children[0].innerHTML = english[0].proyects.pbd.buttons.repo,

    // technologies card
    techH4.textContent = english[0].tech.title,

    // academic card
    cLearn.textContent = english[0].tech.cLearning,
    
    academicTitle.textContent = english[0].academic.title,
    currentlySection.children[0].textContent = english[0].academic.currently.title,
    currentlySection.children[1].textContent = english[0].academic.currently.ob,
    currentlySection.children[2].textContent = english[0].academic.currently.platziFSWD,
    currentlySection.children[3].textContent = english[0].academic.currently.platziUI,
    
    acamicaSection.children[0].textContent = english[0].academic.acamica.title,
    acamicaSection.children[1].textContent = english[0].academic.acamica.fswd,
    
    eduItSection.children[0].textContent = english[0].academic.educacionIT.title,
    eduItSection.children[1].textContent = english[0].academic.educacionIT.html,
    eduItSection.children[2].textContent = english[0].academic.educacionIT.js,
    eduItSection.children[3].textContent = english[0].academic.educacionIT.sql,
    eduItSection.children[4].textContent = english[0].academic.educacionIT.git,

    autodidactSection.children[0].textContent = english[0].academic.autodidacta.title,
    autodidactSection.children[1].textContent = english[0].academic.autodidacta.eng,
    autodidactSection.children[2].textContent = english[0].academic.autodidacta.ps,
    autodidactSection.children[3].textContent = english[0].academic.autodidacta.ai,

    // form
    formH1.innerHTML   = english[0].form.title,
    iName.placeholder  = english[0].form.name,
    iEmail.placeholder = english[0].form.email,
    iText.placeholder  = english[0].form.textArea,
    sendBtn.value      = english[0].form.btn.submit
}