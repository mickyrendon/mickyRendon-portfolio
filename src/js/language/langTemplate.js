import { spanish, english } from "./content.js"
    
// cv btn
const cv = document.querySelector('.download')
// resume
const resumeText = document.querySelector('.resume-text')
// gallery 
// title
const galleryH1 = document.querySelector('.gallery-title')
// cards
const todoList = document.querySelector('.todo-list')
const shoppi = document.querySelector('.shoppi')
const mmovie = document.querySelector('.mmovie')
const ffox = document.querySelector('.fox')
const resto = document.querySelector('.resto-ctr')
const twtr = document.querySelector('.twtr')
const pbdpCtnr = document.querySelector('.pbdp-ctnr')
// others cards
// const pswrd = document.querySelector('.pswrd-ctr')
// const lTls = document.querySelector('.l-tls')
// const bgt = document.querySelector('.bgt')
// const insta = document.querySelector('.insta')
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
const platziSection = document.querySelector('.platzi')
// acamica parent node
const acamicaSection = document.querySelector('.acamica')
console.log(platziSection, currentlySection, acamicaSection )
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
    // card 7
    todoList.children[0].innerHTML = spanish[0].proyects.todoList.title,
    todoList.children[1].innerHTML = spanish[0].proyects.todoList.description,
    todoList.children[2].children[0].innerHTML =  spanish[0].proyects.todoList.buttons.demo,
    todoList.children[2].children[1].children[0].innerHTML = spanish[0].proyects.todoList.buttons.repo,
    // card 6
    shoppi.children[0].innerHTML = spanish[0].proyects.shoppi.title,
    shoppi.children[1].innerHTML = spanish[0].proyects.shoppi.description,
    shoppi.children[2].children[0].innerHTML =  spanish[0].proyects.shoppi.buttons.demo,
    shoppi.children[2].children[1].children[0].innerHTML = spanish[0].proyects.shoppi.buttons.repo,
    // card 5
    mmovie.children[0].innerHTML = spanish[0].proyects.mmovie.title,
    mmovie.children[1].innerHTML = spanish[0].proyects.mmovie.description,
    mmovie.children[2].children[0].innerHTML =  spanish[0].proyects.mmovie.buttons.demo,
    mmovie.children[2].children[1].children[0].innerHTML = spanish[0].proyects.mmovie.buttons.repo,
    // card 4
    ffox.children[0].innerHTML = spanish[0].proyects.ffox.title,
    ffox.children[1].innerHTML = spanish[0].proyects.ffox.description,
    ffox.children[2].children[0].innerHTML =  spanish[0].proyects.ffox.buttons.demo,
    ffox.children[2].children[1].children[0].innerHTML = spanish[0].proyects.ffox.buttons.repo,
    // card 3
    resto.children[0].innerHTML = spanish[0].proyects.resto.title,
    resto.children[1].innerHTML = spanish[0].proyects.resto.description,
    resto.children[2].children[0].innerHTML =  spanish[0].proyects.resto.buttons.demo,
    resto.children[2].children[1].children[0].innerHTML = spanish[0].proyects.resto.buttons.repo,
    // card 2
    twtr.children[0].innerHTML = spanish[0].proyects.twitter.title,
    twtr.children[1].innerHTML = spanish[0].proyects.twitter.description,
    twtr.children[2].children[0].innerHTML = spanish[0].proyects.twitter.buttons.demo,
    twtr.children[2].children[1].children[0].innerHTML = spanish[0].proyects.twitter.buttons.repo,
    // card 1
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
    // currentlySection.children[3].textContent = spanish[0].academic.currently.platziUI,
    
    platziSection.children[0].textContent = spanish[0].academic.platzi.title,
    platziSection.children[1].textContent = spanish[0].academic.platzi.platziUI,
    
    acamicaSection.children[0].textContent = spanish[0].academic.acamica.title,
    acamicaSection.children[1].textContent = spanish[0].academic.acamica.fswd,
    
    eduItSection.children[0].textContent = spanish[0].academic.educacionIT.title,
    eduItSection.children[1].textContent = spanish[0].academic.educacionIT.html,
    eduItSection.children[2].textContent = spanish[0].academic.educacionIT.js,
    eduItSection.children[3].textContent = spanish[0].academic.educacionIT.sql,
    eduItSection.children[4].textContent = spanish[0].academic.educacionIT.git,

    autodidactSection.children[0].textContent = spanish[0].academic.autodidact.title,
    autodidactSection.children[1].textContent = spanish[0].academic.autodidact.eng,
    // autodidactSection.children[2].textContent = spanish[0].academic.autodidact.ps,
    // autodidactSection.children[3].textContent = spanish[0].academic.autodidact.ai,

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
    // card 7
    todoList.children[0].innerHTML = english[0].proyects.todoList.title,
    todoList.children[1].innerHTML = english[0].proyects.todoList.description,
    todoList.children[2].children[0].innerHTML =  english[0].proyects.todoList.buttons.demo,
    todoList.children[2].children[1].children[0].innerHTML = english[0].proyects.todoList.buttons.repo,
    // card 6
    shoppi.children[0].innerHTML = english[0].proyects.shoppi.title,
    shoppi.children[1].innerHTML = english[0].proyects.shoppi.description,
    shoppi.children[2].children[0].innerHTML =  english[0].proyects.shoppi.buttons.demo,
    shoppi.children[2].children[1].children[0].innerHTML = english[0].proyects.shoppi.buttons.repo,
    // card 5
    mmovie.children[0].innerHTML = english[0].proyects.mmovie.title,
    mmovie.children[1].innerHTML = english[0].proyects.mmovie.description,
    mmovie.children[2].children[0].innerHTML =  english[0].proyects.mmovie.buttons.demo,
    mmovie.children[2].children[1].children[0].innerHTML = english[0].proyects.mmovie.buttons.repo,
    // card 4
    ffox.children[0].innerHTML = english[0].proyects.ffox.title,
    ffox.children[1].innerHTML = english[0].proyects.ffox.description,
    ffox.children[2].children[0].innerHTML =  english[0].proyects.ffox.buttons.demo,
    ffox.children[2].children[1].children[0].innerHTML = english[0].proyects.ffox.buttons.repo,
    // card 3
    resto.children[0].innerHTML = english[0].proyects.resto.title,
    resto.children[1].innerHTML = english[0].proyects.resto.description,
    resto.children[2].children[0].innerHTML =  english[0].proyects.resto.buttons.demo,
    resto.children[2].children[1].children[0].innerHTML = english[0].proyects.resto.buttons.repo,
    // card 2
    twtr.children[0].innerHTML = english[0].proyects.twitter.title,
    twtr.children[1].innerHTML = english[0].proyects.twitter.description,
    twtr.children[2].children[0].innerHTML = english[0].proyects.twitter.buttons.demo,
    twtr.children[2].children[1].children[0].innerHTML = english[0].proyects.twitter.buttons.repo,
    // card 1
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
    
    // platziSection.children[0].textContent = english[0].academic.platzi.title,
    // platziSection.children[1].textContent = english[0].academic.platzi.platziUI,

    acamicaSection.children[0].textContent = english[0].academic.acamica.title,
    acamicaSection.children[1].textContent = english[0].academic.acamica.fswd,
    
    eduItSection.children[0].textContent = english[0].academic.educacionIT.title,
    eduItSection.children[1].textContent = english[0].academic.educacionIT.html,
    eduItSection.children[2].textContent = english[0].academic.educacionIT.js,
    eduItSection.children[3].textContent = english[0].academic.educacionIT.sql,
    eduItSection.children[4].textContent = english[0].academic.educacionIT.git,

    autodidactSection.children[0].textContent = english[0].academic.autodidact.title,
    autodidactSection.children[1].textContent = english[0].academic.autodidact.eng,
    // autodidactSection.children[2].textContent = english[0].academic.autodidact.ps,
    // autodidactSection.children[3].textContent = english[0].academic.autodidact.ai,

    // form
    formH1.innerHTML   = english[0].form.title,
    iName.placeholder  = english[0].form.name,
    iEmail.placeholder = english[0].form.email,
    iText.placeholder  = english[0].form.textArea,
    sendBtn.value      = english[0].form.btn.submit
}

// others spanish cards
/* 
pswrd.children[0].innerHTML = spanish[0].proyects.pswd.title,
    pswrd.children[1].innerHTML = spanish[0].proyects.pswd.description,
    pswrd.children[2].children[0].innerHTML =  spanish[0].proyects.pswd.buttons.demo,
    pswrd.children[2].children[1].children[0].innerHTML = spanish[0].proyects.pswd.buttons.repo,
    // card 5
    lTls.children[0].innerHTML = spanish[0].proyects.losTilos.title,
    lTls.children[1].innerHTML = spanish[0].proyects.losTilos.description,
    lTls.children[2].children[0].innerHTML = spanish[0].proyects.losTilos.buttons.demo,
    lTls.children[2].children[1].children[0].innerHTML = spanish[0].proyects.losTilos.buttons.repo,
    // card 4
    bgt.children[0].innerHTML = spanish[0].proyects.budget.title,
    bgt.children[1].innerHTML = spanish[0].proyects.budget.description,
    bgt.children[2].children[0].innerHTML = spanish[0].proyects.budget.buttons.demo,
    bgt.children[2].children[1].children[0].innerHTML = spanish[0].proyects.budget.buttons.repo,
    // card 3
    insta.children[0].innerHTML = spanish[0].proyects.instagram.title,
    insta.children[1].innerHTML = spanish[0].proyects.instagram.description,
    insta.children[2].children[0].innerHTML = spanish[0].proyects.instagram.buttons.demo,
    insta.children[2].children[1].children[0].innerHTML = spanish[0].proyects.instagram.buttons.repo,

others english cards
// card 6
    pswrd.children[0].innerHTML = english[0].proyects.pswd.title,
    pswrd.children[1].innerHTML = english[0].proyects.pswd.description,
    pswrd.children[2].children[0].innerHTML =  english[0].proyects.pswd.buttons.demo,
    pswrd.children[2].children[1].children[0].innerHTML = english[0].proyects.pswd.buttons.repo,
    // card 5
    lTls.children[0].innerHTML = english[0].proyects.losTilos.title,
    lTls.children[1].innerHTML = english[0].proyects.losTilos.description,
    lTls.children[2].children[0].innerHTML = english[0].proyects.losTilos.buttons.demo,
    lTls.children[2].children[1].children[0].innerHTML = english[0].proyects.losTilos.buttons.repo,
    // card 4
    bgt.children[0].innerHTML = english[0].proyects.budget.title,
    bgt.children[1].innerHTML = english[0].proyects.budget.description,
    bgt.children[2].children[0].innerHTML = english[0].proyects.budget.buttons.demo,
    bgt.children[2].children[1].children[0].innerHTML = english[0].proyects.budget.buttons.repo,
    // card 3
    insta.children[0].innerHTML = english[0].proyects.instagram.title,
    insta.children[1].innerHTML = english[0].proyects.instagram.description,
    insta.children[2].children[0].innerHTML = english[0].proyects.instagram.buttons.demo,
    insta.children[2].children[1].children[0].innerHTML = english[0].proyects.instagram.buttons.repo,

    */