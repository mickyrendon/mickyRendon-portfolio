import { regex } from './regex.js'
import { modalCtr } from './modalCtr.js'
import { langEv } from '../../language/languageBtn.js'
import { modalSpanish, modalEnglish } from "./languageTemplate.js"

// form validator
export const submitHandler = () => {
    // form elements
    const f = document.forms['f-contact']
    const name = f.querySelector('#name')
    const email = f.querySelector('#email')
    const textArea = f.querySelector('#textarea')
    // modal alert
    const modalTitle = document.querySelector('.modal-title')
    const txt = document.querySelector('.modal-txt')
    const acceptBtn = document.querySelector('#accept-btn')
    const cancelModal = document.querySelector('.cancel-modal')
    const okBtn = document.querySelector('.ok-btn')
    
    // FIXME, revisar esta validacion porque no funciona correctamente
    // validating form inputs
    if ( name.value === '' || email.value === '' || textArea.value === ''){
       // code above isn't work
       // ||  !alfa.test(name.value) || !alfa.test(email.value) || !alfa.test(textArea.value)
 
       // if validation is true change modal content to be alert content, also show ok btn & hidde de other btns
       if(langEv.options[langEv.selectedIndex].value === 'Es' ){
            modalTitle.textContent  = modalSpanish[0].alertTitle
            txt.textContent         = modalSpanish[0].alertMsg
       }else{
            modalTitle.textContent  = modalEnglish[0].alertTitle
            txt.textContent         = modalEnglish[0].alertMsg
       }
       acceptBtn.classList.add('hidden')
       cancelModal.classList.add('hidden')
       okBtn.classList.remove('hidden')
 
       // printing in console the inputs values
       console.log(name.value, email.value, textArea.value);
 
       // FIXME, el modal de recaptcha no funciona en modo espa;ol al validar el email, no muestra el btn ok, muestra los demas
       // adding event to ok btn to hidde the modal
       // submitBtn.removeEventListener('click', modal)
 
    }else if( email.value.includes(' ') || !regex.test(email.value.trim())){
       
       console.log(email.value)

       if(langEv.options[langEv.selectedIndex].value === 'Es' ){
          email.setAttribute('placeholder', valuesContent.ePlaceHolderEs)
       }else{
          email.setAttribute('placeholder', valuesContent.ePlaceHolderEn)
       }
       email.value = ''
       email.focus()
       return modalCtr.setAttribute('hidden', true)
 
    }else{
 
       modalCtr.setAttribute('hidden', true)
       // recordar que no funciona si hay algun elemento dentro del formulario con el name='submit', se sobreeescribe
       return f.submit()
 
    }
 }